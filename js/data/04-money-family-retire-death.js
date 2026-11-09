/* Stages 10-13: money & home, family, retirement, death. */

LAW.add({
  id: "money", icon: "🛍️", title: "Money, Shopping & Home", ages: "Any age", color: "#34c38f",
  tagline: "Refunds, renting, scams and your digital life.",
  scenes: [
    { bg: "room", cap: "Every time you buy something, you make a contract. The law adds three promises: the item must be good quality, fit for purpose, and as described.",
      actors: [["🛒", 24, 62, 4.5, "walk-r"], ["🎧", 52, 50, 4.5, "pop"], ["✅", 72, 34, 3, "drop"], ["✅", 82, 34, 3, "drop"], ["✅", 92, 34, 3, "drop"]] },
    { bg: "room", cap: "Faulty? You have 30 days to reject it for a full refund. After that the shop gets one chance to repair or replace it.",
      actors: [["🎧", 30, 54, 4.5, "shake"], ["💥", 30, 34, 3, "pop"], ["↩️", 54, 54, 4, "pulse"], ["💷", 78, 54, 4.5, "bounce", "Refund!"]] },
    { bg: "office", cap: "Bought online? You get a 14-day cooling-off period to change your mind, for almost any reason at all.",
      actors: [["💻", 26, 56, 4.5, "pop"], ["📦", 54, 60, 4.5, "bounce"], ["🗓️", 80, 44, 4.5, "pulse"], ["1️⃣4️⃣", 80, 74, 2.4, "pop"]] },
    { bg: "sky", cap: "Renting a home in England? Since May 2026, 'no-fault' evictions are banned. A landlord needs a legal reason to make you leave.",
      actors: [["🏠", 34, 48, 6, "pop"], ["🧑", 62, 66, 4, "bounce"], ["🔑", 80, 44, 4, "float"], ["🛡️", 34, 20, 3.5, "drop"]] },
    { bg: "night", cap: "Scammers want your money and your passwords. Fraud is a serious crime, and banks must usually refund victims tricked into sending money.",
      actors: [["🦹", 24, 60, 4.5, "shake"], ["🎣", 46, 44, 4, "sway"], ["📱", 66, 60, 4.2, "shake"], ["🏦", 86, 50, 4.2, "pop"]] },
    { bg: "night", cap: "Your data belongs to you. You can ask any company what it knows about you, and ask for it to be corrected or deleted.",
      actors: [["🧑", 24, 62, 4.2, "bounce"], ["🗂️", 52, 46, 4.5, "float"], ["🔍", 72, 46, 3.5, "pulse"], ["🗑️", 88, 64, 4, "pop"]] }
  ],
  facts: [
    ["The three promises", "Anything you buy from a business must be of satisfactory quality, fit for its purpose and as described. This applies to sale items and second-hand goods from shops too.", "Consumer Rights Act 2015, s.9–11", "UK", GOV("consumer-protection-rights")],
    ["30 days to reject", "If an item is faulty you can reject it within 30 days for a full refund. Within 6 months, it's up to the SELLER to prove the fault wasn't there when you bought it. Your contract is with the shop, not the manufacturer.", "Consumer Rights Act 2015, s.20–22", "UK", "https://www.citizensadvice.org.uk/consumer/"],
    ["No automatic right to change your mind in a shop", "If nothing is wrong with the item, a high-street shop doesn't legally have to take it back. Many do anyway, as a goodwill policy.", "Common law of contract", "UK", GOV("accepting-returns-and-giving-refunds")],
    ["Buying online", "For most online, phone or doorstep purchases you can cancel within 14 days of delivery, then have 14 more days to send it back. Exceptions include personalised items and fresh food.", "Consumer Contracts Regulations 2013", "UK", GOV("online-and-distance-selling-for-businesses")],
    ["Digital content", "Games, apps, music and downloads must also be of satisfactory quality and as described. If a faulty download damages your device, the trader must put it right.", "Consumer Rights Act 2015, s.34–46", "UK", ACT("ukpga/2015/15/contents")],
    ["Credit card protection", "If you pay for something costing £100 to £30,000 on a credit card, the card company is equally responsible if things go wrong, for example if the seller goes bust.", "Consumer Credit Act 1974, s.75", "UK", "https://www.moneysavingexpert.com/reclaim/section75-protect-your-purchases/"],
    ["Savings are protected", "If a UK-authorised bank or building society fails, the Financial Services Compensation Scheme protects up to £120,000 per person, per institution (raised from £85,000 in December 2025).", "Financial Services and Markets Act 2000", "UK", "https://www.fscs.org.uk/"],
    ["Fraud and scams", "Lying to trick someone out of money is fraud: up to 10 years in prison. If you're conned into sending a bank transfer, your bank must normally refund you (up to £85,000) within 5 working days.", "Fraud Act 2006", "UK", "https://www.actionfraud.police.uk/"],
    ["Money mules", "Letting someone move money through your bank account, even for a 'quick £50', is money laundering. You could face up to 14 years in prison and lose your account.", "Proceeds of Crime Act 2002", "UK", "https://www.moneymules.co.uk/"],
    ["Renting: the 2026 shake-up", "In England, since 1 May 2026 landlords can no longer use 'section 21' no-fault evictions. Tenancies roll on with no fixed end date, rent can only rise once a year, and you can ask to keep a pet.", "Renters' Rights Act 2025", "ENG", GOVS("Renters' Rights Act guide for tenants")],
    ["Deposits and fees", "A deposit can't be more than 5 weeks' rent and must go into a protection scheme within 30 days. Letting agents can't charge tenants admin or viewing fees.", "Tenant Fees Act 2019", "ENG", GOV("tenancy-deposit-protection")],
    ["Safe homes", "Landlords must fix structure, heating, water and electrics, check gas safety every year, and fit smoke alarms on every floor. Under Awaab's Law, social landlords must fix dangerous damp and mould within strict deadlines.", "Landlord and Tenant Act 1985, s.11; Social Housing (Regulation) Act 2023", "ENG", GOV("private-renting/your-rights-and-responsibilities")],
    ["Council Tax", "Adults (18+) pay Council Tax to their local council for services like bins, libraries and police. Live alone and you get 25% off. Full-time students are exempt.", "Local Government Finance Act 1992", "GB", GOV("council-tax")],
    ["Your data rights", "You can ask any organisation for a copy of the personal data it holds on you (free, within one month), ask for mistakes to be fixed, and often ask for it to be deleted.", "UK GDPR; Data Protection Act 2018", "UK", "https://ico.org.uk/for-the-public/"],
    ["Hacking", "Getting into someone else's account, device or network without permission is a crime, even 'just for a laugh' and even if you change nothing. Up to 2 years in prison, and far more if damage is done.", "Computer Misuse Act 1990", "UK", "https://www.nationalcrimeagency.gov.uk/cyber-choices"],
    ["Posting online", "Sending messages that are threatening, grossly offensive or knowingly false to cause harm can be a crime. And writing something untrue that seriously damages a person's reputation can get you sued for defamation.", "Online Safety Act 2023; Defamation Act 2013", "EW", GOVS("online safety act communications offences")],
    ["Copyright", "Whoever creates a song, video, picture or piece of writing owns it automatically, for their lifetime plus 70 years. Downloading or streaming pirated content is unlawful.", "Copyright, Designs and Patents Act 1988", "UK", GOV("copyright")],
    ["Pets", "You must be 16 to buy a pet. Owners have a legal duty to meet its needs: food, space, company and vet care. Dogs must be microchipped by 8 weeks old, and in England so must cats by 20 weeks.", "Animal Welfare Act 2006", "EW", GOV("caring-for-pets")]
  ],
  quiz: [
    { q: "You buy headphones in a shop and they stop working after a week. What are you entitled to?", o: ["Nothing", "Only a repair", "A full refund", "A credit note only"], a: 2, why: "The 'short-term right to reject' gives you 30 days to return faulty goods for a full refund." },
    { q: "You buy a jumper in a shop, and at home you decide you don't like the colour. Must the shop refund you?", o: ["Yes, always", "No, not unless it's faulty or their policy says so", "Yes, within 14 days", "Yes, if you kept the tag"], a: 1, why: "In-store, there's no legal right to a refund for a change of mind. The 14-day rule is for online and distance sales." },
    { q: "How long is the cooling-off period for most online purchases?", o: ["24 hours", "7 days", "14 days", "30 days"], a: 2, why: "14 days from the day you receive the goods, under the Consumer Contracts Regulations 2013." },
    { q: "Your new phone is faulty. The shop says 'contact the manufacturer'. Who is legally responsible?", o: ["The manufacturer", "The shop that sold it", "You", "The delivery driver"], a: 1, why: "Your contract is with the seller. They can't pass you on to the manufacturer." },
    { q: "A stranger offers you £50 to receive money into your bank account and pass it on. What is this?", o: ["A handy side hustle", "Money laundering: you'd be a 'money mule'", "Legal if under £1,000", "A bank service"], a: 1, why: "It's money laundering under the Proceeds of Crime Act. Young people are deliberately targeted." },
    { q: "What changed for renters in England on 1 May 2026?", o: ["Rent became free", "'No-fault' evictions were abolished", "Pets were banned", "Deposits doubled"], a: 1, why: "The Renters' Rights Act 2025 ended section 21 evictions. Landlords now need a legal ground." },
    { q: "What's the maximum tenancy deposit a landlord in England can ask for (rent under £50,000 a year)?", o: ["1 week's rent", "5 weeks' rent", "3 months' rent", "Any amount"], a: 1, why: "The Tenant Fees Act 2019 caps deposits at 5 weeks' rent." },
    { q: "You guess your friend's password and log in to read their messages as a joke. Is that a crime?", o: ["No, it's just a joke", "Yes, unauthorised access under the Computer Misuse Act", "Only if you delete something", "Only if you're over 18"], a: 1, why: "Unauthorised access is an offence by itself. No damage is needed." },
    { q: "How much of your savings is protected if your UK bank collapses?", o: ["Nothing", "£10,000", "£120,000", "Unlimited"], a: 2, why: "The FSCS limit rose to £120,000 per person, per banking group, in December 2025." },
    { q: "How long does copyright last after the creator dies?", o: ["It ends immediately", "10 years", "70 years", "Forever"], a: 2, why: "Life plus 70 years for most creative works." },
    { q: "What is the minimum age to buy a pet?", o: ["12", "14", "16", "18"], a: 2, why: "16, under the Animal Welfare Act 2006." }
  ],
  refs: [
    ["Consumer rights (GOV.UK)", GOV("consumer-protection-rights"), "gov"],
    ["Citizens Advice: consumer help and template letters", "https://www.citizensadvice.org.uk/consumer/", "help"],
    ["Consumer Rights Act 2015 (full text)", ACT("ukpga/2015/15/contents"), "law"],
    ["Shelter: renting advice", "https://england.shelter.org.uk/housing_advice", "help"],
    ["Private renting: your rights (GOV.UK)", GOV("private-renting"), "gov"],
    ["Report a scam: Action Fraud", "https://www.actionfraud.police.uk/", "help"],
    ["Cyber Choices: use your tech skills legally", "https://www.nationalcrimeagency.gov.uk/cyber-choices", "help"],
    ["Which? consumer rights guides", "https://www.which.co.uk/consumer-rights", "help"],
    ["Video search: Consumer Rights Act explained", YT("Consumer Rights Act 2015 explained refund rights"), "video"],
    ["Video search: money mules explained", YT("money mules explained don't be fooled"), "video"]
  ]
});

