// placeholder
const explanations = {
1: {
text: "<b>Answer:</b> albeit. <br><b>Definition:</b> Though or although. <br><b>Synonyms:</b> although, though, even though, while, despite. <br><b>Antonyms:</b> because, since, therefore, hence, consequently.",
image: ""
},
2: {
text: "<b>Answer:</b> beguile. <br><b>Definition:</b> To charm or enchant someone, often in a deceptive way. <br><b>Synonyms:</b> charm, entice, enchant, deceive, mislead. <br><b>Antonyms:</b> repel, disgust, offend, disenchant, bore.",
image: ""
},
3: {
text: "<b>Answer:</b> fussing. <br><b>Definition:</b> Showing unnecessary or excessive concern about something. <br><b>Synonyms:</b> fretting, worrying, complaining, bothering, nagging. <br><b>Antonyms:</b> relaxing, ignoring, neglecting, resting, accepting.",
image: ""
},
4: {
text: "<b>Answer:</b> prattle. <br><b>Definition:</b> To talk in a foolish or simple-minded way; to chatter. <br><b>Synonyms:</b> chatter, babble, gabble, ramble, blabber. <br><b>Antonyms:</b> silence, quiet, hush, stillness, muteness.",
image: ""
},
5: {
text: "<b>Answer:</b> tenacious. <br><b>Definition:</b> Holding firmly; persistent in maintaining something. <br><b>Synonyms:</b> determined, persistent, resolute, steadfast, stubborn. <br><b>Antonyms:</b> weak, irresolute, lazy, fragile, yielding.",
image: ""
},
6: {
text: "<b>Answer:</b> ravenous. <br><b>Definition:</b> Extremely hungry or eager for something. <br><b>Synonyms:</b> starving, famished, hungry, voracious, gluttonous. <br><b>Antonyms:</b> full, satisfied, content, stuffed, sated.",
image: ""
},
7: {
text: "<b>Answer:</b> sulked. <br><b>Definition:</b> To be silently angry or disappointed. <br><b>Synonyms:</b> mope, brood, pout, frown, grumble. <br><b>Antonyms:</b> cheer, smile, laugh, rejoice, celebrate.",
image: ""
},
8: {
text: "<b>Answer:</b> frowned. <br><b>Definition:</b> To make an angry or displeased facial expression. <br><b>Synonyms:</b> scowled, glared, grimaced, glowered, sneered. <br><b>Antonyms:</b> smiled, grinned, laughed, beamed, brightened.",
image: ""
},
9: {
text: "<b>Answer:</b> beamed. <br><b>Definition:</b> To smile broadly with joy. <br><b>Synonyms:</b> smiled, grinned, radiated, glowed, shone. <br><b>Antonyms:</b> frowned, glowered, grimaced, sulked, scowled.",
image: ""
},
10: {
text: "<b>Answer:</b> glowered. <br><b>Definition:</b> To look at someone with an angry or sullen expression. <br><b>Synonyms:</b> scowled, fumed, glared, stared, frowned. <br><b>Antonyms:</b> smiled, laughed, beamed, giggled, grinned.",
image: ""
},
11: {
text: "<b>Answer:</b> disdained. <br><b>Definition:</b> To regard with contempt or scorn. <br><b>Synonyms:</b> despised, scorned, rejected, spurned, dismissed. <br><b>Antonyms:</b> admired, respected, praised, valued, loved.",
image: ""
},
12: {
text: "<b>Answer:</b> effeminate. <br><b>Definition:</b> Having or showing characteristics regarded as typical of a woman; unmanly. <br><b>Synonyms:</b> delicate, feminine, soft, womanish, graceful. <br><b>Antonyms:</b> masculine, manly, tough, rugged, robust.",
image: ""
},
13: {
text: "<b>Answer:</b> detesting. <br><b>Definition:</b> Feeling intense dislike or hatred. <br><b>Synonyms:</b> hating, loathing, despising, abhorring, reviling. <br><b>Antonyms:</b> loving, liking, admiring, adoring, cherishing.",
image: ""
},
14: {
text: "<b>Answer:</b> hooliganism. <br><b>Definition:</b> Violent or rowdy behavior by young troublemakers. <br><b>Synonyms:</b> vandalism, rowdyism, mischief, disorder, delinquency. <br><b>Antonyms:</b> discipline, orderliness, civility, calmness, peace.",
image: ""
},
15: {
text: "<b>Answer:</b> cynicism. <br><b>Definition:</b> The belief that people are motivated by self-interest; distrust of sincerity. <br><b>Synonyms:</b> skepticism, doubt, distrust, suspicion, pessimism. <br><b>Antonyms:</b> trust, faith, optimism, belief, confidence.",
image: ""
},
16: {
text: "<b>Answer:</b> conveyances. <br><b>Definition:</b> Means of transport or transfer from one place to another. <br><b>Synonyms:</b> vehicles, transports, cars, carriers, transfers. <br><b>Antonyms:</b> immobility, stagnation, standstill, rest, halt.",
image: ""
},
17: {
text: "<b>Answer:</b> rejuvenate. <br><b>Definition:</b> To make someone or something look or feel younger or fresher. <br><b>Synonyms:</b> refresh, revive, renew, restore, energize. <br><b>Antonyms:</b> exhaust, tire, drain, weaken, age.",
image: ""
},
18: {
text: "<b>Answer:</b> vouch. <br><b>Definition:</b> To confirm or affirm something as true or reliable. <br><b>Synonyms:</b> affirm, guarantee, testify, swear, assert. <br><b>Antonyms:</b> deny, refute, disprove, contradict, reject.",
image: ""
},
19: {
text: "<b>Answer:</b> affliction. <br><b>Definition:</b> Something that causes pain or suffering. <br><b>Synonyms:</b> suffering, distress, pain, hardship, torment. <br><b>Antonyms:</b> relief, comfort, joy, blessing, happiness.",
image: ""
},
20: {
text: "<b>Answer:</b> predicament. <br><b>Definition:</b> A difficult, unpleasant, or embarrassing situation. <br><b>Synonyms:</b> dilemma, problem, mess, quandary, hardship. <br><b>Antonyms:</b> solution, success, advantage, blessing, ease.",
image: ""
},
21: {
text: "<b>Answer:</b> mortgage. <br><b>Definition:</b> A legal agreement to borrow money to buy property. <br><b>Synonyms:</b> loan, pledge, lien, financing, debt. <br><b>Antonyms:</b> rent, lease, sale, release, freedom.",
image: ""
},
22: {
text: "<b>Answer:</b> jeopardy. <br><b>Definition:</b> Danger of loss, harm, or failure. <br><b>Synonyms:</b> danger, risk, threat, peril, hazard. <br><b>Antonyms:</b> safety, security, protection, assurance, certainty.",
image: ""
},
23: {
text: "<b>Answer:</b> consolation. <br><b>Definition:</b> Comfort received after a loss or disappointment. <br><b>Synonyms:</b> comfort, relief, solace, support, sympathy. <br><b>Antonyms:</b> distress, grief, torment, misery, agony.",
image: ""
},
24: {
text: "<b>Answer:</b> stench. <br><b>Definition:</b> A strong and unpleasant smell. <br><b>Synonyms:</b> stink, reek, odor, foulness, smell. <br><b>Antonyms:</b> fragrance, aroma, perfume, scent, sweetness.",
image: ""
},
25: {
text: "<b>Answer:</b> brazen. <br><b>Definition:</b> Bold and without shame. <br><b>Synonyms:</b> shameless, bold, audacious, impudent, defiant. <br><b>Antonyms:</b> shy, modest, timid, humble, cautious.",
image: ""
},
26: {
text: "<b>Answer:</b> thrive. <br><b>Definition:</b> To grow, develop, or be successful. <br><b>Synonyms:</b> flourish, prosper, succeed, bloom, expand. <br><b>Antonyms:</b> decline, fail, perish, wither, collapse.",
image: ""
},
27: {
text: "<b>Answer:</b> lenient. <br><b>Definition:</b> Not strict; tolerant and permissive. <br><b>Synonyms:</b> forgiving, tolerant, merciful, kind, gentle. <br><b>Antonyms:</b> strict, harsh, severe, stern, tough.",
image: ""
},
28: {
text: "<b>Answer:</b> amusia. <br><b>Definition:</b> The inability to recognize or reproduce musical tones. <br><b>Synonyms:</b> tone-deafness, musical disorder, pitch blindness, musical amnesia, auditory deficit. <br><b>Antonyms:</b> musicality, harmony sense, rhythm, tonality, melody perception.",
image: ""
},
29: {
text: "<b>Answer:</b> resentment. <br><b>Definition:</b> Bitter indignation at having been treated unfairly. <br><b>Synonyms:</b> bitterness, anger, displeasure, indignation, animosity. <br><b>Antonyms:</b> affection, forgiveness, sympathy, goodwill, contentment.",
image: ""
},
30: {
text: "<b>Answer:</b> stewardship. <br><b>Definition:</b> The responsible management of something entrusted to one’s care. <br><b>Synonyms:</b> management, supervision, administration, guardianship, care. <br><b>Antonyms:</b> neglect, mismanagement, carelessness, irresponsibility, abandonment.",
image: ""
},
31: {
text: "<b>Answer:</b> bellicose. <br><b>Definition:</b> Demonstrating aggression and willingness to fight. <br><b>Synonyms:</b> aggressive, warlike, hostile, combative, militant. <br><b>Antonyms:</b> peaceful, calm, pacifist, gentle, friendly.",
image: ""
},
32: {
text: "<b>Answer:</b> clique. <br><b>Definition:</b> A small, exclusive group of people. <br><b>Synonyms:</b> circle, group, faction, coterie, set. <br><b>Antonyms:</b> community, crowd, society, gathering, population.",
image: ""
},
33: {
text: "<b>Answer:</b> congregation. <br><b>Definition:</b> A group of people assembled for religious worship. <br><b>Synonyms:</b> assembly, gathering, fellowship, crowd, parish. <br><b>Antonyms:</b> isolation, solitude, individual, separation, dispersion.",
image: ""
},
34: {
text: "<b>Answer:</b> reticent. <br><b>Definition:</b> Not revealing one’s thoughts or feelings readily. <br><b>Synonyms:</b> reserved, silent, withdrawn, restrained, secretive. <br><b>Antonyms:</b> talkative, open, frank, communicative, expressive.",
image: ""
},
35: {
text: "<b>Answer:</b> garrulous. <br><b>Definition:</b> Excessively talkative, especially on trivial matters. <br><b>Synonyms:</b> talkative, chatty, loquacious, wordy, verbose. <br><b>Antonyms:</b> reticent, quiet, reserved, silent, taciturn.",
image: ""
},
36: {
text: "<b>Answer:</b> contention. <br><b>Definition:</b> Heated disagreement or argument. <br><b>Synonyms:</b> dispute, argument, conflict, debate, quarrel. <br><b>Antonyms:</b> agreement, peace, unity, consensus, accord.",
image: ""
},
37: {
text: "<b>Answer:</b> inconspicuous. <br><b>Definition:</b> Not easily seen or noticed. <br><b>Synonyms:</b> hidden, unnoticeable, obscure, unseen, subtle. <br><b>Antonyms:</b> conspicuous, noticeable, visible, obvious, prominent.",
image: ""
},
38: {
text: "<b>Answer:</b> prominent. <br><b>Definition:</b> Important; famous; easily noticeable. <br><b>Synonyms:</b> notable, distinguished, eminent, visible, outstanding. <br><b>Antonyms:</b> obscure, hidden, minor, invisible, unknown.",
image: ""
},
39: {
text: "<b>Answer:</b> grim. <br><b>Definition:</b> Harsh, forbidding, or depressing in appearance or outlook. <br><b>Synonyms:</b> stern, severe, bleak, harsh, gloomy. <br><b>Antonyms:</b> cheerful, pleasant, mild, gentle, bright.",
image: ""
},
40: {
text: "<b>Answer:</b> gloomy. <br><b>Definition:</b> Dark, depressing, or pessimistic. <br><b>Synonyms:</b> sad, dull, bleak, dismal, dreary. <br><b>Antonyms:</b> bright, cheerful, sunny, lively, joyful.",
image: ""
},
41: {
text: "<b>Answer:</b> bluff. <br><b>Definition:</b> To try to deceive someone into believing one can do or has something. <br><b>Synonyms:</b> deceive, pretend, fake, feign, mislead. <br><b>Antonyms:</b> reveal, confess, admit, disclose, expose.",
image: ""
},
42: {
text: "<b>Answer:</b> peevish. <br><b>Definition:</b> Easily irritated, especially by unimportant things. <br><b>Synonyms:</b> irritable, grumpy, cross, cranky, moody. <br><b>Antonyms:</b> calm, cheerful, patient, pleasant, good-natured.",
image: ""
},
43: {
text: "<b>Answer:</b> discord. <br><b>Definition:</b> Disagreement or lack of harmony between people. <br><b>Synonyms:</b> conflict, dispute, tension, strife, disharmony. <br><b>Antonyms:</b> harmony, accord, peace, unity, agreement.",
image: ""
},
44: {
text: "<b>Answer:</b> harmony. <br><b>Definition:</b> Agreement or concord between people or things. <br><b>Synonyms:</b> peace, unity, accord, balance, concord. <br><b>Antonyms:</b> discord, conflict, disagreement, chaos, tension.",
image: ""
},
45: {
text: "<b>Answer:</b> conformity. <br><b>Definition:</b> Compliance with standards, rules, or laws. <br><b>Synonyms:</b> compliance, obedience, agreement, accordance, submission. <br><b>Antonyms:</b> resistance, defiance, disobedience, rebellion, nonconformity.",
image: ""
},
46: {
text: "<b>Answer:</b> brisk. <br><b>Definition:</b> Quick and active; lively and energetic. <br><b>Synonyms:</b> quick, lively, energetic, active, rapid. <br><b>Antonyms:</b> slow, dull, sluggish, lazy, inactive.",
image: ""
},
47: {
text: "<b>Answer:</b> vivacious. <br><b>Definition:</b> Attractively lively and animated. <br><b>Synonyms:</b> lively, spirited, energetic, cheerful, vibrant. <br><b>Antonyms:</b> dull, lifeless, gloomy, boring, sluggish.",
image: ""
},
48: {
text: "<b>Answer:</b> dismal. <br><b>Definition:</b> Depressing; dreary; causing a gloomy mood. <br><b>Synonyms:</b> gloomy, bleak, depressing, miserable, dark. <br><b>Antonyms:</b> cheerful, bright, pleasant, joyful, lively.",
image: ""
},
49: {
text: "<b>Answer:</b> jovial. <br><b>Definition:</b> Cheerful and friendly; full of good humor. <br><b>Synonyms:</b> cheerful, merry, jolly, happy, lighthearted. <br><b>Antonyms:</b> gloomy, morose, sad, moody, sullen.",
image: ""
},
50: {
text: "<b>Answer:</b> demagogue. <br><b>Definition:</b> A political leader who seeks support by appealing to emotions and prejudices rather than rational argument. <br><b>Synonyms:</b> agitator, rabble-rouser, instigator, manipulator, propagandist. <br><b>Antonyms:</b> peacemaker, unifier, mediator, statesman, reformer.",
image: ""
},

    
};