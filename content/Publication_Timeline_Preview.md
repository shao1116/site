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
    Peer-reviewed publication timeline (newest to oldest) with three contribution tiers:
    First-author leadership, second-author collaboration, and other co-authored work.
  </p>

  <div class="pub-timeline">
    <div class="pub-year-row">
      <div class="pub-year">2026</div>
      <div class="pub-layers">
        <article class="pub-card tier-2">
          <div class="pub-tier-label">Second-author collab</div>
          <h3 class="pub-title">Lung dysbiosis disrupts an FFAR2-mediated innate immune circuit against Klebsiella pneumoniae.</h3>
          <p class="pub-authors">Ting-Chieh Huang, <strong>Jheng-Syuan Shao</strong>, Alan Chuan-Ying Lai, Ko-Chien Wu, Da-Fu Lin, Ya-Jen Chang*</p>
          <p class="pub-meta"><em>Theranostics</em> (2026) · IF 13.3 · Ranking 7/195 (Medicine, Research & Experimental)</p>
        </article>
      </div>
    </div>

    <div class="pub-year-row">
      <div class="pub-year">2025</div>
      <div class="pub-layers">
        <article class="pub-card tier-1">
          <div class="pub-tier-label">First-author lead</div>
          <h3 class="pub-title">Pulmonary fibroblast-derived stem cell factor promotes neutrophilic asthma by augmenting IL-17A production from ILC3s.</h3>
          <p class="pub-authors"><strong>Jheng-Syuan Shao</strong>, Alan Chuan-Ying Lai, Wei-Chang Huang, Ko-Chien Wu, Po-Yu Chi, Yao-Ming Chang, Ya-Jen Chang*</p>
          <p class="pub-meta"><em>The Journal of Clinical Investigation</em> (2025) · IF 13.6 · Ranking 5/195 (Medicine, Research & Experimental)</p>
        </article>

        <article class="pub-card tier-2">
          <div class="pub-tier-label">Second-author collab</div>
          <h3 class="pub-title">Decoding innate lymphoid cells and innate-like lymphocytes in asthma: pathways to mechanisms and therapies.</h3>
          <p class="pub-authors">Christina Li-Ping Thio, <strong>Jheng-Syuan Shao</strong>, Chia-Hui Luo, Ya-Jen Chang*</p>
          <p class="pub-meta"><em>Journal of Biomedical Science</em> (2025) · IF 12.1 · Ranking 9/195 (Medicine, Research & Experimental)</p>
        </article>
      </div>
    </div>

    <div class="pub-year-row">
      <div class="pub-year">2020</div>
      <div class="pub-layers">
        <article class="pub-card tier-3">
          <div class="pub-tier-label">Co-author</div>
          <h3 class="pub-title">Adipose-derived stromal cells modulating composite allotransplant survival is correlated with B cell regulation in a rodent hind-limb allotransplantation model.</h3>
          <p class="pub-authors">Chien-Chang Chen, Rong-Fu Chen, <strong>Jheng-Syuan Shao</strong>, Yun-Ting Li, Yu-Chi Wang, Gerald Brandacher, Jiin-Haur Chuang, Yur-Ren Kuo*</p>
          <p class="pub-meta"><em>Stem Cell Research & Therapy</em> (2020) · IF 6.8 · Ranking 24/140 (Medicine, Research & Experimental)</p>
        </article>
      </div>
    </div>

    <div class="pub-year-row">
      <div class="pub-year">2016</div>
      <div class="pub-layers">
        <article class="pub-card tier-3">
          <div class="pub-tier-label">Co-author</div>
          <h3 class="pub-title">Phosphoproteomics identified an NS5A phosphorylation site involved in Hepatitis C Virus replication.</h3>
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
    --tier1: #335f4b;
    --tier2: #496c74;
    --tier3: #7d6f5f;
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

  .tier-1 {
    border-left: 5px solid var(--tier1);
    padding: 1rem 1.08rem;
    box-shadow: 0 6px 16px rgba(39, 74, 58, 0.15);
  }

  .tier-2 {
    border-left: 3px solid var(--tier2);
    box-shadow: 0 3px 11px rgba(34, 66, 74, 0.1);
  }

  .tier-3 {
    border-left: 2px dashed var(--tier3);
    background: #fcfaf6;
    box-shadow: 0 1px 4px rgba(35, 35, 35, 0.05);
  }

  .tier-1::before {
    background: var(--tier1);
    width: 0.84rem;
    height: 0.84rem;
    border-width: 2px;
  }

  .tier-2::before {
    background: var(--tier2);
    width: 0.72rem;
    height: 0.72rem;
    border-width: 2px;
  }

  .tier-3::before {
    width: 0.62rem;
    height: 0.62rem;
    background: #f7f5ef;
    border: 2px solid var(--tier3);
    box-shadow: 0 0 0 1px var(--line);
  }

  .pub-tier-label {
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

  .tier-1 .pub-tier-label {
    background: var(--tier1);
  }

  .tier-2 .pub-tier-label {
    background: var(--tier2);
  }

  .tier-3 .pub-tier-label {
    background: var(--tier3);
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
