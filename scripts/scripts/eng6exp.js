// placeholder
const explanations = {
    1: {
text: "<b>Answer:</b> philistine. <br><b>Definition:</b> A person who is indifferent to culture and the arts. <br><b>Synonyms:</b> uncultured, boorish, materialistic, ignorant, crude. <br><b>Antonyms:</b> cultured, refined, artistic, intellectual, sophisticated.",
image: ""
},
2: {
text: "<b>Answer:</b> perjury. <br><b>Definition:</b> The offense of willfully telling an untruth under oath. <br><b>Synonyms:</b> lying, falsehood, deceit, mendacity, deception. <br><b>Antonyms:</b> honesty, truth, integrity, veracity, candor.",
image: ""
},
3: {
text: "<b>Answer:</b> arbitrator. <br><b>Definition:</b> A person appointed to settle a dispute or conflict. <br><b>Synonyms:</b> mediator, judge, umpire, referee, conciliator. <br><b>Antonyms:</b> disputant, contestant, opponent, adversary, agitator.",
image: ""
},
4: {
text: "<b>Answer:</b> omen. <br><b>Definition:</b> A sign or event regarded as a sign of good or bad luck. <br><b>Synonyms:</b> portent, sign, augury, forewarning, indication. <br><b>Antonyms:</b> certainty, reality, assurance, fact, proof.",
image: ""
},
5: {
text: "<b>Answer:</b> aspersion. <br><b>Definition:</b> A damaging or derogatory remark about someone. <br><b>Synonyms:</b> slander, defamation, smear, insult, calumny. <br><b>Antonyms:</b> praise, compliment, approval, flattery, tribute.",
image: ""
},
6: {
text: "<b>Answer:</b> allure. <br><b>Definition:</b> The quality of being powerfully and mysteriously attractive. <br><b>Synonyms:</b> charm, attraction, fascination, temptation, appeal. <br><b>Antonyms:</b> repulsion, disgust, aversion, distaste, rejection.",
image: ""
},
7: {
text: "<b>Answer:</b> gourmet. <br><b>Definition:</b> A person with a refined taste in food and drink. <br><b>Synonyms:</b> epicure, connoisseur, gastronome, foodie, critic. <br><b>Antonyms:</b> glutton, amateur, layman, commoner, novice.",
image: ""
},
8: {
text: "<b>Answer:</b> exorbitant. <br><b>Definition:</b> Unreasonably high in price or cost. <br><b>Synonyms:</b> excessive, outrageous, steep, inflated, extravagant. <br><b>Antonyms:</b> moderate, reasonable, fair, affordable, nominal.",
image: ""
},
9: {
text: "<b>Answer:</b> subvert. <br><b>Definition:</b> To undermine or overthrow an established system or institution. <br><b>Synonyms:</b> overthrow, destabilize, sabotage, corrupt, undermine. <br><b>Antonyms:</b> support, strengthen, uphold, stabilize, defend.",
image: ""
},
10: {
text: "<b>Answer:</b> temerity. <br><b>Definition:</b> Excessive confidence or boldness; audacity. <br><b>Synonyms:</b> audacity, recklessness, boldness, nerve, daring. <br><b>Antonyms:</b> timidity, shyness, caution, fear, modesty.",
image: ""
},
11: {
text: "<b>Answer:</b> pompous. <br><b>Definition:</b> Affectedly grand, solemn, or self-important. <br><b>Synonyms:</b> arrogant, pretentious, haughty, conceited, grandiose. <br><b>Antonyms:</b> humble, modest, simple, unassuming, plain.",
image: ""
},
12: {
text: "<b>Answer:</b> ornate. <br><b>Definition:</b> Highly decorated or elaborately designed. <br><b>Synonyms:</b> embellished, decorated, fancy, intricate, lavish. <br><b>Antonyms:</b> plain, simple, austere, minimal, stark.",
image: ""
},
13: {
text: "<b>Answer:</b> confiscate. <br><b>Definition:</b> To take or seize property with authority. <br><b>Synonyms:</b> seize, impound, appropriate, commandeer, take. <br><b>Antonyms:</b> return, restore, release, surrender, give.",
image: ""
},
14: {
text: "<b>Answer:</b> oligarchy. <br><b>Definition:</b> A government ruled by a small group of powerful people. <br><b>Synonyms:</b> plutocracy, aristocracy, junta, elite rule, hierarchy. <br><b>Antonyms:</b> democracy, equality, republic, autocracy, freedom.",
image: ""
},
15: {
text: "<b>Answer:</b> autocracy. <br><b>Definition:</b> A system of government by one person with absolute power. <br><b>Synonyms:</b> dictatorship, tyranny, monarchy, despotism, absolutism. <br><b>Antonyms:</b> democracy, republic, equality, liberty, freedom.",
image: ""
},
16: {
text: "<b>Answer:</b> ancillary. <br><b>Definition:</b> Providing necessary support to the main activities or operation. <br><b>Synonyms:</b> auxiliary, supporting, secondary, supplementary, subordinate. <br><b>Antonyms:</b> primary, essential, main, vital, central.",
image: ""
},
17: {
text: "<b>Answer:</b> redundant. <br><b>Definition:</b> No longer needed or useful; unnecessary repetition. <br><b>Synonyms:</b> unnecessary, superfluous, repetitive, excessive, surplus. <br><b>Antonyms:</b> essential, necessary, vital, concise, needed.",
image: ""
},
18: {
text: "<b>Answer:</b> obsequious. <br><b>Definition:</b> Obedient or attentive to an excessive or servile degree. <br><b>Synonyms:</b> submissive, fawning, sycophantic, flattering, compliant. <br><b>Antonyms:</b> assertive, arrogant, independent, defiant, bold.",
image: ""
},
19: {
text: "<b>Answer:</b> exemplary. <br><b>Definition:</b> Serving as a desirable model; representing the best of its kind. <br><b>Synonyms:</b> model, ideal, admirable, perfect, commendable. <br><b>Antonyms:</b> poor, bad, faulty, unworthy, inferior.",
image: ""
},
20: {
text: "<b>Answer:</b> conundrum. <br><b>Definition:</b> A confusing and difficult problem or question. <br><b>Synonyms:</b> puzzle, riddle, mystery, dilemma, enigma. <br><b>Antonyms:</b> solution, clarity, explanation, answer, certainty.",
image: ""
},
21: {
text: "<b>Answer:</b> precarious. <br><b>Definition:</b> Not securely held or in a dangerous position; uncertain. <br><b>Synonyms:</b> unstable, insecure, risky, unsafe, doubtful. <br><b>Antonyms:</b> safe, secure, stable, firm, certain.",
image: ""
},
22: {
text: "<b>Answer:</b> ephemeral. <br><b>Definition:</b> Lasting for a very short time. <br><b>Synonyms:</b> fleeting, short-lived, temporary, transient, momentary. <br><b>Antonyms:</b> eternal, lasting, permanent, enduring, immortal.",
image: ""
},
23: {
text: "<b>Answer:</b> serendipity. <br><b>Definition:</b> The occurrence of events by chance in a happy or beneficial way. <br><b>Synonyms:</b> chance, fluke, fortune, coincidence, luck. <br><b>Antonyms:</b> misfortune, disaster, accident, mishap, tragedy.",
image: ""
},
24: {
text: "<b>Answer:</b> convoluted. <br><b>Definition:</b> Extremely complex and difficult to follow. <br><b>Synonyms:</b> complicated, tangled, intricate, confusing, twisted. <br><b>Antonyms:</b> simple, straightforward, clear, plain, direct.",
image: ""
},
25: {
text: "<b>Answer:</b> aggravate. <br><b>Definition:</b> To make a problem or situation worse. <br><b>Synonyms:</b> worsen, intensify, heighten, exacerbate, inflame. <br><b>Antonyms:</b> relieve, ease, soothe, alleviate, lessen.",
image: ""
},
26: {
text: "<b>Answer:</b> mitigate. <br><b>Definition:</b> To make less severe, serious, or painful. <br><b>Synonyms:</b> alleviate, lessen, ease, reduce, soften. <br><b>Antonyms:</b> worsen, aggravate, intensify, heighten, increase.",
image: ""
},
27: {
text: "<b>Answer:</b> expeditious. <br><b>Definition:</b> Done with speed and efficiency. <br><b>Synonyms:</b> speedy, prompt, swift, quick, efficient. <br><b>Antonyms:</b> slow, delayed, sluggish, tardy, inefficient.",
image: ""
},
28: {
text: "<b>Answer:</b> hasty. <br><b>Definition:</b> Done or acting with excessive speed or urgency. <br><b>Synonyms:</b> rash, impulsive, reckless, hurried, precipitate. <br><b>Antonyms:</b> careful, deliberate, cautious, thoughtful, measured.",
image: ""
},
29: {
text: "<b>Answer:</b> fathomless. <br><b>Definition:</b> Too deep to be measured or understood. <br><b>Synonyms:</b> bottomless, deep, immeasurable, infinite, boundless. <br><b>Antonyms:</b> shallow, measurable, limited, finite, narrow.",
image: ""
},
30: {
text: "<b>Answer:</b> aviary. <br><b>Definition:</b> A large enclosure for keeping birds. <br><b>Synonyms:</b> birdhouse, birdcage, enclosure, coop, pen. <br><b>Antonyms:</b> open sky, wilderness, freedom, forest, plain.",
image: ""
},
31: {
text: "<b>Answer:</b> beehive. <br><b>Definition:</b> A structure where bees live and produce honey. <br><b>Synonyms:</b> hive, colony, nest, apiary, comb. <br><b>Antonyms:</b> emptiness, void, wasteland, desert, ruin.",
image: ""
},
32: {
text: "<b>Answer:</b> apiary. <br><b>Definition:</b> A place where beehives are kept; a bee farm. <br><b>Synonyms:</b> beehouse, hive yard, bee farm, bee garden, apiarium. <br><b>Antonyms:</b> forest, desert, mountain, cave, wasteland.",
image: ""
},
33: {
text: "<b>Answer:</b> rectitude. <br><b>Definition:</b> Morally correct behavior or thinking; righteousness. <br><b>Synonyms:</b> integrity, virtue, honesty, probity, morality. <br><b>Antonyms:</b> corruption, dishonesty, immorality, deceit, wickedness.",
image: ""
},
34: {
text: "<b>Answer:</b> winks. <br><b>Definition:</b> Quick closing and opening of one eye, often as a signal or joke. <br><b>Synonyms:</b> blink, signal, gesture, hint, cue. <br><b>Antonyms:</b> stare, gaze, glare, look, peep.",
image: ""
},
35: {
text: "<b>Answer:</b> theology. <br><b>Definition:</b> The study of the nature of God and religious beliefs. <br><b>Synonyms:</b> divinity, doctrine, belief system, spirituality, metaphysics. <br><b>Antonyms:</b> atheism, secularism, irreligion, disbelief, skepticism.",
image: ""
},
36: {
text: "<b>Answer:</b> constrict. <br><b>Definition:</b> To make narrower or tighter by squeezing. <br><b>Synonyms:</b> tighten, compress, contract, squeeze, restrict. <br><b>Antonyms:</b> loosen, release, expand, relax, dilate.",
image: ""
},
37: {
text: "<b>Answer:</b> dilate. <br><b>Definition:</b> To make or become wider or larger. <br><b>Synonyms:</b> expand, widen, enlarge, open, stretch. <br><b>Antonyms:</b> constrict, contract, shrink, compress, tighten.",
image: ""
},
38: {
text: "<b>Answer:</b> tremulous. <br><b>Definition:</b> Shaking or quivering slightly, often due to nervousness. <br><b>Synonyms:</b> shaky, quivering, trembling, unsteady, wavering. <br><b>Antonyms:</b> steady, firm, stable, confident, strong.",
image: ""
},
39: {
text: "<b>Answer:</b> trembling. <br><b>Definition:</b> Shaking involuntarily, typically as a result of fear or excitement. <br><b>Synonyms:</b> quivering, shivering, shaking, vibrating, wobbling. <br><b>Antonyms:</b> steady, still, firm, unmoved, calm.",
image: ""
},
40: {
text: "<b>Answer:</b> indict. <br><b>Definition:</b> To formally accuse or charge someone with a crime. <br><b>Synonyms:</b> charge, accuse, prosecute, arraign, impeach. <br><b>Antonyms:</b> acquit, absolve, exonerate, pardon, free.",
image: ""
},
41: {
text: "<b>Answer:</b> denounce. <br><b>Definition:</b> To publicly declare something to be wrong or evil. <br><b>Synonyms:</b> condemn, criticize, censure, attack, expose. <br><b>Antonyms:</b> praise, commend, support, endorse, approve.",
image: ""
},
42: {
text: "<b>Answer:</b> voodoo. <br><b>Definition:</b> A religion involving magic and spirits, especially in the Caribbean. <br><b>Synonyms:</b> sorcery, witchcraft, magic, occultism, spellcraft. <br><b>Antonyms:</b> science, logic, reason, realism, rationality.",
image: ""
},
43: {
text: "<b>Answer:</b> arcane. <br><b>Definition:</b> Understood by few; mysterious or secret. <br><b>Synonyms:</b> obscure, esoteric, cryptic, mysterious, enigmatic. <br><b>Antonyms:</b> clear, obvious, known, plain, simple.",
image: ""
},
44: {
text: "<b>Answer:</b> sever. <br><b>Definition:</b> To cut off completely; to break or separate. <br><b>Synonyms:</b> cut, detach, split, disconnect, divide. <br><b>Antonyms:</b> join, connect, attach, unite, link.",
image: ""
},
45: {
text: "<b>Answer:</b> monotonous. <br><b>Definition:</b> Dull and repetitive, lacking variety and interest. <br><b>Synonyms:</b> boring, tedious, dull, repetitive, droning. <br><b>Antonyms:</b> exciting, varied, lively, interesting, engaging.",
image: ""
},
46: {
text: "<b>Answer:</b> scanty. <br><b>Definition:</b> Insufficient in quantity or amount. <br><b>Synonyms:</b> meager, sparse, inadequate, limited, poor. <br><b>Antonyms:</b> abundant, plentiful, ample, sufficient, rich.",
image: ""
},
47: {
text: "<b>Answer:</b> perfunctory. <br><b>Definition:</b> Carried out with minimum effort or reflection. <br><b>Synonyms:</b> superficial, cursory, careless, indifferent, routine. <br><b>Antonyms:</b> careful, thorough, detailed, attentive, genuine.",
image: ""
},
48: {
text: "<b>Answer:</b> ostensible. <br><b>Definition:</b> Stated or appearing to be true, but not necessarily so. <br><b>Synonyms:</b> apparent, seeming, superficial, pretended, alleged. <br><b>Antonyms:</b> real, genuine, actual, authentic, true.",
image: ""
},
49: {
text: "<b>Answer:</b> dormant. <br><b>Definition:</b> Inactive or in a state of rest; temporarily not active. <br><b>Synonyms:</b> inactive, asleep, latent, resting, inert. <br><b>Antonyms:</b> active, awake, lively, dynamic, alert.",
image: ""
},
50: {
text: "<b>Answer:</b> couchant. <br><b>Definition:</b> (of an animal) lying down with the body resting on the legs and the head raised. <br><b>Synonyms:</b> reclining, lying, resting, recumbent, reposing. <br><b>Antonyms:</b> standing, upright, alert, active, erect.",
image: ""
},

};