/* ── STYLE SNIPPET: hides the thumbnail box and the "Open Thumbnail & YouTube Kit" link on page 1 (the chapter icon still opens the studio) ── */
(function () {
  function hide(el) {
    if (!el || el.getAttribute("data-hidden")) return;
    el.setAttribute("data-hidden", "1");
    el.style.setProperty("display", "none", "important");
  }
  function sweep() {
    document.querySelectorAll("img.cp-thumb-img").forEach(function (img) {
      var p = img.parentElement;
      hide(p && !p.querySelector("p,.cp-lead,.cp-stats") ? p : img);
    });
    document.querySelectorAll("button,a,[role=button]").forEach(function (el) {
      if (/open thumbnail/i.test(el.textContent || "")) hide(el);
    });
  }
  try { new MutationObserver(sweep).observe(document.documentElement, { childList: true, subtree: true }); } catch (e) {}
  sweep();
})();

/* ════════════════════════════════════════════════════════════════
   DEMO — concept pages mixed in between questions
   Register it in portalData.js like any other test (file: "concept-demo").
   Entry 1 is always the CLASS OVERVIEW page (what we will learn in this class).

   Write entries in the order you want them shown:
       1: concept page   2: question   3: question   4: concept page …

   CONCEPT PAGE fields
     type       : "concept"                 (required)
     title      : "Percentage — Fast Fractions"
     icon       : "📊"                       (emoji, optional)
     accent     : "#22c55e"                 (colour of this page, optional)
     pauseTimer : true                      (optional – stops the exam clock while reading)
     html       : `...any HTML, text, <img>, tables...`

   🎬 YOUTUBE STUDIO (optional – put these two fields on ENTRY 1 only)
     The chapter ICON on that page becomes tappable (pulsing red ▶ badge).
     Tapping it opens a studio with 2 tabs:
       🎬 Thumbnail  – composes a 1920×1080 YouTube thumbnail from YOUR image
                       (Pro design / Image only, editable text, accent colour)
                       → Download HD PNG (1920×1080) or YouTube JPG (1280×720, <2 MB)
       📋 Kit        – best title, A/B titles, description, tags, hashtags,
                       pinned comment, thumbnail text, community post, chapters,
                       playlist … each with a one-tap COPY button + "Copy everything".
     The thumbnail box and the "Open Thumbnail & YouTube Kit" link are hidden on the page (see the first snippet); the chapter icon opens the studio.

     thumb : "thumbnail.jpg"                      (image link, file next to index.html)
             or { image:"thumbnail.jpg", line1:"", line2:"", badge:"", ribbon:"", burst:"", mode:"pro"|"image" }
     yt    : { title, altTitles:[], description, tags:[], hashtags:[], pinnedComment,
               thumbText, communityPost, chapters, playlist, extra:[{icon,label,text}] }
     NOTE: export needs the site opened over http(s)://, not file:// (browser canvas rule).

   QUESTION fields stay exactly as before:
     questext, options[4], correct:"1".."4", quesimage, exptext, expimage

   Toolkit classes you can use inside html:
     cp-lead, cp-card (blue green amber red violet teal pink), cp-grid (c2 c3 c4),
     cp-formula, cp-frac, cp-note (tip trap trick remember info exam good),
     cp-steps (ol), cp-example (cp-q / cp-a), cp-mnemonic, cp-vs (good / bad),
     cp-stats / cp-stat, cp-chips, cp-timeline (ul), details.cp-collapse,
     cp-divider, cp-fig, cp-key, plain <table>, <img>, h2/h3/h4
     EMPHASIS RULE: never use the brown cp-hl highlight. Emphasise key words with <u>underline</u> (and <b>bold</b>) only.
════════════════════════════════════════════════════════════════ */