LAW.add({
  id: "family", icon: "💍", title: "Love & Family", ages: "Age 18+", color: "#f472b6",
  tagline: "Marriage, living together, children, and staying safe.",
  scenes: [
    { bg: "sky", cap: "Getting married? In England and Wales you both must be 18, give 29 days' public notice, and say your vows in front of two witnesses.",
      actors: [["💒", 50, 40, 6.5, "pop"], ["🤵", 36, 68, 4, "walk-r"], ["👰", 64, 68, 4, "walk-l"], ["💍", 50, 74, 2.6, "pulse"]] },
    { bg: "sky", cap: "Marriage and civil partnership are open to everyone: same-sex couples have been able to marry since 2014, and across the whole UK since 2020.",
      actors: [["👩‍❤️‍👩", 26, 60, 4.5, "bounce"], ["👨‍❤️‍👨", 50, 60, 4.5, "bounce"], ["👩‍❤️‍👨", 74, 60, 4.5, "bounce"], ["🌈", 50, 30, 5, "pop"]] },
    { bg: "room", cap: "Myth alert! There is NO such thing as a 'common-law husband or wife' in England and Wales. Living together gives almost none of the rights of marriage.",
      actors: [["🏠", 26, 46, 5, "pop"], ["👫", 54, 62, 4.5, "sway"], ["❓", 76, 36, 4, "shake"], ["📜", 88, 60, 3.5, "pop"]] },
    { bg: "court", cap: "If a marriage ends, divorce is now 'no-fault'. Nobody has to prove who was to blame. It takes at least 26 weeks.",
      actors: [["💔", 50, 36, 5, "pulse"], ["🧑", 28, 66, 4, "walk-l"], ["🧑‍🦰", 72, 66, 4, "walk-r"], ["🗓️", 50, 74, 3.2, "pop"]] },
    { bg: "room", cap: "When parents split up, one rule beats all others: the child's welfare comes first. Courts must listen to what the child wants, too.",
      actors: [["👩", 22, 60, 4, "sway"], ["👨", 78, 60, 4, "sway"], ["🧒", 50, 62, 4, "bounce"], ["⭐", 50, 30, 4.5, "pulse", "Child first"]] },
    { bg: "night", cap: "Home should be safe. Domestic abuse is a crime, and it isn't only violence: controlling, threatening or isolating a partner counts too.",
      actors: [["🏠", 30, 50, 5.5, "pop"], ["🛡️", 56, 46, 4.5, "pulse"], ["📞", 80, 56, 4, "shake", "Help is free"]] }
  ],
  facts: [
    ["Minimum age to marry", "18 in England and Wales since February 2023, with no exceptions. It is 16 in Scotland; in Northern Ireland 16- and 17-year-olds need parental consent.", "Marriage and Civil Partnership (Minimum Age) Act 2022", "MIX", GOV("marriages-civil-partnerships")],
    ["Giving notice", "You must give notice at a register office at least 29 days before the ceremony, and two witnesses must be present when you marry.", "Marriage Act 1949", "EW", GOV("marriages-civil-partnerships/give-notice")],
    ["Who can marry", "Same-sex couples can marry in England, Wales and Scotland (since 2014) and Northern Ireland (since 2020). Civil partnerships are open to both same-sex and opposite-sex couples.", "Marriage (Same Sex Couples) Act 2013", "UK", GOV("marriages-civil-partnerships")],
    ["Forced marriage is a crime", "Forcing someone to marry, or taking them abroad to do so, is a crime with up to 7 years in prison. Courts can make protection orders. A forced marriage is not the same as an arranged one that both people agree to.", "Anti-social Behaviour, Crime and Policing Act 2014", "EW", GOV("stop-forced-marriage")],
    ["The 'common-law marriage' myth", "In England and Wales, couples who live together have no automatic right to each other's property, pension or inheritance, however long they've been together. Scotland gives cohabitants some limited rights.", "No statute: that's the point", "MIX", "https://www.citizensadvice.org.uk/family/living-together-marriage-and-civil-partnership/living-together-and-marriage-legal-differences/"],
    ["No-fault divorce", "Since April 2022 one or both spouses simply state that the marriage has broken down. You must have been married for a year, and the process takes a minimum of 26 weeks.", "Divorce, Dissolution and Separation Act 2020", "EW", GOV("divorce")],
    ["Splitting money", "On divorce, courts in England and Wales aim for fairness, often starting from an equal split of what was built up during the marriage. Children's needs come first.", "Matrimonial Causes Act 1973", "EW", GOV("money-property-when-relationship-ends")],
    ["Prenups", "Prenuptial agreements aren't automatically binding in England and Wales, but since 2010 courts usually follow them if both people understood and freely agreed, and the result is fair.", "Radmacher v Granatino [2010] UKSC 42", "EW", WIKI("Radmacher v Granatino")],
    ["The child comes first", "In any court decision about a child's upbringing, the child's welfare is the 'paramount consideration'. The court must consider the child's own wishes, in light of their age and understanding.", "Children Act 1989, s.1", "EW", ACT("ukpga/1989/41/section/1")],
    ["Child maintenance", "Both parents must support their child financially, even if one doesn't live with or see the child. The Child Maintenance Service can calculate and collect payments.", "Child Support Act 1991", "GB", GOV("child-maintenance-service")],
    ["Adoption", "You must be 21 or over to adopt. An adoption order makes the child a full, permanent legal member of the new family. Adopted people can see their original birth records at 18.", "Adoption and Children Act 2002", "EW", GOV("child-adoption")],
    ["Domestic abuse", "The law recognises physical, sexual, emotional and economic abuse, plus controlling or coercive behaviour (a crime since 2015). Children who see or hear abuse are legally victims themselves.", "Domestic Abuse Act 2021; Serious Crime Act 2015, s.76", "EW", GOV("guidance/domestic-abuse-how-to-get-help")],
    ["Clare's Law", "Anyone can ask the police whether their partner has a history of violence or abuse. It is named after Clare Wood, who was killed in 2009 by an ex-partner with a hidden violent past.", "Domestic Violence Disclosure Scheme", "EW", GOVS("Clare's Law domestic violence disclosure scheme")],
    ["Changing your name", "You don't have to take a spouse's surname. Anyone 16+ can change their name by deed poll. A marriage certificate is enough proof if you do take a spouse's name.", "Common law", "EW", GOV("change-name-deed-poll")]
  ],
  quiz: [
    { q: "A couple have lived together unmarried for 20 years in England. One dies with no will. What does the survivor automatically inherit?", o: ["Everything", "Half", "Nothing", "The house only"], a: 2, why: "'Common-law marriage' is a myth. Unmarried partners inherit nothing under the intestacy rules." },
    { q: "Since April 2022, what must you prove to get a divorce in England and Wales?", o: ["Adultery", "Unreasonable behaviour", "Nothing: you just state the marriage has broken down", "5 years apart"], a: 2, why: "The no-fault system removed the need to blame anyone." },
    { q: "What is the court's top priority when deciding where a child lives?", o: ["The mother's wishes", "The father's wishes", "The child's welfare", "Who earns more"], a: 2, why: "Section 1 of the Children Act 1989 makes the child's welfare paramount." },
    { q: "How many witnesses are needed at a wedding in England and Wales?", o: ["None", "One", "Two", "Five"], a: 2, why: "Two witnesses must be present and sign." },
    { q: "Which of these is a crime?", o: ["An arranged marriage both people freely agree to", "Forcing someone to marry", "Marrying abroad", "Keeping your own surname"], a: 1, why: "Forced marriage carries up to 7 years in prison. Arranged marriages with full, free consent are legal." },
    { q: "What is the minimum time a no-fault divorce takes?", o: ["1 day", "6 weeks", "26 weeks", "5 years"], a: 2, why: "A 20-week reflection period plus 6 weeks before the final order." },
    { q: "What does Clare's Law let you do?", o: ["Marry at 16", "Ask police about a partner's violent history", "Get a free divorce", "Adopt at 18"], a: 1, why: "The Domestic Violence Disclosure Scheme gives a 'right to ask' and a 'right to know'." },
    { q: "Is controlling who a partner sees and what they spend a crime?", o: ["No, only physical violence counts", "Yes, coercive control has been a crime since 2015", "Only if married", "Only in Scotland"], a: 1, why: "Controlling or coercive behaviour is an offence with up to 5 years in prison." },
    { q: "How old must you be to adopt a child?", o: ["18", "21", "25", "30"], a: 1, why: "At least 21. There is no upper age limit." },
    { q: "A parent never sees their child. Do they still have to pay child maintenance?", o: ["No", "Yes", "Only if married", "Only until age 5"], a: 1, why: "Financial responsibility doesn't depend on contact." }
  ],
  refs: [
    ["Marriages and civil partnerships (GOV.UK)", GOV("marriages-civil-partnerships"), "gov"],
    ["Get a divorce (GOV.UK)", GOV("divorce"), "gov"],
    ["Living together v marriage: legal differences (Citizens Advice)", "https://www.citizensadvice.org.uk/family/living-together-marriage-and-civil-partnership/living-together-and-marriage-legal-differences/", "help"],
    ["Children Act 1989 (full text)", ACT("ukpga/1989/41/contents"), "law"],
    ["National Domestic Abuse Helpline (free, 24h: 0808 2000 247)", "https://www.nationaldomesticabusehelpline.org.uk/", "help"],
    ["Forced Marriage Unit (GOV.UK)", GOV("stop-forced-marriage"), "help"],
    ["Cafcass: how family courts listen to children", "https://www.cafcass.gov.uk/children-and-young-people", "help"],
    ["Video search: common law marriage myth", YT("common law marriage myth UK cohabitation rights"), "video"],
    ["Video search: no fault divorce explained", YT("no fault divorce explained England Wales"), "video"]
  ]
});

