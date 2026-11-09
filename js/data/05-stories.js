/* Law stories: real cases and campaigns. Each ends with a "you be the judge" choice. */
(function () {
  const S = (id, stage, icon, title, year, hook, text, q, o, a, verdict, lesson, search) =>
    LAW.story({ id, stage, icon, title, year, hook, text, q, o, a, verdict, lesson, url: WIKI(search) });

  /* ---------- birth ---------- */
  S("cyanide", "birth", "🧪", "The Baby Named Cyanide", 2016,
    "Can the law stop a parent choosing a name?",
    ["In Wales, a mother decided on names for her newborn twins. The boy would be Preacher. The girl would be… Cyanide.",
     "She said cyanide was 'a lovely, pretty name' with a positive side, because it was the poison that ended Hitler's life.",
     "Social workers were alarmed. Normally parents can pick any name they like, and registrars only refuse names that are obscene or impossible to write. The council asked the Court of Appeal to step in."],
    "You are the judge. Can the court stop the name?",
    ["No. Naming a child is always the parents' choice", "Yes, but only in extreme cases where the name would harm the child", "Yes. Courts should approve every baby name"],
    1,
    "The Court of Appeal blocked 'Cyanide'. It said naming a child is part of parental responsibility, and courts should only interfere in the most extreme cases. Being named after a deadly poison was likely to cause the girl real emotional harm. The twins' older half-siblings chose their names instead.",
    "Parents have wide freedom, but parental responsibility exists for the CHILD'S benefit. When a decision would seriously harm the child, a court can overrule it.",
    "Re C (Children) 2016 Cyanide name case");

  S("windrush", "birth", "🚢", "The Windrush Scandal", 2018,
    "They came as children, legally. Decades later they were told to leave.",
    ["From 1948, thousands of people sailed from the Caribbean to help rebuild Britain after the war. Many brought their children, who travelled on their parents' passports. A 1971 law gave them all the right to stay for life.",
     "But nobody gave them paperwork, and the Home Office later destroyed their landing cards. Then, from 2012, new 'hostile environment' rules meant everyone had to prove their right to be here to work, rent a home or use the NHS.",
     "People who had lived in Britain for 50 years suddenly lost jobs, homes and healthcare. Some were locked up. At least 83 were wrongly deported."],
    "Who should carry the burden when the state loses the records?",
    ["The individuals: no papers, no rights", "The state: it must put things right and compensate", "Nobody: it was just bad luck"],
    1,
    "After journalists exposed the scandal in 2018, the Home Secretary resigned and the government apologised. A special scheme confirmed people's status for free, and a compensation scheme was set up. An independent review said the disaster was 'foreseeable and avoidable'.",
    "Your legal status matters from the day you're born, and records are precious. It also shows that officials must follow the law, and that journalism and public pressure can force the state to fix an injustice.",
    "Windrush scandal");

  /* ---------- school ---------- */
  S("mandla", "school", "🧑🏽‍🎓", "The Boy, the Turban and the School Cap", 1983,
    "A school uniform rule goes all the way to the House of Lords.",
    ["In 1978, Mr Mandla took his 13-year-old son Gurinder to enrol at a private school in Birmingham. Gurinder was a Sikh and wore a turban, as his faith requires.",
     "The headmaster refused. The uniform rule said short hair and a school cap. No turban, no place. He insisted the rule applied to everybody equally, so it couldn't be discrimination.",
     "The law at the time banned discrimination against 'racial groups'. The school argued that Sikhs were a religion, not a race, so the law didn't protect them."],
    "You are the Law Lord. Was the 'no turban' rule unlawful discrimination?",
    ["No. The same rule applied to everyone", "Yes. Sikhs are an ethnic group, and a rule they can't follow is indirect discrimination", "No. Private schools can make any rule"],
    1,
    "The House of Lords ruled for Gurinder. Sikhs share a long history and cultural tradition, so they count as an ethnic group. A rule that looks neutral but that one group can't comply with, and that can't be justified, is INDIRECT discrimination.",
    "Treating everyone 'the same' isn't always fair. This case shaped the modern law of indirect discrimination, now found in the Equality Act 2010.",
    "Mandla v Dowell-Lee");

  S("platt", "school", "🏰", "The Term-Time Trip to Disney World", 2017,
    "One dad, one £60 fine, and a fight to the Supreme Court.",
    ["Jon Platt took his 6-year-old daughter out of school for a week's holiday at Disney World in Florida. The school had said no. The council fined him £60, which doubled to £120 when he refused to pay.",
     "The law says parents commit an offence if their child fails to attend school 'regularly'. Mr Platt argued his daughter's attendance was over 90% even with the trip. Surely that was 'regular'?",
     "The magistrates agreed with him. So did the High Court. Families across England started booking cheaper term-time holidays. The council appealed to the Supreme Court."],
    "What does attending 'regularly' mean?",
    ["Often enough: 90% is plenty", "In accordance with the rules set by the school", "At evenly spaced intervals"],
    1,
    "The Supreme Court ruled unanimously against Mr Platt. 'Regularly' means 'in accordance with the rules prescribed by the school'. Otherwise any parent could take children out whenever it suited, causing chaos for teachers and classmates. He was convicted and paid the price.",
    "A single word in an Act can decide a case. Judges looked at what Parliament intended, not just the dictionary. Today's fine is £80, and unauthorised term-time holidays can get expensive fast.",
    "Isle of Wight Council v Platt");

  /* ---------- teen ---------- */
  S("twitterjoke", "teen", "🐦", "The Twitter Joke Trial", 2012,
    "One angry tweet. A criminal record. A two-year legal battle.",
    ["In January 2010, snow closed Robin Hood Airport near Doncaster. Paul Chambers, 26, was due to fly to see his girlfriend. Frustrated, he tweeted to his 600 followers:",
     "'Crap! Robin Hood airport is closed. You've got a week and a bit to get your s*** together, otherwise I'm blowing the airport sky high!!'",
     "An off-duty airport manager found the tweet days later. Nobody at the airport thought it was a real threat, but it was passed to police. Paul was arrested at work, convicted of sending a 'menacing' message, fined, and lost his job."],
    "Was the tweet a crime?",
    ["Yes. Any mention of bombing an airport is criminal", "No. A message isn't 'menacing' if no reasonable person would see it as a real threat", "Yes, but only because he swore"],
    1,
    "After two failed appeals, the High Court quashed his conviction in 2012. The judges said a message that doesn't create fear or apprehension in those who read it, and which is obviously a joke, is not 'menacing'. Comedians Stephen Fry and Al Murray had supported him at court.",
    "What you post online is covered by real laws: threats, harassment and hate can all be crimes. Paul won in the end, but it cost him two years, two jobs and enormous stress. Think before you post.",
    "Twitter Joke Trial");

  S("fisherbell", "teen", "🔪", "The Flick Knife in the Window", 1960,
    "A shopkeeper, a banned knife, and a very clever loophole.",
    ["Parliament had just banned flick knives. The new Act made it a crime to 'offer for sale' one of these weapons.",
     "Mr Bell ran a shop in Bristol. In his window he displayed a flick knife with a ticket: 'Ejector knife – 4s.' A police officer spotted it and Mr Bell was prosecuted.",
     "It seemed obvious: the knife was in the window with a price on it. But Mr Bell's lawyers had been studying contract law…"],
    "Was Mr Bell 'offering' the knife for sale?",
    ["Yes. It had a price tag on it", "No. A window display is only an invitation for customers to make an offer", "Yes, because flick knives are dangerous"],
    1,
    "Mr Bell was found not guilty. In contract law, goods in a shop window are an 'invitation to treat': the CUSTOMER makes the offer when they ask to buy, and the shop can say no. Since Parliament had used the legal word 'offer', the court gave it its legal meaning.",
    "Parliament was embarrassed and changed the Act within months to add 'exposes for sale'. It's also why a shop doesn't have to sell you something at a mistaken price on the shelf. Today the knife laws are much tighter, and loopholes like this one are long closed.",
    "Fisher v Bell");

  /* ---------- justice ---------- */
  S("postoffice", "justice", "📮", "The Post Office Scandal", 2019,
    "The computer said they were thieves. The computer was wrong.",
    ["From 1999 the Post Office gave its branches a new computer system called Horizon. Soon, sub-postmasters who ran local post offices noticed something frightening: the system showed money missing that they had never taken.",
     "The Post Office insisted Horizon was reliable and told each person they were the only one having problems. Over 900 sub-postmasters were prosecuted for theft and false accounting. Some went to prison. Many were bankrupted, shunned by neighbours, and some took their own lives.",
     "Former sub-postmaster Alan Bates refused to give up. He found others, one by one, and in 2017 a group of 555 took the Post Office to the High Court."],
    "What should a court do when a powerful organisation says 'our computer is never wrong'?",
    ["Trust it. Computers don't make mistakes", "Demand the evidence and test it properly", "Leave it to the organisation to investigate itself"],
    1,
    "In 2019 the High Court found Horizon was full of 'bugs, errors and defects'. Convictions began to be overturned, and after a TV drama in 2024 brought huge public anger, Parliament passed a special Act quashing hundreds of convictions at once. It is called the most widespread miscarriage of justice in British history.",
    "Evidence must be tested, not assumed. The prosecution has to PROVE guilt, and it must share anything that might help the defence. Ordinary people who stick together can beat a giant.",
    "British Post Office scandal");

  S("lawrence", "justice", "🕯️", "Stephen Lawrence and the Rule That Changed", 2012,
    "A family's 19-year fight rewrote an 800-year-old rule.",
    ["Stephen Lawrence was 18 and wanted to be an architect. In April 1993 he was waiting for a bus in south-east London when a gang of white youths attacked and killed him, simply because he was Black.",
     "The police investigation was a failure. Suspects were named within days but no one was convicted. Stephen's parents brought their own private prosecution, and three suspects were formally acquitted.",
     "An ancient rule called 'double jeopardy' said that once you were acquitted, you could never be tried again for the same crime, whatever new evidence appeared."],
    "Should a person ever be tried twice for the same crime?",
    ["Never. An acquittal must be final", "Yes, for the most serious crimes, if there is new and compelling evidence", "Yes, whenever police want another go"],
    1,
    "A public inquiry (the Macpherson Report, 1999) found the police guilty of 'institutional racism' and recommended changing double jeopardy. Parliament did so in the Criminal Justice Act 2003. New forensic evidence was found, one acquittal was quashed, and in 2012 two men were convicted of Stephen's murder.",
    "Laws can change when they produce injustice. The reform is narrow on purpose: only for very serious crimes, only with new and compelling evidence, and only if the Court of Appeal agrees.",
    "Murder of Stephen Lawrence");

  S("dudley", "justice", "⛵", "Shipwrecked: The Cabin Boy Case", 1884,
    "Three starving sailors, one terrible decision.",
    ["The yacht Mignonette sank in a storm 1,600 miles from land. Four crew escaped in a tiny lifeboat: Captain Dudley, Stephens, Brooks, and the cabin boy, 17-year-old Richard Parker.",
     "They had two tins of turnips and no water. After nearly three weeks they were dying. Richard had drunk seawater and lay very ill at the bottom of the boat.",
     "Dudley and Stephens decided that one must die so the others could live. They killed Richard. Four days later a ship rescued the three survivors. Back in England, they told the truth, expecting sympathy. They were charged with murder."],
    "Is 'we had to do it to survive' a defence to murder?",
    ["Yes. Necessity excuses anything", "No. Necessity is never a defence to murder", "Yes, because the boy was dying anyway"],
    1,
    "The judges ruled that necessity is no defence to murder. Who could decide whose life is worth less? The men were sentenced to death, but public sympathy was enormous and Queen Victoria reduced the sentence to six months in prison.",
    "Some legal rules are absolute, even in desperate situations: you cannot take an innocent life to save your own. The case is still taught to every law student.",
    "R v Dudley and Stephens");

  /* ---------- adult / democracy ---------- */
  S("miller", "adult", "🕷️", "The Prime Minister v the Supreme Court", 2019,
    "Can the government switch Parliament off?",
    ["In August 2019 Britain was weeks away from the Brexit deadline. Prime Minister Boris Johnson advised the Queen to 'prorogue' (suspend) Parliament for five weeks. MPs would have almost no time to debate or question what the government was doing.",
     "The government said this was normal before a new session, and anyway it was politics: no business of the courts.",
     "Campaigner Gina Miller in London, and a group of MPs in Scotland, went to court. The Scottish court said the suspension was unlawful; the English court said judges couldn't interfere. Eleven Supreme Court Justices sat to decide."],
    "Can a court overrule the Prime Minister's advice to the Queen?",
    ["No. It is pure politics", "Yes, if suspending Parliament stops it doing its job without a good reason", "Only the King or Queen can decide"],
    1,
    "All 11 Justices agreed: the suspension was unlawful, void, and of no effect. Lady Hale, wearing a now-famous spider brooch, said it was as if the order had been 'a blank sheet of paper'. Parliament went back to work the next day.",
    "Nobody is above the law, not even the Prime Minister. The government answers to Parliament, and courts can check that power is used lawfully. That principle is called the rule of law.",
    "R (Miller) v The Prime Minister");

  S("entick", "adult", "🚪", "The King's Men at the Door", 1765,
    "Four officials smash their way into a writer's home.",
    ["John Entick was a writer whose paper criticised the government. One morning in 1762 four of the King's messengers forced their way into his London house.",
     "For four hours they broke open locked desks and boxes and carried away hundreds of his papers. They had a warrant signed by a government minister, Lord Halifax.",
     "Entick sued them for trespass. The messengers said: we were acting for the state, on a minister's orders. That must be enough."],
    "Is 'the government told me to' enough?",
    ["Yes. The state can do whatever it needs to", "No. The state can only do what the law specifically allows", "Yes, if the minister is important enough"],
    1,
    "Entick won £300, a fortune at the time. Lord Camden declared: 'If it is law, it will be found in our books. If it is not to be found there, it is not law.' No statute or precedent let a minister issue such a warrant, so the search was plain trespass.",
    "This is a foundation stone of freedom in Britain and inspired part of the US Constitution. Ordinary people may do anything the law doesn't forbid; the state may do only what the law permits. It is why police need legal powers and warrants today.",
    "Entick v Carrington");

  /* ---------- study ---------- */
  S("carlill", "study", "💨", "The Smoke Ball That Couldn't Lose", 1893,
    "An advert makes a bold promise. One customer calls its bluff.",
    ["During a deadly flu epidemic, a company advertised its 'Carbolic Smoke Ball'. Sniff it three times a day and you would never catch flu.",
     "The advert promised £100 (about £14,000 today) to anyone who used it properly and still got ill. To prove they meant it, the company said it had deposited £1,000 at a bank.",
     "Mrs Louisa Carlill bought one, used it exactly as told for weeks, and caught the flu. She claimed her £100. The company refused, saying the advert was obviously just sales talk and they had no contract with her."],
    "Is the advert a real, binding promise?",
    ["No. Adverts are never meant seriously", "Yes. It was a clear offer to the world, and she accepted by doing what it asked", "No, because she never told the company she accepted"],
    1,
    "The Court of Appeal ordered the company to pay. Depositing £1,000 showed they were serious. The advert was an offer to anyone who performed its conditions, and by using the ball as directed Mrs Carlill accepted it. Fun fact: she lived to 96 and died of… flu.",
    "A contract needs an offer, acceptance, something of value exchanged, and an intention to be bound. Every first-year law student learns this case. It is also why reward posters ('£50 for my lost cat') are legally binding.",
    "Carlill v Carbolic Smoke Ball Co");

  S("siddiqui", "study", "🎓", "The Graduate Who Sued Oxford", 2018,
    "Can you sue your university over your grade?",
    ["Faiz Siddiqui studied modern history at Oxford and graduated in 2000 with an upper second (2:1) degree, a good result.",
     "Sixteen years later he sued the university for £1 million. He said 'appallingly bad' teaching on one course, when several tutors were away, had cost him a first-class degree and a glittering career as an international lawyer.",
     "Oxford accepted that the course had been under pressure that year, but said the teaching was still adequate, and that his result had other explanations."],
    "Should the university pay?",
    ["Yes. A 2:1 instead of a first proves bad teaching", "No, unless he proves the teaching fell below a reasonable standard AND that it caused his loss", "Yes. Students always win as consumers"],
    1,
    "The High Court dismissed the claim. The judge found the teaching had been of a reasonable standard, and the real causes of his result were personal ones, including severe hay fever during exams. He had also sued years too late.",
    "Universities DO owe students a legal duty of reasonable care and skill, and students have real consumer rights. But a claimant must prove three things: a breach, that the breach caused the loss, and that they sued in time. Disappointment alone isn't enough.",
    "Siddiqui v University of Oxford");

  /* ---------- work ---------- */
  S("uber", "work", "🚕", "Uber Drivers Take the Wheel", 2021,
    "Are gig-economy drivers their own bosses, or workers with rights?",
    ["Yaseen Aslam and James Farrar drove for Uber in London. Uber's contracts said drivers were self-employed 'partners' running their own businesses. Uber, it said, was just a technology company connecting them with passengers.",
     "That meant no minimum wage, no holiday pay and no rest breaks.",
     "But the drivers pointed out that Uber set the fares, chose the routes, wrote the contract terms, limited contact with passengers, and punished drivers who turned down too many rides."],
    "What decides someone's status: the written contract, or the reality?",
    ["The contract. They signed it", "The reality of how the work is actually controlled", "Whatever the company prefers"],
    1,
    "After five years and four courts, the Supreme Court ruled unanimously for the drivers. Employment laws exist to protect people in a weak bargaining position, so courts look at the real relationship, not the label a company's lawyers write. Uber drivers were 'workers', entitled to minimum wage and paid holiday from the moment they log on.",
    "Tens of thousands of drivers gained rights overnight. A label in a contract can't remove rights Parliament has given you. Whatever your job, what counts is how the work really operates.",
    "Uber BV v Aslam");

  S("dagenham", "work", "🧵", "The Machinists Who Stopped Ford", 1968,
    "187 women walk out, and change the law for millions.",
    ["At Ford's huge Dagenham factory, 187 women sewed the covers for car seats. It was skilled work: they had to pass a test to get the job.",
     "In 1968 Ford graded their work as 'unskilled', paying them 15% less than men doing comparable jobs, and less than men who swept the floors.",
     "The women went on strike. Without seat covers, Ford's whole production line stopped within days. The papers mocked them. The company warned of ruin."],
    "It was perfectly legal in 1968 to pay women less. What should happen?",
    ["Nothing. The employer sets the pay", "The law should change so equal work means equal pay", "The women should find other jobs"],
    1,
    "After three weeks, employment minister Barbara Castle met the strikers over tea and brokered a deal. More importantly, she pushed through the Equal Pay Act 1970, making it illegal to pay men and women differently for the same work. The Dagenham women finally won recognition as skilled workers after a second strike in 1984.",
    "Laws don't appear from nowhere. Ordinary people who stand together can change them. Equal pay is now part of the Equality Act 2010, and big employers must publish their gender pay gaps.",
    "Ford sewing machinists strike of 1968");

  /* ---------- road ---------- */
  S("nettleship", "road", "🚙", "The Learner Driver and the Lamp Post", 1971,
    "It was only her third lesson. Does the law go easy on beginners?",
    ["Mr Nettleship agreed to teach his friend's wife, Mrs Weston, to drive in her husband's car. Being careful, he first checked that the insurance covered passengers.",
     "On the third lesson, Mrs Weston turned a corner at walking pace but then froze, gripping the wheel. The car mounted the pavement and hit a lamp post. Mr Nettleship's kneecap was broken.",
     "He sued. Mrs Weston said she had done her honest best: nobody could expect a learner on lesson three to drive like an expert."],
    "What standard of driving does the law demand from a learner?",
    ["The standard of a reasonable learner", "The same standard as a competent, qualified driver", "No standard until they pass their test"],
    1,
    "The Court of Appeal held that every driver, learner or not, owes the same duty: the standard of a reasonably competent, experienced driver. Lord Denning said the learner's 'incompetent best is not good enough'. Mrs Weston was liable (and her insurance paid).",
    "The law protects the injured person: a pedestrian hit by a learner is hurt just as badly. This is exactly why learners must be insured and supervised, and why the standard on the road is the same for everyone from day one.",
    "Nettleship v Weston");

  S("froom", "road", "🪢", "The Seat Belt He Didn't Wear", 1975,
    "The crash wasn't his fault. But should he get full compensation?",
    ["Mr Froom was driving carefully when another driver, Mr Butcher, swerved onto the wrong side of the road and smashed into him head-on. The accident was entirely Mr Butcher's fault.",
     "Mr Froom's head and chest were injured. Evidence showed these injuries would have been avoided if he had been wearing his seat belt.",
     "At that time wearing a belt wasn't yet compulsory. Mr Froom said he didn't like belts, because he had seen crashes where drivers were trapped by them."],
    "Should his compensation be reduced?",
    ["No. The crash was 100% the other driver's fault", "Yes. He is partly responsible for how badly he was hurt", "He should get nothing at all"],
    1,
    "The Court of Appeal cut his damages. Lord Denning explained: the question is not what caused the ACCIDENT, but what caused the DAMAGE. He set a guide that courts still use: 25% off if the belt would have prevented the injuries altogether, 15% off if they would have been less severe.",
    "This is 'contributory negligence': you have a duty to take reasonable care of your own safety. The same idea applies to cyclists without lights or passengers who accept a lift from a drunk driver. Seat belts became compulsory for front seats in 1983.",
    "Froom v Butcher");

  /* ---------- health ---------- */
  S("gillick", "health", "👩‍👧", "Mrs Gillick's Challenge", 1985,
    "Can a doctor treat an under-16 without telling their parents?",
    ["In 1980 the Department of Health told doctors they could, in exceptional cases, give contraceptive advice to girls under 16 without their parents knowing.",
     "Victoria Gillick, a mother of ten including five daughters, was outraged. She wrote to her local health authority demanding a promise that none of her daughters would be treated without her consent. It refused.",
     "She took her case to court, arguing that parents have the right to decide on medical treatment until a child turns 16."],
    "Who decides about an under-16's treatment?",
    ["Always the parents, until 16", "The child, if they have enough understanding and intelligence to make the decision", "Always the doctor"],
    1,
    "Mrs Gillick lost, 3–2, in the House of Lords. Lord Scarman said parental rights exist for the benefit of the child and 'yield to the child's right to make his own decisions when he reaches a sufficient understanding and intelligence'.",
    "Ironically, the name of the mother who fought the idea now labels it: a 'Gillick competent' child can consent to their own treatment, and doctors must keep it confidential. Growing up is gradual in law, not a single birthday.",
    "Gillick v West Norfolk and Wisbech Area Health Authority");

  S("montgomery", "health", "🤰", "The Risk Nobody Mentioned", 2015,
    "Doctor knows best? One mother spent 16 years proving otherwise.",
    ["Nadine Montgomery was a scientist, small in height, with diabetes, and expecting her first baby in 1999. Diabetic mothers often have larger babies, and there was a 9–10% risk the baby's shoulders would get stuck during birth.",
     "Her doctor knew this but chose not to tell her. She believed that if women were told, they would all ask for a caesarean, which she thought was not in their interests.",
     "During the birth the baby's shoulders did get stuck. For 12 minutes he was starved of oxygen. Sam was born with cerebral palsy. Nadine said: if I had known, I would have chosen a caesarean."],
    "Who decides which risks a patient needs to hear about?",
    ["The doctor: they are the expert", "The patient: they must be told any risk a reasonable person in their position would care about", "Hospital managers"],
    1,
    "The Supreme Court ruled unanimously for Nadine and awarded £5.25 million for Sam's care. Patients are adults who make their own choices, not passive recipients of care. Doctors must discuss any 'material risk' and reasonable alternatives.",
    "This case ended 'doctor knows best' in UK law. Consent only counts if it is INFORMED. You're always entitled to ask: What are the risks? What are the alternatives? What happens if I do nothing?",
    "Montgomery v Lanarkshire Health Board");

  S("maxkeira", "health", "❤️", "Max and Keira's Law", 2020,
    "A nine-year-old's gift changed the law of England.",
    ["In 2017, nine-year-old Keira Ball from Devon was fatally injured in a car crash. In the worst hours of their lives, her family made a decision: Keira would donate her organs. She saved four people.",
     "One of them was Max Johnson, also nine, from Cheshire. A virus had destroyed his heart and he had waited over 200 days in hospital, kept alive by a mechanical pump. Keira's heart saved his life.",
     "At that time people had to actively sign up to become donors. Most people supported donation but never got round to registering, and around three people a day died waiting for a transplant."],
    "How should the law treat people who never recorded a decision?",
    ["Never donors unless they signed up", "Presumed willing unless they opted out, with families still consulted", "Everyone must donate, no exceptions"],
    1,
    "Max and his family campaigned alongside the Daily Mirror, and Parliament passed the Organ Donation (Deemed Consent) Act 2019. From May 2020 adults in England are considered willing donors unless they opt out. With Keira's family's blessing it is known as Max and Keira's Law.",
    "All four UK nations now have opt-out systems (Wales led the way in 2015). You can still record a yes or a no on the NHS Organ Donor Register, and the best thing anyone can do is tell their family their wishes.",
    "Organ Donation (Deemed Consent) Act 2019");

  /* ---------- money ---------- */
  S("donoghue", "money", "🐌", "The Snail in the Bottle", 1932,
    "The most famous drink in legal history.",
    ["On a summer evening in 1928, May Donoghue met a friend at a café in Paisley, Scotland. Her friend bought her an ice cream float with ginger beer, which came in a dark, opaque bottle.",
     "May drank some. Then her friend poured out the rest, and out floated the remains of a decomposing snail. May suffered shock and a serious stomach illness.",
     "But she had a legal problem. She hadn't bought the drink, so she had no contract with the café. And she had no contract with the manufacturer, Mr Stevenson, either. In 1928, no contract meant no claim."],
    "Can May sue the manufacturer, who she never dealt with?",
    ["No. No contract, no claim", "Yes. Manufacturers owe a duty of care to the people who will use their products", "Only her friend can sue"],
    1,
    "By 3 votes to 2, the House of Lords said yes. Lord Atkin created the 'neighbour principle': you must take reasonable care to avoid acts you can foresee would injure your 'neighbour', meaning anyone closely and directly affected by what you do.",
    "This one snail created the modern law of negligence, used today in everything from car crashes to medical mistakes. (Nobody ever proved the snail existed: the case settled before trial!) Today the Consumer Protection Act 1987 also makes producers liable for unsafe products.",
    "Donoghue v Stevenson");

  S("awaab", "money", "🏚️", "Awaab's Law", 2023,
    "A two-year-old, a mouldy flat, and a landlord who didn't listen.",
    ["Awaab Ishak lived with his parents in a one-bedroom housing association flat in Rochdale. The walls of the kitchen and bathroom were black with mould.",
     "His father first reported it in 2017 and was told to paint over it. The family complained again and again, and a health visitor wrote to the landlord. Nothing was done. Staff assumed the mould was caused by the family's 'lifestyle'.",
     "In December 2020, eight days after his second birthday, Awaab died. The coroner ruled his death was caused by a severe respiratory condition due to prolonged exposure to mould in his home."],
    "What should the law require of a social landlord told about dangerous damp?",
    ["Fix it when convenient", "Investigate and repair within strict legal deadlines", "Nothing, if the tenant can't prove the cause"],
    1,
    "The coroner asked: 'How in the UK in 2020 does a two-year-old child die from exposure to mould?' After a campaign by Awaab's family, Parliament passed 'Awaab's Law'. Since October 2025 social landlords in England must investigate serious damp and mould within fixed time limits and make emergency hazards safe within 24 hours.",
    "Every tenant has the right to a home that is safe and fit to live in. Report problems in writing, keep copies, and if a landlord ignores you, go to the council or the Housing Ombudsman.",
    "Death of Awaab Ishak");

  /* ---------- family ---------- */
  S("owens", "family", "💔", "The Wife Who Wasn't Allowed to Divorce", 2018,
    "Trapped in a marriage by the law itself.",
    ["Tini Owens had been married to Hugh for nearly 40 years. She was deeply unhappy, had moved out, and asked for a divorce.",
     "Under the law at the time, unless a couple had lived apart for years, one of them had to prove the other was at fault: adultery, desertion or 'unreasonable behaviour'. Tini listed 27 examples of Hugh being moody, critical and argumentative.",
     "Unusually, Hugh fought the case. He said these were just the ordinary ups and downs of married life. The judge agreed that her examples were 'flimsy'."],
    "Should the court grant the divorce?",
    ["Yes. If she wants out, that's enough", "No. Under the law as it stood, she hadn't proved unreasonable behaviour", "Yes, because 40 years is long enough"],
    1,
    "The Supreme Court refused, 'with reluctance'. The judges said the law was clear and it was not their job to change it: that was for Parliament. Tini had to stay married until she had been separated for five years, in 2020.",
    "The public outcry worked. Parliament passed the Divorce, Dissolution and Separation Act 2020, and since April 2022 divorce in England and Wales is 'no-fault'. It's a perfect example of the separation of powers: judges apply the law, Parliament changes it.",
    "Owens v Owens");

  S("burns", "family", "🏠", "Nineteen Years and Nothing", 1984,
    "She raised the children and ran the home. Whose house was it?",
    ["Valerie lived with Patrick Burns for 19 years. They never married, but she used his surname and everyone thought they were husband and wife.",
     "He bought the house in his name alone and paid the mortgage. Valerie gave up work to raise their two children, then later used her earnings for household bills, furniture, a washing machine, and decorating.",
     "When they split up, Valerie claimed a share of the home she had lived in and looked after for almost two decades."],
    "Does Valerie get a share of the house?",
    ["Yes: half, like a wife would", "No. She wasn't married and had made no direct payment towards buying it", "Yes: a quarter for the housework"],
    1,
    "The Court of Appeal gave her nothing. Because they were unmarried, the divorce laws couldn't help. And under property law, housework and child-raising don't earn a share: only an agreement, or paying towards the purchase, does. The judges called the result unfair but said only Parliament could fix it.",
    "Forty years on, the 'common-law marriage' myth is still a myth in England and Wales, and cohabiting couples are the fastest-growing family type. Protect yourself: own the home jointly, write a cohabitation agreement, and make a will.",
    "Burns v Burns");

  /* ---------- retire ---------- */
  S("seldon", "retire", "📅", "Forced Out at 65", 2012,
    "A solicitor sues his own law firm for age discrimination.",
    ["Leslie Seldon was a partner in a firm of solicitors in Kent. The partnership agreement said partners must retire at the end of the year they turn 65.",
     "As his 65th birthday approached, he asked to stay on. He felt fine and needed the income. The firm refused and he had to go.",
     "He claimed direct age discrimination. The firm said the rule had good reasons: giving younger lawyers a chance at promotion, helping the firm plan ahead, and avoiding undignified arguments about whether older partners were still up to the job."],
    "Can a compulsory retirement age ever be lawful?",
    ["Never. It's always age discrimination", "Yes, but only if it pursues a real social aim and is a proportionate way of achieving it", "Yes, employers can always choose"],
    1,
    "The Supreme Court said age is different from other protected characteristics: direct age discrimination CAN be justified, but only by genuine social-policy aims, like fairness between the generations, and only if the chosen age is proportionate. A tribunal later decided 65 was justified for this firm at that time.",
    "Since 2011 there's no general retirement age, and most employers can't force you out. Any employer that sets one must be ready to prove it is really necessary for that job. 'We've always done it' isn't good enough.",
    "Seldon v Clarkson Wright and Jakes");

  S("waspi", "retire", "📬", "The Letter That Never Came", 2024,
    "Millions of women found out their pension had moved, too late to plan.",
    ["For decades, women in the UK could claim the State Pension at 60, men at 65. In 1995 Parliament decided to equalise the ages, and in 2011 it sped the change up.",
     "Equal ages were fair. The problem was the warning. Many women born in the 1950s say they were never properly told. Some had already left their jobs or made plans around retiring at 60, then discovered they must wait up to six more years.",
     "They formed a campaign called WASPI (Women Against State Pension Inequality). The courts ruled the age change itself was lawful, so they complained to the Parliamentary Ombudsman about how it was communicated."],
    "The law was valid. Did the government still do something wrong?",
    ["No. If a law is valid there is nothing to complain about", "Yes. Failing to tell people properly was maladministration", "The change itself should be cancelled"],
    1,
    "In March 2024 the Ombudsman found 'maladministration': the government department should have written to the women at least 28 months earlier, and it recommended compensation. The government apologised for the delay but declined to pay a compensation scheme, saying most women knew and it would cost too much. The campaign continues.",
    "A law can be legal and still be carried out badly. Ombudsmen investigate unfair treatment by public bodies for free, though they can only recommend, not order. And one more lesson: check your own State Pension age and forecast on GOV.UK. Don't wait for a letter.",
    "Women Against State Pension Inequality");

  /* ---------- death ---------- */
  S("ilott", "death", "🐾", "The Daughter, the Mother and the Animal Charities", 2017,
    "Cut out of the will. Can the court write her back in?",
    ["At 17, Heather left home in secret to live with her boyfriend, whom she later married. Her mother, Melita Jackson, never forgave her. They were estranged for 26 years.",
     "When Mrs Jackson died in 2004 she left her entire estate, worth £486,000, to three animal charities she'd had no real connection with. She left a letter telling her executors to fight any claim by Heather.",
     "Heather had five children and lived on benefits in a housing association home, with an old car and worn-out appliances. She asked the court for 'reasonable financial provision' from the estate."],
    "What should Heather receive?",
    ["Nothing. The will is the will", "A modest sum for her maintenance, with the rest going to the charities", "Everything. Family beats charity"],
    1,
    "After 10 years of appeals the Supreme Court restored the original award of £50,000, roughly a tenth of the estate. People in England and Wales are free to leave property as they wish, and the mother's wishes carried weight. An adult child can only claim what they need for maintenance, not a share as of right.",
    "'Testamentary freedom' is strong in England and Wales, but not unlimited: the 1975 Act is a safety net for family and dependants in need. In Scotland, by contrast, children can never be completely cut out.",
    "Ilott v The Blue Cross");

  S("marley", "death", "✍️", "The Couple Who Signed the Wrong Wills", 2014,
    "A simple mix-up that nobody noticed for years.",
    ["Alfred and Maureen Rawlings made 'mirror wills' in 1999. Each left everything to the other, and after both had died, everything was to go to Terry Marley, who wasn't related to them but whom they treated as their son.",
     "Their solicitor laid both wills on the table, but handed each of them the wrong one. Alfred signed Maureen's will. Maureen signed Alfred's. No one noticed, not even when Maureen died.",
     "When Alfred died in 2006 the mistake was spotted. The couple's two biological sons pounced: Alfred never signed HIS will, so it was invalid, and under the intestacy rules they would inherit the lot. Terry would get nothing."],
    "Is the will valid?",
    ["No. Rules are rules: he signed the wrong document", "Yes. It was an obvious clerical error that the court can correct", "Split it three ways"],
    1,
    "Two courts said the will was invalid. Then the Supreme Court unanimously saved it. Everyone knew exactly what Alfred intended, and the law lets a court 'rectify' a will that fails because of a clerical error. Handing over the wrong paper was a clerical error. Terry inherited.",
    "The strict formalities for wills exist to prevent fraud, not to defeat people's obvious wishes. Still, do it properly: read what you sign! (The solicitor's insurers ended up paying the legal bills.)",
    "Marley v Rawlings");
})();
