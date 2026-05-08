---
title: "Publication Timeline Preview"
url: "/publication-timeline-preview/"
draft: false
goldmark:
  renderer:
    unsafe: true
---

{{< rawhtml >}}
<section class="pub-timeline-page">
  <p class="pub-intro">
    Peer-reviewed publication timeline (newest to oldest), grouped by authorship role:
    First Author, Second Author, and Co-author.
  </p>

  <div class="pub-legend" aria-label="Contribution role legend">
    <span class="legend-chip lead"><span class="legend-dot"></span>First author</span>
    <span class="legend-chip collab"><span class="legend-dot"></span>Second author</span>
    <span class="legend-chip contrib"><span class="legend-dot"></span>Co-author</span>
  </div>

  <div class="pub-timeline">
    <div class="pub-year-row">
      <div class="pub-year">2026</div>
      <div class="pub-layers">
        <article class="pub-card role-collab">
          <div class="pub-role-label">Second author</div>
          <h3 class="pub-title"><span class="pub-index">5.</span> Lung dysbiosis disrupts an FFAR2-mediated innate immune circuit against Klebsiella pneumoniae.</h3>
          <p class="pub-authors">Ting-Chieh Huang, <strong>Jheng-Syuan Shao</strong>, Alan Chuan-Ying Lai, Ko-Chien Wu, Da-Fu Lin, Ya-Jen Chang*</p>
          <p class="pub-meta"><em>Theranostics</em> (2026) · IF 13.3 · Ranking 7/195 (Medicine, Research & Experimental)</p>
        </article>
      </div>
    </div>

    <div class="pub-year-row">
      <div class="pub-year">2025</div>
      <div class="pub-layers">
        <article class="pub-card role-lead">
          <div class="pub-role-label">First author</div>
          <h3 class="pub-title"><span class="pub-index">4.</span> Pulmonary fibroblast-derived stem cell factor promotes neutrophilic asthma by augmenting IL-17A production from ILC3s.</h3>
          <p class="pub-authors"><strong>Jheng-Syuan Shao</strong>, Alan Chuan-Ying Lai, Wei-Chang Huang, Ko-Chien Wu, Po-Yu Chi, Yao-Ming Chang, Ya-Jen Chang*</p>
          <p class="pub-meta"><em>The Journal of Clinical Investigation</em> (2025) · IF 13.6 · Ranking 5/195 (Medicine, Research & Experimental)</p>
        </article>

        <article class="pub-card role-collab">
          <div class="pub-role-label">Second author</div>
          <h3 class="pub-title"><span class="pub-index">3.</span> Decoding innate lymphoid cells and innate-like lymphocytes in asthma: pathways to mechanisms and therapies.</h3>
          <p class="pub-authors">Christina Li-Ping Thio, <strong>Jheng-Syuan Shao</strong>, Chia-Hui Luo, Ya-Jen Chang*</p>
          <p class="pub-meta"><em>Journal of Biomedical Science</em> (2025) · IF 12.1 · Ranking 9/195 (Medicine, Research & Experimental)</p>
        </article>
      </div>
    </div>

    <div class="pub-year-row">
      <div class="pub-year">2020</div>
      <div class="pub-layers">
        <article class="pub-card role-contrib">
          <div class="pub-role-label">Co-author</div>
          <h3 class="pub-title"><span class="pub-index">2.</span> Adipose-derived stromal cells modulating composite allotransplant survival is correlated with B cell regulation in a rodent hind-limb allotransplantation model.</h3>
          <p class="pub-authors">Chien-Chang Chen, Rong-Fu Chen, <strong>Jheng-Syuan Shao</strong>, Yun-Ting Li, Yu-Chi Wang, Gerald Brandacher, Jiin-Haur Chuang, Yur-Ren Kuo*</p>
          <p class="pub-meta"><em>Stem Cell Research & Therapy</em> (2020) · IF 6.8 · Ranking 24/140 (Medicine, Research & Experimental)</p>
        </article>
      </div>
    </div>

    <div class="pub-year-row">
      <div class="pub-year">2016</div>
      <div class="pub-layers">
        <article class="pub-card role-contrib">
          <div class="pub-role-label">Co-author</div>
          <h3 class="pub-title"><span class="pub-index">1.</span> Phosphoproteomics identified an NS5A phosphorylation site involved in Hepatitis C Virus replication.</h3>
          <p class="pub-authors">Weng Man Chong, Shih-Chin Hsu, Wei-Ting Kao, Chieh-Wen Lo, Kuan-Ying Lee, <strong>Jheng-Syuan Shao</strong>, Yi-Hung Chen, Justin Chang, Steve S.-L. Chen, Ming-Jiun Yu*</p>
          <p class="pub-meta"><em>Journal of Biological Chemistry</em> (2016) · IF 4.1 · Ranking 74/290 (Biochemistry & Molecular Biology)</p>
        </article>
      </div>
    </div>
  </div>
</section>

