// placeholder
const explanations = {
1: {  
text: "<b>Answer:</b> mutinous. <br><b>Definition:</b> Refusing to obey authority; rebellious. <br><b>Synonyms:</b> rebellious, insubordinate, defiant, disobedient, insurgent. <br><b>Antonyms:</b> obedient, loyal, compliant, submissive, faithful.",  
image: ""  
},  
2: {  
text: "<b>Answer:</b> stifled. <br><b>Definition:</b> To suppress or restrain an emotion or reaction. <br><b>Synonyms:</b> suppress, smother, restrain, silence, muffle. <br><b>Antonyms:</b> express, release, reveal, liberate, ventilate.",  
image: ""  
},  
3: {  
text: "<b>Answer:</b> antiquarian. <br><b>Definition:</b> Relating to the study or collection of antiques or rare books. <br><b>Synonyms:</b> collector, historian, archivist, curator, connoisseur. <br><b>Antonyms:</b> modernist, futurist, innovator, reformer, contemporary.",  
image: ""  
},  
4: {  
text: "<b>Answer:</b> valetudinarian. <br><b>Definition:</b> A person unduly anxious about their health. <br><b>Synonyms:</b> hypochondriac, invalid, weakling, patient, convalescent. <br><b>Antonyms:</b> healthy, vigorous, robust, hale, strong.",  
image: ""  
},  
5: {  
text: "<b>Answer:</b> egalitarian. <br><b>Definition:</b> Believing in or based on equality for all people. <br><b>Synonyms:</b> democratic, equal, fair, impartial, nonpartisan. <br><b>Antonyms:</b> elitist, unequal, biased, discriminatory, hierarchical.",  
image: ""  
},  
6: {  
text: "<b>Answer:</b> furlough. <br><b>Definition:</b> A leave of absence, especially granted to a soldier or employee. <br><b>Synonyms:</b> leave, break, recess, holiday, rest. <br><b>Antonyms:</b> duty, service, work, employment, labor.",  
image: ""  
},  
7: {  
text: "<b>Answer:</b> ambivalent. <br><b>Definition:</b> Having mixed feelings or contradictory ideas about something. <br><b>Synonyms:</b> uncertain, conflicted, hesitant, indecisive, equivocal. <br><b>Antonyms:</b> confident, sure, decisive, settled, clear.",  
image: ""  
},  
8: {  
text: "<b>Answer:</b> broach. <br><b>Definition:</b> To bring up a subject for discussion. <br><b>Synonyms:</b> introduce, propose, raise, mention, suggest. <br><b>Antonyms:</b> suppress, withhold, silence, conceal, ignore.",  
image: ""  
},  
9: {  
text: "<b>Answer:</b> marauder. <br><b>Definition:</b> A person who roams in search of things to steal or people to attack. <br><b>Synonyms:</b> pirate, raider, plunderer, bandit, robber. <br><b>Antonyms:</b> protector, guardian, defender, benefactor, savior.",  
image: ""  
},  
10: {  
text: "<b>Answer:</b> omniscient. <br><b>Definition:</b> Having complete or unlimited knowledge. <br><b>Synonyms:</b> all-knowing, wise, knowledgeable, omnipotent, insightful. <br><b>Antonyms:</b> ignorant, unaware, uninformed, unknowing, obtuse.",  
image: ""  
},  
11: {  
text: "<b>Answer:</b> attenuate. <br><b>Definition:</b> To reduce the force, effect, or value of something. <br><b>Synonyms:</b> weaken, diminish, lessen, dilute, mitigate. <br><b>Antonyms:</b> strengthen, intensify, increase, amplify, enhance.",  
image: ""  
},  
12: {  
text: "<b>Answer:</b> purloin. <br><b>Definition:</b> To steal something, often in a sly or secretive way. <br><b>Synonyms:</b> steal, pilfer, filch, thieve, swipe. <br><b>Antonyms:</b> give, donate, contribute, return, surrender.",  
image: ""  
},  
13: {  
text: "<b>Answer:</b> pilfer. <br><b>Definition:</b> To steal minor items, especially repeatedly. <br><b>Synonyms:</b> steal, snatch, swipe, filch, purloin. <br><b>Antonyms:</b> give, donate, offer, restore, return.",  
image: ""  
},  
14: {  
text: "<b>Answer:</b> debacle. <br><b>Definition:</b> A sudden and disastrous failure. <br><b>Synonyms:</b> disaster, catastrophe, fiasco, collapse, downfall. <br><b>Antonyms:</b> success, triumph, victory, achievement, accomplishment.",  
image: ""  
},  
15: {  
text: "<b>Answer:</b> infelicity. <br><b>Definition:</b> An inappropriate remark or unlucky quality. <br><b>Synonyms:</b> blunder, error, faux pas, awkwardness, misstep. <br><b>Antonyms:</b> grace, tact, propriety, suitability, elegance.",  
image: ""  
},  
16: {  
text: "<b>Answer:</b> serendipity. <br><b>Definition:</b> The occurrence of events by chance in a happy or beneficial way. <br><b>Synonyms:</b> coincidence, fluke, luck, providence, fortune. <br><b>Antonyms:</b> misfortune, mishap, bad luck, accident, tragedy.",  
image: ""  
},  
17: {  
text: "<b>Answer:</b> obeisance. <br><b>Definition:</b> A gesture of respect or submission, such as a bow or curtsy. <br><b>Synonyms:</b> respect, homage, reverence, deference, submission. <br><b>Antonyms:</b> disrespect, contempt, disdain, defiance, insolence.",  
image: ""  
},  
18: {  
text: "<b>Answer:</b> denigrate. <br><b>Definition:</b> To criticize unfairly or belittle. <br><b>Synonyms:</b> defame, malign, slander, disparage, belittle. <br><b>Antonyms:</b> praise, commend, applaud, glorify, honor.",  
image: ""  
},  
19: {  
text: "<b>Answer:</b> tenacity. <br><b>Definition:</b> Persistent determination in achieving a goal. <br><b>Synonyms:</b> perseverance, determination, diligence, persistence, grit. <br><b>Antonyms:</b> weakness, indecision, idleness, surrender, passivity.",  
image: ""  
},  
20: {  
text: "<b>Answer:</b> complacency. <br><b>Definition:</b> A feeling of uncritical satisfaction with oneself or one’s situation. <br><b>Synonyms:</b> self-satisfaction, smugness, contentment, indifference, ease. <br><b>Antonyms:</b> vigilance, concern, awareness, caution, curiosity.",  
image: ""  
},  
21: {  
text: "<b>Answer:</b> disillusionment. <br><b>Definition:</b> A feeling of disappointment after discovering something is not as good as believed. <br><b>Synonyms:</b> disappointment, dissatisfaction, disenchantment, regret, letdown. <br><b>Antonyms:</b> hope, trust, optimism, faith, satisfaction.",  
image: ""  
},  
22: {  
text: "<b>Answer:</b> apathy. <br><b>Definition:</b> Lack of interest, enthusiasm, or concern. <br><b>Synonyms:</b> indifference, unconcern, detachment, lethargy, disinterest. <br><b>Antonyms:</b> enthusiasm, passion, interest, energy, zeal.",  
image: ""  
},  
23: {  
text: "<b>Answer:</b> nonchalance. <br><b>Definition:</b> The state of appearing calm and unconcerned. <br><b>Synonyms:</b> indifference, composure, calmness, coolness, detachment. <br><b>Antonyms:</b> anxiety, agitation, excitement, nervousness, alarm.",  
image: ""  
},  
24: {  
text: "<b>Answer:</b> condoned. <br><b>Definition:</b> To accept or allow behavior considered morally wrong. <br><b>Synonyms:</b> overlook, excuse, forgive, tolerate, ignore. <br><b>Antonyms:</b> condemn, punish, censure, reject, criticize.",  
image: ""  
},  
25: {  
text: "<b>Answer:</b> pulchritude. <br><b>Definition:</b> Physical beauty or attractiveness. <br><b>Synonyms:</b> beauty, loveliness, charm, grace, elegance. <br><b>Antonyms:</b> ugliness, plainness, unattractiveness, coarseness, deformity.",  
image: ""  
},  
26: {  
text: "<b>Answer:</b> grandiloquence. <br><b>Definition:</b> Extravagant or pompous style in language. <br><b>Synonyms:</b> bombast, pomposity, rhetoric, verbosity, magniloquence. <br><b>Antonyms:</b> simplicity, plainness, brevity, modesty, clarity.",  
image: ""  
},  
27: {  
text: "<b>Answer:</b> celerity. <br><b>Definition:</b> Swiftness of movement. <br><b>Synonyms:</b> speed, swiftness, quickness, rapidity, haste. <br><b>Antonyms:</b> slowness, delay, sluggishness, lethargy, stagnation.",  
image: ""  
},  
28: {  
text: "<b>Answer:</b> winsome. <br><b>Definition:</b> Attractive or appealing in a fresh, innocent way. <br><b>Synonyms:</b> charming, sweet, delightful, engaging, endearing. <br><b>Antonyms:</b> unpleasant, unattractive, stern, forbidding, gloomy.",  
image: ""  
},  
29: {  
text: "<b>Answer:</b> lachrymose. <br><b>Definition:</b> Tearful or given to weeping. <br><b>Synonyms:</b> tearful, sad, mournful, weepy, emotional. <br><b>Antonyms:</b> cheerful, joyful, happy, jolly, lighthearted.",  
image: ""  
},  
30: {  
text: "<b>Answer:</b> redolent. <br><b>Definition:</b> Strongly reminiscent or suggestive of something; fragrant. <br><b>Synonyms:</b> aromatic, fragrant, suggestive, evocative, perfumed. <br><b>Antonyms:</b> odorless, bland, dull, forgetful, unscented.",  
image: ""  
},  
31: {  
text: "<b>Answer:</b> refulgent. <br><b>Definition:</b> Shining brightly or radiant. <br><b>Synonyms:</b> radiant, dazzling, gleaming, brilliant, luminous. <br><b>Antonyms:</b> dim, dull, dark, gloomy, obscure.",  
image: ""  
},  
32: {  
text: "<b>Answer:</b> turpitude. <br><b>Definition:</b> Depraved or wicked behavior. <br><b>Synonyms:</b> depravity, wickedness, corruption, immorality, vice. <br><b>Antonyms:</b> virtue, morality, righteousness, goodness, purity.",  
image: ""  
},  
33: {  
text: "<b>Answer:</b> brunt. <br><b>Definition:</b> The main impact or force of something. <br><b>Synonyms:</b> impact, force, shock, burden, pressure. <br><b>Antonyms:</b> relief, ease, support, comfort, aid.",  
image: ""  
},  
34: {  
text: "<b>Answer:</b> plunge. <br><b>Definition:</b> To jump or dive quickly and energetically. <br><b>Synonyms:</b> dive, jump, descend, rush, immerse. <br><b>Antonyms:</b> rise, climb, ascend, withdraw, retreat.",  
image: ""  
},  


35: {
text: "<b>Answer:</b> impediment. <br><b>Definition:</b> Something that delays or obstructs progress. <br><b>Synonyms:</b> obstacle, barrier, hindrance, obstruction, handicap. <br><b>Antonyms:</b> aid, assistance, advantage, support, help.",
image: ""
},
36: {
text: "<b>Answer:</b> harness. <br><b>Definition:</b> To control and make use of natural resources or energy. <br><b>Synonyms:</b> utilize, control, employ, exploit, manage. <br><b>Antonyms:</b> waste, neglect, misuse, ignore, discard.",
image: ""
},
37: {
text: "<b>Answer:</b> idiosyncrasy. <br><b>Definition:</b> A distinctive or peculiar feature or characteristic. <br><b>Synonyms:</b> quirk, peculiarity, eccentricity, oddity, mannerism. <br><b>Antonyms:</b> normality, regularity, conformity, sameness, usualness.",
image: ""
},
38: {
text: "<b>Answer:</b> pavilion. <br><b>Definition:</b> A large tent or building used for events or shelter. <br><b>Synonyms:</b> tent, marquee, canopy, hall, shelter. <br><b>Antonyms:</b> open, exposed, bare, uncovered, field.",
image: ""
},
39: {
text: "<b>Answer:</b> supersede. <br><b>Definition:</b> To take the place of something old or outdated. <br><b>Synonyms:</b> replace, overtake, displace, succeed, supplant. <br><b>Antonyms:</b> keep, maintain, retain, continue, remain.",
image: ""
},
40: {
text: "<b>Answer:</b> Caribbean. <br><b>Definition:</b> The region of the Caribbean Sea known for its islands and culture. <br><b>Synonyms:</b> West Indies, islands, tropical region, archipelago, seaboard. <br><b>Antonyms:</b> continental, inland, mountainous, arctic, desert.",
image: ""
},
41: {
text: "<b>Answer:</b> debonair. <br><b>Definition:</b> Courteous, charming, and confident in manner. <br><b>Synonyms:</b> suave, elegant, charming, sophisticated, urbane. <br><b>Antonyms:</b> awkward, rude, clumsy, unsophisticated, uncouth.",
image: ""
},
42: {
text: "<b>Answer:</b> hedonist. <br><b>Definition:</b> A person who seeks pleasure as the main goal in life. <br><b>Synonyms:</b> pleasure-seeker, sybarite, voluptuary, epicurean, sensualist. <br><b>Antonyms:</b> ascetic, puritan, abstainer, minimalist, disciplined.",
image: ""
},
43: {
text: "<b>Answer:</b> libertine. <br><b>Definition:</b> Someone who is morally or sexually unrestrained. <br><b>Synonyms:</b> debauchee, rake, profligate, dissolute, sybarite. <br><b>Antonyms:</b> puritan, moralist, ascetic, prudish, conformist.",
image: ""
},
44: {
text: "<b>Answer:</b> salubrious. <br><b>Definition:</b> Health-giving; healthy or pleasant. <br><b>Synonyms:</b> wholesome, healthy, beneficial, salutary, nutritious. <br><b>Antonyms:</b> unhealthy, harmful, deleterious, toxic, noxious.",
image: ""
},
45: {
text: "<b>Answer:</b> souvenir. <br><b>Definition:</b> A keepsake or reminder of a place or event. <br><b>Synonyms:</b> memento, remembrance, token, relic, keepsake. <br><b>Antonyms:</b> souvenir, forget, neglect, discard, ignore.",
image: ""
},
46: {
text: "<b>Answer:</b> sling. <br><b>Definition:</b> A device used for supporting an injured arm or leg. <br><b>Synonyms:</b> bandage, support, brace, strap, holder. <br><b>Antonyms:</b> remove, loosen, detach, free, release.",
image: ""
},
47: {
text: "<b>Answer:</b> tempting. <br><b>Definition:</b> Appealing and attractive, causing desire. <br><b>Synonyms:</b> alluring, enticing, attractive, inviting, seductive. <br><b>Antonyms:</b> repulsive, unattractive, disgusting, unappealing, undesirable.",
image: ""
},
48: {
text: "<b>Answer:</b> syllable. <br><b>Definition:</b> A unit of pronunciation with a vowel sound. <br><b>Synonyms:</b> sound, beat, unit, segment, part. <br><b>Antonyms:</b> whole, entirety, sentence, phrase, paragraph.",
image: ""
},
49: {
text: "<b>Answer:</b> fatalism. <br><b>Definition:</b> The belief that all events are predetermined and inevitable. <br><b>Synonyms:</b> determinism, predestination, inevitability, destiny, fate. <br><b>Antonyms:</b> free will, choice, chance, randomness, possibility.",
image: ""
},
50: {
text: "<b>Answer:</b> populism. <br><b>Definition:</b> Political approach targeting ordinary people often against elites. <br><b>Synonyms:</b> grassroots, democracy, nationalism, commonality, majority. <br><b>Antonyms:</b> elitism, aristocracy, oligarchy, authoritarianism, plutocracy.",
image: ""
},


};