LAW.add({
  id: "retire", icon: "🌇", title: "Golden Years", ages: "Age 55+", color: "#f59e0b",
  tagline: "Pensions, care, and planning ahead.",
  scenes: [
    { bg: "sky", cap: "Throughout your working life, National Insurance has been quietly building up something for later: your State Pension.",
      actors: [["🧑‍💼", 22, 64, 4, "walk-r"], ["🪙", 44, 40, 3, "drop"], ["🪙", 54, 34, 3, "drop"], ["🪙", 64, 40, 3, "drop"], ["🏦", 84, 54, 5, "pop"]] },
    { bg: "sky", cap: "You need 10 qualifying years to get any State Pension, and 35 years for the full amount: about £241 a week in 2026–27.",
      actors: [["📅", 26, 46, 4.5, "pop"], ["3️⃣5️⃣", 26, 76, 2.4, "pulse"], ["➡️", 50, 50, 3, "pulse"], ["💷", 74, 46, 5, "float"]] },
    { bg: "sky", cap: "State Pension age is on the move: it's rising from 66 to 67 between 2026 and 2028. By the time you retire it may be higher still.",
      actors: [["6️⃣6️⃣", 26, 46, 3, "pop"], ["➡️", 50, 46, 3, "pulse"], ["6️⃣7️⃣", 74, 46, 3, "pop"], ["👵", 40, 72, 4, "bounce"], ["👴", 60, 72, 4, "bounce"]] },
    { bg: "office", cap: "Nobody can force you to retire just because of your age. The 'default retirement age' of 65 was scrapped in 2011.",
      actors: [["👩‍🦳", 36, 60, 4.5, "bounce", "I'm staying!"], ["💻", 60, 58, 4, "pop"], ["🎂", 84, 38, 3.5, "float"]] },
    { bg: "room", cap: "Plan ahead with a Lasting Power of Attorney. It lets someone you trust make decisions for you if one day you can't.",
      actors: [["👵", 30, 60, 4.5, "sway"], ["📝", 52, 48, 4, "drop"], ["🧑", 74, 60, 4.2, "sway"], ["🤝", 52, 76, 3, "pulse"]] },
    { bg: "sky", cap: "Later life comes with perks: free prescriptions and eye tests at 60, a bus pass, and help with heating bills.",
      actors: [["🚌", 24, 62, 5, "zoom"], ["💊", 50, 40, 4, "bounce"], ["👓", 70, 44, 4, "bounce"], ["🔥", 88, 60, 4, "pulse"]] }
  ],
  facts: [
    ["State Pension age", "Currently 66 for men and women. It is rising to 67 in stages between April 2026 and April 2028, and is planned to reach 68 in the 2040s. The government reviews it regularly.", "Pensions Act 2014", "UK", GOV("state-pension-age")],
    ["How much?", "The full new State Pension is £241.30 a week in 2026–27 (about £12,548 a year). You need 35 qualifying years of National Insurance for the full amount, and at least 10 years to get anything.", "Pensions Act 2014", "UK", GOV("new-state-pension")],
    ["The triple lock", "Each April the State Pension goes up by whichever is highest: price inflation, average wage growth, or 2.5%.", "Government policy (since 2011)", "UK", WIKI("State Pension triple lock")],
    ["You must claim it", "The State Pension isn't paid automatically. You get a letter a few months before you reach pension age and must claim. You can also delay ('defer') it to get more later.", "Pensions Act 2014", "UK", GOV("get-state-pension")],
    ["No forced retirement", "Since 2011 an employer can't make you retire at a set age, unless they can objectively justify it for that particular job. Otherwise it's age discrimination.", "Equality Act 2010", "GB", GOV("working-after-state-pension-age")],
    ["Private and workplace pensions", "You can usually start taking money from a private pension at 55 (rising to 57 in April 2028). Normally 25% can be taken tax-free.", "Finance Act 2004", "UK", GOV("personal-pensions-your-rights")],
    ["Pension scams", "Cold-calling about pensions has been illegal since 2019. If someone phones out of the blue about your pension, hang up.", "Privacy and Electronic Communications Regulations 2003 (amended 2018)", "UK", "https://www.fca.org.uk/scamsmart"],
    ["Pension Credit", "A top-up for pensioners on low incomes. It also unlocks other help, like a free TV licence for over-75s. Many people who qualify never claim it.", "State Pension Credit Act 2002", "GB", GOV("pension-credit")],
    ["Age discrimination", "It's unlawful to treat someone worse because of their age at work, in shops or in services. That goes for the young as well as the old.", "Equality Act 2010, s.5", "GB", "https://www.ageuk.org.uk/information-advice/work-learning/discrimination-rights/ageism/"],
    ["Lasting Power of Attorney (LPA)", "If you're 18+ you can choose trusted people to decide for you if you lose mental capacity. There are two kinds: 'property and financial affairs' and 'health and welfare'. It must be registered to be valid.", "Mental Capacity Act 2005", "EW", GOV("power-of-attorney")],
    ["Paying for care", "The council must assess anyone who appears to need care. In England, if you have more than £23,250 in savings and assets you usually pay for your own care. In Scotland personal care is free.", "Care Act 2014", "MIX", NHS("conditions/social-care-and-support-guide/")],
    ["Carers' rights", "Unpaid carers have a right to their own council assessment. Employees can take a week of unpaid carer's leave each year, from day one of the job.", "Care Act 2014; Carer's Leave Act 2023", "GB", GOV("carers-leave")],
    ["Perks of age", "At 60: free NHS prescriptions and eye tests in England. At State Pension age: a free bus pass in England (60 elsewhere in the UK). There's also winter help with fuel bills for most pensioners.", "Various regulations", "MIX", GOV("browse/benefits/low-income")],
    ["Working past pension age", "Carry on working after State Pension age and you stop paying National Insurance, though you still pay income tax.", "Social Security Contributions and Benefits Act 1992", "UK", GOV("working-after-state-pension-age")]
  ],
  quiz: [
    { q: "How many qualifying years of National Insurance do you need for the FULL new State Pension?", o: ["10", "20", "35", "50"], a: 2, why: "35 for the full amount; at least 10 to receive anything." },
    { q: "What is the 'triple lock'?", o: ["A bank vault", "A rule that the State Pension rises by the highest of inflation, wages or 2.5%", "Three passwords", "A retirement age rule"], a: 1, why: "It guarantees a yearly rise by the highest of the three measures." },
    { q: "Can your employer force you to retire at 65?", o: ["Yes, always", "No, unless they can objectively justify it", "Only men", "Only if you're paid monthly"], a: 1, why: "The default retirement age was abolished in 2011." },
    { q: "State Pension age is rising from 66 to what between 2026 and 2028?", o: ["65", "67", "70", "75"], a: 1, why: "67, with a further rise to 68 planned later." },
    { q: "What does a Lasting Power of Attorney do?", o: ["Lets you skip jury service", "Lets someone you trust make decisions if you lose capacity", "Makes you a lawyer", "Pays your pension early"], a: 1, why: "It appoints attorneys for money decisions, health decisions, or both." },
    { q: "Does the State Pension arrive automatically when you reach pension age?", o: ["Yes", "No, you have to claim it", "Only for men", "Only if you're rich"], a: 1, why: "You must claim it. You can also defer it for a higher weekly amount." },
    { q: "Someone cold-calls your gran about 'unlocking her pension early'. What should she know?", o: ["It's a great deal", "Pension cold calls are illegal: hang up", "It's from the government", "She must answer"], a: 1, why: "Pension cold-calling was banned in 2019. It's almost certainly a scam." },
    { q: "At what age do prescriptions become free in England?", o: ["50", "60", "66", "75"], a: 1, why: "60. (They are free for everyone in Scotland, Wales and NI.)" },
    { q: "From 2028, what will be the earliest age you can normally access a private pension?", o: ["50", "55", "57", "67"], a: 2, why: "It rises from 55 to 57 on 6 April 2028." },
    { q: "Where in the UK is personal care for older people free?", o: ["England", "Scotland", "Nowhere", "London only"], a: 1, why: "Scotland provides free personal care. In England it is means-tested." }
  ],
  refs: [
    ["Check your State Pension age (GOV.UK)", GOV("state-pension-age"), "gov"],
    ["The new State Pension (GOV.UK)", GOV("new-state-pension"), "gov"],
    ["Make a Lasting Power of Attorney (GOV.UK)", GOV("power-of-attorney"), "gov"],
    ["Age UK: information and advice", "https://www.ageuk.org.uk/information-advice/", "help"],
    ["MoneyHelper: pensions and retirement", "https://www.moneyhelper.org.uk/en/pensions-and-retirement", "help"],
    ["Pensions Act 2014 (full text)", ACT("ukpga/2014/19/contents"), "law"],
    ["Video search: State Pension explained", YT("UK State Pension explained simply"), "video"],
    ["Video search: lasting power of attorney explained", YT("lasting power of attorney explained UK"), "video"]
  ]
});

