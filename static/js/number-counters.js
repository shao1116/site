(() => {
  const counters = document.querySelectorAll('[data-count-to]');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      const element = entry.target;
      const target = Number(element.dataset.countTo);
      if (!Number.isInteger(target) || target < 0) return;

      const start = performance.now();
      element.textContent = '0';
      const tick = now => {
        const progress = motion.matches ? 1 : Math.min((now - start) / 800, 1);
        element.textContent = String(Math.floor(target * (1 - (1 - progress) ** 2)));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });

  counters.forEach(element => observer.observe(element));
})();
