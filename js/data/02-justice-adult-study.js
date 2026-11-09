/* Stages 4-6: police & courts, turning 18 & democracy, university & training. */

LAW.add({
  id: "justice", icon: "⚖️", title: "Police, Courts & You", ages: "Any age", color: "#5c9ded",
  tagline: "Know your rights if you ever meet the justice system.",
  scenes: [
    { bg: "road", cap: "Police can stop and search you, but usually only with 'reasonable grounds' to think you're carrying something illegal. They must tell you why.",
      actors: [["👮", 30, 62, 4.5, "walk-r", "I need to search you because…"], ["🧑", 66, 62, 4.2, "sway"], ["📋", 86, 34, 3.5, "pop"]] },
    { bg: "night", cap: "If you're arrested, you'll hear the caution: 'You do not have to say anything…'. That is your right to silence.",
      actors: [["🚓", 20, 66, 5, "zoom"], ["👮", 46, 60, 4.2, "sway"], ["🧑", 68, 60, 4.2, "shake"], ["🤐", 86, 32, 3.5, "pulse"]] },
    { bg: "office", cap: "At the station you get three key rights: free legal advice, having someone told where you are, and, if you're under 18, an appropriate adult beside you.",
      actors: [["👩‍⚖️", 22, 58, 4, "walk-r", "Free solicitor"], ["📞", 50, 40, 4, "shake"], ["👩", 76, 58, 4, "walk-l", "Appropriate adult"]] },
    { bg: "court", cap: "Under-18s go to a Youth Court. There's no jury, no wigs, the public can't come in, and your name is normally kept out of the news.",
      actors: [["🏛️", 50, 34, 6, "pop"], ["🧑‍⚖️", 30, 62, 4, "sway"], ["🧑", 54, 66, 3.8, "bounce"], ["👩", 70, 66, 3.8, "sway"]] },
    { bg: "court", cap: "For serious crimes, a jury of 12 ordinary people decides in the Crown Court. They must be SURE you are guilty: 'beyond reasonable doubt'.",
      actors: [["🧑‍⚖️", 50, 30, 4.5, "sway"], ["🧑", 16, 68, 3, "bounce"], ["👩", 28, 68, 3, "bounce"], ["👨🏾", 40, 68, 3, "bounce"], ["👵", 52, 68, 3, "bounce"], ["🧔", 64, 68, 3, "bounce"], ["👩🏻", 76, 68, 3, "bounce"], ["12", 90, 60, 2.6, "pulse"]] },
    { bg: "court", cap: "Two kinds of law: CRIMINAL (the state v you, ends in punishment) and CIVIL (person v person, ends in compensation).",
      actors: [["🚔", 26, 44, 4.5, "pop"], ["⛓️", 26, 72, 3.2, "sway"], ["⚖️", 50, 36, 4, "sway"], ["🤝", 74, 44, 4.5, "pop"], ["💷", 74, 72, 3.2, "float"]] }
  ],
  facts: [
    ["Stop and search", "Police can search you if they have reasonable grounds to suspect you have drugs, a weapon, stolen property or something to commit a crime. They must tell you their name, station, what they're looking for and why. You are entitled to a record of the search.", "Police and Criminal Evidence Act 1984 (PACE), s.1", "EW", GOV("police-powers-to-stop-and-search-your-rights")],
    ["'Stop and account'", "If an officer just asks what you're doing or where you're going, you don't have to answer or give your name, and walking away is not by itself a reason to search or arrest you.", "PACE Code A", "EW", GOV("police-powers-to-stop-and-search-your-rights")],
    ["The caution", "On arrest police must say: 'You do not have to say anything. But it may harm your defence if you do not mention when questioned something which you later rely on in court. Anything you do say may be given in evidence.'", "PACE Code C", "EW", GOV("arrested-your-rights")],
    ["Rights at the police station", "You have the right to free legal advice, to have someone told where you are, to medical help, and to see the rules police must follow. Under-18s must have an appropriate adult present for interviews.", "PACE 1984, s.56 & 58", "EW", GOV("arrested-your-rights")],
    ["How long can police hold you?", "Normally up to 24 hours before they must charge or release you. For serious crimes a senior officer can extend to 36 hours, and a court to 96 hours. Terrorism suspects can be held for up to 14 days.", "PACE 1984, s.41–44", "EW", GOV("arrested-your-rights/how-long-you-can-be-held-in-custody")],
    ["Youth court", "People aged 10 to 17 are usually tried in a youth court: less formal, no jury, parents attend, and the media generally cannot name the child.", "Children and Young Persons Act 1933", "EW", GOV("courts/youth-courts")],
    ["Magistrates and Crown Court", "Nearly all criminal cases begin in a magistrates' court, with no jury. Serious cases move up to the Crown Court, where a jury of 12 decides guilt and the judge decides the sentence.", "Senior Courts Act 1981", "EW", GOV("courts")],
    ["Innocent until proven guilty", "The prosecution must prove a crime 'beyond reasonable doubt'. The accused doesn't have to prove anything. This 'golden thread' was confirmed in Woolmington v DPP (1935).", "Woolmington v DPP [1935]", "UK", WIKI("Woolmington v DPP")],
    ["Civil cases", "In civil disputes (contracts, injuries, debts) the claimant must prove their case 'on the balance of probabilities', meaning more likely than not.", "Common law", "UK", GOV("make-court-claim-for-money")],
    ["Scotland is different", "Scotland has its own legal system: 15 jurors, sheriff courts, the Procurator Fiscal instead of the CPS, and children's hearings instead of youth courts.", "Criminal Procedure (Scotland) Act 1995", "SCO", "https://www.scotcourts.gov.uk/"],
    ["Joint enterprise", "If you help or encourage a crime, you can be convicted as if you did it yourself. Since R v Jogee (2016), the prosecution must prove you INTENDED to help or encourage, not just that you were there.", "R v Jogee [2016] UKSC 8", "EW", WIKI("R v Jogee")],
    ["Criminal records", "A conviction or caution can show up on DBS checks for jobs. Most become 'spent' after a set time, and under-18s get shorter periods, so one mistake doesn't have to follow you forever.", "Rehabilitation of Offenders Act 1974", "GB", GOV("tell-employer-or-college-about-criminal-record")],
    ["Hate crime", "If a crime is driven by hostility towards someone's race, religion, disability, sexual orientation or transgender identity, courts must hand out a tougher sentence.", "Sentencing Act 2020, s.66", "EW", GOV("report-hate-crime")],
    ["Victims have rights too", "The Victims' Code gives victims of crime 12 rights, including being kept informed, making a personal statement, and getting support.", "Victims and Prisoners Act 2024", "EW", GOV("government/publications/the-code-of-practice-for-victims-of-crime")],
    ["The Supreme Court", "The UK's top court opened in 2009, taking over from the Law Lords in the House of Lords. Its 12 Justices only hear cases about points of law that matter to everyone.", "Constitutional Reform Act 2005", "UK", "https://www.supremecourt.uk/"]
  ],
  quiz: [
    { q: "During a stop and search, what must the officer tell you?", o: ["Nothing", "Their name, station, what they're looking for and why", "Your star sign", "Only their badge number"], a: 1, why: "Officers must explain who they are, the legal power used, the reason and what they expect to find." },
    { q: "How long can police normally hold you before charging or releasing you?", o: ["6 hours", "24 hours", "7 days", "As long as they want"], a: 1, why: "24 hours is the standard limit, extendable for serious offences." },
    { q: "A 15-year-old is arrested. Who must be present at the police interview?", o: ["A journalist", "An appropriate adult", "The head teacher", "Nobody"], a: 1, why: "Under-18s must have an appropriate adult: a parent, guardian, social worker or trained volunteer." },
    { q: "How much does legal advice at the police station cost?", o: ["£50", "£200 an hour", "It's free", "It depends on the crime"], a: 2, why: "Everyone has the right to free legal advice at the police station, whatever their income." },
    { q: "How sure must a jury be to convict someone of a crime?", o: ["51% sure", "Fairly sure", "Sure beyond reasonable doubt", "Whatever the judge says"], a: 2, why: "Criminal cases need proof beyond reasonable doubt. Civil cases only need 'more likely than not'." },
    { q: "How many jurors sit in a Crown Court trial in England?", o: ["6", "9", "12", "15"], a: 2, why: "12 in England, Wales and Northern Ireland. Scotland uses 15 for criminal trials." },
    { q: "Someone sues a shop after slipping on a wet floor. What kind of law is this?", o: ["Criminal law", "Civil law", "Military law", "Royal law"], a: 1, why: "It's a civil claim for negligence between two parties, aiming at compensation rather than punishment." },
    { q: "Who decides the SENTENCE in a Crown Court trial?", o: ["The jury", "The judge", "The police", "The victim"], a: 1, why: "The jury decides guilty or not guilty. The judge decides the sentence." },
    { q: "Your friend robs a shop while you stand outside knowing nothing about it. After R v Jogee, can you be guilty just for being there?", o: ["Yes, always", "No, the prosecution must prove you intended to help or encourage", "Only on weekdays", "Only if you're over 18"], a: 1, why: "Mere presence isn't enough. There must be intentional help or encouragement." },
    { q: "When did the UK Supreme Court open?", o: ["1215", "1689", "1998", "2009"], a: 3, why: "October 2009. Before that, the top court was a committee of the House of Lords." }
  ],
  refs: [
    ["Stop and search: your rights (GOV.UK)", GOV("police-powers-to-stop-and-search-your-rights"), "gov"],
    ["Being arrested: your rights (GOV.UK)", GOV("arrested-your-rights"), "gov"],
    ["Youth courts (GOV.UK)", GOV("courts/youth-courts"), "gov"],
    ["PACE 1984 (full text)", ACT("ukpga/1984/60/contents"), "law"],
    ["UK Supreme Court: watch real hearings", "https://www.supremecourt.uk/", "video"],
    ["Courts and Tribunals Judiciary: how courts work", "https://www.judiciary.uk/", "help"],
    ["Y-Stop: stop and search advice for young people", "https://y-stop.org/", "help"],
    ["Video search: stop and search rights UK", YT("stop and search your rights UK explained"), "video"],
    ["Video search: what happens in a Crown Court trial", YT("what happens in a crown court trial UK"), "video"]
  ]
});