LAW.add({
  id: "death", icon: "🕊️", title: "The Final Chapter", ages: "End of life", color: "#94a3b8",
  tagline: "Wills, inheritance, and what happens after we're gone.",
  scenes: [
    { bg: "night", cap: "Nobody lives forever, and the law has a plan for that too. It makes sure a person's last wishes are respected and their family is looked after.",
      actors: [["🕊️", 50, 36, 5.5, "float"], ["🌟", 24, 30, 3, "pulse"], ["🌟", 76, 26, 3, "pulse"], ["🌳", 50, 70, 5, "sway"]] },
    { bg: "room", cap: "A will says who gets your things. To be valid it must be in writing, signed by you, and witnessed by two people who are both there at the same time.",
      actors: [["📜", 50, 46, 5.5, "pop"], ["🖊️", 68, 60, 3.5, "shake"], ["👀", 22, 62, 3.5, "bounce"], ["👀", 84, 36, 3.5, "bounce"]] },
    { bg: "room", cap: "Warning: a witness can't inherit from the will they sign. Ask your best friend to witness it and their gift is cancelled!",
      actors: [["🧑", 30, 60, 4.2, "shake", "Oh no…"], ["📜", 54, 48, 4.5, "pop"], ["🎁", 78, 54, 4.2, "shake"], ["❌", 78, 54, 6, "pulse"]] },
    { bg: "office", cap: "No will? Then the 'intestacy rules' decide. A husband, wife or civil partner comes first, then children. Unmarried partners get nothing.",
      actors: [["❓", 50, 28, 4, "pulse"], ["💍", 24, 60, 4, "pop", "1st"], ["🧒", 50, 64, 4, "pop", "2nd"], ["👫", 78, 60, 4, "shake", "Nothing"]] },
    { bg: "office", cap: "If everything you leave is worth more than £325,000, Inheritance Tax of 40% may be charged on the amount above it. Gifts to a spouse are tax-free.",
      actors: [["🏠", 24, 50, 5, "pop"], ["💷", 48, 44, 4, "float"], ["✂️", 68, 50, 4, "shake"], ["🏛️", 88, 50, 4.5, "pop"]] },
    { bg: "sky", cap: "A death must be registered within 5 days (8 in Scotland). Then the executor named in the will collects everything in, pays the debts, and shares out the rest.",
      actors: [["📋", 24, 50, 4.5, "pop"], ["➡️", 42, 52, 2.6, "pulse"], ["🧑‍💼", 58, 60, 4.2, "bounce", "Executor"], ["➡️", 74, 52, 2.6, "pulse"], ["🎁", 88, 52, 4.2, "bounce"]] }
  ],
  facts: [
    ["Registering a death", "A death must be registered within 5 days in England, Wales and Northern Ireland, or 8 days in Scotland. Since 2024 an independent medical examiner checks the cause of every death not investigated by a coroner.", "Births and Deaths Registration Act 1953", "MIX", GOV("register-a-death")],
    ["Coroners", "A coroner investigates deaths that are violent, unnatural, unexplained or happen in custody. An inquest finds out who died and how, but doesn't blame anyone. Scotland uses the Procurator Fiscal instead.", "Coroners and Justice Act 2009", "EW", GOV("after-a-death/when-a-death-is-reported-to-a-coroner")],
    ["A valid will", "You must be 18+ (12+ in Scotland), of sound mind, and acting freely. The will must be in writing, signed by you, and witnessed by two people present at the same time, who then sign too.", "Wills Act 1837, s.9", "EW", GOV("make-will")],
    ["Witnesses can't benefit", "If a witness, or a witness's husband, wife or civil partner, is left something in the will, the will stays valid but that gift fails.", "Wills Act 1837, s.15", "EW", GOV("make-will/make-sure-your-will-is-legal")],
    ["Marriage cancels a will", "In England and Wales, getting married or entering a civil partnership automatically cancels any earlier will (unless it was written with that marriage in mind). Divorce doesn't cancel a will, but your ex is treated as having died.", "Wills Act 1837, s.18", "EW", GOV("make-will/updating-your-will")],
    ["Dying without a will", "In England and Wales, if you're married with children your spouse gets your belongings, the first £322,000 and half of the rest; your children share the other half. No spouse: children get it all. Then parents, siblings and wider family.", "Administration of Estates Act 1925", "EW", GOV("inherits-someone-dies-without-will")],
    ["Nobody at all?", "If someone dies with no will and no living relatives, the estate passes to the Crown. It is called 'bona vacantia', which means 'ownerless goods'.", "Administration of Estates Act 1925, s.46", "EW", GOV("unclaimed-estates-bona-vacantia")],
    ["Inheritance Tax", "Charged at 40% on the part of an estate above £325,000. There's an extra £175,000 allowance if a home passes to children or grandchildren. Anything left to a spouse, civil partner or charity is tax-free.", "Inheritance Tax Act 1984", "UK", GOV("inheritance-tax")],
    ["The 7-year rule", "Gifts you make in life usually escape Inheritance Tax if you live for 7 more years. Die sooner and they may be taxed.", "Inheritance Tax Act 1984, s.3A", "UK", GOV("inheritance-tax/gifts")],
    ["Challenging a will", "In England and Wales you can generally leave your things to whoever you like. But close family and dependants who are left without 'reasonable financial provision' can ask a court for a share.", "Inheritance (Provision for Family and Dependants) Act 1975", "EW", ACT("ukpga/1975/63/contents")],
    ["Scotland protects children", "In Scotland you can't completely disinherit your spouse or children. They have 'legal rights' to a share of your money and belongings (though not land or buildings) whatever the will says.", "Succession (Scotland) Act 1964", "SCO", "https://www.mygov.scot/make-will"],
    ["Probate and executors", "The executor named in the will usually needs a 'grant of probate' before banks will release large sums. They collect everything in, pay debts and taxes, and only then pay out the inheritances.", "Administration of Estates Act 1925", "EW", GOV("applying-for-probate")],
    ["Debts don't pass to family", "Debts are paid from what the dead person owned. If there isn't enough, most debts simply die with them. Relatives don't inherit a debt unless it was a joint debt or they guaranteed it.", "Administration of Estates Act 1925", "EW", "https://www.moneyhelper.org.uk/en/family-and-care/death-and-bereavement/dealing-with-the-debts-of-someone-who-has-died"],
    ["Killers can't inherit", "Under the 'forfeiture rule', someone who unlawfully kills another person cannot inherit from their victim.", "Forfeiture Act 1982", "UK", ACT("ukpga/1982/34/contents")],
    ["Funerals and bereavement leave", "There's no law saying you must have a funeral ceremony, but a body must be properly buried or cremated. Parents who lose a child under 18 are entitled to 2 weeks' bereavement leave ('Jack's Law').", "Parental Bereavement (Leave and Pay) Act 2018", "GB", GOV("parental-bereavement-pay-leave")],
    ["Your digital afterlife", "There's still no single law on what happens to your online accounts when you die. Most platforms let you name a 'legacy contact', and you can list accounts in a letter kept with your will.", "No specific statute yet", "UK", "https://www.lawsociety.org.uk/public/for-public-visitors/common-legal-issues/making-a-will"]
  ],
  quiz: [
    { q: "How many witnesses must watch you sign your will in England and Wales?", o: ["None", "One", "Two, both present at the same time", "Three lawyers"], a: 2, why: "Section 9 of the Wills Act 1837: two witnesses, present together." },
    { q: "Your best friend witnesses your will, and the will leaves them your car. What happens?", o: ["They get the car", "The whole will is invalid", "The will is valid but they lose the car", "They get double"], a: 2, why: "A gift to a witness (or the witness's spouse) fails, although the rest of the will stands." },
    { q: "What happens to your existing will when you get married in England?", o: ["Nothing", "It is automatically cancelled", "It doubles", "Your spouse can edit it"], a: 1, why: "Marriage revokes an earlier will, unless it was made in contemplation of that marriage." },
    { q: "At what rate is Inheritance Tax charged above the tax-free threshold?", o: ["10%", "20%", "40%", "75%"], a: 2, why: "40% on the value above £325,000 (plus other allowances)." },
    { q: "Someone dies with no will and no living relatives. Who gets their estate?", o: ["The neighbours", "The Crown", "The bank", "The local football club"], a: 1, why: "It goes to the Crown as 'bona vacantia'." },
    { q: "How long do you have to register a death in England?", o: ["24 hours", "5 days", "42 days", "A year"], a: 1, why: "5 days in England, Wales and NI; 8 days in Scotland." },
    { q: "Your dad dies owing £5,000 on his own credit card, and he owned nothing. Do you have to pay it?", o: ["Yes, children inherit debts", "No, debts are paid only from his estate", "Half of it", "Only if you're over 18"], a: 1, why: "Debts come out of the estate. If it's empty, the debt usually dies too, unless you were a joint borrower or guarantor." },
    { q: "In Scotland, can a parent leave their children absolutely nothing?", o: ["Yes, easily", "No, children have 'legal rights' to part of the moveable estate", "Only if the children are under 18", "Only with a judge's permission"], a: 1, why: "Scots law protects a share for a spouse and children, whatever the will says." },
    { q: "What does an executor do?", o: ["Writes the will", "Carries out the will's instructions", "Judges inheritance disputes", "Collects Inheritance Tax for fun"], a: 1, why: "They gather in the estate, pay debts and tax, and distribute what's left." },
    { q: "Under the '7-year rule', what usually happens to a gift you made 8 years before dying?", o: ["Taxed at 40%", "It must be given back", "It's free of Inheritance Tax", "It goes to the Crown"], a: 2, why: "Survive 7 years after making a gift and it normally falls outside Inheritance Tax." },
    { q: "Can someone who murders a relative inherit from them?", o: ["Yes, if they're in the will", "No, the forfeiture rule stops them", "Only half", "Only after prison"], a: 1, why: "The law won't let someone profit from an unlawful killing." }
  ],
  refs: [
    ["What to do after someone dies (GOV.UK)", GOV("after-a-death"), "gov"],
    ["Making a will (GOV.UK)", GOV("make-will"), "gov"],
    ["Who inherits if there's no will: interactive tool (GOV.UK)", GOV("inherits-someone-dies-without-will"), "gov"],
    ["Inheritance Tax (GOV.UK)", GOV("inheritance-tax"), "gov"],
    ["Wills Act 1837 (full text: still in force!)", ACT("ukpga/Will4and1Vict/7/26/contents"), "law"],
    ["Child Bereavement UK: support for young people", "https://www.childbereavementuk.org/", "help"],
    ["Cruse Bereavement Support", "https://www.cruse.org.uk/", "help"],
    ["Video search: what happens if you die without a will UK", YT("what happens if you die without a will UK intestacy"), "video"],
    ["Video search: inheritance tax explained UK", YT("inheritance tax explained UK simply"), "video"]
  ]
});
