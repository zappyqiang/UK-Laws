/* Stages 1-3: birth, school, teen years.
   scene actors: [emoji, x%, y%, size(em), animation, optional speech] */

LAW.add({
  id: "birth", icon: "👶", title: "Hello, World!", ages: "Age 0–4", color: "#ff8fa3",
  tagline: "The law is looking after you from your very first day.",
  scenes: [
    { bg: "hospital", cap: "A baby is born! From this very second, the law gives them rights: to a name, to be safe, and to be cared for.",
      actors: [["🏥", 14, 38, 5, "pop"], ["👶", 50, 62, 4.5, "bounce", "Waaah!"], ["👩", 34, 56, 4, "walk-r"], ["👨", 66, 56, 4, "walk-l"]] },
    { bg: "office", cap: "Step one: register the birth. Parents have 42 days in England, Wales and Northern Ireland, but only 21 days in Scotland.",
      actors: [["🏛️", 18, 40, 5, "pop"], ["👩‍🍼", 46, 60, 4, "walk-r"], ["📜", 70, 46, 4, "drop", "Birth certificate"], ["🗓️", 86, 28, 3, "pulse"]] },
    { bg: "room", cap: "Parents get 'parental responsibility'. It means they must feed, protect and educate you, and they make big choices until you can.",
      actors: [["👩", 30, 58, 4, "sway"], ["👨", 70, 58, 4, "sway"], ["👶", 50, 66, 3.5, "bounce"], ["🛡️", 50, 28, 4, "pulse"]] },
    { bg: "office", cap: "Work has to give parents time off. Mums can take up to 52 weeks of maternity leave. Dads and partners get paternity leave too.",
      actors: [["🏢", 16, 40, 5, "pop"], ["👩‍💼", 40, 60, 4, "walk-l"], ["🍼", 62, 56, 3.5, "bounce"], ["💷", 82, 34, 3.5, "float", "Statutory pay"]] },
    { bg: "road", cap: "In the car, you must ride in a child seat until you are 12 years old or 135cm tall, whichever comes first.",
      actors: [["🚗", 50, 64, 6, "zoom"], ["📏", 20, 34, 3.5, "pop", "135cm"], ["🧒", 80, 40, 3.5, "bounce"]] },
    { bg: "sky", cap: "The UK has also signed the UN Convention on the Rights of the Child: a promise that every child's best interests come first.",
      actors: [["🌍", 50, 40, 6, "spin-slow"], ["🧒", 26, 66, 3.5, "bounce"], ["👧", 74, 66, 3.5, "bounce"], ["🤝", 50, 72, 3, "pulse"]] }
  ],
  facts: [
    ["Births must be registered", "Parents must register a baby's birth within 42 days in England, Wales and Northern Ireland, or within 21 days in Scotland. It is free, and the birth certificate proves who you are for life.", "Births and Deaths Registration Act 1953", "MIX", GOV("register-birth")],
    ["Who has parental responsibility?", "A mother has it automatically. A father usually has it if he is married to the mother or is named on the birth certificate. It lasts until you turn 18.", "Children Act 1989", "EW", GOV("parental-rights-responsibilities")],
    ["Being born here is not automatic citizenship", "A baby born in the UK is only a British citizen automatically if at least one parent is British or 'settled' here. This has been the rule since 1983.", "British Nationality Act 1981", "UK", GOV("check-british-citizenship")],
    ["Maternity leave", "An employee can take up to 52 weeks of maternity leave. The first 2 weeks after the birth are compulsory. Statutory Maternity Pay lasts up to 39 weeks: 90% of pay for 6 weeks, then a flat weekly rate.", "Employment Rights Act 1996", "GB", GOV("maternity-pay-leave")],
    ["Paternity leave", "Dads and partners can take up to 2 weeks of paternity leave. Since April 2026 it is a 'day one' right: you no longer need to have worked for your employer for 26 weeks to take the leave.", "Employment Rights Act 2025", "GB", GOV("paternity-pay-leave")],
    ["Shared parental leave", "Parents can share up to 50 weeks of leave and 37 weeks of pay between them in the baby's first year.", "Children and Families Act 2014", "GB", GOV("shared-parental-leave-and-pay")],
    ["Neonatal care leave", "If a newborn needs hospital care for 7 days or more, each parent can take up to 12 extra weeks of leave. This right began in April 2025.", "Neonatal Care (Leave and Pay) Act 2023", "GB", GOVS("neonatal care leave and pay")],
    ["Child Benefit", "The government pays the person raising a child a weekly amount (about £27 for the first child in 2026–27, and less for each extra child). It normally continues until 16, or 20 if you stay in approved education.", "Social Security Contributions and Benefits Act 1992", "UK", GOV("child-benefit")],
    ["Child car seats", "Children must use the right car seat until they are 12 or 135cm tall. The driver is the one who gets fined (up to £500) if a child under 14 is not properly strapped in.", "Road Traffic Act 1988", "UK", GOV("child-car-seats-the-rules")],
    ["Smacking", "Hitting a child is completely banned in Scotland (since 2020) and Wales (since 2022). In England and Northern Ireland a parent can still claim 'reasonable punishment', but never if it leaves a mark.", "Children Act 2004, s.58", "MIX", GOVS("physical punishment of children law")],
    ["Home alone?", "Surprise: there is no legal minimum age for being left home alone. But it is a crime for parents to leave a child alone if that puts the child at risk.", "Children and Young Persons Act 1933", "EW", GOV("law-on-leaving-your-child-home-alone")],
    ["Free childcare", "In England, working parents can get 30 hours of funded childcare a week for children from 9 months old until they start school. Scotland, Wales and NI have their own schemes.", "Childcare Act 2016", "ENG", GOV("free-childcare-if-working")],
    ["Vaccines are a choice", "Childhood vaccinations on the NHS are free and strongly recommended, but they are not compulsory in the UK. Parents decide.", "NHS vaccination schedule", "UK", NHS("vaccinations/nhs-vaccinations-and-when-to-have-them/")],
    ["Children's rights treaty", "The UK signed up to the UN Convention on the Rights of the Child in 1991. In 2024 Scotland went further and made it part of Scottish law, so children can use it in court.", "UNCRC (Incorporation) (Scotland) Act 2024", "MIX", "https://www.unicef.org.uk/what-we-do/un-convention-child-rights/"]
  ],
  quiz: [
    { q: "How long do parents in England have to register a baby's birth?", o: ["7 days", "21 days", "42 days", "1 year"], a: 2, why: "It is 42 days in England, Wales and Northern Ireland. Scotland is stricter: 21 days." },
    { q: "A baby is born in Manchester to two tourists on holiday. Is the baby automatically British?", o: ["Yes, everyone born in the UK is", "No, a parent must be British or settled in the UK", "Only if born in an NHS hospital", "Only if it's a boy"], a: 1, why: "Since 1983, being born here is not enough. At least one parent must be a British citizen or settled in the UK." },
    { q: "Until what point must a child use a car seat?", o: ["Age 5", "Age 8 or 100cm", "Age 12 or 135cm tall", "Age 16"], a: 2, why: "12 years old or 135cm tall, whichever comes first." },
    { q: "What is the legal minimum age to be left home alone in England?", o: ["8", "12", "14", "There isn't one"], a: 3, why: "No age is written in law. But parents commit an offence if leaving a child alone puts them at risk." },
    { q: "Where in the UK is smacking a child completely banned?", o: ["Nowhere", "Scotland and Wales", "Only England", "The whole UK"], a: 1, why: "Scotland banned it in 2020 and Wales in 2022. England and NI still allow a limited 'reasonable punishment' defence." },
    { q: "How many weeks of maternity leave can an employee take?", o: ["12", "26", "39", "52"], a: 3, why: "Up to 52 weeks of leave. Pay only lasts for up to 39 of them." },
    { q: "What does 'parental responsibility' mean?", o: ["Parents can do anything they like", "Legal rights AND duties to care for a child", "Parents pay a special tax", "Only the mum makes decisions"], a: 1, why: "It is a bundle of rights and duties: to protect, house, educate and make decisions for a child until 18." },
    { q: "Are childhood vaccinations compulsory in the UK?", o: ["Yes, by law", "Only for school", "No, they are recommended but optional", "Only in Wales"], a: 2, why: "They are free and recommended, but UK law does not force anyone to be vaccinated." },
    { q: "Who gets fined if a 9-year-old isn't wearing a seat belt?", o: ["The child", "The driver", "The car maker", "Nobody"], a: 1, why: "The driver is responsible for passengers under 14. From 14, it's on you." }
  ],
  refs: [
    ["Register a birth (GOV.UK)", GOV("register-birth"), "gov"],
    ["Parental rights and responsibilities (GOV.UK)", GOV("parental-rights-responsibilities"), "gov"],
    ["Children Act 1989 (full text)", ACT("ukpga/1989/41/contents"), "law"],
    ["Your rights as a child: UNICEF UK", "https://www.unicef.org.uk/what-we-do/un-convention-child-rights/", "help"],
    ["Childline: free help for under-19s (0800 1111)", "https://www.childline.org.uk/", "help"],
    ["Video search: UN Convention on the Rights of the Child explained", YT("UN Convention on the Rights of the Child explained for kids UNICEF"), "video"],
    ["Video search: parental responsibility explained UK", YT("parental responsibility explained UK law"), "video"]
  ]
});