<style>
  .pub-timeline-page {
    --bg: #f7f5ef;
    --ink: #1f2926;
    --muted: #5f6f68;
    --line: #b8c5bd;
    --lead: #0b57d0;
    --collab: #7da9e6;
    --contrib: #a4afb7;
    --card-bg: #fffcf7;
    margin: 0 auto;
    max-width: 1080px;
    padding: 0.6rem 0 2rem;
    color: var(--ink);
  }

  .pub-intro {
    margin: 0 0 1.2rem;
    color: var(--muted);
    font-size: 0.98rem;
    line-height: 1.5;
  }

  .pub-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0 0 1rem;
  }

  .legend-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.38rem;
    border-radius: 999px;
    padding: 0.22rem 0.62rem;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    background: #edf1ee;
    color: #2f3a36;
  }

  .legend-dot {
    width: 0.56rem;
    height: 0.56rem;
    border-radius: 50%;
    display: inline-block;
  }

  .legend-chip.lead .legend-dot { background: var(--lead); }
  .legend-chip.collab .legend-dot { background: #6d95cb; }
  .legend-chip.contrib .legend-dot {
    background: #f7f5ef;
    border: 1.5px solid var(--contrib);
    box-sizing: border-box;
  }

  .pub-timeline {
    position: relative;
    display: grid;
    gap: 1.25rem;
  }

  .pub-year-row {
    display: grid;
    grid-template-columns: 88px 1fr;
    gap: 1rem;
    align-items: start;
  }

  .pub-year {
    position: sticky;
    top: 88px;
    z-index: 1;
    padding-top: 0.2rem;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--ink);
    letter-spacing: 0.02em;
  }

  .pub-layers {
    position: relative;
    border-left: 2px solid var(--line);
    padding-left: 1rem;
    display: grid;
    gap: 0.85rem;
  }

  .pub-card {
    position: relative;
    background: var(--card-bg);
    border: 1px solid #dde6e0;
    border-radius: 12px;
    padding: 0.9rem 1rem;
    box-shadow: 0 2px 10px rgba(16, 36, 29, 0.05);
    transition: opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  }

  .pub-card::before {
    content: "";
    position: absolute;
    left: -1.52rem;
    top: 1rem;
    width: 0.72rem;
    height: 0.72rem;
    border-radius: 50%;
    background: #4f6258;
    border: 2px solid #f7f5ef;
    box-shadow: 0 0 0 1px var(--line);
  }

  .role-lead {
    border-left: 5px solid var(--lead);
    padding: 1rem 1.08rem;
    box-shadow: 0 7px 18px rgba(11, 87, 208, 0.2);
  }

  .role-collab {
    border-left: 2px solid #9cbbe7;
    box-shadow: 0 1px 4px rgba(74, 120, 184, 0.08);
    background: #fafdff;
  }

  .role-contrib {
    border-left: 1px dashed #bcc5cc;
    background: #fdfdfd;
    box-shadow: none;
  }

  .role-lead::before {
    background: var(--lead);
    width: 0.84rem;
    height: 0.84rem;
    border-width: 2px;
  }

  .role-collab::before {
    background: #9cbbe7;
    width: 0.64rem;
    height: 0.64rem;
    border-width: 2px;
  }

  .role-contrib::before {
    width: 0.52rem;
    height: 0.52rem;
    background: #fdfdfd;
    border: 1.5px solid #bcc5cc;
    box-shadow: 0 0 0 1px var(--line);
  }

  .pub-role-label {
    display: inline-block;
    margin-bottom: 0.5rem;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #f9f8f5;
    border-radius: 999px;
    padding: 0.2rem 0.52rem;
    line-height: 1.25;
  }

  .role-lead .pub-role-label {
    background: var(--lead);
  }

  .role-collab .pub-role-label {
    background: #7da9e6;
  }

  .role-contrib .pub-role-label {
    background: #f4f6f7;
    border: 1px solid #d4dbe0;
    color: #72808a;
  }

  .role-contrib .pub-authors,
  .role-contrib .pub-meta {
    color: #6f7a74;
  }

  .pub-index {
    display: inline-block;
    min-width: 1.45rem;
    font-weight: 800;
    color: #334047;
  }

  .pub-title {
    margin: 0 0 0.4rem;
    font-size: 1.02rem;
    line-height: 1.42;
    color: var(--ink);
  }

  .pub-authors,
  .pub-meta {
    margin: 0;
    color: #3e4e47;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .pub-meta {
    margin-top: 0.26rem;
    color: var(--muted);
  }

  .pub-layers:hover .pub-card {
    opacity: 0.65;
  }

  .pub-layers .pub-card:hover {
    opacity: 1;
    transform: translateY(-1px);
  }

  @media (max-width: 900px) {
    .pub-year-row {
      grid-template-columns: 1fr;
      gap: 0.4rem;
    }

    .pub-year {
      position: static;
      font-size: 1.1rem;
    }

    .pub-layers {
      margin-left: 0.2rem;
    }
  }
</style>
{{< /rawhtml >}}
