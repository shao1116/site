const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const vm = require('node:vm');

function setup({ reduced = false, observerSupported = true } = {}) {
  const elements = [4, 7, 6, 3].map(target => ({
    dataset: { countTo: String(target) }, textContent: String(target)
  }));
  let intersect;
  let time = 0;
  let frames = [];
  const observed = new Set();
  const context = {
    document: { querySelectorAll: () => elements },
    window: { matchMedia: () => ({ matches: reduced }) },
    performance: { now: () => time },
    requestAnimationFrame: callback => frames.push(callback),
  };
  if (observerSupported) {
    context.window.IntersectionObserver = context.IntersectionObserver = class {
      constructor(callback) { intersect = callback; }
      observe(element) { observed.add(element); }
      unobserve(element) { observed.delete(element); }
    };
  }
  vm.runInNewContext(readFileSync(join(__dirname, '../static/js/number-counters.js'), 'utf8'), context);
  return {
    elements, observed,
    enter: () => intersect?.([...observed].map(target => ({ target, isIntersecting: true }))),
    tick(value) {
      time = value;
      const pending = frames;
      frames = [];
      pending.forEach(callback => callback(time));
    }
  };
}

test('visible counters start at zero, increase, finish at their targets and run once', () => {
  const page = setup();
  assert.deepEqual(page.elements.map(el => el.textContent), ['4', '7', '6', '3']);
  page.enter();
  assert.deepEqual(page.elements.map(el => el.textContent), ['0', '0', '0', '0']);
  let previous = [0, 0, 0, 0];
  for (let time = 100; time <= 1000; time += 100) {
    page.tick(time);
    page.elements.forEach((el, index) => {
      const value = Number(el.textContent);
      assert.ok(value >= previous[index]);
      assert.ok(value <= Number(el.dataset.countTo));
      previous[index] = value;
    });
  }
  assert.deepEqual(page.elements.map(el => el.textContent), ['4', '7', '6', '3']);
  assert.equal(page.observed.size, 0);
  page.enter();
  assert.deepEqual(page.elements.map(el => el.textContent), ['4', '7', '6', '3']);
});

test('reduced motion and browsers without visibility observation retain final totals', () => {
  for (const options of [{ reduced: true }, { observerSupported: false }]) {
    const page = setup(options);
    page.enter();
    page.tick(100);
    assert.deepEqual(page.elements.map(el => el.textContent), ['4', '7', '6', '3']);
  }
});
