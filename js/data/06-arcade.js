/* Arcade data: Age Ladder, Myth Buster, Bill Builder, Sort the Court. */

/* [thing you can do, minimum age, note, where] */
LAW.ages = [
  ["be held criminally responsible in England", 10, "10 in England, Wales and NI; 12 in Scotland."],
  ["be held criminally responsible in Scotland", 12, "Scotland raised its age from 8 to 12."],
  ["get a part-time job, like a paper round", 13, "With strict limits on hours."],
  ["give your own consent for an app to use your data", 13, "Under 13, a parent must consent."],
  ["be personally fined for not wearing a seat belt", 14, "Before 14, the driver is responsible."],
  ["ride a moped (up to 50cc)", 16, "After compulsory basic training (CBT)."],
  ["earn the National Minimum Wage", 16, "Once you're over school leaving age."],
  ["consent to your own medical treatment as of right", 16, "Younger if 'Gillick competent'."],
  ["change your name by deed poll without your parents", 16, "Under 16 needs everyone with parental responsibility."],
  ["buy a pet", 16, "Animal Welfare Act 2006."],
  ["join the armed forces (with parental consent)", 16, "You can't be sent into combat until 18."],
  ["get married in Scotland", 16, "No parental consent needed in Scotland."],
  ["legally consent to sex", 16, "The same across the UK, for everyone."],
  ["vote in Scottish Parliament and Welsh Senedd elections", 16, "A Bill to extend this to all UK elections is in the House of Lords."],
  ["drink beer or wine with a meal in a restaurant, if an adult buys it", 16, "You still can't buy it yourself."],
  ["drive a car", 17, "With a provisional licence and supervision until you pass."],
  ["give blood", 17, "Check the NHS Blood and Transplant rules."],
  ["get married in England or Wales", 18, "Raised from 16 in February 2023."],
  ["vote in a UK general election (as of November 2026)", 18, "Plans to lower it to 16 are going through Parliament."],
  ["buy alcohol", 18, "Shops must check ID if you look under 25 ('Challenge 25')."],
  ["get a tattoo", 18, "Even with parental consent."],
  ["buy a National Lottery ticket", 18, "It was 16 until April 2021."],
  ["buy a kitchen knife in England", 18, "Scotland allows domestic knives at 16."],
  ["buy fireworks", 18, "Including sparklers."],
  ["buy a vape", 18, "Single-use vapes are banned altogether."],
  ["serve on a jury", 18, "Up to age 75 in England and Wales."],
  ["make a valid will in England", 18, "12 in Scotland! Soldiers on active service can be younger."],
  ["stand for election as an MP", 18, "It was 21 until 2006."],
  ["get a credit card or loan", 18, "Contracts with under-18s generally can't be enforced."],
  ["use a sunbed in a salon", 18, "Sunbeds (Regulation) Act 2010."],
  ["watch an 18-rated film at the cinema", 18, "Cinemas can lose their licence for letting you in."],
  ["adopt a child", 21, "No upper age limit."],
  ["supervise a learner driver", 21, "And you must have held a full licence for 3 years."],
  ["be automatically enrolled in a workplace pension", 22, "If you earn over £10,000 a year."]
];

