/* ════════════════════════════════════════════════════════════════
   REAL NUMBERS (Class X · Chapter 1) — concept pages + questions
   Register in portalData.js like any other test (file: "real-numbers-ch1").

   ORDER (follows the PDF)
     1–4    concept pages (1.1, 1.2 …)
     5–8    worked Examples 1–4  (questions, unsolved)
     9–15   Exercise 1.1  (Q1–Q7)
     16–18  concept pages (1.3 Revisiting Irrational Numbers)
     19–21  worked Examples 5–7  (questions, unsolved)
     22–24  Exercise 1.2  (Q1–Q3)
     25     concept page (1.4 Summary + A Note to the Reader)

   IMAGE MAP (figure → entry)
     1.jpg → entry 2  (concept page "Fundamental Theorem of Arithmetic" – factor tree of 32760)
   (No question in this chapter carries a figure, so no quesimage is used.)
════════════════════════════════════════════════════════════════ */

/* ── image size cap for question images (60% width, 35vh height) ── */
(function () {
  try {
    var s = document.createElement("style");
    s.textContent =
      'img[src$=".jpg"]{max-width:60% !important;max-height:35vh !important;width:auto !important;height:auto !important;object-fit:contain !important;display:block !important;margin:10px auto !important;}';
    (document.head || document.documentElement).appendChild(s);
  } catch (e) {}
})();

