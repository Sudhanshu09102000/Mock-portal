/* ════════════════════════════════════════════════════════════════ 
   DEMO — concept pages mixed in between questions
   Register it in portalData.js like any other test (file: "concept-demo").
   Entry 1 is always the FIRST PAGE: chapter name + "What you will be able to do" cards only.

   Write entries in the order you want them shown:
       1: concept page   2: question   3: question   4: concept page …

   CONCEPT PAGE fields
     type       : "concept"                 (required)
     title      : "Percentage — Fast Fractions"
     icon       : "📊"                       (emoji, optional)
     accent     : "#22c55e"                 (colour of this page, optional)
     pauseTimer : true                      (optional – stops the exam clock while reading)
     html       : `...any HTML, text, <img>, tables...`

   QUESTION fields stay exactly as before:
     questext, options[4], correct:"1".."4", quesimage, exptext, expimage

   Toolkit classes you can use inside html:
     cp-lead, cp-card (blue green amber red violet teal pink), cp-grid (c2 c3 c4),
     cp-formula, cp-frac, cp-note (tip trap trick remember info exam good),
     cp-steps (ol), cp-example (cp-q / cp-a), cp-mnemonic, cp-vs (good / bad),
     cp-stats / cp-stat, cp-chips, cp-timeline (ul), details.cp-collapse,
     cp-divider, cp-fig, cp-hl (g r b), cp-key, plain <table>, <img>, h2/h3/h4
════════════════════════════════════════════════════════════════ */

