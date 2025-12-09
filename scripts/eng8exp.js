// placeholder
const explanations = {
   1: {
text: "<b>Answer:</b> exonerate. <br><b>Definition:</b> To officially clear someone from blame or wrongdoing. <br><b>Synonyms:</b> absolve, acquit, vindicate, pardon, release. <br><b>Antonyms:</b> blame, convict, accuse, charge, condemn.",
image: ""
},
2: {
text: "<b>Answer:</b> volubility. <br><b>Definition:</b> The quality of talking easily and continuously; fluency in speech. <br><b>Synonyms:</b> eloquence, loquacity, garrulity, fluency, talkativeness. <br><b>Antonyms:</b> silence, reticence, taciturnity, quietness, reserve.",
image: ""
},
3: {
text: "<b>Answer:</b> deride. <br><b>Definition:</b> To mock or ridicule someone or something. <br><b>Synonyms:</b> mock, ridicule, taunt, scorn, sneer. <br><b>Antonyms:</b> praise, respect, admire, support, encourage.",
image: ""
},
4: {
text: "<b>Answer:</b> defy. <br><b>Definition:</b> To openly resist or refuse to obey. <br><b>Synonyms:</b> resist, challenge, disregard, oppose, confront. <br><b>Antonyms:</b> obey, comply, submit, follow, yield.",
image: ""
},
5: {
text: "<b>Answer:</b> blithe. <br><b>Definition:</b> Showing a carefree and cheerful attitude, often without regard for others. <br><b>Synonyms:</b> cheerful, carefree, lighthearted, joyous, sunny. <br><b>Antonyms:</b> gloomy, unhappy, serious, anxious, troubled.",
image: ""
},
6: {
text: "<b>Answer:</b> poised. <br><b>Definition:</b> Having composure and self-assurance; balanced and ready. <br><b>Synonyms:</b> composed, balanced, ready, graceful, confident. <br><b>Antonyms:</b> nervous, shaky, hesitant, awkward, uneasy.",
image: ""
},
7: {
text: "<b>Answer:</b> dejected. <br><b>Definition:</b> Feeling sad or depressed, especially from disappointment. <br><b>Synonyms:</b> downcast, sad, disheartened, discouraged, gloomy. <br><b>Antonyms:</b> cheerful, encouraged, hopeful, excited, energetic.",
image: ""
},
8: {
text: "<b>Answer:</b> annul. <br><b>Definition:</b> To officially cancel or invalidate something. <br><b>Synonyms:</b> cancel, invalidate, repeal, void, nullify. <br><b>Antonyms:</b> approve, enforce, validate, confirm, retain.",
image: ""
},
9: {
text: "<b>Answer:</b> surmise. <br><b>Definition:</b> To guess or infer something without sufficient evidence. <br><b>Synonyms:</b> guess, suppose, infer, conjecture, speculate. <br><b>Antonyms:</b> prove, confirm, substantiate, validate, determine.",
image: ""
},
10: {
text: "<b>Answer:</b> turmoil. <br><b>Definition:</b> A state of great disturbance, confusion, or disorder. <br><b>Synonyms:</b> chaos, upheaval, disturbance, commotion, unrest. <br><b>Antonyms:</b> peace, order, stability, calm, tranquility.",
image: ""
},
11: {
text: "<b>Answer:</b> clumsy. <br><b>Definition:</b> Lacking physical coordination; awkward in movement or handling things. <br><b>Synonyms:</b> awkward, ungainly, graceless, bumbling, maladroit. <br><b>Antonyms:</b> graceful, agile, smooth, deft, coordinated.",
image: ""
},
12: {
text: "<b>Answer:</b> graceful. <br><b>Definition:</b> Having or showing elegance and smoothness in movement or form. <br><b>Synonyms:</b> elegant, fluid, poised, refined, supple. <br><b>Antonyms:</b> clumsy, awkward, stiff, jerky, ungainly.",
image: ""
},
13: {
text: "<b>Answer:</b> flummoxed. <br><b>Definition:</b> Completely confused or bewildered. <br><b>Synonyms:</b> baffled, perplexed, bewildered, confounded, stumped. <br><b>Antonyms:</b> guided, relaxed, helped, reassured, composed.",
image: ""
},
14: {
text: "<b>Answer:</b> plausible. <br><b>Definition:</b> Seemingly reasonable or believable. <br><b>Synonyms:</b> believable, credible, reasonable, convincing, feasible. <br><b>Antonyms:</b> ridiculous, absurd, far-fetched, unlikely, false.",
image: ""
},
15: {
text: "<b>Answer:</b> vicinity. <br><b>Definition:</b> The area near or surrounding a particular place. <br><b>Synonyms:</b> proximity, neighborhood, locality, area, environs. <br><b>Antonyms:</b> distance, remoteness, far-off, outskirts, separation.",
image: ""
},
16: {
text: "<b>Answer:</b> veracity. <br><b>Definition:</b> Conformity to facts; truthfulness. <br><b>Synonyms:</b> truthfulness, accuracy, honesty, reliability, integrity. <br><b>Antonyms:</b> falsehood, dishonesty, inaccuracy, deception, untruthfulness.",
image: ""
},
17: {
text: "<b>Answer:</b> outrageous. <br><b>Definition:</b> Shockingly bad or excessive; highly offensive. <br><b>Synonyms:</b> shocking, scandalous, offensive, appalling, egregious. <br><b>Antonyms:</b> gentle, innocent, acceptable, mild, ordinary.",
image: ""
},
18: {
text: "<b>Answer:</b> greasy. <br><b>Definition:</b> Covered with or resembling grease; oily or slippery. <br><b>Synonyms:</b> oily, slick, slippery, fatty, unctuous. <br><b>Antonyms:</b> dry, clean, rough, matte, pure.",
image: ""
},
19: {
text: "<b>Answer:</b> credulous. <br><b>Definition:</b> Too ready to believe things; easily deceived. <br><b>Synonyms:</b> gullible, naive, trusting, unsuspecting, unsuspecting. <br><b>Antonyms:</b> skeptical, realistic, cautious, suspicious, critical.",
image: ""
},
20: {
text: "<b>Answer:</b> sparse. <br><b>Definition:</b> Thinly dispersed or scattered; not dense. <br><b>Synonyms:</b> scant, meager, scattered, thin, scarce. <br><b>Antonyms:</b> abundant, dense, thick, plentiful, bountiful.",
image: ""
},
21: {
text: "<b>Answer:</b> apathetic. <br><b>Definition:</b> Showing or feeling little or no interest or concern. <br><b>Synonyms:</b> indifferent, unfeeling, unresponsive, unconcerned, unmoved. <br><b>Antonyms:</b> caring, sensitive, concerned, emotional, sympathetic.",
image: ""
},
22: {
text: "<b>Answer:</b> dapper. <br><b>Definition:</b> Neat and stylish in appearance, typically referring to a man. <br><b>Synonyms:</b> smart, stylish, neat, well-groomed, elegant. <br><b>Antonyms:</b> shabby, untidy, scruffy, careless, messy.",
image: ""
},
23: {
text: "<b>Answer:</b> filthy. <br><b>Definition:</b> Extremely dirty or unclean. <br><b>Synonyms:</b> dirty, grimy, soiled, squalid, foul. <br><b>Antonyms:</b> clean, washed, spotless, pure, fresh.",
image: ""
},
24: {
text: "<b>Answer:</b> sacrilege. <br><b>Definition:</b> Violation or disrespect of something sacred. <br><b>Synonyms:</b> desecration, blasphemy, profanation, irreverence, impiety. <br><b>Antonyms:</b> worship, blessing, veneration, devotion, reverence.",
image: ""
},
25: {
text: "<b>Answer:</b> benediction. <br><b>Definition:</b> A blessing, often given at the end of a religious service. <br><b>Synonyms:</b> blessing, prayer, invocation, grace, approval. <br><b>Antonyms:</b> curse, criticism, condemnation, malediction, denunciation.",
image: ""
},
26: {
text: "<b>Answer:</b> detrimental. <br><b>Definition:</b> Harmful; causing damage. <br><b>Synonyms:</b> damaging, harmful, injurious, adverse, destructive. <br><b>Antonyms:</b> beneficial, helpful, healthy, constructive, advantageous.",
image: ""
},
27: {
text: "<b>Answer:</b> insidious. <br><b>Definition:</b> Proceeding in a gradual, subtle way, but with harmful effects. <br><b>Synonyms:</b> stealthy, sly, deceitful, treacherous, dangerous. <br><b>Antonyms:</b> harmless, obvious, innocent, open, safe.",
image: ""
},
28: {
text: "<b>Answer:</b> nasty. <br><b>Definition:</b> Very unpleasant or offensive. <br><b>Synonyms:</b> foul, unpleasant, disgusting, mean, vile. <br><b>Antonyms:</b> kind, gentle, pleasant, nice, friendly.",
image: ""
},
29: {
text: "<b>Answer:</b> benign. <br><b>Definition:</b> Gentle; not harmful in effect. <br><b>Synonyms:</b> harmless, gentle, mild, kind, non-threatening. <br><b>Antonyms:</b> dangerous, malignant, harmful, fatal, deadly.",
image: ""
},
30: {
text: "<b>Answer:</b> baneful. <br><b>Definition:</b> Causing harm or ruin; deadly. <br><b>Synonyms:</b> harmful, ruinous, deadly, pernicious, injurious. <br><b>Antonyms:</b> beneficial, helpful, healthful, good, positive.",
image: ""
},
31: {
text: "<b>Answer:</b> culpable. <br><b>Definition:</b> Deserving blame or responsible for a fault. <br><b>Synonyms:</b> blameworthy, guilty, responsible, at fault, liable. <br><b>Antonyms:</b> innocent, blameless, faultless, unimpeachable, trustworthy.",
image: ""
},
32: {
text: "<b>Answer:</b> pragmatism. <br><b>Definition:</b> A practical approach to problems and affairs. <br><b>Synonyms:</b> practicality, realism, common sense, efficiency, rationality. <br><b>Antonyms:</b> idealism, fantasy, imagination, impracticality, naivety.",
image: ""
},
33: {
text: "<b>Answer:</b> asperity. <br><b>Definition:</b> Harshness or severity, especially in tone or manner. <br><b>Synonyms:</b> harshness, sharpness, severity, roughness, bitterness. <br><b>Antonyms:</b> softness, gentleness, smoothness, mildness, sweetness.",
image: ""
},
34: {
text: "<b>Answer:</b> imminent. <br><b>Definition:</b> About to happen; impending. <br><b>Synonyms:</b> impending, approaching, near, forthcoming, inevitable. <br><b>Antonyms:</b> distant, unlikely, avoidable, postponed, remote.",
image: ""
},
35: {
text: "<b>Answer:</b> accrue. <br><b>Definition:</b> To accumulate or receive payments or benefits over time. <br><b>Synonyms:</b> accumulate, collect, amass, gather, increase. <br><b>Antonyms:</b> lose, decrease, spend, squander, drop.",
image: ""
},
36: {
text: "<b>Answer:</b> spar. <br><b>Definition:</b> To engage in a practice fight or argument. <br><b>Synonyms:</b> box, argue, debate, quarrel, scuffle. <br><b>Antonyms:</b> surrender, retreat, hide, agree, submit.",
image: ""
},
37: {
text: "<b>Answer:</b> vice. <br><b>Definition:</b> Immoral or wicked behavior; a bad habit. <br><b>Synonyms:</b> immorality, sin, depravity, corruption, weakness. <br><b>Antonyms:</b> virtue, morality, discipline, goodness, integrity.",
image: ""
},
38: {
text: "<b>Answer:</b> diatribe. <br><b>Definition:</b> A bitter, abusive criticism or attack. <br><b>Synonyms:</b> tirade, rant, harangue, condemnation, invective. <br><b>Antonyms:</b> praise, apology, commendation, compliment, approval.",
image: ""
},
39: {
text: "<b>Answer:</b> wacky. <br><b>Definition:</b> Funny or eccentric in a peculiar way. <br><b>Synonyms:</b> quirky, eccentric, zany, absurd, peculiar. <br><b>Antonyms:</b> normal, sensible, serious, conventional, usual.",
image: ""
},
40: {
text: "<b>Answer:</b> exacerbate. <br><b>Definition:</b> To make a problem worse or more severe. <br><b>Synonyms:</b> worsen, intensify, aggravate, heighten, inflame. <br><b>Antonyms:</b> calm, resolve, settle, alleviate, ease.",
image: ""
},
41: {
text: "<b>Answer:</b> foster. <br><b>Definition:</b> To encourage or promote development or growth. <br><b>Synonyms:</b> encourage, nurture, support, cultivate, stimulate. <br><b>Antonyms:</b> suppress, neglect, discourage, hinder, ignore.",
image: ""
},
42: {
text: "<b>Answer:</b> reconcile. <br><b>Definition:</b> To restore friendly relations or bring together discordant parties. <br><b>Synonyms:</b> harmonize, reunite, resolve, settle, patch up. <br><b>Antonyms:</b> worsen, ignore, separate, alienate, divide.",
image: ""
},
43: {
text: "<b>Answer:</b> ameliorate. <br><b>Definition:</b> To make something better or improve it. <br><b>Synonyms:</b> improve, enhance, relieve, upgrade, alleviate. <br><b>Antonyms:</b> worsen, deteriorate, belittle, ignore, abandon.",
image: ""
},
44: {
text: "<b>Answer:</b> languidly. <br><b>Definition:</b> Done in a slow, relaxed or lazy way. <br><b>Synonyms:</b> sluggishly, leisurely, lazily, indolently, unhurriedly. <br><b>Antonyms:</b> energetically, hurriedly, briskly, vigorously, actively.",
image: ""
},
45: {
text: "<b>Answer:</b> amnesty. <br><b>Definition:</b> An official pardon for people who have been convicted of political offenses. <br><b>Synonyms:</b> pardon, forgiveness, reprieve, absolution, mercy. <br><b>Antonyms:</b> penalty, punishment, indictment, conviction, retribution.",
image: ""
},
46: {  
text: "<b>Answer:</b> armistice. <br><b>Definition:</b> A formal agreement between opposing sides to stop fighting temporarily. <br><b>Synonyms:</b> truce, ceasefire, peace, suspension, treaty. <br><b>Antonyms:</b> conflict, battle, war, combat, hostility.",  
image: ""  
},  
47: {  
text: "<b>Answer:</b> acquaintance. <br><b>Definition:</b> A person one knows slightly but who is not a close friend. <br><b>Synonyms:</b> contact, associate, companion, colleague, friend. <br><b>Antonyms:</b> stranger, enemy, foe, rival, outsider.",  
image: ""  
},  
48: {  
text: "<b>Answer:</b> denizen. <br><b>Definition:</b> An inhabitant or regular occupant of a particular place. <br><b>Synonyms:</b> inhabitant, resident, dweller, native, occupant. <br><b>Antonyms:</b> outsider, foreigner, visitor, migrant, stranger.",  
image: ""  
},  
49: {  
text: "<b>Answer:</b> jargon. <br><b>Definition:</b> Special words or expressions used by a particular profession or group. <br><b>Synonyms:</b> terminology, slang, lingo, argot, patter. <br><b>Antonyms:</b> common speech, simplicity, clarity, plainness, standard language.",  
image: ""  
},  
50: {  
text: "<b>Answer:</b> brigand. <br><b>Definition:</b> A member of a gang that ambushes and robs people in forests or mountains. <br><b>Synonyms:</b> bandit, robber, outlaw, highwayman, marauder. <br><b>Antonyms:</b> protector, guardian, lawman, defender, hero.",  
image: ""  
},

};