LAW.add({
  id: "school", icon: "🎒", title: "School Days", ages: "Age 5–16", color: "#ffb347",
  tagline: "Education is a right. It is also the law.",
  scenes: [
    { bg: "sky", cap: "Every child in the UK has the right to a free education. Your parents have a legal duty to make sure you get one.",
      actors: [["🏫", 50, 44, 7, "pop"], ["🧒", 22, 68, 3.5, "walk-r"], ["👧", 78, 68, 3.5, "walk-l"], ["🎒", 50, 74, 3, "bounce"]] },
    { bg: "room", cap: "It doesn't have to be at school! Home education is legal, as long as it is full-time and suitable for the child.",
      actors: [["🏠", 20, 40, 5, "pop"], ["👩‍🏫", 44, 60, 4, "sway"], ["📚", 62, 62, 3.5, "bounce"], ["🧒", 78, 62, 3.5, "bounce", "Maths at home!"]] },
    { bg: "office", cap: "Skip school without a good reason and your parents can be fined: £80 each in England, rising to £160 if they pay late.",
      actors: [["🏖️", 22, 46, 5, "float"], ["👨‍👩‍👧", 50, 62, 4.5, "shake"], ["💸", 76, 40, 4, "drop", "£80 fine"], ["📅", 88, 66, 3, "pulse"]] },
    { bg: "sky", cap: "Schools must treat pupils fairly. The Equality Act 2010 bans discrimination because of race, religion, sex, disability and more.",
      actors: [["⚖️", 50, 36, 5.5, "sway"], ["🧕", 24, 66, 3.5, "bounce"], ["👦🏿", 40, 66, 3.5, "bounce"], ["🧑‍🦽", 60, 66, 3.5, "bounce"], ["👧🏻", 76, 66, 3.5, "bounce"]] },
    { bg: "room", cap: "Teachers can confiscate things and search bags for banned items like knives, vapes and alcohol. But hitting pupils has been banned for decades.",
      actors: [["👨‍🏫", 30, 58, 4, "sway"], ["🎒", 54, 66, 3.5, "shake"], ["🚫", 74, 38, 4, "pulse"], ["🔪", 74, 38, 2.2, "pop"]] },
    { bg: "sky", cap: "At 16 the path splits. In England you must stay in education or training until 18. In Scotland, Wales and NI you can leave at 16.",
      actors: [["🎓", 26, 40, 4.5, "float"], ["🔧", 74, 40, 4.5, "float"], ["🧑", 50, 66, 4, "bounce", "Which way?"], ["🛣️", 50, 82, 4, "pop"]] }
  ],
  facts: [
    ["Compulsory school age", "In England and Wales you must be in full-time education from the term after your 5th birthday. Northern Ireland starts earliest in Europe, at age 4.", "Education Act 1996, s.7–8", "MIX", GOV("school-attendance-absence")],
    ["When can you leave?", "In England you can leave school on the last Friday in June of the school year you turn 16, but you must then stay in education, an apprenticeship or training until 18. In Scotland, Wales and NI you can simply leave at 16.", "Education and Skills Act 2008", "MIX", GOV("know-when-you-can-leave-school")],
    ["Home education is legal", "Parents may teach their children at home. They don't have to follow the national curriculum, but the education must be full-time and suitable for the child's age and ability.", "Education Act 1996, s.7", "EW", GOV("home-education")],
    ["Fines for skipping school", "In England, missing 10 sessions (5 days) without permission can mean a fine of £80 per parent, per child (£160 if not paid in 21 days). A third offence in 3 years goes to court, where the fine can reach £2,500.", "Education Act 1996, s.444", "ENG", GOV("school-attendance-absence/legal-action-to-enforce-school-attendance")],
    ["No more caning", "Corporal punishment (hitting pupils) was banned in UK state schools in 1986 and in all private schools by 2003.", "Education (No. 2) Act 1986", "UK", WIKI("School corporal punishment in the United Kingdom")],
    ["Searching and confiscating", "In England, head teachers and authorised staff can search you without consent for banned items: knives, weapons, alcohol, drugs, stolen goods, tobacco, vapes, fireworks and pornographic images.", "Education Act 1996, s.550ZA", "ENG", GOV("government/publications/searching-screening-and-confiscation")],
    ["Detention", "Schools in England can give detentions (even at weekends) without your parents' consent. They don't legally have to give 24 hours' notice, though many do.", "Education and Inspections Act 2006", "ENG", GOV("school-discipline-exclusions")],
    ["Suspension and exclusion", "Only the head teacher can exclude a pupil. A pupil can't be suspended for more than 45 school days in one school year, and parents can challenge a permanent exclusion.", "Education Act 2002, s.51A", "ENG", GOV("school-discipline-exclusions/exclusions")],
    ["Bullying", "Every state school must by law have a behaviour policy that includes measures to prevent all forms of bullying, including cyberbullying.", "Education and Inspections Act 2006, s.89", "EW", GOV("bullying-at-school")],
    ["Equality at school", "A school must not discriminate against a pupil because of disability, race, religion, sex, sexual orientation, gender reassignment or pregnancy. It must also make 'reasonable adjustments' for disabled pupils.", "Equality Act 2010", "GB", ACT("ukpga/2010/15/contents")],
    ["Extra support (SEND)", "Children with special educational needs can get an Education, Health and Care Plan (EHCP) in England. It can last from birth right up to age 25.", "Children and Families Act 2014", "ENG", GOV("children-with-special-educational-needs")],
    ["Free school meals", "All state-school pupils in Reception to Year 2 in England get a free lunch. Wales gives free meals to all primary pupils. From September 2026 England extended free meals to every child whose family gets Universal Credit.", "Education Act 1996, s.512ZB", "MIX", GOV("apply-free-school-meals")],
    ["Free travel to school", "Councils in England must provide free transport if your nearest suitable school is more than 2 miles away (under 8s) or 3 miles away (8 and over).", "Education Act 1996, s.508B", "ENG", GOV("free-school-transport")],
    ["Jobs for under-16s", "You can get a part-time job at 13. On a school day you may work at most 2 hours, never during lessons, and never before 7am or after 7pm. In term time the weekly limit is 12 hours.", "Children and Young Persons Act 1933", "GB", GOV("child-employment")],
    ["School uniform costs", "Schools in England must follow legal guidance to keep uniforms affordable, for example by limiting expensive branded items.", "Education (Guidance about Costs of School Uniforms) Act 2021", "ENG", GOV("government/publications/cost-of-school-uniforms")]
  ],
  quiz: [
    { q: "Is it legal for parents to educate their child at home instead of sending them to school?", o: ["No, never", "Yes, if the education is full-time and suitable", "Only with a court order", "Only until age 7"], a: 1, why: "The law requires education, not school. Home education is allowed if it is suitable and full-time." },
    { q: "In England, what is the fine for each parent if a child misses school without permission (paid within 21 days)?", o: ["£20", "£80", "£500", "£1,000"], a: 1, why: "£80 per parent per child, doubling to £160 if paid late." },
    { q: "In England, until what age must you stay in some form of education or training?", o: ["14", "16", "18", "21"], a: 2, why: "You can leave school at 16, but must continue in education, an apprenticeship or training until 18. Scotland, Wales and NI let you leave at 16." },
    { q: "From what age can you legally have a part-time job like a paper round?", o: ["10", "13", "15", "16"], a: 1, why: "13 is the general minimum age, with strict limits on hours." },
    { q: "A 14-year-old with a Saturday job: what is the latest time they can work in the evening?", o: ["5pm", "7pm", "9pm", "Midnight"], a: 1, why: "Under-16s cannot work before 7am or after 7pm." },
    { q: "Can a teacher in England search your bag for a knife without your permission?", o: ["No, never", "Yes, authorised staff can search for banned items", "Only if a police officer is there", "Only with your parents' consent"], a: 1, why: "Authorised staff can search without consent for prohibited items such as knives, drugs, alcohol and vapes." },
    { q: "When was hitting pupils banned in UK state schools?", o: ["1944", "1986", "2003", "It is still allowed"], a: 1, why: "State schools: 1986. The last private schools (in Northern Ireland) followed by 2003." },
    { q: "What is the maximum number of school days a pupil can be suspended for in one school year in England?", o: ["5", "15", "45", "No limit"], a: 2, why: "45 school days in a single school year." },
    { q: "What must every state school have by law?", o: ["A swimming pool", "A policy to prevent bullying", "A school dog", "A uniform"], a: 1, why: "The Education and Inspections Act 2006 requires measures to prevent all forms of bullying. Uniform is the school's choice, not a legal must." }
  ],
  refs: [
    ["School attendance and absence (GOV.UK)", GOV("school-attendance-absence"), "gov"],
    ["When you can leave school (GOV.UK)", GOV("know-when-you-can-leave-school"), "gov"],
    ["Child employment rules (GOV.UK)", GOV("child-employment"), "gov"],
    ["Education Act 1996 (full text)", ACT("ukpga/1996/56/contents"), "law"],
    ["Equality Act 2010 (full text)", ACT("ukpga/2010/15/contents"), "law"],
    ["Bullying at school: your rights (GOV.UK)", GOV("bullying-at-school"), "gov"],
    ["BBC Bitesize: Citizenship lessons", "https://www.bbc.co.uk/bitesize/subjects/zmsvr82", "video"],
    ["Video search: your rights at school UK", YT("your rights at school UK law explained"), "video"]
  ]
});