window.TEST_DATA = {

  /* ─────────── 1 · FIRST PAGE (chapter name + what you will be able to do) ─────────── */
  1: {
    type: "concept",
    icon: "🎯",
    accent: "#6366f1",
    pauseTimer: true,
    title: "Percentage and Profit & Loss",
    html: `
      <div class="cp-divider">What you will be able to do</div>

      <div class="cp-grid c2">
        <div class="cp-card green"><div class="cp-card-title">📊 Successive change</div>Combine two percentage changes in one line, without drawing a table.</div>
        <div class="cp-card amber"><div class="cp-card-title">🛒 Price ↑ → Consumption ↓</div>Find the exact cut needed to keep expenditure constant.</div>
        <div class="cp-card blue"><div class="cp-card-title">🏷️ Discounts</div>Convert two discounts into one single equivalent discount.</div>
        <div class="cp-card red"><div class="cp-card-title">⚠️ Traps</div>Spot the classic mistake of simply adding or subtracting percentages.</div>
      </div>
    `
  },

  /* ─────────── 2 · CONCEPT PAGE ─────────── */
  2: {
    type: "concept",
    icon: "📊",
    accent: "#22c55e",
    title: "Percentage — Successive Change",
    html: `
      <p class="cp-lead">A percentage is just a fraction out of <b>100</b>. In SSC CGL the winning move is to
      <b class="cp-green">stop calculating and start recognising</b> — fractions, successive change, and the
      price–consumption trick cover most of the questions you will see.</p>

      <div class="cp-stats">
        <div class="cp-stat"><b>1/4</b><span>= 25%</span></div>
        <div class="cp-stat"><b>1/8</b><span>= 12.5%</span></div>
        <div class="cp-stat"><b>1/3</b><span>= 33.33%</span></div>
        <div class="cp-stat"><b>1/6</b><span>= 16.67%</span></div>
      </div>

      <div class="cp-divider">1 · Core formulas</div>

      <div class="cp-formula">
        <small>Successive change</small>
        Net % = a + b + <span class="cp-frac"><i>a × b</i><i>100</i></span>
      </div>

      <div class="cp-note remember">
        Use <b>+</b> for increase and <b>−</b> for decrease <i>inside the formula</i>.
        Final sign tells you whether the net change is an increase or a decrease.
      </div>

      <img alt="Bar diagram: 100 to 120 to 108"
           src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='520' height='170' viewBox='0 0 520 170'><rect width='520' height='170' rx='14' fill='%230f172a'/><g font-family='Arial' font-size='14' fill='white' text-anchor='middle'><rect x='40' y='60' width='100' height='80' rx='6' fill='%233b82f6'/><text x='90' y='106'>100</text><rect x='210' y='42' width='120' height='98' rx='6' fill='%2322c55e'/><text x='270' y='96'>120</text><rect x='400' y='51' width='108' height='89' rx='6' fill='%23f59e0b'/><text x='454' y='101'>108</text><text x='175' y='40' fill='%2386efac'>+20%25</text><text x='365' y='38' fill='%23fca5a5'>-10%25</text><text x='260' y='162' fill='%2394a3b8'>Net = +8%25 (not +10%25)</text></g></svg>">

      <div class="cp-example">
        <div class="cp-q">A number is increased by 20% and then decreased by 10%. Net change?</div>
        <div class="cp-a">Net = 20 − 10 + <span class="cp-frac"><i>20 × (−10)</i><i>100</i></span> = 20 − 10 − 2 = <b class="cp-green">+8%</b></div>
      </div>

      <div class="cp-divider">2 · Price up → consumption down</div>

      <div class="cp-grid c2">
        <div class="cp-card green">
          <div class="cp-card-title">Rule</div>
          If price rises by <b>r%</b>, to keep spending the same, consumption must fall by
          <span class="cp-frac"><i>r</i><i>100 + r</i></span> × 100 %
        </div>
        <div class="cp-card amber">
          <div class="cp-card-title">Fraction shortcut</div>
          Price ↑ 25% = ↑ <span class="cp-frac"><i>1</i><i>4</i></span> → consumption ↓
          <span class="cp-frac"><i>1</i><i>5</i></span> = <b>20%</b>
        </div>
      </div>

      <table>
        <thead><tr><th>Fraction</th><th>%</th><th>Fraction</th><th>%</th></tr></thead>
        <tbody>
          <tr><td>1/2</td><td>50</td><td>1/9</td><td>11.11</td></tr>
          <tr><td>1/3</td><td>33.33</td><td>1/11</td><td>9.09</td></tr>
          <tr><td>1/7</td><td>14.28</td><td>1/12</td><td>8.33</td></tr>
          <tr><td>1/8</td><td>12.5</td><td>1/16</td><td>6.25</td></tr>
        </tbody>
      </table>

      <div class="cp-vs">
        <div class="good"><h4>✅ Correct</h4>+20% then −10% → <b>+8%</b></div>
        <div class="bad"><h4>❌ Trap</h4>20 − 10 = 10% … <b>wrong</b>, you forgot the ab/100 term</div>
      </div>

      <div class="cp-note trap">Percentages of <i>different bases</i> can never be added or subtracted directly.</div>
      <div class="cp-note trick">Start with <b>100</b>: 100 → 120 → 108. Read the answer straight off.</div>
      <div class="cp-mnemonic">a + b + ab⁄100 — “<b>A</b>dd <b>B</b>oth, then <b>A</b>dd <b>B</b>y hundred”</div>

      <details class="cp-collapse">
        <summary>Why does the ab/100 term exist?</summary>
        <p>Because the second percentage is taken on the <i>new</i> value, not the original. 20% up makes the base 120,
        and 10% of 120 is 12, not 10 — that extra 2 is exactly 20 × 10 ÷ 100.</p>
      </details>

      <div class="cp-chips"><span>SSC CGL Tier-1</span><span>Quant</span><span>High-yield</span></div>
    `
  },

  /* ─────────── 3 · QUESTION ─────────── */
  3: {
    questext: "A number is first increased by 20% and then decreased by 10%. What is the net change?",
    options: ["6% increase", "8% increase", "10% increase", "12% increase"],
    correct: "2",
    exptext: "Net = 20 − 10 + (20 × −10)/100 = +8%. Check with 100 → 120 → 108.",
  },

  /* ─────────── 4 · QUESTION ─────────── */
  4: {
    questext: "The price of sugar rises by 25%. By what percent must a family cut its consumption so that its expenditure stays the same?",
    options: ["20%", "25%", "15%", "30%"],
    correct: "1",
    exptext: "Reduction = 25/(100 + 25) × 100 = 20%.",
  },

  /* ─────────── 5 · CONCEPT PAGE (pauses the timer) ─────────── */
  5: {
    type: "concept",
    icon: "🏷️",
    accent: "#f59e0b",
    pauseTimer: true,
    title: "Profit, Loss & Discount",
    html: `
      <div class="cp-formula">
        <small>Selling price</small>
        SP = CP × <span class="cp-frac"><i>100 + P%</i><i>100</i></span>
      </div>

      <div class="cp-grid c2">
        <div class="cp-card blue"><div class="cp-card-title">Profit %</div>(SP − CP) ÷ CP × 100</div>
        <div class="cp-card red"><div class="cp-card-title">Loss %</div>(CP − SP) ÷ CP × 100</div>
      </div>

      <div class="cp-note exam"><b>Two successive discounts</b> d₁% and d₂% are equal to a single discount of
      d₁ + d₂ − d₁d₂/100 %.</div>

      <ol class="cp-steps">
        <li>Assume the marked price is <b>100</b>.</li>
        <li>Apply the first discount, then the second, on the <i>new</i> price.</li>
        <li>100 − final price = the single equivalent discount.</li>
      </ol>

      <div class="cp-example">
        <div class="cp-q">Successive discounts of 20% and 10%. Single equivalent discount?</div>
        <div class="cp-a">20 + 10 − (20 × 10)/100 = 30 − 2 = <b class="cp-green">28%</b></div>
      </div>

      <div class="cp-note tip">Profit and loss are always calculated on <b>cost price</b> unless the question says otherwise.</div>
    `
  },

  /* ─────────── 6 · QUESTION ─────────── */
  6: {
    questext: "A shopkeeper gives successive discounts of 20% and 10% on an article. What is the single equivalent discount?",
    options: ["28%", "30%", "25%", "27%"],
    correct: "1",
    exptext: "20 + 10 − (20 × 10)/100 = 28%.",
  },

  /* ─────────── 7 · QUESTION ─────────── */
  7: {
    questext: "An article is sold at a 20% profit. If its cost price is ₹250, what is the selling price?",
    options: ["₹275", "₹300", "₹320", "₹290"],
    correct: "2",
    exptext: "SP = 250 × 120/100 = ₹300.",
  }
};
