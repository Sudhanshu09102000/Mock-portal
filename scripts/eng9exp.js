// placeholder
const explanations = {
 1: {
    text: "<b>Answer:</b> glossary. <br><b>Definition:</b> An alphabetical list of terms or words relating to a specific subject, with explanations. <br><b>Synonyms:</b> wordbook, lexicon, vocabulary list. <br><b>Antonyms:</b> main text, body.",
    image: ""
},
2: {
    text: "<b>Answer:</b> pyre. <br><b>Definition:</b> A heap of combustible material, especially one for burning a corpse as part of a funeral ceremony. <br><b>Synonyms:</b> bonfire, fuel heap, combustible pile. <br><b>Antonyms:</b> grave, tomb, crypt.",
    image: ""
},
3: {
    text: "<b>Answer:</b> shroud. <br><b>Definition:</b> To cover or envelop so as to conceal from view. <br><b>Synonyms:</b> cover, conceal, envelop, veil. <br><b>Antonyms:</b> reveal, expose, uncover, unveil.",
    image: ""
},
4: {
    text: "<b>Answer:</b> seclusion. <br><b>Definition:</b> The state of being private and away from other people. <br><b>Synonyms:</b> isolation, solitude, privacy, retreat. <br><b>Antonyms:</b> company, society, publicity.",
    image: ""
},
5: {
    text: "<b>Answer:</b> slumber. <br><b>Definition:</b> A sleep; a state of inactivity or dormancy. <br><b>Synonyms:</b> sleep, doze, rest, nap. <br><b>Antonyms:</b> wakefulness, activity, restlessness.",
    image: ""
},
6: {
    text: "<b>Answer:</b> satiety. <br><b>Definition:</b> The feeling or state of being sated; the satisfaction of appetite or desire. <br><b>Synonyms:</b> fullness, satisfaction, repletion. <br><b>Antonyms:</b> hunger, emptiness, craving.",
    image: ""
},
7: {
    text: "<b>Answer:</b> perilous. <br><b>Definition:</b> Full of danger or risk. <br><b>Synonyms:</b> dangerous, hazardous, risky, treacherous. <br><b>Antonyms:</b> safe, secure, harmless.",
    image: ""
},
8: {
    text: "<b>Answer:</b> recede. <br><b>Definition:</b> To go or move back or further away from a previous position. <br><b>Synonyms:</b> retreat, withdraw, ebb, subside. <br><b>Antonyms:</b> advance, approach, proceed.",
    image: ""
},
9: {
    text: "<b>Answer:</b> ransack. <br><b>Definition:</b> To go through a place stealing things and causing damage. <br><b>Synonyms:</b> plunder, pillage, loot, rummage. <br><b>Antonyms:</b> organize, arrange, tidy.",
    image: ""
},
10: {
    text: "<b>Answer:</b> emerge. <br><b>Definition:</b> To move out of or away from something and come into view. <br><b>Synonyms:</b> appear, surface, materialize, arise. <br><b>Antonyms:</b> disappear, vanish, fade.",
    image: ""
},
11: {
    text: "<b>Answer:</b> malevolent. <br><b>Definition:</b> Having or showing a wish to do evil to others. <br><b>Synonyms:</b> malicious, spiteful, hostile, evil-minded. <br><b>Antonyms:</b> benevolent, kind, friendly.",
    image: ""
},
12: {
    text: "<b>Answer:</b> insipid. <br><b>Definition:</b> Lacking flavor; weak or tasteless. <br><b>Synonyms:</b> tasteless, bland, unflavored, vapid. <br><b>Antonyms:</b> tasty, flavorful, delicious.",
    image: ""
},
13: {
    text: "<b>Answer:</b> rancour. <br><b>Definition:</b> Bitterness or resentfulness, especially when long-standing. <br><b>Synonyms:</b> bitterness, spite, resentment, malice. <br><b>Antonyms:</b> friendliness, amity, goodwill.",
    image: ""
},
14: {
    text: "<b>Answer:</b> usurp. <br><b>Definition:</b> To take a position of power or importance illegally or by force. <br><b>Synonyms:</b> seize, take over, commandeer. <br><b>Antonyms:</b> abdicate, relinquish, surrender.",
    image: ""
},
15: {
    text: "<b>Answer:</b> impetuous. <br><b>Definition:</b> Acting or done quickly and without thought or care. <br><b>Synonyms:</b> impulsive, rash, hasty, reckless. <br><b>Antonyms:</b> cautious, considered, thoughtful.",
    image: ""
},
16: {
    text: "<b>Answer:</b> capricious. <br><b>Definition:</b> Given to sudden and unaccountable changes of mood or behavior. <br><b>Synonyms:</b> fickle, inconstant, changeable, unpredictable. <br><b>Antonyms:</b> stable, consistent, predictable.",
    image: ""
},
17: {
    text: "<b>Answer:</b> hasty. <br><b>Definition:</b> Done with excessive speed or urgency; hurried. <br><b>Synonyms:</b> rushed, hurried, quick, impetuous. <br><b>Antonyms:</b> leisurely, slow, cautious.",
    image: ""
},
18: {
    text: "<b>Answer:</b> burglar. <br><b>Definition:</b> A person who illegally enters a building and steals things. <br><b>Synonyms:</b> thief, housebreaker, robber, intruder. <br><b>Antonyms:</b> resident, owner, guest.",
    image: ""
},
19: {
    text: "<b>Answer:</b> crook. <br><b>Definition:</b> A person who is dishonest or a criminal. <br><b>Synonyms:</b> criminal, swindler, cheat, fraudster. <br><b>Antonyms:</b> honest person, saint, philanthropist.",
    image: ""
},
20: {
    text: "<b>Answer:</b> vacillates. <br><b>Definition:</b> To alternate or waver between different opinions or actions; be indecisive. <br><b>Synonyms:</b> waver, dither, hesitate, oscillate. <br><b>Antonyms:</b> decide, commit, resolve.",
    image: ""
},
21: {
    text: "<b>Answer:</b> majestic. <br><b>Definition:</b> Having or showing impressive beauty or scale. <br><b>Synonyms:</b> stately, grand, magnificent, awesome. <br><b>Antonyms:</b> unimpressive, humble, ordinary.",
    image: ""
},
22: {
    text: "<b>Answer:</b> granary. <br><b>Definition:</b> A storehouse for threshed grain. <br><b>Synonyms:</b> grain store, silo, storehouse, garner. <br><b>Antonyms:</b> (not applicable).",
    image: ""
},
23: {
    text: "<b>Answer:</b> rambling. <br><b>Definition:</b> Lengthy and confused or inconsequential speech or writing. <br><b>Synonyms:</b> long-winded, disjointed, meandering. <br><b>Antonyms:</b> concise, direct, focused.",
    image: ""
},
24: {
    text: "<b>Answer:</b> affluent. <br><b>Definition:</b> Having a great deal of money; wealthy. <br><b>Synonyms:</b> wealthy, rich, prosperous, well-off. <br><b>Antonyms:</b> poor, impoverished, destitute.",
    image: ""
},
25: {
    text: "<b>Answer:</b> insolvent. <br><b>Definition:</b> Unable to pay debts owed. <br><b>Synonyms:</b> bankrupt, broke, penniless, ruined. <br><b>Antonyms:</b> solvent, wealthy, profitable.",
    image: ""
},
26: {
    text: "<b>Answer:</b> herpetology. <br><b>Definition:</b> The branch of zoology concerned with the study of amphibians and reptiles. <br><b>Synonyms:</b> reptile science, amphibian studies. <br><b>Antonyms:</b> (other fields like ornithology, botany).",
    image: ""
},
27: {
    text: "<b>Answer:</b> haptology. <br><b>Definition:</b> The science or study of the sense of touch. <br><b>Synonyms:</b> tactile science, study of touch. <br><b>Antonyms:</b> (studies of other senses like audiology, optics).",
    image: ""
},
28: {
    text: "<b>Answer:</b> gregarious. <br><b>Definition:</b> Fond of company; sociable. <br><b>Synonyms:</b> sociable, outgoing, extroverted, companionable. <br><b>Antonyms:</b> unsociable, reclusive, introverted.",
    image: ""
},
   
    29: {
    text: "<b>Answer:</b> surreptitious. <br><b>Definition:</b> Kept secret, especially because it would not be approved of. <br><b>Synonyms:</b> stealthy, clandestine, secret, furtive. <br><b>Antonyms:</b> open, overt, public, unconcealed.",
    image: ""
},
30: {
    text: "<b>Answer:</b> clandestine. <br><b>Definition:</b> Kept secret or done secretively, especially because illicit. <br><b>Synonyms:</b> secret, covert, furtive, surreptitious. <br><b>Antonyms:</b> open, overt, public, aboveboard.",
    image: ""
},
31: {
    text: "<b>Answer:</b> avert. <br><b>Definition:</b> To turn away (one's eyes or thoughts); to prevent or ward off (an undesirable occurrence). <br><b>Synonyms:</b> prevent, avoid, turn away, preclude. <br><b>Antonyms:</b> face, confront, seek, allow.",
    image: ""
},
32: {
    text: "<b>Answer:</b> amorous. <br><b>Definition:</b> Showing, feeling, or relating to sexual desire. <br><b>Synonyms:</b> romantic, passionate, lustful, ardent. <br><b>Antonyms:</b> cold, indifferent, frigid, platonic.",
    image: ""
},
33: {
    text: "<b>Answer:</b> placid. <br><b>Definition:</b> (of a person or animal) not easily upset or excited; (of a place or stretch of water) calm and peaceful, with little movement or activity. <br><b>Synonyms:</b> calm, tranquil, peaceful, serene. <br><b>Antonyms:</b> stormy, agitated, turbulent, rough.",
    image: ""
},
34: {
    text: "<b>Answer:</b> dawn. <br><b>Definition:</b> The first appearance of light in the sky before sunrise. <br><b>Synonyms:</b> daybreak, sunrise, morning, aurora. <br><b>Antonyms:</b> dusk, twilight, sunset, nightfall.",
    image: ""
},
35: {
    text: "<b>Answer:</b> omens. <br><b>Definition:</b> Events regarded as a portent of good or evil. <br><b>Synonyms:</b> portents, signs, auguries, premonitions. <br><b>Antonyms:</b> facts, certainties, realities.",
    image: ""
},
36: {
    text: "<b>Answer:</b> quaint. <br><b>Definition:</b> Attractively unusual or old-fashioned. <br><b>Synonyms:</b> charming, picturesque, old-fashioned, sweet. <br><b>Antonyms:</b> modern, contemporary, conventional, new.",
    image: ""
},
37: {
    text: "<b>Answer:</b> sabotage. <br><b>Definition:</b> To deliberately destroy, damage, or obstruct (something), especially for political or military advantage. <br><b>Synonyms:</b> wreck, vandalize, cripple, subvert. <br><b>Antonyms:</b> aid, assist, help, support.",
    image: ""
},
38: {
    text: "<b>Answer:</b> vogue. <br><b>Definition:</b> The prevailing fashion or style at a particular time. <br><b>Synonyms:</b> fashion, trend, style, craze. <br><b>Antonyms:</b> anachronism, old-fashion, outdatedness.",
    image: ""
},
39: {
    text: "<b>Answer:</b> deception. <br><b>Definition:</b> The action of deceiving someone. <br><b>Synonyms:</b> deceit, trickery, duplicity, fraud. <br><b>Antonyms:</b> honesty, truth, openness, sincerity.",
    image: ""
},
40: {
    text: "<b>Answer:</b> fecund. <br><b>Definition:</b> Producing or capable of producing an abundance of offspring or new growth; highly fertile. <br><b>Synonyms:</b> fertile, fruitful, productive, prolific. <br><b>Antonyms:</b> barren, sterile, infertile, unproductive.",
    image: ""
},
41: {
    text: "<b>Answer:</b> illustrious. <br><b>Definition:</b> Well known, respected, and admired for past achievements. <br><b>Synonyms:</b> eminent, distinguished, acclaimed, prominent. <br><b>Antonyms:</b> unknown, obscure, infamous, notorious.",
    image: ""
},
42: {
    text: "<b>Answer:</b> moot. <br><b>Definition:</b> Subject to debate, dispute, or uncertainty, and typically not admitting of a final decision. <br><b>Synonyms:</b> debatable, arguable, questionable, unresolved. <br><b>Antonyms:</b> certain, definite, settled, decided.",
    image: ""
},
43: {
    text: "<b>Answer:</b> agony. <br><b>Definition:</b> Extreme physical or mental suffering. <br><b>Synonyms:</b> pain, torment, torture, suffering. <br><b>Antonyms:</b> comfort, pleasure, bliss, ecstasy.",
    image: ""
},
44: {
    text: "<b>Answer:</b> squawk. <br><b>Definition:</b> (of a bird) to make a loud, harsh noise. <br><b>Synonyms:</b> screech, shriek, cry, crow. <br><b>Antonyms:</b> whisper, murmur, chirp.",
    image: ""
},
45: {
    text: "<b>Answer:</b> connote. <br><b>Definition:</b> To imply or suggest (an idea or feeling) in addition to the literal or primary meaning. <br><b>Synonyms:</b> imply, suggest, indicate, signify. <br><b>Antonyms:</b> denote, state, define.",
    image: ""
},
46: {
    text: "<b>Answer:</b> transgression. <br><b>Definition:</b> An act that goes against a law, rule, or code of conduct; an offense. <br><b>Synonyms:</b> offense, sin, crime, wrongdoing. <br><b>Antonyms:</b> obedience, virtue, good deed, compliance.",
    image: ""
},
47: {
    text: "<b>Answer:</b> metamorphosis. <br><b>Definition:</b> A change of the form or nature of a thing or person into a completely different one. <br><b>Synonyms:</b> transformation, change, conversion, mutation. <br><b>Antonyms:</b> stasis, stability, stagnation.",
    image: ""
},
48: {
    text: "<b>Answer:</b> metaphoric. <br><b>Definition:</b> Characteristic of or relating to metaphor; figurative. <br><b>Synonyms:</b> figurative, symbolic, allegorical, nonliteral. <br><b>Antonyms:</b> literal, concrete, factual, actual.",
    image: ""
},
49: {
    text: "<b>Answer:</b> evocative. <br><b>Definition:</b> Bringing strong images, memories, or feelings to mind. <br><b>Synonyms:</b> reminiscent, suggestive, expressive, redolent. <br><b>Antonyms:</b> unexpressive, meaningless, bland.",
    image: ""
},
50: {
    text: "<b>Answer:</b> contemporary. <br><b>Definition:</b> Belonging to or occurring in the present; living or occurring at the same time. <br><b>Synonyms:</b> modern, current, present-day. <br><b>Antonyms:</b> old, ancient, historical, past.",
    image: ""
}
    
};