LAW.add({
  id: "teen", icon: "🧑‍🎤", title: "Teen Rights", ages: "Age 13–17", color: "#b388ff",
  tagline: "Every birthday unlocks something new. Know what, and when.",
  scenes: [
    { bg: "night", cap: "Growing up in the UK is like levelling up. Each birthday unlocks new legal powers, and new responsibilities.",
      actors: [["🎂", 50, 44, 5.5, "pop"], ["🔓", 26, 36, 3.5, "float"], ["🔓", 74, 36, 3.5, "float"], ["🧑", 50, 72, 4, "bounce"]] },
    { bg: "room", cap: "At 13 you can get a part-time job, and online services are allowed to ask YOU, not your parents, for consent to use your data.",
      actors: [["📱", 30, 52, 4.5, "pulse"], ["🗞️", 60, 58, 4, "bounce"], ["1️⃣", 76, 30, 3, "drop"], ["3️⃣", 86, 30, 3, "drop"]] },
    { bg: "sky", cap: "At 16 a lot changes: you can work full-time, earn the minimum wage, consent to your own medical treatment, ride a moped and change your name.",
      actors: [["🛵", 26, 66, 4.5, "zoom"], ["💷", 50, 36, 4, "float"], ["🩺", 72, 60, 4, "pop"], ["✍️", 86, 36, 3.5, "pulse"]] },
    { bg: "night", cap: "But some things stay locked until 18, wherever you live: buying alcohol, vapes, knives and fireworks, getting a tattoo, and gambling.",
      actors: [["🍺", 20, 50, 3.8, "shake"], ["💨", 36, 50, 3.8, "shake"], ["🔪", 52, 50, 3.8, "shake"], ["🎆", 68, 50, 3.8, "shake"], ["🎰", 84, 50, 3.8, "shake"], ["🔒", 52, 22, 4, "drop"]] },
    { bg: "road", cap: "Carrying a knife in public without a very good reason is a crime, even if you never use it. The sentence can be up to 4 years.",
      actors: [["🔪", 40, 46, 4.5, "shake"], ["🚫", 40, 46, 7, "pulse"], ["👮", 74, 62, 4.5, "walk-l", "Stop there."]] },
    { bg: "night", cap: "Online counts too. Threats, hate, and sharing private or nude images can all be crimes. A nude selfie of anyone under 18 is illegal to make, send or keep.",
      actors: [["📱", 34, 54, 5, "shake"], ["💬", 56, 38, 3.5, "float"], ["⚠️", 74, 54, 4.5, "pulse"], ["⚖️", 88, 34, 3.5, "sway"]] }
  ],
  facts: [
    ["Age 10: criminal responsibility", "From age 10 in England, Wales and Northern Ireland you can be arrested and charged with a crime. In Scotland the age is 12.", "Children and Young Persons Act 1933, s.50", "MIX", GOV("age-of-criminal-responsibility")],
    ["Age 13: your data, your consent", "From 13, apps and websites can rely on your own consent to use your personal data. Under 13, they need a parent's consent. That is why so many apps say '13+'.", "Data Protection Act 2018, s.9", "UK", "https://ico.org.uk/for-the-public/"],
    ["Age 14: your seat belt, your fine", "From 14 you, not the driver, are responsible for wearing a seat belt. The fine can be up to £500.", "Road Traffic Act 1988, s.14–15", "UK", GOV("seat-belts-law")],
    ["Age 16: the big unlock", "At 16 you can: work full-time (with training, in England), get the minimum wage, get a National Insurance number, ride a 50cc moped, join the armed forces with a parent's consent, buy a pet, and change your name by deed poll.", "Various Acts", "UK", GOV("change-name-deed-poll")],
    ["Age 16: medical consent", "At 16 the law presumes you can agree to your own medical treatment, just like an adult. Under 16 you still can if you understand enough (this is called Gillick competence).", "Family Law Reform Act 1969, s.8", "EW", NHS("conditions/consent-to-treatment/children/")],
    ["Age of consent", "The age of consent for sex is 16 everywhere in the UK, for everyone. It rises to 18 if the older person is in a 'position of trust', such as a teacher or sports coach.", "Sexual Offences Act 2003", "UK", ACT("ukpga/2003/42/contents")],
    ["Marriage: 18 in England and Wales", "Since February 2023 you must be 18 to marry in England and Wales, with no exceptions, even with parents' permission. In Scotland it is 16; in Northern Ireland 16–17-year-olds need parental consent.", "Marriage and Civil Partnership (Minimum Age) Act 2022", "MIX", GOV("marriages-civil-partnerships")],
    ["Alcohol", "You must be 18 to buy alcohol. At 16 or 17 you may drink beer, wine or cider with a table meal in a pub or restaurant if an adult is with you and buys it. It is illegal to give alcohol to a child under 5.", "Licensing Act 2003", "EW", GOV("alcohol-young-people-law")],
    ["Tobacco and vapes", "You must be 18 to buy vapes. Single-use (disposable) vapes were banned across the UK in June 2025. Under the Tobacco and Vapes Act 2026, nobody born on or after 1 January 2009 will ever be allowed to be sold tobacco.", "Tobacco and Vapes Act 2026", "UK", GOVS("Tobacco and Vapes Act smokefree generation")],
    ["Tattoos", "It is illegal to tattoo anyone under 18, even if a parent says yes. (Ear and body piercings have no minimum age in England.)", "Tattooing of Minors Act 1969", "GB", ACT("ukpga/1969/24/contents")],
    ["Knives", "It is illegal to carry a knife in public without a good reason. The only exception is a folding pocket knife with a blade of 3 inches (7.62cm) or less. Shops cannot sell most knives to under-18s. Zombie knives and ninja swords are banned outright.", "Criminal Justice Act 1988, s.139", "EW", GOV("buying-carrying-knives")],
    ["Drugs", "Illegal drugs are grouped into Class A, B and C. Cannabis is Class B: possession can mean up to 5 years in prison. Nitrous oxide (laughing gas) became Class C in 2023.", "Misuse of Drugs Act 1971", "UK", GOV("penalties-drug-possession-dealing")],
    ["Nudes and sexting", "Taking, sending or keeping a nude or sexual image of anyone under 18 is a crime, even if it's a selfie and even if both people agree. Sharing anyone's intimate image without consent is also a crime. If it happens to you, Childline's 'Report Remove' tool can get images taken down.", "Protection of Children Act 1978; Online Safety Act 2023", "EW", "https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/report-remove/"],
    ["Online Safety Act", "Since 2025, websites and apps must protect under-18s from harmful content, and sites with adult content must check users' ages properly. Ofcom can fine companies up to 10% of their worldwide income.", "Online Safety Act 2023", "UK", GOV("government/publications/online-safety-act-explainer")],
    ["Lottery and gambling", "You must be 18 to gamble, and since April 2021 that includes National Lottery tickets and scratchcards (it used to be 16).", "Gambling Act 2005", "GB", GOVS("National Lottery minimum age 18")],
    ["E-scooters", "A privately owned e-scooter is illegal to ride on public roads, pavements and cycle lanes. Only official rental-scheme scooters are allowed, and you need at least a provisional driving licence.", "Road Traffic Act 1988", "GB", GOV("guidance/e-scooter-trials-guidance-for-users")],
    ["Voting at 16?", "16-year-olds can already vote in Scottish Parliament, Welsh Senedd and local elections in those nations. A Bill to lower the voting age to 16 for ALL UK elections passed the House of Commons in September 2026 and is now in the House of Lords.", "Representation of the People Bill", "MIX", GOVS("votes at 16")]
  ],
  quiz: [
    { q: "What is the age of criminal responsibility in England?", o: ["8", "10", "14", "16"], a: 1, why: "10 in England, Wales and Northern Ireland. Scotland raised its age to 12." },
    { q: "Your parents say you can get a tattoo for your 16th birthday. Is it legal?", o: ["Yes, with their consent", "Yes, if it's small", "No, you must be 18", "Only in Wales"], a: 2, why: "The Tattooing of Minors Act 1969 bans tattooing under-18s, even with parental consent." },
    { q: "Since 2023, how old must you be to get married in England and Wales?", o: ["16", "17 with consent", "18", "21"], a: 2, why: "The minimum age rose to 18 in February 2023 to protect young people from forced marriage." },
    { q: "Which knife can you legally carry in public without needing a reason?", o: ["Any kitchen knife", "A folding pocket knife with a blade under 3 inches", "A lock knife", "None at all"], a: 1, why: "Only a non-locking folding knife with a blade of 3 inches (7.62cm) or less." },
    { q: "A 15-year-old sends a nude selfie to their 15-year-old partner. What does the law say?", o: ["It's fine, they both agreed", "It's only illegal if shared further", "Creating and sending it is an offence", "It's legal with parental permission"], a: 2, why: "Any indecent image of an under-18 is illegal to make, send or possess, even a selfie. Police usually focus on safeguarding, not punishing, but it is still an offence." },
    { q: "At what age do you become responsible for your own seat belt?", o: ["10", "12", "14", "17"], a: 2, why: "From 14, the fine lands on you instead of the driver." },
    { q: "Can a 16-year-old buy a National Lottery scratchcard?", o: ["Yes", "No, it has been 18 since 2021", "Only online", "Only with an adult"], a: 1, why: "The age rose from 16 to 18 in April 2021." },
    { q: "Can you ride your own e-scooter on the pavement?", o: ["Yes", "Yes, under 10mph", "No, private e-scooters are illegal in public places", "Only with a helmet"], a: 2, why: "Private e-scooters can only be used on private land. Only rental-trial scooters are road legal." },
    { q: "What changed for disposable vapes in June 2025?", o: ["They became free", "Age limit dropped to 16", "They were banned from sale", "Nothing"], a: 2, why: "Selling single-use vapes was banned across the UK from 1 June 2025." },
    { q: "At 16, who decides about your medical treatment?", o: ["Always your parents", "You are presumed able to decide yourself", "Your head teacher", "A judge"], a: 1, why: "The Family Law Reform Act 1969 says 16- and 17-year-olds can consent to their own treatment." }
  ],
  refs: [
    ["Age of criminal responsibility (GOV.UK)", GOV("age-of-criminal-responsibility"), "gov"],
    ["Buying and carrying knives (GOV.UK)", GOV("buying-carrying-knives"), "gov"],
    ["Alcohol and young people (GOV.UK)", GOV("alcohol-young-people-law"), "gov"],
    ["Online Safety Act explainer (GOV.UK)", GOV("government/publications/online-safety-act-explainer"), "gov"],
    ["Childline: Report Remove (get a nude image taken down)", "https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/report-remove/", "help"],
    ["Your data rights: Information Commissioner's Office", "https://ico.org.uk/for-the-public/", "help"],
    ["Talk to Frank: honest drug information", "https://www.talktofrank.com/", "help"],
    ["Video search: what age can you do things in the UK", YT("what age can you legally do things UK"), "video"],
    ["Video search: knife crime law UK explained", YT("knife crime law UK explained for young people"), "video"]
  ]
});