LAW.add({
  id: "adult", icon: "🗳️", title: "Turning 18 & Democracy", ages: "Age 18+", color: "#4dd0a5",
  tagline: "You're an adult. Now you help decide the rules.",
  scenes: [
    { bg: "sky", cap: "Happy 18th! In law you are now an adult. You can vote, sign contracts, be on a jury, and even stand to become an MP.",
      actors: [["🎉", 24, 34, 4.5, "pop"], ["🧑", 50, 62, 4.5, "bounce", "I'm 18!"], ["🗳️", 76, 40, 4.5, "drop"]] },
    { bg: "court", cap: "So who makes the law? Parliament! It has three parts: the House of Commons (650 elected MPs), the House of Lords, and the King.",
      actors: [["🏛️", 50, 36, 7, "pop"], ["🟢", 26, 72, 3.2, "pulse", "Commons"], ["🔴", 50, 74, 3.2, "pulse", "Lords"], ["👑", 74, 72, 3.2, "pulse", "King"]] },
    { bg: "office", cap: "A new law starts life as a Bill. MPs debate it at a First Reading, Second Reading, Committee Stage, Report Stage and Third Reading.",
      actors: [["📄", 12, 56, 3.5, "slide-across", "Bill"], ["1️⃣", 24, 30, 2.6, "pop"], ["2️⃣", 40, 30, 2.6, "pop"], ["🔍", 56, 30, 2.6, "pop"], ["📝", 72, 30, 2.6, "pop"], ["3️⃣", 88, 30, 2.6, "pop"]] },
    { bg: "court", cap: "Then the other House does it all again. They send changes back and forth. This is nicknamed 'parliamentary ping-pong'!",
      actors: [["🟢", 20, 56, 5, "pulse"], ["🔴", 80, 56, 5, "pulse"], ["🏓", 50, 50, 4, "pingpong"]] },
    { bg: "sky", cap: "Finally the King gives Royal Assent, and the Bill becomes an Act of Parliament: the law of the land. No monarch has said no since 1708!",
      actors: [["👑", 50, 30, 5, "drop"], ["📜", 50, 64, 5.5, "pop", "It's an Act!"], ["✨", 28, 46, 3, "pulse"], ["✨", 72, 46, 3, "pulse"]] },
    { bg: "sky", cap: "Four nations, three legal systems. Scotland, Wales and Northern Ireland have their own parliaments that make laws on things like health and schools.",
      actors: [["🏴󠁧󠁢󠁥󠁮󠁧󠁿", 22, 44, 4.2, "float"], ["🏴󠁧󠁢󠁳󠁣󠁴󠁿", 42, 36, 4.2, "float"], ["🏴󠁧󠁢󠁷󠁬󠁳󠁿", 62, 44, 4.2, "float"], ["☘️", 82, 36, 4.2, "float"], ["🇬🇧", 50, 72, 4.5, "pulse"]] }
  ],
  facts: [
    ["Adult at 18", "The 'age of majority' has been 18 since 1970 (it used to be 21). At 18 you can sign binding contracts, get a credit card, own land, make a will, sue and be sued in your own name.", "Family Law Reform Act 1969", "EW", ACT("ukpga/1969/46/contents")],
    ["Voting", "You can vote in UK general elections at 18 if you are registered. You can register from 16 (14 in Scotland and Wales). In Great Britain you must show photo ID at the polling station.", "Representation of the People Act 1983; Elections Act 2022", "MIX", GOV("register-to-vote")],
    ["General elections", "There are 650 MPs. A general election must be held at least every 5 years, and the candidate with the most votes in each area wins ('first past the post').", "Dissolution and Calling of Parliament Act 2022", "UK", "https://www.parliament.uk/about/how/elections-and-voting/general/"],
    ["How a Bill becomes law", "First Reading → Second Reading → Committee Stage → Report Stage → Third Reading → the same in the other House → both Houses agree the wording → Royal Assent.", "Parliamentary procedure", "UK", "https://www.parliament.uk/about/how/laws/passage-bill/"],
    ["An unwritten constitution", "Unlike most countries, the UK has no single constitution document. The rules are spread across Acts, court decisions and traditions, including Magna Carta (1215) and the Bill of Rights (1689).", "Constitutional convention", "UK", "https://www.parliament.uk/about/living-heritage/evolutionofparliament/originsofparliament/birthofparliament/overview/magnacarta/"],
    ["Parliament is sovereign", "Parliament can make or change any law, and no court can strike an Act down. Courts CAN, however, rule that the government or a public body acted unlawfully (judicial review).", "Constitutional principle", "UK", "https://www.parliament.uk/site-information/glossary/parliamentary-sovereignty/"],
    ["Devolution", "Since 1999 the Scottish Parliament, the Welsh Senedd and the Northern Ireland Assembly make their own laws on 'devolved' topics like health, education and transport. Defence and foreign affairs stay with Westminster.", "Scotland Act 1998; Government of Wales Act 2006; Northern Ireland Act 1998", "UK", GOV("guidance/devolution-of-powers-to-scotland-wales-and-northern-ireland")],
    ["Human Rights Act", "This Act lets you defend 16 basic rights in UK courts, including the right to life, a fair trial, privacy, free speech, peaceful protest and freedom from discrimination. Public bodies such as police, schools and councils must respect them.", "Human Rights Act 1998", "UK", ACT("ukpga/1998/42/contents")],
    ["Jury service", "If you're 18 to 75 and on the electoral register you can be summoned for jury service. It usually lasts about 10 working days. Ignoring the summons can mean a fine of up to £1,000.", "Juries Act 1974", "EW", GOV("jury-service")],
    ["Standing for election", "You can stand to be an MP at 18. You pay a £500 deposit, which you get back if you win more than 5% of the votes.", "Electoral Administration Act 2006", "UK", "https://www.electoralcommission.org.uk/"],
    ["Petitions", "Anyone can start a petition to Parliament. At 10,000 signatures the government must respond. At 100,000 it is considered for a debate.", "House of Commons Petitions Committee", "UK", "https://petition.parliament.uk/"],
    ["The right to protest", "Peaceful protest is protected by Articles 10 and 11 of the European Convention on Human Rights. Police can set conditions on marches, and some tactics, like 'locking on', are now offences.", "Human Rights Act 1998; Public Order Act 2023", "EW", "https://www.libertyhumanrights.org.uk/advice_information/right-to-protest/"],
    ["Contracts before 18", "Most contracts made by under-18s can't be enforced against them, except for 'necessaries' like food, clothes and training. That is why phone contracts need an adult.", "Minors' Contracts Act 1987", "EW", ACT("ukpga/1987/13/contents")],
    ["How votes for all were won", "In 1918 women over 30 and all men over 21 got the vote. Women got equal voting rights in 1928. The voting age dropped from 21 to 18 in 1969.", "Representation of the People Acts 1918, 1928, 1969", "UK", "https://www.parliament.uk/about/living-heritage/transformingsociety/electionsvoting/womenvote/"]
  ],
  quiz: [
    { q: "How many MPs sit in the House of Commons?", o: ["100", "350", "650", "1,000"], a: 2, why: "650 MPs, one for each constituency." },
    { q: "What is the final step that turns a Bill into an Act?", o: ["A TV debate", "Royal Assent", "A referendum", "The Prime Minister's signature"], a: 1, why: "The monarch's Royal Assent. It has not been refused since Queen Anne in 1708." },
    { q: "What do you need to show at a polling station in England?", o: ["Nothing", "Photo ID", "Your birth certificate", "A utility bill"], a: 1, why: "Since 2023, voters in Great Britain need accepted photo ID. A free Voter Authority Certificate is available if you have none." },
    { q: "Where is the UK's constitution written down?", o: ["In one book in Parliament", "In Buckingham Palace", "It isn't in one document", "On Magna Carta only"], a: 2, why: "The UK constitution is 'uncodified': spread across many laws, cases and traditions." },
    { q: "You ignore a jury summons without a good reason. What can happen?", o: ["Nothing", "A fine of up to £1,000", "5 years in prison", "You lose your vote"], a: 1, why: "Jury service is a legal duty. You can ask to defer it once, but ignoring it risks a fine." },
    { q: "How many signatures does a petition need to be considered for a debate in Parliament?", o: ["1,000", "10,000", "100,000", "1 million"], a: 2, why: "10,000 gets a written government response; 100,000 gets considered for debate." },
    { q: "Which of these is decided separately by Scotland, Wales and Northern Ireland?", o: ["Defence", "Foreign policy", "Health and education", "The currency"], a: 2, why: "Health and education are devolved. That is why prescriptions and tuition fees differ across the UK." },
    { q: "When did women get the vote on equal terms with men?", o: ["1832", "1918", "1928", "1969"], a: 2, why: "1918 gave the vote to some women over 30. Full equality came in 1928." },
    { q: "Can a court cancel an Act of Parliament because it thinks the Act is unfair?", o: ["Yes, any judge can", "Only the Supreme Court", "No, Parliament is sovereign", "Only the King"], a: 2, why: "Courts interpret Acts and can review government actions, but they cannot strike down an Act of Parliament." },
    { q: "Why can't a 15-year-old sign their own phone contract?", o: ["Phones are banned for under-16s", "Most contracts can't be enforced against under-18s", "Phone shops dislike teenagers", "It's a tax rule"], a: 1, why: "A company couldn't enforce the contract against a minor, so they require an adult to sign." }
  ],
  refs: [
    ["Register to vote (GOV.UK)", GOV("register-to-vote"), "gov"],
    ["How laws are made (UK Parliament)", "https://www.parliament.uk/about/how/laws/", "gov"],
    ["Passage of a Bill, step by step (UK Parliament)", "https://www.parliament.uk/about/how/laws/passage-bill/", "gov"],
    ["Human Rights Act 1998 (full text)", ACT("ukpga/1998/42/contents"), "law"],
    ["Jury service (GOV.UK)", GOV("jury-service"), "gov"],
    ["UK Parliament learning resources and videos", "https://learning.parliament.uk/", "video"],
    ["UK Parliament YouTube channel", "https://www.youtube.com/@UKParliament", "video"],
    ["Video search: how laws are made UK Parliament", YT("how are laws made UK Parliament"), "video"],
    ["Video search: Human Rights Act explained", YT("Human Rights Act 1998 explained simply"), "video"]
  ]
});