window.TEST_DATA = {

  /* ─────────── 1 · CONCEPT · 1.1 Introduction ─────────── */
  1: {
    type: "concept",
    icon: "🔢",
    accent: "#3b82f6",
    pauseTimer: true,
    title: "Real Numbers — Introduction",
    subtitle: "1.1 · The two big ideas of this chapter",
    html: `
      <p class="cp-lead">This chapter is built on <b>two powerful facts about positive integers</b>.
      Understand them once and HCF/LCM, irrationality proofs and decimal expansions all become
      <span class="cp-hl">pattern-spotting</span>, not heavy calculation.</p>

      <div class="cp-grid c2">
        <div class="cp-card blue">
          <div class="cp-card-title">Euclid's Division Algorithm</div>
          About <b>divisibility</b>. Any positive integer <b>a</b> can be divided by a positive integer <b>b</b>
          leaving a remainder <b>r smaller than b</b> — it is just <b>long division</b>.
          Mainly used to compute the <b>HCF</b> of two positive integers.
        </div>
        <div class="cp-card green">
          <div class="cp-card-title">Fundamental Theorem of Arithmetic</div>
          About <b>multiplication</b>. Every composite number is a product of primes in a
          <b>unique</b> way. Easy to state, but it has very deep applications.
        </div>
      </div>

      <div class="cp-formula">
        <small>Euclid's division (in symbols)</small>
        a = b × q + r &nbsp;, &nbsp; 0 ≤ r &lt; b
      </div>

      <div class="cp-divider">Two applications of the Fundamental Theorem</div>

      <div class="cp-grid c2">
        <div class="cp-card violet">
          <div class="cp-card-title">① Prove irrationality</div>
          Used to prove that numbers like <b>√2, √3, √5</b> (studied in Class IX) are <b>irrational</b>.
        </div>
        <div class="cp-card amber">
          <div class="cp-card-title">② Decimal expansion of p/q (q ≠ 0)</div>
          The <b>prime factorisation of the denominator q</b> completely reveals whether the decimal is
          <b>terminating</b> or <b>non-terminating repeating</b>.
        </div>
      </div>

      <div class="cp-note exam">Exam focus: HCF–LCM by prime factorisation, “can this number end in 0?”, and
      <b>proofs of irrationality</b> by contradiction are the favourites of this chapter.</div>

      <ul class="cp-timeline">
        <li><b>1.2</b> Fundamental Theorem of Arithmetic (+ HCF, LCM)</li>
        <li><b>1.3</b> Revisiting irrational numbers (proofs)</li>
        <li><b>1.4</b> Summary + Note to the Reader</li>
      </ul>

      <div class="cp-chips"><span>Class X</span><span>Real Numbers</span><span>Board + Foundation</span></div>
    `
  },

  /* ─────────── 2 · CONCEPT · 1.2 FTA (Figure 1) ─────────── */
  2: {
    type: "concept",
    icon: "🌳",
    accent: "#22c55e",
    pauseTimer: true,
    title: "The Fundamental Theorem of Arithmetic",
    subtitle: "1.2 · Every composite number = product of primes, in one unique way",
    html: `
      <p class="cp-lead">Every natural number can be <b>broken down</b> into primes — and, going the other way,
      multiplying primes can build numbers. The big question: can <span class="cp-hl">every</span> composite
      number be built this way? <b>Yes — and only in one way.</b></p>

      <div class="cp-formula">
        <small>Theorem 1.1 · Fundamental Theorem of Arithmetic</small>
        Composite number x = p₁ × p₂ × … × pₙ &nbsp;(primes, p₁ ≤ p₂ ≤ … ≤ pₙ)
      </div>

      <div class="cp-note remember">Two parts to remember: <b>(1) Existence</b> – a prime factorisation always
      exists; <b>(2) Uniqueness</b> – it is the only one, <i>apart from the order</i> of the factors.</div>

      <div class="cp-divider">1 · Building numbers from primes</div>

      <p>Take primes 2, 3, 7, 11, 23. Multiplying some or all of them (repeats allowed) gives infinitely many numbers:</p>
      <table>
        <thead><tr><th>Product of primes</th><th>Number</th></tr></thead>
        <tbody>
          <tr><td>7 × 11 × 23</td><td>1771</td></tr>
          <tr><td>3 × 7 × 11 × 23</td><td>5313</td></tr>
          <tr><td>2 × 3 × 7 × 11 × 23</td><td>10626</td></tr>
          <tr><td>2³ × 3 × 7³</td><td>8232</td></tr>
          <tr><td>2² × 3 × 7 × 11 × 23</td><td>21252</td></tr>
        </tbody>
      </table>
      <div class="cp-note info">There are <b>infinitely many primes</b>, so combining them in all possible ways gives an
      infinite collection of numbers: all the primes and all possible products of primes.</div>

      <div class="cp-divider">2 · Factor tree (the reverse direction)</div>

      <div class="cp-fig">
        <img src="images/cylinder/94a67f6b-21e9-4afd-9f0a-301099f8865b.png" alt="Factor tree of 32760" style="max-width:60%;max-height:35vh;width:auto;height:auto;object-fit:contain;display:block;margin:10px auto;">
        <div style="text-align:center;font-size:.85em;opacity:.8">Factor tree of 32760</div>
      </div>

      <div class="cp-formula">
        <small>Reading the tree</small>
        32760 = 2 × 2 × 2 × 3 × 3 × 5 × 7 × 13 = 2³ × 3² × 5 × 7 × 13
      </div>

      <ol class="cp-steps">
        <li>Split the number into <b>two factors</b>; keep splitting every composite factor.</li>
        <li>Stop when <b>all leaves are primes</b>.</li>
        <li>Write the primes in <b>ascending order</b> and combine equal primes into <b>powers</b>.</li>
      </ol>

      <div class="cp-example">
        <div class="cp-q">Another number: 123456789</div>
        <div class="cp-a">= 3² × 3803 × 3607 &nbsp;(you must still check that 3803 and 3607 are prime!)</div>
      </div>

      <div class="cp-divider">3 · Uniqueness — the heart of the theorem</div>

      <div class="cp-note trap">“Unique” means unique <b>apart from order</b>. 2 × 3 × 5 × 7 and 3 × 5 × 7 × 2 are
      the <b>same</b> factorisation. Once you fix ascending order, the factorisation is exactly one.</div>

      <div class="cp-mnemonic">Prime factorisation of a natural number is <b>unique</b>, except for the <b>order of its factors</b>.</div>

      <details class="cp-collapse">
        <summary>History box — Gauss &amp; Euclid</summary>
        <p>An equivalent version was probably first recorded as <b>Proposition 14 of Book IX</b> of Euclid's
        <i>Elements</i>. The first <b>correct proof</b> was given by <b>Carl Friedrich Gauss</b>
        (1777 – 1855) in <i>Disquisitiones Arithmeticae</i>. Gauss is called the “Prince of Mathematicians” and is
        considered one of the three greatest mathematicians of all time, along with Archimedes and Newton.</p>
      </details>

      <div class="cp-chips"><span>Theorem 1.1</span><span>Factor tree</span><span>Uniqueness</span></div>
    `
  },

  /* ─────────── 3 · CONCEPT · Applications: digit test ─────────── */
  3: {
    type: "concept",
    icon: "🔟",
    accent: "#ef4444",
    pauseTimer: true,
    title: "FTA Trick — Can a Number End in 0?",
    subtitle: "Use uniqueness to answer in one line",
    html: `
      <p class="cp-lead">The Fundamental Theorem has many applications, inside and outside mathematics. The first
      exam favourite: <span class="cp-hl">“Can this power end with the digit 0?”</span> — you never need to
      calculate; just look at the primes.</p>

      <div class="cp-formula">
        <small>Logic chain</small>
        ends with digit 0 ⇒ divisible by 5 (and 10) ⇒ prime factorisation must contain <b>5</b>
      </div>

      <ol class="cp-steps">
        <li>Suppose the number <b>does</b> end with 0.</li>
        <li>Then it is divisible by <b>5</b>, so <b>5 must appear</b> in its prime factorisation.</li>
        <li>Write the number as a product of primes (e.g. <b>4ⁿ = (2)²ⁿ</b>) and see which primes appear.</li>
        <li>By <b>uniqueness</b>, <u>no other primes</u> can appear. If 5 is missing → <b>it can never end with 0</b>.</li>
      </ol>

      <div class="cp-example">
        <div class="cp-q">Does 4ⁿ (n a natural number) ever end with zero?</div>
        <div class="cp-a">4ⁿ = (2)²ⁿ → the <b>only prime is 2</b>. No 5 ⇒ <b class="cp-green">never ends with 0</b>, for any n.</div>
      </div>

      <div class="cp-note trick">Quick test: a number ends in 0 only when its factorisation has <b>both 2 and 5</b>.
      So check the prime factors of the base first — missing 5 (or missing 2) kills the possibility instantly.</div>

      <div class="cp-note trap">Don't try n = 1, 2, 3… and “see”. Checking cases proves nothing for all n — the
      <b>uniqueness argument</b> covers every n at once.</div>

      <div class="cp-chips"><span>Uniqueness</span><span>Digit test</span><span>1-line proofs</span></div>
    `
  },

  /* ─────────── 4 · CONCEPT · HCF & LCM ─────────── */
  4: {
    type: "concept",
    icon: "🧮",
    accent: "#f59e0b",
    pauseTimer: true,
    title: "HCF & LCM by Prime Factorisation",
    subtitle: "You have used FTA for years without realising it",
    html: `
      <p class="cp-lead">Write each number as a product of <b>powers of primes</b>, then pick powers by one simple rule.
      This is the <span class="cp-hl">prime factorisation method</span>.</p>

      <div class="cp-grid c2">
        <div class="cp-card blue">
          <div class="cp-card-title">HCF</div>
          Product of the <b>smallest power</b> of each <b>common</b> prime factor.
        </div>
        <div class="cp-card red">
          <div class="cp-card-title">LCM</div>
          Product of the <b>greatest power</b> of <b>each prime factor involved</b> in the numbers.
        </div>
      </div>

      <div class="cp-mnemonic">HCF → <b>C</b>ommon primes, <b>S</b>mallest power &nbsp;|&nbsp; LCM → <b>A</b>ll primes, <b>G</b>reatest power</div>

      <div class="cp-example">
        <div class="cp-q">Illustration: 12 and 18</div>
        <div class="cp-a">12 = 2² × 3¹, 18 = 2¹ × 3² &nbsp;→&nbsp; HCF = 2¹ × 3¹ = <b>6</b>, LCM = 2² × 3² = <b>36</b></div>
      </div>

      <div class="cp-divider">The shortcut for TWO numbers</div>

      <div class="cp-formula">
        <small>For any two positive integers a and b</small>
        HCF(a, b) × LCM(a, b) = a × b
      </div>

      <div class="cp-grid c2">
        <div class="cp-card green"><div class="cp-card-title">Find LCM from HCF</div>
          LCM = <span class="cp-frac"><i>a × b</i><i>HCF(a, b)</i></span></div>
        <div class="cp-card amber"><div class="cp-card-title">Find HCF from LCM</div>
          HCF = <span class="cp-frac"><i>a × b</i><i>LCM(a, b)</i></span></div>
      </div>
      <p>Check on the illustration: 6 × 36 = 216 = 12 × 18 ✓</p>

      <div class="cp-divider">Three (or more) numbers</div>

      <ol class="cp-steps">
        <li>Factorise <b>every</b> number into powers of primes.</li>
        <li><b>HCF</b>: take only primes that are <b>common to all</b>, with the <b>smallest</b> power.</li>
        <li><b>LCM</b>: take <b>every</b> prime that appears anywhere, with the <b>greatest</b> power.</li>
      </ol>

      <div class="cp-vs">
        <div class="good"><h4>✅ Two numbers</h4>HCF × LCM = <b>product of the numbers</b></div>
        <div class="bad"><h4>❌ Three numbers</h4>HCF × LCM <b>≠</b> product of the three numbers (e.g. 6, 72, 120)</div>
      </div>

      <div class="cp-note trap">Never use “HCF × LCM = product” for three numbers. For three numbers use the
      prime-power rule above (special formulas are on the last page of this chapter).</div>

      <div class="cp-note trick">If numbers are <b>all different primes</b> (or have no common prime), the HCF is
      <b>1</b> and the LCM is simply their <b>product</b>. Always write primes in ascending order so nothing is missed.</div>

      <div class="cp-chips"><span>HCF</span><span>LCM</span><span>HCF × LCM = a × b</span></div>
    `
  },

  /* ─────────── 5 · EXAMPLE 1 ─────────── */
  5: {
    questext: "<b>Example 1:</b> Consider the numbers <b>4<sup>n</sup></b>, where <b>n</b> is a natural number.<br><u>Check whether</u> there is any value of <b>n</b> for which <b>4<sup>n</sup></b> <u>ends with the digit zero</u>.",
    options: ["", "", "", ""],
    correct: "",
    exptext: "",
    expimage: ""
  },

  /* ─────────── 6 · EXAMPLE 2 ─────────── */
  6: {
    questext: "<b>Example 2:</b> <u>Find the LCM and HCF</u> of <b>6 and 20</b> by the <u>prime factorisation method</u>.",
    options: ["", "", "", ""],
    correct: "",
    exptext: "",
    expimage: ""
  },

  /* ─────────── 7 · EXAMPLE 3 ─────────── */
  7: {
    questext: "<b>Example 3:</b> <u>Find the HCF</u> of <b>96 and 404</b> by the <u>prime factorisation method</u>.<br>Hence, <u>find their LCM</u>.",
    options: ["", "", "", ""],
    correct: "",
    exptext: "",
    expimage: ""
  },

  /* ─────────── 8 · EXAMPLE 4 ─────────── */
  8: {
    questext: "<b>Example 4:</b> <u>Find the HCF and LCM</u> of <b>6, 72 and 120</b>, using the <u>prime factorisation method</u>.",
    options: ["", "", "", ""],
    correct: "",
    exptext: "",
    expimage: ""
  },

  /* ─────────── 9 · EXERCISE 1.1 · Q1 ─────────── */
  9: {
    questext: "<b>Exercise 1.1 · Q1.</b> <u>Express each number as a product of its prime factors</u>:<br>(i) <b>140</b><br>(ii) <b>156</b><br>(iii) <b>3825</b><br>(iv) <b>5005</b><br>(v) <b>7429</b>",
    options: ["", "", "", ""],
    correct: "",
    exptext: "",
    expimage: ""
  },

  /* ─────────── 10 · EXERCISE 1.1 · Q2 ─────────── */
  10: {
    questext: "<b>Exercise 1.1 · Q2.</b> <u>Find the LCM and HCF</u> of the following <b>pairs of integers</b> and <u>verify that</u> <b>LCM × HCF = product of the two numbers</b>.<br>(i) <b>26 and 91</b><br>(ii) <b>510 and 92</b><br>(iii) <b>336 and 54</b>",
    options: ["", "", "", ""],
    correct: "",
    exptext: "",
    expimage: ""
  },

  /* ─────────── 11 · EXERCISE 1.1 · Q3 ─────────── */
  11: {
    questext: "<b>Exercise 1.1 · Q3.</b> <u>Find the LCM and HCF</u> of the following integers by applying the <u>prime factorisation method</u>.<br>(i) <b>12, 15 and 21</b><br>(ii) <b>17, 23 and 29</b><br>(iii) <b>8, 9 and 25</b>",
    options: ["", "", "", ""],
    correct: "",
    exptext: "",
    expimage: ""
  },

  /* ─────────── 12 · EXERCISE 1.1 · Q4 ─────────── */
  12: {
    questext: "<b>Exercise 1.1 · Q4.</b> Given that <b>HCF (306, 657) = 9</b>, <u>find</u> <b>LCM (306, 657)</b>.",
    options: ["", "", "", ""],
    correct: "",
    exptext: "",
    expimage: ""
  },

  /* ─────────── 13 · EXERCISE 1.1 · Q5 ─────────── */
  13: {
    questext: "<b>Exercise 1.1 · Q5.</b> <u>Check whether</u> <b>6<sup>n</sup></b> can <u>end with the digit 0</u> for any natural number <b>n</b>.",
    options: ["", "", "", ""],
    correct: "",
    exptext: "",
    expimage: ""
  },

  /* ─────────── 14 · EXERCISE 1.1 · Q6 ─────────── */
  14: {
    questext: "<b>Exercise 1.1 · Q6.</b> <u>Explain why</u> <b>7 × 11 × 13 + 13</b> and <b>7 × 6 × 5 × 4 × 3 × 2 × 1 + 5</b> are <b>composite numbers</b>.",
    options: ["", "", "", ""],
    correct: "",
    exptext: "",
    expimage: ""
  },

  /* ─────────── 15 · EXERCISE 1.1 · Q7 ─────────── */
  15: {
    questext: "<b>Exercise 1.1 · Q7.</b> There is a <b>circular path</b> around a sports field. <b>Sonia</b> takes <b>18 minutes</b> to drive one round of the field, while <b>Ravi</b> takes <b>12 minutes</b> for the same.<br>Suppose they both <b>start at the same point and at the same time</b>, and go in the <b>same direction</b>.<br><u>After how many minutes will they meet again at the starting point?</u>",
    options: ["", "", "", ""],
    correct: "",
    exptext: "",
    expimage: ""
  },

  /* ─────────── 16 · CONCEPT · 1.3 Irrational numbers + Theorem 1.2 ─────────── */
  16: {
    type: "concept",
    icon: "♾️",
    accent: "#8b5cf6",
    pauseTimer: true,
    title: "Revisiting Irrational Numbers",
    subtitle: "1.3 · Definition and Theorem 1.2 (the engine behind every proof)",
    html: `
      <p class="cp-lead">In Class IX you learnt that rationals and irrationals together make the real numbers, but you
      never <i>proved</i> a number was irrational. Now we <span class="cp-hl">prove</span> that
      <b>√2, √3, √5</b> and, in general, <b>√p</b> (p a prime) are irrational — using the Fundamental Theorem.</p>

      <div class="cp-formula">
        <small>Definition</small>
        A number s is <b>irrational</b> if it <u>cannot</u> be written as <span class="cp-frac"><i>p</i><i>q</i></span>,
        where p, q are integers and q ≠ 0
      </div>

      <div class="cp-stats">
        <div class="cp-stat"><b>√2</b><span>irrational</span></div>
        <div class="cp-stat"><b>√3</b><span>irrational</span></div>
        <div class="cp-stat"><b>√15</b><span>irrational</span></div>
        <div class="cp-stat"><b>π</b><span>irrational</span></div>
      </div>
      <p>More familiar examples: <b>−√2/√3</b> and the non-repeating, non-terminating decimal
      <b>0.10110111011110…</b></p>

      <div class="cp-divider">Theorem 1.2 — the key tool</div>

      <div class="cp-formula">
        <small>Theorem 1.2</small>
        p is a <b>prime</b> and <b>p divides a²</b> &nbsp;⇒&nbsp; <b>p divides a</b> &nbsp;(a a positive integer)
      </div>

      <div class="cp-note remember">In words: if a prime divides a perfect square, it must already divide the
      number being squared. You will use this line in <b>every</b> irrationality proof.</div>

      <div class="cp-note trap">The word <b>“prime”</b> is essential. For example 4 divides 6² = 36, but 4 does
      <u>not</u> divide 6. So never apply Theorem 1.2 with a composite divisor.</div>

      <details class="cp-collapse">
        <summary>Proof of Theorem 1.2 (* Not from the examination point of view)</summary>
        <p>Let a = p₁p₂…pₙ (primes, not necessarily distinct). Then a² = p₁²p₂²…pₙ².
        Given that p divides a², by the Fundamental Theorem p is one of the prime factors of a². By the
        <b>uniqueness</b> part, the only prime factors of a² are p₁, p₂, …, pₙ. So p is one of
        p₁, p₂, …, pₙ. Since a = p₁p₂…pₙ, p divides a.</p>
      </details>

      <div class="cp-chips"><span>Irrational</span><span>Theorem 1.2</span><span>Prime divisor</span></div>
    `
  },

  /* ─────────── 17 · CONCEPT · Theorem 1.3 √2 proof ─────────── */
  17: {
    type: "concept",
    icon: "🧩",
    accent: "#ec4899",
    pauseTimer: true,
    title: "Proof by Contradiction — √2 is Irrational",
    subtitle: "Theorem 1.3 · The template you can reuse for √3, √5, √p",
    html: `
      <p class="cp-lead">The proof uses <b>proof by contradiction</b>: assume the opposite, follow the logic, and
      reach something impossible. Learn the <span class="cp-hl">8 steps</span> once — they never change.</p>

      <div class="cp-formula">
        <small>Theorem 1.3</small>
        √2 is irrational
      </div>

      <ol class="cp-steps">
        <li><b>Assume</b>, to the contrary, that √2 is <b>rational</b>.</li>
        <li>So √2 = <span class="cp-frac"><i>r</i><i>s</i></span> for integers r and s (s ≠ 0).
            Cancel any common factor to get √2 = <span class="cp-frac"><i>a</i><i>b</i></span>
            with <b>a and b coprime</b>.</li>
        <li>b√2 = a. <b>Square</b> both sides: <b>2b² = a²</b>. So <b>2 divides a²</b>.</li>
        <li>By <b>Theorem 1.2</b>, <b>2 divides a</b>. Write <b>a = 2c</b>.</li>
        <li>Substitute: 2b² = 4c², i.e. <b>b² = 2c²</b>.</li>
        <li>So <b>2 divides b²</b>, and by Theorem 1.2 again, <b>2 divides b</b>.</li>
        <li>Hence <b>a and b have at least 2 as a common factor</b>.</li>
        <li>This <b>contradicts</b> “a and b have no common factor other than 1”. So the assumption was wrong:
            <b class="cp-green">√2 is irrational</b>.</li>
      </ol>

      <div class="cp-note exam">Marks are given for: <b>(1)</b> the assumption, <b>(2)</b> coprime a, b,
      <b>(3)</b> squaring, <b>(4)</b> quoting Theorem 1.2 <u>twice</u>, <b>(5)</b> the contradiction line,
      <b>(6)</b> the conclusion. Do not skip any.</div>

      <div class="cp-note trick">For √3 the same proof runs with <b>3</b> in place of 2: 3b² = a² → 3 | a → a = 3c →
      b² = 3c² → 3 | b. For √p, just replace 2 by the prime p.</div>

      <div class="cp-note trap">The proof only works if you first <b>reduce to coprime a and b</b>. Without that
      step there is no contradiction at the end.</div>

      <div class="cp-chips"><span>Theorem 1.3</span><span>Contradiction</span><span>Coprime</span></div>
    `
  },

  /* ─────────── 18 · CONCEPT · Rational + irrational rules ─────────── */
  18: {
    type: "concept",
    icon: "➕",
    accent: "#14b8a6",
    pauseTimer: true,
    title: "Rational ⊕ Irrational — Rules & Method",
    subtitle: "Facts from Class IX, proved here for particular cases",
    html: `
      <p class="cp-lead">Once one irrational number is known (like √2 or √3), you can show many more are irrational by
      <span class="cp-hl">isolating the surd</span> and showing it would otherwise be rational.</p>

      <div class="cp-grid c2">
        <div class="cp-card teal">
          <div class="cp-card-title">Sum / Difference</div>
          rational ± irrational = <b>irrational</b>
        </div>
        <div class="cp-card violet">
          <div class="cp-card-title">Product / Quotient</div>
          <b>non-zero</b> rational × (or ÷) irrational = <b>irrational</b>
        </div>
      </div>

      <div class="cp-note trap">The word <b>“non-zero”</b> matters: 0 × (an irrational) = 0, which is rational.
      The product/quotient rule needs a non-zero rational.</div>

      <div class="cp-divider">The standard method</div>

      <ol class="cp-steps">
        <li><b>Assume</b>, to the contrary, that the given number is <b>rational</b>.</li>
        <li>Write it as <span class="cp-frac"><i>a</i><i>b</i></span> with <b>coprime a and b</b> (b ≠ 0).</li>
        <li><b>Rearrange</b> so that the <b>known surd stands alone</b> on one side.</li>
        <li>The other side is built only from integers using +, −, ×, ÷ → it is <b>rational</b>.</li>
        <li>So the surd is rational — this <b>contradicts</b> the known fact that it is irrational.</li>
        <li><b>Conclude</b> that the given number is irrational.</li>
      </ol>

      <div class="cp-vs">
        <div class="good"><h4>✅ Pattern: a − √3</h4>Isolate √3 = (something with integers only) → rational ⇒ contradiction</div>
        <div class="bad"><h4>❌ Mistake</h4>Forgetting to <b>name the fact you contradict</b> (e.g. “√3 is irrational”)</div>
      </div>

      <div class="cp-note tip">Rational numbers are closed under addition, subtraction, multiplication and division
      (by non-zero). That is exactly why “integers-only on one side” gives a rational number.</div>

      <div class="cp-chips"><span>Isolate the surd</span><span>Contradiction</span><span>Non-zero rational</span></div>
    `
  },

  /* ─────────── 19 · EXAMPLE 5 ─────────── */
  19: {
    questext: "<b>Example 5:</b> <u>Prove that</u> <b>√3</b> is irrational.",
    options: ["", "", "", ""],
    correct: "",
    exptext: "",
    expimage: ""
  },

  /* ─────────── 20 · EXAMPLE 6 ─────────── */
  20: {
    questext: "<b>Example 6:</b> <u>Show that</u> <b>5 – √3</b> is irrational.",
    options: ["", "", "", ""],
    correct: "",
    exptext: "",
    expimage: ""
  },

  /* ─────────── 21 · EXAMPLE 7 ─────────── */
  21: {
    questext: "<b>Example 7:</b> <u>Show that</u> <b>3√2</b> is irrational.",
    options: ["", "", "", ""],
    correct: "",
    exptext: "",
    expimage: ""
  },

  /* ─────────── 22 · EXERCISE 1.2 · Q1 ─────────── */
  22: {
    questext: "<b>Exercise 1.2 · Q1.</b> <u>Prove that</u> <b>√5</b> is irrational.",
    options: ["", "", "", ""],
    correct: "",
    exptext: "",
    expimage: ""
  },

  /* ─────────── 23 · EXERCISE 1.2 · Q2 ─────────── */
  23: {
    questext: "<b>Exercise 1.2 · Q2.</b> <u>Prove that</u> <b>3 + 2√5</b> is irrational.",
    options: ["", "", "", ""],
    correct: "",
    exptext: "",
    expimage: ""
  },

  /* ─────────── 24 · EXERCISE 1.2 · Q3 ─────────── */
  24: {
    questext: "<b>Exercise 1.2 · Q3.</b> <u>Prove that</u> the following are <b>irrationals</b>:<br>(i) <b>1/√2</b><br>(ii) <b>7√5</b><br>(iii) <b>6 + √2</b>",
    options: ["", "", "", ""],
    correct: "",
    exptext: "",
    expimage: ""
  },

  /* ─────────── 25 · CONCEPT · 1.4 Summary + Note to the Reader ─────────── */
  25: {
    type: "concept",
    icon: "📝",
    accent: "#0ea5e9",
    pauseTimer: true,
    title: "Summary & Note to the Reader",
    subtitle: "1.4 · Revise the whole chapter in one page",
    html: `
      <p class="cp-lead">Three results to carry out of this chapter, plus a special formula set for
      <span class="cp-hl">three numbers</span>.</p>

      <div class="cp-grid c3">
        <div class="cp-card blue"><div class="cp-card-title">1 · FTA</div>
          Every composite number = product of primes, <b>unique</b> apart from order.</div>
        <div class="cp-card green"><div class="cp-card-title">2 · Theorem 1.2</div>
          p prime and p | a² ⇒ <b>p | a</b> (a a positive integer).</div>
        <div class="cp-card violet"><div class="cp-card-title">3 · Irrationals</div>
          Proof that <b>√2, √3</b> are irrational.</div>
      </div>

      <div class="cp-divider">A Note to the Reader — three numbers p, q, r</div>

      <div class="cp-note trap">For positive integers p, q, r:
      <b>HCF(p, q, r) × LCM(p, q, r) ≠ p × q × r</b>. (The textbook points to its Example 8 for this.)
      But the following results <b>do</b> hold good:</div>

      <div class="cp-formula">
        <small>LCM of three numbers</small>
        LCM(p, q, r) =
        <span class="cp-frac"><i>p · q · r · HCF(p, q, r)</i><i>HCF(p, q) · HCF(q, r) · HCF(p, r)</i></span>
      </div>

      <div class="cp-formula">
        <small>HCF of three numbers</small>
        HCF(p, q, r) =
        <span class="cp-frac"><i>p · q · r · LCM(p, q, r)</i><i>LCM(p, q) · LCM(q, r) · LCM(p, r)</i></span>
      </div>

      <div class="cp-example">
        <div class="cp-q">Quick sanity check with 2, 3, 4 (HCF = 1, LCM = 12)</div>
        <div class="cp-a">LCM = <span class="cp-frac"><i>24 × 1</i><i>1 × 1 × 2</i></span> = <b>12</b> ✓ &nbsp;&nbsp;
        HCF = <span class="cp-frac"><i>24 × 12</i><i>6 × 12 × 4</i></span> = <b>1</b> ✓</div>
      </div>

      <div class="cp-mnemonic">Two numbers: <b>HCF × LCM = a × b</b> &nbsp;|&nbsp; Three numbers: use the <b>pair-wise</b> formula above</div>

      <div class="cp-note exam">Last-minute checklist: ① ascending order of primes ② smallest power = HCF, greatest
      power = LCM ③ “ends with 0” ⇒ needs prime 5 ④ irrationality ⇒ assume rational → coprime a, b → contradiction.</div>

      <div class="cp-chips"><span>Summary</span><span>3-number HCF/LCM</span><span>Revision</span></div>
    `
  }
};

