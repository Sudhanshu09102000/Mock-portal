// ===============================
// Script for Complete Lucent GK Mock
// ===============================

// Topic Titles
const topics = [
  "Indian History", 
  "World History", 
  "Geography",
  "Indian Polity & Constitution", 
  "Indian Economy",
  "Physics", 
  "Chemistry", 
  "Biology", 
  "Miscellaneous", 
  "Computers",
  "Vocabulary"
];

// Each topic has an array of objects: { name: "Button Name", url: "..." }
const links = {
  0: [
    { name: "Harappan or Indus Civilization", url: "https://sudhanshu09102000.github.io/01-Harappan-or-Indus-Civilization/" },
    { name: "Vedic Culture", url: "https://sudhanshu09102000.github.io/02-Vedic-Culture/" },
    { name: "Mahajanapada Period", url: "https://sudhanshu09102000.github.io/03-Mahajanapada-Period/" },
    { name: "Religious Movements", url: "https://sudhanshu09102000.github.io/04-Religious-Movements/" },
    { name: "Maurya Period", url: "https://sudhanshu09102000.github.io/05-Maurya-Period/" },
    { name: "Post-Maurya or Pre-Gupta Period", url: "https://sudhanshu09102000.github.io/06-Post-Maurya-or-Pre-Gupta-Period/" },
    { name: "The Sangam Period", url: "https://sudhanshu09102000.github.io/07-Sangam-Period/" },
    { name: "Gupta Period", url: "https://sudhanshu09102000.github.io/08-Gupta-Period/" },
    { name: "Post-Gupta Period or Vardhana Dynasty", url: "https://sudhanshu09102000.github.io/09-Post-Gupta-Period-or-Vardhana-Dynasty/" },
    { name: "Early-Medieval Period", url: "https://sudhanshu09102000.github.io/10-Early-Medieval-Period/" },
    { name: "North India (Rajputa Period)", url: "https://sudhanshu09102000.github.io/11-North-India-Rajputa-Period/" },
    { name: "South India (Cholas & Others)", url: "https://sudhanshu09102000.github.io/12-South-India-Cholas-Others/" },
    { name: "Sultanate Period", url: "https://sudhanshu09102000.github.io/13-Sultanate-Period/" },
    { name: "The Delhi Sultanate", url: "https://sudhanshu09102000.github.io/14-Delhi-Sultanate/" },
    { name: "Vijayanagar & Other Kingdoms", url: "https://sudhanshu09102000.github.io/15-Vijayanagar-Other-Kingdoms/" },
    { name: "Religious Movements: Bhakti Movement", url: "https://sudhanshu09102000.github.io/16-Bhakti-Movement/" },
    { name: "Religious Movements: Sufi Movement", url: "https://sudhanshu09102000.github.io/17-Sufi-Movement/" },
    { name: "Mughal Period", url: "https://sudhanshu09102000.github.io/18-Mughal-Period/" },
    { name: "Maratha State & Maratha Confederacy", url: "https://sudhanshu09102000.github.io/19-Maratha-State-Maratha-Confederacy/" },
    { name: "The Advent of the Europeans", url: "https://sudhanshu09102000.github.io/20-Advent-of-the-Europeans/" },
    { name: "Expansion of British Power (context of Bengal, Mysore, Punjab etc)", url: "https://sudhanshu09102000.github.io/21-Expansion-of-British-Power/" },
    { name: "Economic Impact of British Rule", url: "https://sudhanshu09102000.github.io/22-Economic-Impact-of-British-Rule/" },
    { name: "Socio-Religious Movements in 19th-20th Centuries", url: "https://sudhanshu09102000.github.io/23-Socio-Religious-Movements-19th-20th-Centuries/" },
    { name: "Freedom Struggle", url: "https://sudhanshu09102000.github.io/24-Freedom-Struggle/" },
    { name: "The Revolt of 1857", url: "https://sudhanshu09102000.github.io/25-Revolt-of-1857/" },
    { name: "Moderate Phase", url: "https://sudhanshu09102000.github.io/26-Moderate-Phase/" },
    { name: "Extremist Phase", url: "https://sudhanshu09102000.github.io/27-Extremist-Phase/" },
    { name: "The Gandhian Era", url: "https://sudhanshu09102000.github.io/28-Gandhian-Era/" },
    { name: "Important Dates", url: "https://sudhanshu09102000.github.io/29-Important-Dates/" },
    { name: "Places", url: "https://sudhanshu09102000.github.io/30-Places/" },
    { name: "Foreign Travellers or Envoys", url: "https://sudhanshu09102000.github.io/31-Foreign-Travellers-or-Envoys/" },
    { name: "Abbreviated or Alternative Names", url: "https://sudhanshu09102000.github.io/32-Abbreviated-Alternative-Names/" },
    { name: "Sayings", url: "https://sudhanshu09102000.github.io/33-Sayings/" },
    { name: "Battles", url: "https://sudhanshu09102000.github.io/34-Battles/" },
    { name: "Reforms or Acts", url: "https://sudhanshu09102000.github.io/35-Reforms-or-Acts/" },
    { name: "Committees or Commissions", url: "https://sudhanshu09102000.github.io/36-Committees-or-Commissions/" },
    { name: "Congress Session", url: "https://sudhanshu09102000.github.io/37-Congress-Session/" },
    { name: "Governor-Generals & Viceroys", url: "https://sudhanshu09102000.github.io/38-Governor-Generals-Viceroys/" }

  ],
  1: [
    { name: "Mesopotamian Civilization", url: "https://sudhanshu09102000.github.io/Mesopotamian-Civilization/" },
    { name: "Egyptian Civilization", url: "https://sudhanshu09102000.github.io/Egyptian-Civilization/" },
    { name: "Harappan Civilization", url: "https://sudhanshu09102000.github.io/Harappan-Civilization/" },
    { name: "Chinese Civilization", url: "https://sudhanshu09102000.github.io/Chinese-Civilization/" },
    { name: "Iranian Civilization", url: "https://sudhanshu09102000.github.io/Iranian-Civilization/" },
    { name: "Greek Civilization", url: "https://sudhanshu09102000.github.io/Greek-Civilization/" },
    { name: "Roman Civilization", url: "https://sudhanshu09102000.github.io/Roman-Civilization/" },
    { name: "Seven Wonders of Ancient World", url: "https://sudhanshu09102000.github.io/Seven-Wonders-Ancient-World/" },
    { name: "Medieval Europe (Feudalism, Crusades)", url: "https://sudhanshu09102000.github.io/Medieval-Europe-Feudalism-Crusades/" },
    { name: "Arab Civilization", url: "https://sudhanshu09102000.github.io/Arab-Civilization/" },
    { name: "Medieval China", url: "https://sudhanshu09102000.github.io/Medieval-China/" },
    { name: "Medieval Japan", url: "https://sudhanshu09102000.github.io/Medieval-Japan/" },
    { name: "Seven Wonders of Medieval World", url: "https://sudhanshu09102000.github.io/Seven-Wonders-Medieval-World/" },
    { name: "Renaissance", url: "https://sudhanshu09102000.github.io/Renaissance/" },
    { name: "Reformation", url: "https://sudhanshu09102000.github.io/Reformation/" },
    { name: "Geographical Discoveries", url: "https://sudhanshu09102000.github.io/Geographical-Discoveries/" },
    { name: "Glorious Revolution", url: "https://sudhanshu09102000.github.io/Glorious-Revolution/" },
    { name: "Industrial Revolution", url: "https://sudhanshu09102000.github.io/Industrial-Revolution/" },
    { name: "American Revolution", url: "https://sudhanshu09102000.github.io/American-Revolution/" },
    { name: "French Revolution", url: "https://sudhanshu09102000.github.io/French-Revolution/" },
    { name: "Unification of Italy", url: "https://sudhanshu09102000.github.io/Unification-of-Italy/" },
    { name: "Unification of Germany", url: "https://sudhanshu09102000.github.io/Unification-of-Germany/" },
    { name: "First World War", url: "https://sudhanshu09102000.github.io/First-World-War/" },
    { name: "Russian Revolution", url: "https://sudhanshu09102000.github.io/Russian-Revolution/" },
    { name: "Chinese Revolution", url: "https://sudhanshu09102000.github.io/Chinese-Revolution/" },
    { name: "Turkish Revolution", url: "https://sudhanshu09102000.github.io/Turkish-Revolution/" },
    { name: "World Depression of 1929-34", url: "https://sudhanshu09102000.github.io/World-Depression-1929-34/" },
    { name: "Fascism in Italy", url: "https://sudhanshu09102000.github.io/Fascism-in-Italy/" },
    { name: "Nazism in Germany", url: "https://sudhanshu09102000.github.io/Nazism-in-Germany/" },
    { name: "Militarism in Japan", url: "https://sudhanshu09102000.github.io/Militarism-in-Japan/" },
    { name: "Second World War", url: "https://sudhanshu09102000.github.io/Second-World-War/" },
    { name: "Important Dates", url: "https://sudhanshu09102000.github.io/Important-Dates-World/" },
    { name: "Association of places", url: "https://sudhanshu09102000.github.io/Association-of-Places/" },
    { name: "Abbreviated or Alternative Names", url: "https://sudhanshu09102000.github.io/Abbreviated-Alternative-Names-World/" },
    { name: "Important Battles", url: "https://sudhanshu09102000.github.io/Important-Battles-World/" }

  ],
  2: [
    { name: "The Solar System", url: "https://sudhanshu09102000.github.io/Solar-System/" },
    { name: "Continents and Oceans", url: "https://sudhanshu09102000.github.io/Continents-Oceans/" },
    { name: "Biosphere", url: "https://sudhanshu09102000.github.io/Biosphere/" },
    { name: "Lithosphere", url: "https://sudhanshu09102000.github.io/Lithosphere/" },
    { name: "Hydrosphere", url: "https://sudhanshu09102000.github.io/Hydrosphere/" },
    { name: "Atmosphere", url: "https://sudhanshu09102000.github.io/Atmosphere/" },
    { name: "Latitudes and Longitudes", url: "https://sudhanshu09102000.github.io/Latitudes-Longitudes/" },
    { name: "Different heat zones of the earth", url: "https://sudhanshu09102000.github.io/Heat-Zones-Earth/" },
    { name: "Longitudes and time zones", url: "https://sudhanshu09102000.github.io/Time-Zones/" },
    { name: "International Date Line", url: "https://sudhanshu09102000.github.io/International-Date-Line/" },
    { name: "Motion of the earth", url: "https://sudhanshu09102000.github.io/Motion-of-Earth/" },
    { name: "Effect of the tilted axis on day and night", url: "https://sudhanshu09102000.github.io/Tilted-Axis-Day-Night/" },
    { name: "Atmosphere (composition and layer of the Atmosphere)", url: "https://sudhanshu09102000.github.io/Atmosphere-Composition-Layers/" },
    { name: "Weather and Climate", url: "https://sudhanshu09102000.github.io/Weather-Climate/" },
    { name: "Atmospheric Pressure", url: "https://sudhanshu09102000.github.io/Atmospheric-Pressure/" },
    { name: "Internal Structure of the earth", url: "https://sudhanshu09102000.github.io/Internal-Structure-Earth/" },
    { name: "Rocks, Earthquakes and Volcanoes", url: "https://sudhanshu09102000.github.io/Rocks-Earthquakes-Volcanoes/" },
    { name: "Various Landforms (Mountains, Plateaus, Plains, Grasslands)", url: "https://sudhanshu09102000.github.io/Landforms-Mountains-Plateaus-Plains-Grasslands/" },
    { name: "Landforms created by the river system", url: "https://sudhanshu09102000.github.io/Landforms-River-System/" },
    { name: "Landforms created by glacier", url: "https://sudhanshu09102000.github.io/Landforms-Glacier/" },
    { name: "Landforms created by the action of wind", url: "https://sudhanshu09102000.github.io/Landforms-Wind/" },
    { name: "Landforms created by the actions of Groundwater", url: "https://sudhanshu09102000.github.io/Landforms-Groundwater/" },
    { name: "The Indian Subcontinent; Position, extent and physical features", url: "https://sudhanshu09102000.github.io/Indian-Subcontinent-Physical-Features/" },
    { name: "Climatic diversity in the Indian Sub-continent", url: "https://sudhanshu09102000.github.io/Climatic-Diversity-India/" },
    { name: "Soil resources of the Indian sub-continent", url: "https://sudhanshu09102000.github.io/Soil-Resources-India/" },
    { name: "Agriculture in India", url: "https://sudhanshu09102000.github.io/Agriculture-India/" },
    { name: "Land use pattern of India", url: "https://sudhanshu09102000.github.io/Land-Use-Pattern-India/" },
    { name: "Water resources and their utilization in India", url: "https://sudhanshu09102000.github.io/Water-Resources-Utilization-India/" },
    { name: "Multipurpose river valley projects", url: "https://sudhanshu09102000.github.io/Multipurpose-River-Valley-Projects/" },
    { name: "Transport in India", url: "https://sudhanshu09102000.github.io/Transport-India/" },
    { name: "States and their capitals", url: "https://sudhanshu09102000.github.io/States-Capitals/" },
    { name: "Population of India and states", url: "https://sudhanshu09102000.github.io/Population-India-States/" },
    { name: "Wildlife sanctuaries and national parks in India", url: "https://sudhanshu09102000.github.io/Wildlife-Sanctuaries-National-Parks-India/" },
    { name: "Important Irrigation and power projects", url: "https://sudhanshu09102000.github.io/Irrigation-Power-Projects/" },
    { name: "Indian satellites (at a glance)", url: "https://sudhanshu09102000.github.io/Indian-Satellites/" },
    { name: "General introduction to Asia", url: "https://sudhanshu09102000.github.io/Introduction-Asia/" },
    { name: "Geography of the Indian subcontinent", url: "https://sudhanshu09102000.github.io/Geography-Indian-Subcontinent/" },
    { name: "Countries with their capitals and currency", url: "https://sudhanshu09102000.github.io/Countries-Capitals-Currency/" },
    { name: "River side cities", url: "https://sudhanshu09102000.github.io/River-Side-Cities/" },
    { name: "Wonders of the world", url: "https://sudhanshu09102000.github.io/Wonders-of-the-World/" },
    { name: "Countries and their main produces and industries", url: "https://sudhanshu09102000.github.io/Countries-Produces-Industries/" },
    { name: "Towns associated with some important industries", url: "https://sudhanshu09102000.github.io/Towns-Industries/" },
    { name: "Famous sites (India)", url: "https://sudhanshu09102000.github.io/Famous-Sites-India/" },
    { name: "Famous Sites (World)", url: "https://sudhanshu09102000.github.io/Famous-Sites-World/" },
    { name: "Changed names", url: "https://sudhanshu09102000.github.io/Changed-Names/" },
    { name: "Continents earth area", url: "https://sudhanshu09102000.github.io/Continents-Earth-Area/" },
    { name: "Continents highest and lowest points", url: "https://sudhanshu09102000.github.io/Continents-Highest-Lowest-Points/" },
    { name: "Three deepest oceans", url: "https://sudhanshu09102000.github.io/Three-Deepest-Oceans/" },
    { name: "Highest mountain peaks (world)", url: "https://sudhanshu09102000.github.io/Highest-Mountain-Peaks-World/" },
    { name: "Geographical epithets", url: "https://sudhanshu09102000.github.io/Geographical-Epithets/" },
    { name: "Important boundary lines", url: "https://sudhanshu09102000.github.io/Important-Boundary-Lines/" },
    { name: "Tribes and their homelands", url: "https://sudhanshu09102000.github.io/Tribes-Homelands/" },
    { name: "Glossary", url: "https://sudhanshu09102000.github.io/Glossary/" }


  ],
  3: [
    { name: "Evolution of Indian Constitution", url: "https://sudhanshu09102000.github.io/Evolution-Indian-Constitution/" },
    { name: "Constituent Assembly and Making of the Constitution", url: "https://sudhanshu09102000.github.io/Constituent-Assembly-Making-Constitution/" },
    { name: "Different Sources of the Indian Constitution", url: "https://sudhanshu09102000.github.io/Sources-Indian-Constitution/" },
    { name: "Important Articles of the Constitution", url: "https://sudhanshu09102000.github.io/Articles-Constitution/" },
    { name: "Important Amendments of the Constitution", url: "https://sudhanshu09102000.github.io/Amendments-Constitution/" },
    { name: "Some Special features of the Indian Constitution", url: "https://sudhanshu09102000.github.io/Special-Features-Indian-Constitution/" },
    { name: "Federal and Unitary features of the Indian Union", url: "https://sudhanshu09102000.github.io/Federal-Unitary-Features-Indian-Union/" },
    { name: "The preamble", url: "https://sudhanshu09102000.github.io/Preamble/" },
    { name: "Lapse of Paramountcy", url: "https://sudhanshu09102000.github.io/Lapse-of-Paramountcy/" },
    { name: "Integration and Merger of Indian States", url: "https://sudhanshu09102000.github.io/Integration-Merger-Indian-States/" },
    { name: "The Union and its Territories", url: "https://sudhanshu09102000.github.io/Union-Territories/" },
    { name: "Reorganization of States", url: "https://sudhanshu09102000.github.io/Reorganization-of-States/" },
    { name: "Citizenship", url: "https://sudhanshu09102000.github.io/Citizenship/" },
    { name: "Fundamental Rights", url: "https://sudhanshu09102000.github.io/Fundamental-Rights/" },
    { name: "Directive Principles of State Policy", url: "https://sudhanshu09102000.github.io/Directive-Principles-State-Policy/" },
    { name: "Fundamental Duties", url: "https://sudhanshu09102000.github.io/Fundamental-Duties/" },
    { name: "Procedure of Amending the Constitution", url: "https://sudhanshu09102000.github.io/Procedure-Amending-Constitution/" },
    { name: "Executive of the Union", url: "https://sudhanshu09102000.github.io/Executive-Union/" },
    { name: "The Parliament of India", url: "https://sudhanshu09102000.github.io/Parliament-India/" },
    { name: "Executive of the States", url: "https://sudhanshu09102000.github.io/Executive-States/" },
    { name: "Special Position of J & K", url: "https://sudhanshu09102000.github.io/Special-Position-JK/" },
    { name: "Panchayats", url: "https://sudhanshu09102000.github.io/Panchayats/" },
    { name: "Municipalities", url: "https://sudhanshu09102000.github.io/Municipalities/" },
    { name: "The Supreme Court", url: "https://sudhanshu09102000.github.io/Supreme-Court/" },
    { name: "The High Court", url: "https://sudhanshu09102000.github.io/High-Court/" },
    { name: "Inter-State Council", url: "https://sudhanshu09102000.github.io/Inter-State-Council/" },
    { name: "Finance Commission", url: "https://sudhanshu09102000.github.io/Finance-Commission/" },
    { name: "Planning Commission", url: "https://sudhanshu09102000.github.io/Planning-Commission/" },
    { name: "National Development Council", url: "https://sudhanshu09102000.github.io/National-Development-Council/" },
    { name: "National Integration Council", url: "https://sudhanshu09102000.github.io/National-Integration-Council/" },
    { name: "Inter-State Relations", url: "https://sudhanshu09102000.github.io/Inter-State-Relations/" },
    { name: "Emergency Provisions", url: "https://sudhanshu09102000.github.io/Emergency-Provisions/" },
    { name: "Public Service Commissions", url: "https://sudhanshu09102000.github.io/Public-Service-Commissions/" },
    { name: "Election", url: "https://sudhanshu09102000.github.io/Election/" },
    { name: "Delimitation Commission of India", url: "https://sudhanshu09102000.github.io/Delimitation-Commission-India/" },
    { name: "The Official Languages", url: "https://sudhanshu09102000.github.io/Official-Languages/" },
    { name: "National Symbols", url: "https://sudhanshu09102000.github.io/National-Symbols/" },
    { name: "Glossary of Constitutional Terms", url: "https://sudhanshu09102000.github.io/Glossary-Constitutional-Terms/" }
  ],
  4: [
    { name: "Highlights of Indian Economy", url: "https://sudhanshu09102000.github.io/Highlights-Indian-Economy/" },
    { name: "Economy and Economics", url: "https://sudhanshu09102000.github.io/Economy-and-Economics/" },
    { name: "Characteristics of Indian Economy", url: "https://sudhanshu09102000.github.io/Characteristics-Indian-Economy/" },
    { name: "Agriculture & Land Development", url: "https://sudhanshu09102000.github.io/Agriculture-Land-Development/" },
    { name: "National Income", url: "https://sudhanshu09102000.github.io/National-Income/" },
    { name: "Planning", url: "https://sudhanshu09102000.github.io/Planning/" },
    { name: "Unemployment", url: "https://sudhanshu09102000.github.io/Unemployment/" },
    { name: "Trade & Commerce", url: "https://sudhanshu09102000.github.io/Trade-Commerce/" },
    { name: "New Economic Policy", url: "https://sudhanshu09102000.github.io/New-Economic-Policy/" },
    { name: "Indian Financial System", url: "https://sudhanshu09102000.github.io/Indian-Financial-System/" },
    { name: "Indian Fiscal System", url: "https://sudhanshu09102000.github.io/Indian-Fiscal-System/" },
    { name: "Banking in India", url: "https://sudhanshu09102000.github.io/Banking-in-India/" },
    { name: "Tax System", url: "https://sudhanshu09102000.github.io/Tax-System/" },
    { name: "Industry", url: "https://sudhanshu09102000.github.io/Industry/" },
    { name: "Foreign Trade", url: "https://sudhanshu09102000.github.io/Foreign-Trade/" },
    { name: "Miscellaneous Facts", url: "https://sudhanshu09102000.github.io/Miscellaneous-Facts/" },
    { name: "Glossary of Economic and Financial Terms", url: "https://sudhanshu09102000.github.io/Glossary-Economic-Financial-Terms/" },
    { name: "Some Noteworthy Facts", url: "https://sudhanshu09102000.github.io/Some-Noteworthy-Facts/" },
    { name: "Appendix-1: Highlights of Economic Survey 2014-15", url: "https://sudhanshu09102000.github.io/Appendix-1-Economic-Survey-2014-15/" },
    { name: "Appendix-2: Socio Economic and Caste Census 2011", url: "https://sudhanshu09102000.github.io/Appendix-2-Socio-Economic-Caste-Census-2011/" }
  ],
  5: [
    { name: "Unit", url: "https://sudhanshu09102000.github.io/Physics-Unit/" },
    { name: "Motion", url: "https://sudhanshu09102000.github.io/Physics-Motion/" },
    { name: "Work, Energy and Power", url: "https://sudhanshu09102000.github.io/Work-Energy-Power/" },
    { name: "Gravitation", url: "https://sudhanshu09102000.github.io/Gravitation/" },
    { name: "Pressure", url: "https://sudhanshu09102000.github.io/Pressure/" },
    { name: "Floatation", url: "https://sudhanshu09102000.github.io/Floatation/" },
    { name: "Surface Tension", url: "https://sudhanshu09102000.github.io/Surface-Tension/" },
    { name: "Viscosity", url: "https://sudhanshu09102000.github.io/Viscosity/" },
    { name: "Elasticity", url: "https://sudhanshu09102000.github.io/Elasticity/" },
    { name: "Simple Harmonic Motion", url: "https://sudhanshu09102000.github.io/Simple-Harmonic-Motion/" },
    { name: "Wave", url: "https://sudhanshu09102000.github.io/Wave/" },
    { name: "Sound Wave", url: "https://sudhanshu09102000.github.io/Sound-Wave/" },
    { name: "Heat", url: "https://sudhanshu09102000.github.io/Heat/" },
    { name: "Light", url: "https://sudhanshu09102000.github.io/Light/" },
    { name: "Static Electricity", url: "https://sudhanshu09102000.github.io/Static-Electricity/" },
    { name: "Current Electricity", url: "https://sudhanshu09102000.github.io/Current-Electricity/" },
    { name: "Magnetism", url: "https://sudhanshu09102000.github.io/Magnetism/" },
    { name: "Atomic & Nuclear Physics", url: "https://sudhanshu09102000.github.io/Atomic-Nuclear-Physics/" },
    { name: "Electronics", url: "https://sudhanshu09102000.github.io/Electronics/" },
    { name: "Scientific Instruments", url: "https://sudhanshu09102000.github.io/Scientific-Instruments/" },
    { name: "Inventions", url: "https://sudhanshu09102000.github.io/Inventions/" },
    { name: "Important Discoveries Relating to Physics", url: "https://sudhanshu09102000.github.io/Important-Discoveries-Physics/" },
    { name: "Various Units of Measurement-Weight", url: "https://sudhanshu09102000.github.io/Units-Measurement-Weight/" },
    { name: "Conversion of Units from one System to another System", url: "https://sudhanshu09102000.github.io/Conversion-Units-System/" }


  ],
  6: [
    { name: "Substance & its nature", url: "https://sudhanshu09102000.github.io/Substance-Nature/" },
    { name: "Atomic Structure", url: "https://sudhanshu09102000.github.io/Atomic-Structure/" },
    { name: "Periodic Classification of Elements", url: "https://sudhanshu09102000.github.io/Periodic-Classification-Elements/" },
    { name: "Chemical Bonding", url: "https://sudhanshu09102000.github.io/Chemical-Bonding/" },
    { name: "Oxidation & Reduction", url: "https://sudhanshu09102000.github.io/Oxidation-Reduction/" },
    { name: "Acids, Bases & Salts", url: "https://sudhanshu09102000.github.io/Acids-Bases-Salts/" },
    { name: "Behaviour of Gases", url: "https://sudhanshu09102000.github.io/Behaviour-Gases/" },
    { name: "Electrolysis", url: "https://sudhanshu09102000.github.io/Electrolysis/" },
    { name: "Carbon & its Compounds", url: "https://sudhanshu09102000.github.io/Carbon-Compounds/" },
    { name: "Fuels", url: "https://sudhanshu09102000.github.io/Fuels/" },
    { name: "Metallurgy", url: "https://sudhanshu09102000.github.io/Metallurgy/" },
    { name: "Important Facts About Some Metals", url: "https://sudhanshu09102000.github.io/Important-Facts-Metals/" },
    { name: "Non-Metals", url: "https://sudhanshu09102000.github.io/Non-Metals/" },
    { name: "Common Facts", url: "https://sudhanshu09102000.github.io/Common-Facts-Chemistry/" }
  ],
  7: [
    { name: "Introduction", url: "https://sudhanshu09102000.github.io/Biology-Introduction/" },
    { name: "Classification of Organism", url: "https://sudhanshu09102000.github.io/Classification-Organism/" },
    { name: "Cytology", url: "https://sudhanshu09102000.github.io/Cytology/" },
    { name: "Genetics", url: "https://sudhanshu09102000.github.io/Genetics/" },
    { name: "Organic Evolution", url: "https://sudhanshu09102000.github.io/Organic-Evolution/" },
    { name: "Botany: Classification of Plant Kingdom", url: "https://sudhanshu09102000.github.io/Classification-Plant-Kingdom/" },
    { name: "Botany: Plant Morphology", url: "https://sudhanshu09102000.github.io/Plant-Morphology/" },
    { name: "Botany: Plant Tissue", url: "https://sudhanshu09102000.github.io/Plant-Tissue/" },
    { name: "Botany: Photo-synthesis", url: "https://sudhanshu09102000.github.io/Photo-synthesis/" },
    { name: "Botany: Plant Hormones", url: "https://sudhanshu09102000.github.io/Plant-Hormones/" },
    { name: "Botany: Plant Diseases", url: "https://sudhanshu09102000.github.io/Plant-Diseases/" },
    { name: "Ecology", url: "https://sudhanshu09102000.github.io/Ecology/" },
    { name: "Pollution", url: "https://sudhanshu09102000.github.io/Pollution/" },
    { name: "Zoology: Classification of Animal Kingdom", url: "https://sudhanshu09102000.github.io/Classification-Animal-Kingdom/" },
    { name: "Zoology: Animal Tissue", url: "https://sudhanshu09102000.github.io/Animal-Tissue/" },
    { name: "Human Blood", url: "https://sudhanshu09102000.github.io/Human-Blood/" },
    { name: "System of Human Body", url: "https://sudhanshu09102000.github.io/System-Human-Body/" },
    { name: "Nutrients", url: "https://sudhanshu09102000.github.io/Nutrients/" },
    { name: "Human Diseases", url: "https://sudhanshu09102000.github.io/Human-Diseases/" },
    { name: "Miscellaneous", url: "https://sudhanshu09102000.github.io/Biology-Miscellaneous/" }


  ],
  8: [
    { name: "Firsts in India (Male)", url: "https://sudhanshu09102000.github.io/Firsts-India-Male/" },
    { name: "Firsts in India (Female)", url: "https://sudhanshu09102000.github.io/Firsts-India-Female/" },
    { name: "Firsts in World (Male & Female)", url: "https://sudhanshu09102000.github.io/Firsts-World-Male-Female/" },
    { name: "Superlatives- India", url: "https://sudhanshu09102000.github.io/Superlatives-India/" },
    { name: "Superlatives- World", url: "https://sudhanshu09102000.github.io/Superlatives-World/" },
    { name: "Important Monuments", url: "https://sudhanshu09102000.github.io/Important-Monuments/" },
    { name: "International Boundaries", url: "https://sudhanshu09102000.github.io/International-Boundaries/" },
    { name: "National Emblems", url: "https://sudhanshu09102000.github.io/National-Emblems/" },
    { name: "National Animals", url: "https://sudhanshu09102000.github.io/National-Animals/" },
    { name: "News Agencies", url: "https://sudhanshu09102000.github.io/News-Agencies/" },
    { name: "Map Lines", url: "https://sudhanshu09102000.github.io/Map-Lines/" },
    { name: "Political Parties", url: "https://sudhanshu09102000.github.io/Political-Parties/" },
    { name: "Intelligence Agencies", url: "https://sudhanshu09102000.github.io/Intelligence-Agencies/" },
    { name: "Parliaments", url: "https://sudhanshu09102000.github.io/Parliaments/" },
    { name: "Important Signs or Symbols", url: "https://sudhanshu09102000.github.io/Important-Signs-or-Symbols/" },
    { name: "Official Books", url: "https://sudhanshu09102000.github.io/Official-Books/" },
    { name: "Newspapers", url: "https://sudhanshu09102000.github.io/Newspapers/" },
    { name: "UNO", url: "https://sudhanshu09102000.github.io/UNO/" },
    { name: "World Organisations", url: "https://sudhanshu09102000.github.io/World-Organisations/" },
    { name: "UN Secretary Generals", url: "https://sudhanshu09102000.github.io/UN-Secretary-Generals/" },
    { name: "International Decades", url: "https://sudhanshu09102000.github.io/International-Decades/" },
    { name: "International Years", url: "https://sudhanshu09102000.github.io/International-Years/" },
    { name: "SAARC Years", url: "https://sudhanshu09102000.github.io/SAARC-Years/" },
    { name: "International Weeks", url: "https://sudhanshu09102000.github.io/International-Weeks/" },
    { name: "Important Days (India & World)", url: "https://sudhanshu09102000.github.io/Important-Days-India-World/" },
    { name: "India's World Heritage Sites", url: "https://sudhanshu09102000.github.io/World-Heritage-Sites-India/" },
    { name: "Famous Tourist Spots of India", url: "https://sudhanshu09102000.github.io/Tourist-Spots-India/" },
    { name: "Defence of India", url: "https://sudhanshu09102000.github.io/Defence-of-India/" },
    { name: "Internal Security of India", url: "https://sudhanshu09102000.github.io/Internal-Security-India/" },
    { name: "Defence Training Institutions", url: "https://sudhanshu09102000.github.io/Defence-Training-Institutions/" },
    { name: "Foundation Day of Some States", url: "https://sudhanshu09102000.github.io/Foundation-Day-States/" },
    { name: "Research Centres of India", url: "https://sudhanshu09102000.github.io/Research-Centres-India/" },
    { name: "Nuclear & Space Research Centres in India", url: "https://sudhanshu09102000.github.io/Nuclear-Space-Research-India/" },
    { name: "Health & Medicinal Research Centres in India", url: "https://sudhanshu09102000.github.io/Health-Medicinal-Research-India/" },
    { name: "Defence Institutes in India", url: "https://sudhanshu09102000.github.io/Defence-Institutes-India/" },
    { name: "Government Industrial Undertakings", url: "https://sudhanshu09102000.github.io/Government-Industrial-Undertakings/" },
    { name: "Musical Instruments & their Exponents", url: "https://sudhanshu09102000.github.io/Musical-Instruments-Exponents/" },
    { name: "States & their Folk Dances", url: "https://sudhanshu09102000.github.io/States-Folk-Dances/" },
    { name: "Famous Places associated with Eminent Persons", url: "https://sudhanshu09102000.github.io/Famous-Places-Eminent-Persons/" },
    { name: "Crematorium of Famous Persons", url: "https://sudhanshu09102000.github.io/Crematorium-Famous-Persons/" },
    { name: "Nicknames", url: "https://sudhanshu09102000.github.io/Nicknames/" },
    { name: "Great Works associated with Famous Persons", url: "https://sudhanshu09102000.github.io/Great-Works-Famous-Persons/" },
    { name: "Awards & Honours", url: "https://sudhanshu09102000.github.io/Awards-Honours/" },
    { name: "National or Padma Awards", url: "https://sudhanshu09102000.github.io/National-or-Padma-Awards/" },
    { name: "Gallantry Awards", url: "https://sudhanshu09102000.github.io/Gallantry-Awards/" },
    { name: "Jnanpith Awards", url: "https://sudhanshu09102000.github.io/Jnanpith-Awards/" },
    { name: "Dada Saheb Phalke Awards", url: "https://sudhanshu09102000.github.io/Dada-Saheb-Phalke-Awards/" },
    { name: "Books & Authors", url: "https://sudhanshu09102000.github.io/Books-Authors/" },
    { name: "Games & Sports- Olympic Games, Commonwealth Games, Asian Games, SAF Games, Afro-Asian Games, Sports & Related Informations", url: "https://sudhanshu09102000.github.io/Games-Sports/" },
    { name: "Cricket & World Cups", url: "https://sudhanshu09102000.github.io/Cricket-World-Cups/" },
    { name: "Football, Hockey, Tennis", url: "https://sudhanshu09102000.github.io/Football-Hockey-Tennis/" },
    { name: "Cups & Trophies", url: "https://sudhanshu09102000.github.io/Cups-Trophies/" },
    { name: "Famous Stadiums", url: "https://sudhanshu09102000.github.io/Famous-Stadiums/" },
    { name: "National Games & Sports", url: "https://sudhanshu09102000.github.io/National-Games-Sports/" },
    { name: "Court or Campus or Field", url: "https://sudhanshu09102000.github.io/Court-or-Campus-or-Field/" },
    { name: "No. of Players in popular Games & Sports", url: "https://sudhanshu09102000.github.io/Players-Games-Sports/" },
    { name: "National Parks", url: "https://sudhanshu09102000.github.io/National-Parks/" }


  ],
  9: [
    { name: "Introduction of Computer", url: "https://sudhanshu09102000.github.io/Introduction-Computer/" },
    { name: "History of Computer", url: "https://sudhanshu09102000.github.io/History-Computer/" },
    { name: "Generation of Computer", url: "https://sudhanshu09102000.github.io/Generation-Computer/" },
    { name: "Computer Hardware and Software", url: "https://sudhanshu09102000.github.io/Hardware-Software/" },
    { name: "Computer Memory", url: "https://sudhanshu09102000.github.io/Computer-Memory/" },
    { name: "Memory unit", url: "https://sudhanshu09102000.github.io/Memory-Unit/" },
    { name: "Types of Computer", url: "https://sudhanshu09102000.github.io/Types-Computer/" },
    { name: "Input and Output device", url: "https://sudhanshu09102000.github.io/Input-Output-Device/" },
    { name: "Computer architecture and Components", url: "https://sudhanshu09102000.github.io/Architecture-Components/" },
    { name: "Types of Operating system and its functions", url: "https://sudhanshu09102000.github.io/Operating-System-Types-Functions/" },
    { name: "Logic gates and Boolean operations", url: "https://sudhanshu09102000.github.io/Logic-Gates-Boolean-Operations/" },
    { name: "Basics of Combinatorial Components", url: "https://sudhanshu09102000.github.io/Combinatorial-Components/" },
    { name: "Number System", url: "https://sudhanshu09102000.github.io/Number-System/" },
    { name: "Programming Languages", url: "https://sudhanshu09102000.github.io/Programming-Languages/" },
    { name: "Database management system", url: "https://sudhanshu09102000.github.io/Database-Management-System/" },
    { name: "Computer Network and its types", url: "https://sudhanshu09102000.github.io/Computer-Network-Types/" },
    { name: "Computer Network Topology", url: "https://sudhanshu09102000.github.io/Network-Topology/" },
    { name: "Transmission modes", url: "https://sudhanshu09102000.github.io/Transmission-Modes/" },
    { name: "OSI Model", url: "https://sudhanshu09102000.github.io/OSI-Model/" },
    { name: "Computer security", url: "https://sudhanshu09102000.github.io/Computer-Security/" },
    { name: "Fathers and Inventors of Computer Field", url: "https://sudhanshu09102000.github.io/Fathers-Inventors-Computer/" },
    { name: "Shortcut keys", url: "https://sudhanshu09102000.github.io/Shortcut-Keys/" },
    { name: "Definitions and terminologies", url: "https://sudhanshu09102000.github.io/Definitions-Terminologies/" },
    { name: "Extension", url: "https://sudhanshu09102000.github.io/Extension/" },
    { name: "Abbreviations", url: "https://sudhanshu09102000.github.io/Abbreviations/" }


  ],
  10: [
    { name: "1. Set1 Vocab Words", url: "https://sudhanshu09102000.github.io/1.-Set1-Vocab-Words/" },
    { name: "2. Set2 Vocab Words", url: "https://sudhanshu09102000.github.io/2.-Set2-Vocab-Words/" },
    { name: "3. Set3 Vocab Words", url: "https://sudhanshu09102000.github.io/3.-Set3-Vocab-Words/" },
    { name: "4. Set4 Vocab Words", url: "https://sudhanshu09102000.github.io/4.-Set4-Vocab-Words/" },
    { name: "5. Set5 Vocab Words", url: "https://sudhanshu09102000.github.io/5.-Set5-Vocab-Words/" },
    { name: "6. Set6 Vocab Words", url: "https://sudhanshu09102000.github.io/6.-Set6-Vocab-Words/" },
    { name: "7. Set7 Vocab Words", url: "https://sudhanshu09102000.github.io/7.-Set7-Vocab-Words/" },
    { name: "8. Set8 Vocab Words", url: "https://sudhanshu09102000.github.io/8.-Set8-Vocab-Words/" },
    { name: "9. Set9 Vocab Words", url: "https://sudhanshu09102000.github.io/9.-Set9-Vocab-Words/" },
    { name: "10. Set10 Vocab Words", url: "https://sudhanshu09102000.github.io/10.-Set10-Vocab-Words/" },
    { name: "11. Set11 Vocab Words", url: "https://sudhanshu09102000.github.io/11.-Set11-Vocab-Words/" },
    { name: "12. Set12 Vocab Words", url: "https://sudhanshu09102000.github.io/12.-Set12-Vocab-Words/" },
    { name: "13. Set13 Vocab Words", url: "https://sudhanshu09102000.github.io/13.-Set13-Vocab-Words/" },
  ]

};

const mainPage = document.getElementById('mainPage');
const subPage = document.getElementById('subPage');
const topicName = document.getElementById('topicName');
const subButtons = document.getElementById('subButtons');

// Open subpage with fade animation
function openSubPage(index) {
  mainPage.style.animation = "fadeOut 0.5s forwards";
  setTimeout(() => {
    mainPage.classList.add('hidden');
    subPage.classList.remove('hidden');
    subPage.style.animation = "fadeIn 0.5s forwards";
  }, 400);

  topicName.textContent = topics[index];
  subButtons.innerHTML = '';

  links[index].forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'btn-glass';
    btn.textContent = item.name;
    btn.onclick = () => window.open(item.url, "_blank");
    subButtons.appendChild(btn);
  });
}

// Back to main page
function goBack() {
  subPage.style.animation = "fadeOut 0.5s forwards";
  setTimeout(() => {
    subPage.classList.add('hidden');
    mainPage.classList.remove('hidden');
    mainPage.style.animation = "fadeIn 0.5s forwards";
  }, 400);
}

// Simple floating particles animation
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = Array.from({length: 50}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2,
  dx: (Math.random() - 0.5) * 0.5,
  dy: (Math.random() - 0.5) * 0.5
}));

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 200, 255, 0.6)";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();