LAW.add({
  id: "study", icon: "🎓", title: "Uni & Training", ages: "Age 16–25", color: "#ffd166",
  tagline: "Loans, apprenticeships, and your rights as a student.",
  scenes: [
    { bg: "sky", cap: "After school you choose: sixth form, college, an apprenticeship, or later university. Each route comes with legal rights.",
      actors: [["🏫", 20, 42, 4.5, "pop"], ["🔧", 50, 36, 4.5, "pop"], ["🏛️", 80, 42, 4.5, "pop"], ["🧑‍🎓", 50, 70, 4.2, "bounce"]] },
    { bg: "office", cap: "University in England costs just under £10,000 a year. But you don't pay upfront: a government student loan covers it.",
      actors: [["🏛️", 24, 44, 5, "pop"], ["💷", 50, 36, 4, "float"], ["🏦", 78, 44, 5, "pop"], ["➡️", 50, 60, 3, "pulse"]] },
    { bg: "office", cap: "You only repay when you earn over £25,000 a year, and then just 9% of the bit above that. Whatever is left after 40 years is wiped.",
      actors: [["💼", 26, 58, 4.2, "bounce"], ["📈", 50, 40, 4.5, "pop"], ["9️⃣", 72, 56, 3.2, "pulse"], ["%", 80, 56, 2.6, "pulse"]] },
    { bg: "sky", cap: "In Scotland, Scottish students at Scottish universities pay no tuition fees at all. That is devolution in action!",
      actors: [["🏴󠁧󠁢󠁳󠁣󠁴󠁿", 30, 40, 5, "float"], ["🎓", 54, 44, 4.5, "bounce"], ["🆓", 76, 40, 4.5, "pop"]] },
    { bg: "room", cap: "Apprentices earn while they learn. They are employees with a contract, paid holidays, and at least the apprentice minimum wage.",
      actors: [["👷", 30, 60, 4.5, "bounce"], ["🔧", 50, 52, 3.5, "spin-slow"], ["📚", 68, 60, 3.8, "bounce"], ["💷", 86, 36, 3.5, "float"]] },
    { bg: "room", cap: "Buying your essay is a trap. Since 2022 it's a crime in England to sell or advertise essay-writing services to students.",
      actors: [["💻", 34, 56, 4.5, "shake"], ["📝", 58, 50, 3.8, "pop"], ["🚫", 58, 50, 6, "pulse"], ["🕵️", 82, 60, 4, "walk-l"]] }
  ],
  facts: [
    ["Tuition fees", "English universities can charge UK students up to a legal cap: £9,535 in 2025–26, rising to about £9,790 in 2026–27. Scotland charges Scottish students nothing; Wales and Northern Ireland set their own caps.", "Higher Education and Research Act 2017", "MIX", GOV("student-finance")],
    ["Student loans (Plan 5)", "If you started uni in England from August 2023 you repay 9% of everything you earn above £25,000 a year. The loan is cancelled 40 years after repayments begin. It does not appear on your credit file.", "Teaching and Higher Education Act 1998", "ENG", GOV("repaying-your-student-loan")],
    ["Maintenance loans", "A separate loan helps with living costs. How much you get depends on your household income and whether you live at home, away, or in London.", "Education (Student Support) Regulations 2011", "ENG", GOV("student-finance/new-fulltime-students")],
    ["Apprenticeships", "An apprentice is an employee. You get a contract, paid holiday, sick pay and paid time to study. From April 2026 the apprentice minimum wage is £8.00 an hour for under-19s and for anyone in their first year.", "Apprenticeships, Skills, Children and Learning Act 2009", "ENG", GOV("become-apprentice")],
    ["Students are consumers", "A university is selling you a service, so consumer law applies. Courses must be delivered with reasonable care and skill, and as described.", "Consumer Rights Act 2015", "UK", ACT("ukpga/2015/15/contents")],
    ["Complaints", "If your university's own complaints process fails you, you can take the complaint, for free, to the Office of the Independent Adjudicator (England and Wales) or the ombudsman in Scotland or NI.", "Higher Education Act 2004", "EW", "https://www.oiahe.org.uk/students/"],
    ["Essay mills are illegal", "It is a criminal offence in England to provide or advertise paid essay-writing ('contract cheating') services to students in post-16 education.", "Skills and Post-16 Education Act 2022, s.26–30", "ENG", GOVS("essay mills banned")],
    ["Council Tax", "Full-time students don't pay Council Tax. A house shared only by full-time students gets no bill at all.", "Local Government Finance Act 1992", "GB", GOV("council-tax/discounts-for-full-time-students")],
    ["Your deposit is protected", "A landlord must put your tenancy deposit into a government-approved protection scheme within 30 days. In England it can't be more than 5 weeks' rent.", "Housing Act 2004; Tenant Fees Act 2019", "ENG", GOV("tenancy-deposit-protection")],
    ["Shared houses (HMOs)", "A house rented by 5 or more people from more than one household needs a licence from the council, with safety rules for fire alarms, gas and electrics.", "Housing Act 2004", "EW", GOV("private-renting/houses-in-multiple-occupation")],
    ["Disabled students", "Universities must make reasonable adjustments, such as extra exam time or accessible rooms. Disabled Students' Allowance helps with extra costs and never has to be repaid.", "Equality Act 2010", "GB", GOV("disabled-students-allowance-dsa")],
    ["Free speech on campus", "Universities in England have a legal duty to take reasonable steps to protect lawful freedom of speech for students, staff and visiting speakers.", "Higher Education (Freedom of Speech) Act 2023", "ENG", "https://www.officeforstudents.org.uk/"],
    ["Working while studying", "UK students can work as much as they like. International students on a student visa can usually work at most 20 hours a week in term time.", "Immigration Rules", "UK", GOV("student-visa")],
    ["TV licence in halls", "If you watch live TV or BBC iPlayer in your own room, you need your own TV licence. Your parents' licence doesn't cover you, unless your device is running only on its own battery.", "Communications Act 2003", "UK", "https://www.tvlicensing.co.uk/"]
  ],
  quiz: [
    { q: "On a Plan 5 student loan, when do you start repaying?", o: ["The day you graduate", "When you earn over £25,000 a year", "When you turn 30", "Never"], a: 1, why: "You repay 9% of your income above the £25,000 threshold. Earn less, pay nothing." },
    { q: "How much do Scottish students pay in tuition fees at Scottish universities?", o: ["£9,535 a year", "£4,000 a year", "Nothing", "£1,000 a year"], a: 2, why: "The Scottish Government pays the fees. Education is a devolved matter." },
    { q: "What happens to a Plan 5 student loan after 40 years?", o: ["It doubles", "Your family must pay it", "It is written off", "You go to court"], a: 2, why: "Any remaining balance is cancelled 40 years after you first become due to repay." },
    { q: "Is an apprentice entitled to paid holiday?", o: ["No, they're students", "Yes, they are employees", "Only after 2 years", "Only if over 21"], a: 1, why: "Apprentices are employees, with holiday pay, sick pay and minimum wage rights." },
    { q: "Since 2022, what is illegal in England?", o: ["Using a library", "Selling essay-writing services to students", "Studying past midnight", "Sharing lecture notes"], a: 1, why: "The Skills and Post-16 Education Act 2022 made providing or advertising essay mills a criminal offence." },
    { q: "Do full-time students pay Council Tax?", o: ["Yes, full price", "Half price", "No, they're exempt", "Only in London"], a: 2, why: "Full-time students are exempt. An all-student household pays nothing." },
    { q: "Your landlord takes a deposit. How long do they have to protect it in an approved scheme?", o: ["30 days", "6 months", "A year", "They don't have to"], a: 0, why: "30 days. If they don't, a court can order them to pay you up to 3 times the deposit." },
    { q: "What can you do if your university handles a complaint badly?", o: ["Nothing", "Take it free to the independent adjudicator", "Call 999", "Write to the King"], a: 1, why: "In England and Wales the OIA reviews student complaints for free once the university's process is finished." },
    { q: "From April 2026, what is the minimum hourly wage for a first-year apprentice?", o: ["£4.00", "£6.40", "£8.00", "£12.71"], a: 2, why: "£8.00 an hour. After the first year, apprentices aged 19+ move to the normal rate for their age." }
  ],
  refs: [
    ["Student finance (GOV.UK)", GOV("student-finance"), "gov"],
    ["Repaying your student loan (GOV.UK)", GOV("repaying-your-student-loan"), "gov"],
    ["Become an apprentice (GOV.UK)", GOV("become-apprentice"), "gov"],
    ["Office of the Independent Adjudicator: student complaints", "https://www.oiahe.org.uk/students/", "help"],
    ["UCAS: applying to university", "https://www.ucas.com/", "help"],
    ["MoneySavingExpert: student loans mythbusting", "https://www.moneysavingexpert.com/students/student-loans-decoded/", "help"],
    ["Video search: student loans explained UK Plan 5", YT("student loans explained UK plan 5"), "video"],
    ["Video search: apprenticeships explained", YT("apprenticeships explained UK"), "video"]
  ]
});