/* ════════════════════════════════════════════════════════════════
   FIGURE → ENTRY LIST
     1.jpg → entry 2 (concept page: The Fundamental Theorem of Arithmetic)

   FIGURE PROMPTS  (copy each line into ChatGPT)
════════════════════════════════════════════════════════════════ */
/*
1.jpg: Create a clean, most beautiful, colorful 3D diagram with crisp line art of a prime factor tree for the number 32760, on a plain white background, with no extra text, titles, captions or answers other than the numbers inside the boxes. The tree is a staircase that starts at the top-left and steps downward to the right. Top box (largest, centred above the first split): 32760. It splits with two straight line segments into a LEFT child box 2 and a RIGHT child box 16380. Box 16380 splits into a left child 2 and a right child 8190. Box 8190 splits into a left child 2 and a right child 4095. Box 4095 splits into a left child 3 and a right child 1365. Box 1365 splits into a left child 3 and a right child 455. Box 455 splits into a left child 5 and a right child 91. Box 91 splits into a left child 7 and a right child 13 (the last two boxes sit at the bottom-right end of the staircase). Every left child is a small square box containing a PRIME (2, 2, 2, 3, 3, 5, 7) and the final right child is the prime 13; draw all prime boxes in a bright green 3D-style glossy tile, and draw all composite boxes (32760, 16380, 8190, 4095, 1365, 455, 91) in a bright blue 3D-style glossy tile, with soft shadows. Each box is a square with a bold, clearly readable number centred inside it, and thin dark connecting lines run from each parent box down-left to its left child and down-right to its right child. There are no units (pure numbers). Keep all boxes evenly spaced, aligned in a neat diagonal staircase, with each level one step lower and one step to the right than the previous one. No shading beyond the 3D tile effect, no dotted lines, no extra labels.
*/