/* [statement, true?, explanation] */
LAW.myths = [
  ["It's illegal to be drunk in a pub.", true, "Really! Section 12 of the Licensing Act 1872 makes it an offence to be drunk on licensed premises. It's almost never enforced."],
  ["Live with a partner long enough and you become 'common-law married' with the same rights.", false, "A total myth in England and Wales. Cohabiting gives almost none of the rights of marriage, however long it lasts."],
  ["It's legal to shoot a Welshman with a longbow inside Chester's city walls after midnight.", false, "A famous pub myth. Murder is murder. Old city orders like this have no force and were never 'law' in that sense."],
  ["There is no legal minimum age for leaving a child home alone.", true, "True. But parents can be prosecuted if leaving a child alone puts them at risk."],
  ["Police must always read you your rights before they can search you.", false, "There's no US-style 'Miranda' rule for searches. But officers must tell you who they are and the grounds and purpose of the search."],
  ["You must carry ID at all times in the UK.", false, "There's no law requiring you to carry ID. (Drivers can be asked to produce their licence within 7 days.)"],
  ["If a shop puts the wrong price on something, they must sell it to you at that price.", false, "A price tag is only an 'invitation to treat'. The shop can refuse to sell. (Misleading prices can be a separate offence, though.)"],
  ["It's an offence to handle a salmon in suspicious circumstances.", true, "Section 32 of the Salmon Act 1986. It's aimed at people handling fish they should suspect were poached."],
  ["A verbal agreement can be a legally binding contract.", true, "Most contracts don't need to be in writing. The hard part is proving what was said. (Sales of land must be written.)"],
  ["Under-18s can't be arrested.", false, "Anyone aged 10 or over (12 in Scotland) can be arrested. Under-18s get extra protection, like an appropriate adult."],
  ["It's illegal to cycle on the pavement.", true, "Section 72 of the Highways Act 1835, unless it's marked as a shared cycle path. The usual penalty is a fixed fine."],
  ["A 16-year-old can get a tattoo with a parent's permission.", false, "No. The Tattooing of Minors Act 1969 allows no exceptions under 18."],
  ["All swans in England belong to the King.", false, "Nearly! The Crown may claim any unmarked mute swan in open water, but only exercises this on parts of the Thames. Swans are, however, protected wild birds."],
  ["You can be fined for not wearing a seat belt in the back seat.", true, "Seat belts are compulsory in the back too, if fitted. Up to £500."],
  ["The UK has a single written constitution.", false, "The UK's constitution is uncodified: spread across Acts, court decisions and conventions."],
  ["It's illegal to enter the Houses of Parliament wearing a suit of armour.", true, "A statute of 1313 (yes, 1313) forbids coming armed or armoured to Parliament. It has never been repealed."],
  ["Employers can keep the tips customers give you.", false, "Since October 2024 all tips must be passed to staff in full."],
  ["If you find money in the street, 'finders keepers' applies.", false, "Keeping found property without taking reasonable steps to find the owner can be 'theft by finding'."],
  ["Your parents' consent is needed to see a doctor until you're 18.", false, "At 16 you're presumed able to consent. Under 16, you can if you're Gillick competent."],
  ["It's an offence to be drunk in charge of a cow.", true, "The Licensing Act 1872 covers being drunk in charge of 'any carriage, horse, cattle, or steam engine' on a highway."],
  ["Jaywalking is illegal in England.", false, "No such offence in Great Britain. Cross where it's safe (not on motorways)."],
  ["A will written entirely on a phone note and never printed is valid in England.", false, "Not as of 2026. A will must be in writing, signed and witnessed by two people. The Law Commission has recommended allowing electronic wills in future."],
  ["Children under 16 aren't entitled to the minimum wage.", true, "The minimum wage starts once you're over school leaving age."],
  ["You can legally refuse medical treatment even if it will save your life.", true, "A capable adult can refuse any treatment, for any reason or none."],
  ["A landlord can enter your rented home whenever they like because they own it.", false, "Tenants have a right to 'quiet enjoyment'. Landlords must give at least 24 hours' notice, except in emergencies."],
  ["It's illegal to fly a kite in a way that annoys people in the street.", true, "The Town Police Clauses Act 1847 lists this among street nuisances, along with beating carpets!"],
  ["If you're under 18, you can't get a criminal record.", false, "You can, from age 10. Youth records can still appear on some job checks, though they clear sooner."],
  ["Scottish banknotes are 'legal tender' in England.", false, "They're legal currency and shops may accept them, but 'legal tender' has a narrow technical meaning, and shops can choose what to accept."],
  ["You must be told the reason you are being arrested.", true, "PACE 1984, section 28. An arrest is unlawful if you aren't told the grounds as soon as practicable."],
  ["Recording a film at the cinema on your phone is fine if it's just for you.", false, "It can be copyright infringement and fraud. Cinemas will call the police."]
];

/* Bill Builder: correct order */
LAW.billSteps = [
  ["First Reading", "The Bill's title is read out. No debate yet."],
  ["Second Reading", "MPs debate the big idea and vote on it."],
  ["Committee Stage", "A small group examines it line by line."],
  ["Report Stage", "The whole House considers the changes."],
  ["Third Reading", "A final debate and vote in the first House."],
  ["The other House", "The Lords (or Commons) repeats every stage."],
  ["Ping-pong", "Both Houses swap amendments until they agree."],
  ["Royal Assent", "The King signs. The Bill is now an Act!"]
];

/* Sort the Court: [scenario, 'civil' | 'criminal', explanation] */
LAW.sort = [
  ["Someone steals a bike from outside a shop.", "criminal", "Theft is a crime, prosecuted by the state."],
  ["A builder does a terrible job and won't refund the customer.", "civil", "A breach of contract dispute between two parties."],
  ["A driver is caught at twice the drink-drive limit.", "criminal", "A road traffic crime."],
  ["A newspaper prints a damaging lie about a footballer.", "civil", "Defamation is a civil claim for damages."],
  ["A couple disagree about where their children should live.", "civil", "Family cases are civil, heard in the family court."],
  ["A teenager is caught carrying a lock knife.", "criminal", "Possessing a bladed article in public is an offence."],
  ["A waiter sues because the restaurant kept his tips.", "civil", "An employment tribunal claim."],
  ["Someone hacks into their school's computer system.", "criminal", "Unauthorised access under the Computer Misuse Act 1990."],
  ["A patient claims compensation after a surgeon's careless mistake.", "civil", "A negligence claim."],
  ["A landlord won't return a tenant's deposit.", "civil", "A dispute over money, dealt with through the deposit scheme or county court."],
  ["A gang sprays graffiti on a train.", "criminal", "Criminal damage."],
  ["A shopper slips on a spilled drink and breaks a wrist.", "civil", "A personal injury claim in negligence."],
  ["A scammer tricks pensioners out of their savings.", "criminal", "Fraud Act 2006."],
  ["A woman is paid less than a man for the same job.", "civil", "An equal pay claim in the employment tribunal."],
  ["Someone posts threats to kill on social media.", "criminal", "Threatening communications are an offence."],
  ["Two neighbours argue over where the garden fence should be.", "civil", "A boundary dispute between private parties."]
];