window.TEST_DATA = {

  /* ─────────── 1 · CLASS OVERVIEW (opening summary page) ─────────── */
  1: {
    type: "concept",
    icon: "🎯",
    accent: "#6366f1",
    pauseTimer: true,
    title: "Class Overview — What We Will Learn Today",

    /* 🎬 tap the 🎯 icon on this page → thumbnail studio + YouTube kit */
    thumb: {
      image: "thumbnail.jpg",
      line1: "PERCENTAGE",
      line2: "+ PROFIT & LOSS",
      badge: "FULL CLASS",
      ribbon: "FORMULAS • TRICKS • PRACTICE",
      burst: "Competitive exams",
      mode: "pro"
    },
    yt: {
      title: "Percentage & Profit-Loss Fast Tricks | Competitive exams Quant",
      altTitles: [
        "Percentage Successive Change Trick in 1 Line | Competitive exams Quant",
        "Profit, Loss & Discount: Single Equivalent Discount Formula | Competitive exams",
        "Stop Calculating Percentage! Use This Trick | Competitive exams Tier-1 Quant",
        "Percentage + Profit & Loss Full Class with Practice Questions | Competitive exams"
      ],
      description:
"Percentage and Profit & Loss quietly decide your Quant score in Competitive exams — in this fast-track class you stop calculating and start recognising patterns.\n\n" +
"📌 IN THIS CLASS\n" +
"✅ Successive change: Net % = a + b + ab/100 and the “start with 100” trick\n" +
"✅ Price up → consumption down: keep expenditure constant\n" +
"✅ Profit, Loss & Discount: SP, profit %, loss %\n" +
"✅ Two successive discounts → one single equivalent discount\n" +
"✅ Classic traps (adding or subtracting percentages directly)\n" +
"✅ 4 practice questions right after the concepts\n\n" +
"⏱️ CHAPTERS\n" +
"00:00 Class overview\n00:00 Percentage — Successive Change\n00:00 Practice: successive change & price–consumption\n00:00 Profit, Loss & Discount\n00:00 Practice: single equivalent discount & selling price\n\n" +
"👍 Like, share and subscribe, and comment “DONE” after you finish the practice questions.\n\n" +
"#SSCCGL #Percentage #ProfitAndLoss #Quant",
      tags: [
        "percentage tricks", "percentage for Competitive exams", "successive change percentage", "percentage shortcut tricks",
        "profit and loss tricks", "profit loss discount", "successive discount formula", "single equivalent discount",
        "price consumption percentage", "Competitive exams quant", "Competitive exams maths", "Competitive exams tier 1", "quantitative aptitude",
        "quant for ssc", "maths tricks", "fast track maths", "percentage questions", "profit and loss questions",
        "Competitive exams preparation", "Competitive exams maths"
      ],
      hashtags: ["SSCCGL", "Percentage", "ProfitAndLoss", "Quant"],
      thumbText: "PERCENTAGE + PROFIT & LOSS",
      pinnedComment: "📌 Practice what you learned: solve the 4 questions in the class, then write your answers below. Which trick helped you most — successive change or successive discount? 👇",
      communityPost: "📊 New class is live: Percentage + Profit & Loss — formulas, tricks and practice for Competitive exams Quant. Start with the class overview, then try the 4 questions and tell me your score! 🎯",
      chapters: "00:00 Class overview\n00:00 Percentage — Successive Change\n00:00 Practice: successive change & price–consumption\n00:00 Profit, Loss & Discount\n00:00 Practice: single equivalent discount & selling price",
      playlist: "Competitive exams Quant — Fast Track Classes"
    },

    html: `
      <p class="cp-lead">Today's class is a <u>fast-track on Percentage and Profit &amp; Loss</u> —
      the two chapters that quietly decide your Quant score in Competitive exams. By the end you will
      <b>stop calculating and start recognising</b> patterns.</p>

      <div class="cp-stats">
        <div class="cp-stat"><b>2</b><span>Concept pages</span></div>
        <div class="cp-stat"><b>5</b><span>Core formulas</span></div>
        <div class="cp-stat"><b>4</b><span>Practice questions</span></div>
        <div class="cp-stat"><b>~15 min</b><span>Time needed</span></div>
      </div>

      <div class="cp-divider">Your roadmap</div>

      <ul class="cp-timeline">
        <li><b>Percentage — Successive Change</b><br>Net % = a + b + ab/100, and the “start with 100” trick.</li>
        <li><b>Practice</b> — 2 questions on successive change and the price–consumption rule.</li>
        <li><b>Profit, Loss &amp; Discount</b><br>SP, profit %, loss % and two successive discounts.</li>
        <li><b>Practice</b> — 2 questions on single equivalent discount and selling price.</li>
      </ul>

      <div class="cp-divider">What you will be able to do</div>

      <div class="cp-grid c2">
        <div class="cp-card green"><div class="cp-card-title">📊 Successive change</div>Combine two percentage changes in one line, without drawing a table.</div>
        <div class="cp-card amber"><div class="cp-card-title">🛒 Price ↑ → Consumption ↓</div>Find the exact cut needed to keep expenditure constant.</div>
        <div class="cp-card blue"><div class="cp-card-title">🏷️ Discounts</div>Convert two discounts into one single equivalent discount.</div>
        <div class="cp-card red"><div class="cp-card-title">⚠️ Traps</div>Spot the classic mistake of simply adding or subtracting percentages.</div>
      </div>

      <div class="cp-note exam"><b>Why it matters:</b> these formulas appear again inside Data Interpretation,
      Simple &amp; Compound Interest and Partnership — master them once, use them everywhere.</div>

      <div class="cp-note tip">Read each concept page fully, then attempt the questions right after it.
      The exam clock pauses on concept pages, so take your time.</div>

      <div class="cp-chips"><span>Competitive exams Tier-1</span><span>Quant</span><span>Percentage</span><span>Profit &amp; Loss</span></div>
    `
  },

  /* ─────────── 2 · CONCEPT PAGE ─────────── */
  2: {
    type: "concept",
    icon: "📊",
    accent: "#22c55e",
    title: "Percentage — Successive Change",
    html: `
      <p class="cp-lead">A percentage is just a fraction out of <b>100</b>. In Competitive exams the winning move is to
      <u>stop calculating and start recognising</u> — fractions, successive change, and the
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

      <div class="cp-chips"><span>Competitive exams Tier-1</span><span>Quant</span><span>High-yield</span></div>
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

/* ════════════════════════════════════════════════════════════════
   IMAGE LIST (which image belongs to which entry)
     thumbnail.jpg → ENTRY 1 (class overview, "thumb" field)  — not numbered
     (the demo has no other numbered figures; real chapters continue 1.jpg, 2.jpg …)

   FIGURE PROMPTS  (copy each line into ChatGPT, save the result under the given name)
   thumbnail.jpg: Create a 16:9 landscape YouTube thumbnail, 1920×1080 px, ultra-sharp, vibrant and eye-catching cinematic 3D illustration in deep indigo, violet and electric-blue tones (accent #6366f1) with warm gold highlights. Hero subject on the RIGHT 45% of the frame: a large glossy 3D percent sign (%) glowing in the centre, orbited by a gold price tag, a shopping bag, a stack of coins and a rising bar chart, each floating with soft shadows and light rim glow. Keep the LEFT 55% of the frame a calm, darker, smooth gradient area with no objects, because the title, badge and ribbon will be overlaid there later. Absolutely no text, letters, numbers, logos, watermarks, channel names or human faces anywhere in the image. Clean, most beautiful, colorful, professional, high-contrast composition.
   ════════════════════════════════════════════════════════════════ */
