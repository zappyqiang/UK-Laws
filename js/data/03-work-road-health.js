/* Stages 7-9: work, transport, health. */

LAW.add({
  id: "work", icon: "💼", title: "World of Work", ages: "Age 16+", color: "#f4845f",
  tagline: "Get paid fairly, stay safe, and know when the boss is breaking the rules.",
  scenes: [
    { bg: "office", cap: "First job! By law your employer must give you a written statement of your pay, hours and holidays on or before day one.",
      actors: [["🏢", 18, 42, 5, "pop"], ["🧑‍💼", 44, 62, 4.2, "walk-r"], ["📄", 66, 50, 4, "drop", "Your contract"], ["🤝", 84, 64, 3.5, "pulse"]] },
    { bg: "office", cap: "There's a minimum wage. From April 2026: £12.71 an hour if you're 21 or over, £10.85 at 18–20, and £8.00 at 16–17.",
      actors: [["💷", 22, 40, 4, "float"], ["💷", 50, 32, 4.6, "float"], ["💷", 78, 40, 4, "float"], ["⏱️", 50, 68, 4, "pulse"]] },
    { bg: "room", cap: "You get at least 5.6 weeks of paid holiday a year, rest breaks, and nobody can force you to work more than 48 hours a week on average.",
      actors: [["🏖️", 26, 46, 5, "float"], ["☕", 54, 60, 4, "bounce"], ["⏰", 78, 42, 4.2, "shake"], ["4️⃣8️⃣", 78, 72, 2.4, "pop"]] },
    { bg: "office", cap: "It is illegal to treat you worse because of your age, disability, race, religion, sex, sexual orientation or other protected characteristics.",
      actors: [["⚖️", 50, 32, 5, "sway"], ["👩🏽‍💼", 22, 66, 3.6, "bounce"], ["👨🏿‍💼", 38, 66, 3.6, "bounce"], ["🧑‍🦽", 54, 66, 3.6, "bounce"], ["🧕", 70, 66, 3.6, "bounce"], ["👴", 86, 66, 3.6, "bounce"]] },
    { bg: "room", cap: "Your boss must keep you safe: proper training, safe equipment and protective gear. You can refuse work that puts you in serious danger.",
      actors: [["👷", 30, 60, 4.5, "bounce"], ["⛑️", 52, 36, 4, "drop"], ["🦺", 70, 56, 4, "pop"], ["⚠️", 88, 36, 3.5, "pulse"]] },
    { bg: "court", cap: "If things go wrong, try talking first, then Acas for free help. As a last resort an Employment Tribunal can order your employer to pay up.",
      actors: [["🗣️", 20, 58, 4, "pop"], ["➡️", 36, 58, 2.6, "pulse"], ["🕊️", 52, 54, 4, "float", "Acas"], ["➡️", 68, 58, 2.6, "pulse"], ["🏛️", 84, 52, 4.5, "pop"]] }
  ],
  facts: [
    ["Minimum wage", "From April 2026: £12.71 an hour (age 21+, the 'National Living Wage'), £10.85 (18–20), £8.00 (16–17 and apprentices). It's a crime to pay less, and tips can't be used to top wages up to the minimum.", "National Minimum Wage Act 1998", "UK", GOV("national-minimum-wage-rates")],
    ["Written terms from day one", "Employees and workers must get a written statement of their main terms (pay, hours, holiday, notice) on or before their first day.", "Employment Rights Act 1996, s.1", "GB", GOV("employment-contracts-and-conditions/written-statement-of-employment-particulars")],
    ["Payslips", "You have the right to an itemised payslip showing your pay and every deduction. Your employer cannot take money from your wages unless the law or your contract allows it.", "Employment Rights Act 1996, s.8 & 13", "GB", GOV("payslips")],
    ["Working hours", "You can't be made to work more than 48 hours a week on average unless you opt out in writing. Adults get a 20-minute break in shifts over 6 hours and 11 hours' rest between working days.", "Working Time Regulations 1998", "GB", GOV("maximum-weekly-working-hours")],
    ["Extra protection for 16–17s", "Young workers can't normally work more than 8 hours a day or 40 hours a week. They get a 30-minute break after 4.5 hours and 12 hours' rest between shifts.", "Working Time Regulations 1998", "GB", GOV("child-employment/minimum-ages-children-can-work")],
    ["Paid holiday", "Almost all workers get 5.6 weeks' paid holiday a year. That is 28 days if you work 5 days a week, and bank holidays can be counted inside it.", "Working Time Regulations 1998", "GB", GOV("holiday-entitlement-rights")],
    ["Sick pay", "Statutory Sick Pay is around £123 a week (or 80% of your pay if that's lower) for up to 28 weeks. Since April 2026 it is paid from the first day of illness and low earners qualify too.", "Employment Rights Act 2025", "GB", GOV("statutory-sick-pay")],
    ["Discrimination is illegal", "Employers must not discriminate, harass or victimise because of the nine protected characteristics. This covers job adverts and interviews too. Since October 2024 employers have a duty to take reasonable steps to prevent sexual harassment.", "Equality Act 2010", "GB", "https://www.acas.org.uk/discrimination-and-the-law"],
    ["Equal pay", "Men and women must get equal pay for equal work. Large employers (250+ staff) must publish their gender pay gap every year.", "Equality Act 2010, s.66", "GB", GOV("equal-pay")],
    ["Health and safety", "Employers must protect staff 'so far as is reasonably practicable'. Employees must take reasonable care too. You can't be punished for leaving a seriously dangerous workplace.", "Health and Safety at Work etc. Act 1974", "GB", "https://www.hse.gov.uk/workers/"],
    ["Unfair dismissal", "You can't be sacked without a fair reason and a fair process. Today you usually need 2 years' service to claim; from 1 January 2027 that drops to 6 months. Some reasons, like pregnancy or whistleblowing, are 'automatically unfair' from day one.", "Employment Rights Act 1996; Employment Rights Act 2025", "GB", GOV("dismissal")],
    ["Notice and redundancy", "After a month in a job you're entitled to at least 1 week's notice, rising by a week per year worked, up to 12. Made redundant after 2 years? You get statutory redundancy pay.", "Employment Rights Act 1996", "GB", GOV("redundancy-your-rights")],
    ["Tips belong to staff", "Since October 2024 employers must pass 100% of tips and service charges to workers, shared out fairly.", "Employment (Allocation of Tips) Act 2023", "GB", GOVS("tipping law workers")],
    ["Zero-hours contracts", "A zero-hours contract can't stop you from working for someone else. You still get the minimum wage and paid holiday. New rights to guaranteed hours are being phased in under the Employment Rights Act 2025.", "Employment Rights Act 1996, s.27A", "GB", GOV("contract-types-and-employer-responsibilities/zero-hour-contracts")],
    ["Whistleblowing", "If you report serious wrongdoing at work, such as crime, danger or cover-ups, the law protects you from being sacked or punished for it.", "Public Interest Disclosure Act 1998", "GB", GOV("whistleblowing")],
    ["Tax and National Insurance", "You can earn £12,570 a year before paying any income tax. Above that the basic rate is 20% (Scotland sets its own bands). National Insurance builds up your State Pension.", "Income Tax Act 2007", "MIX", GOV("income-tax-rates")],
    ["Automatic pension", "If you're 22 or over and earn £10,000+ a year, your employer must enrol you in a workplace pension and pay into it. At least 8% of qualifying pay goes in, with 3% from the employer.", "Pensions Act 2008", "GB", GOV("workplace-pensions")],
    ["Flexible working", "From your very first day you can ask to change your hours, days or place of work. The employer must consider it reasonably and reply within 2 months.", "Employment Relations (Flexible Working) Act 2023", "GB", GOV("flexible-working")],
    ["Trade unions", "You have the right to join a union, or not to. You can't be sacked or treated worse for being a member.", "Trade Union and Labour Relations (Consolidation) Act 1992", "GB", GOV("join-trade-union")]
  ],
  quiz: [
    { q: "From April 2026, what's the minimum hourly wage for a 17-year-old?", o: ["£5.00", "£8.00", "£10.85", "£12.71"], a: 1, why: "£8.00 for 16–17-year-olds, £10.85 for 18–20, and £12.71 for 21 and over." },
    { q: "How much paid holiday does a full-time worker get by law each year?", o: ["10 days", "20 days", "28 days (5.6 weeks)", "40 days"], a: 2, why: "5.6 weeks, which is 28 days for a 5-day week. Bank holidays may be included in that." },
    { q: "Your restaurant boss keeps half the card tips. Legal?", o: ["Yes, it's their restaurant", "No, since October 2024 all tips must go to staff", "Only at Christmas", "Yes, if it's in your contract"], a: 1, why: "The Employment (Allocation of Tips) Act 2023 requires 100% of tips to be passed on fairly." },
    { q: "How many 'protected characteristics' are in the Equality Act 2010?", o: ["3", "5", "9", "12"], a: 2, why: "Nine: age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, sexual orientation." },
    { q: "What is the maximum average working week unless you opt out?", o: ["35 hours", "40 hours", "48 hours", "60 hours"], a: 2, why: "48 hours on average. Adults can sign an opt-out; under-18s are limited to 40." },
    { q: "When must you receive your written statement of employment terms?", o: ["On or before day one", "After 2 months", "After a year", "Only if you ask"], a: 0, why: "Since April 2020 it's a day-one right for both employees and workers." },
    { q: "A 16-year-old works a 6-hour Saturday shift. What break must they get?", o: ["None", "10 minutes", "30 minutes", "2 hours"], a: 2, why: "Young workers get a 30-minute break if they work more than 4.5 hours." },
    { q: "You report your employer for dumping toxic waste and get sacked for it. What protects you?", o: ["Nothing", "Whistleblowing law", "The Highway Code", "Your union card only"], a: 1, why: "The Public Interest Disclosure Act 1998 makes that dismissal automatically unfair." },
    { q: "How much can you earn a year before paying income tax?", o: ["£0", "£5,000", "£12,570", "£25,000"], a: 2, why: "The Personal Allowance is £12,570." },
    { q: "Since April 2026, from which day of illness is Statutory Sick Pay paid?", o: ["Day 1", "Day 4", "Day 8", "After a month"], a: 0, why: "The Employment Rights Act 2025 removed the three 'waiting days'." },
    { q: "Can a zero-hours contract ban you from working for another employer?", o: ["Yes", "No, exclusivity clauses are banned", "Only at weekends", "Only for under-18s"], a: 1, why: "Exclusivity terms in zero-hours contracts are unenforceable." }
  ],
  refs: [
    ["Minimum wage rates (GOV.UK)", GOV("national-minimum-wage-rates"), "gov"],
    ["Acas: free, impartial advice on work rights", "https://www.acas.org.uk/advice", "help"],
    ["Holiday entitlement (GOV.UK)", GOV("holiday-entitlement-rights"), "gov"],
    ["Equality Act 2010 (full text)", ACT("ukpga/2010/15/contents"), "law"],
    ["Employment Rights Act 1996 (full text)", ACT("ukpga/1996/18/contents"), "law"],
    ["Health and Safety Executive: workers' rights", "https://www.hse.gov.uk/workers/", "help"],
    ["Citizens Advice: work", "https://www.citizensadvice.org.uk/work/", "help"],
    ["Video search: employment rights for young workers UK", YT("employment rights young workers UK Acas"), "video"],
    ["Video search: how to read your payslip UK", YT("how to read your payslip UK tax national insurance"), "video"]
  ]
});

LAW.add({
  id: "road", icon: "🚗", title: "On the Move", ages: "Any age", color: "#06b6d4",
  tagline: "Roads, rails, bikes and drones: the rules of getting around.",
  scenes: [
    { bg: "road", cap: "At 17 you can learn to drive a car. You need a provisional licence, L plates, insurance, and a supervisor aged 21+ who has held a licence for 3 years.",
      actors: [["🚗", 40, 64, 6, "bounce"], ["🅻", 40, 40, 3, "pop"], ["🧑", 70, 44, 3.2, "bounce"], ["👨‍🏫", 84, 44, 3.2, "sway"]] },
    { bg: "office", cap: "First the theory test with hazard perception, then the practical test. Pass both and the full licence is yours.",
      actors: [["💻", 22, 56, 4.2, "pop"], ["➡️", 40, 56, 2.6, "pulse"], ["🚗", 58, 60, 4.5, "bounce"], ["➡️", 74, 56, 2.6, "pulse"], ["🪪", 88, 52, 4, "drop"]] },
    { bg: "road", cap: "Careful: new drivers are on probation. Get 6 penalty points in your first 2 years and your licence is taken away. You start again as a learner.",
      actors: [["🚗", 34, 64, 5, "zoom"], ["📱", 60, 40, 3.5, "shake"], ["6️⃣", 80, 36, 3.2, "drop"], ["❌", 80, 66, 3.5, "pulse"]] },
    { bg: "road", cap: "Know your limits: 30mph in towns (20 in Wales), 60 on single carriageways, 70 on dual carriageways and motorways.",
      actors: [["3️⃣0️⃣", 20, 40, 2.8, "pop"], ["6️⃣0️⃣", 50, 40, 2.8, "pop"], ["7️⃣0️⃣", 80, 40, 2.8, "pop"], ["🚙", 50, 68, 5, "zoom"]] },
    { bg: "night", cap: "Never drink and drive. And using a hand-held phone at the wheel costs £200 and 6 points. For a new driver, that's the whole licence.",
      actors: [["🍺", 26, 46, 4.2, "shake"], ["🚫", 26, 46, 6.5, "pulse"], ["📱", 70, 46, 4.2, "shake"], ["🚫", 70, 46, 6.5, "pulse"], ["🚗", 48, 74, 4, "bounce"]] },
    { bg: "road", cap: "The Highway Code protects the most vulnerable first: pedestrians, then cyclists, then horse riders, then motorbikes, cars, and lorries.",
      actors: [["🚶", 14, 60, 3.4, "bounce"], ["🚴", 30, 60, 3.6, "bounce"], ["🏇", 46, 60, 3.8, "bounce"], ["🏍️", 62, 60, 4, "bounce"], ["🚗", 78, 60, 4.2, "bounce"], ["🚛", 92, 60, 4.4, "bounce"]] }
  ],
  facts: [
    ["Learning to drive", "You can apply for a provisional licence at 15 years 9 months, ride a moped at 16 and drive a car at 17. Learners must display L plates (L or D in Wales) and be supervised by someone 21+ with 3 years' full licence.", "Road Traffic Act 1988", "GB", GOV("driving-lessons-learning-to-drive")],
    ["New driver rule", "Reach 6 or more penalty points within 2 years of passing and your licence is revoked. You must reapply for a provisional and pass both tests again.", "Road Traffic (New Drivers) Act 1995", "GB", GOV("penalty-points-endorsements/new-drivers")],
    ["Speed limits", "For cars: 30mph on roads with street lights (20mph by default in Wales since 2023), 60mph on single carriageways, 70mph on dual carriageways and motorways. The minimum penalty for speeding is £100 and 3 points.", "Road Traffic Regulation Act 1984", "MIX", GOV("speed-limits")],
    ["Drink-driving", "The limit is 80mg of alcohol per 100ml of blood in England, Wales and NI, and a stricter 50mg in Scotland. The penalty is a ban of at least a year, and possibly prison. In 2026 the government consulted on cutting the England and Wales limit to match Scotland.", "Road Traffic Act 1988, s.5", "MIX", GOV("drink-drive-limit")],
    ["Phones at the wheel", "It's illegal to hold and use a phone, sat nav or tablet while driving or riding a motorbike, even when stopped at lights. Penalty: £200 and 6 points.", "Road Vehicles (Construction and Use) Regulations 1986, reg.110", "GB", GOV("using-mobile-phones-when-driving-the-law")],
    ["Seat belts", "You must wear a seat belt if one is fitted. Fine: up to £500. Drivers are responsible for under-14s.", "Road Traffic Act 1988, s.14", "UK", GOV("seat-belts-law")],
    ["Insurance, MOT and tax", "Every vehicle on the road must be insured (minimum: third party) and taxed. Cars over 3 years old need an MOT test every year. Driving uninsured: £300 and 6 points at least.", "Road Traffic Act 1988, s.143", "GB", GOV("vehicle-insurance")],
    ["The Highway Code", "Rules that say MUST or MUST NOT are backed by law. Since 2022 there's a 'hierarchy of road users', and drivers should give way to pedestrians waiting to cross at junctions.", "The Highway Code", "GB", GOV("guidance/the-highway-code")],
    ["Cycling", "No licence, test or helmet is legally required (helmets are strongly advised). But at night you MUST have white front and red rear lights and a red rear reflector. Riding on the pavement is an offence.", "Road Vehicles Lighting Regulations 1989; Highways Act 1835", "GB", GOV("guidance/the-highway-code/rules-for-cyclists-59-to-82")],
    ["Crossing the road", "Jaywalking isn't a crime in Great Britain: you can cross wherever it's safe (motorways excepted). Drivers MUST stop for anyone already on a zebra crossing.", "Zebra, Pelican and Puffin Pedestrian Crossings Regulations 1997", "GB", GOV("guidance/the-highway-code/rules-for-pedestrians-1-to-35")],
    ["Train and bus fares", "Travelling without a valid ticket on most English railways means a £100 penalty fare plus the ticket price (£50 if paid in 21 days). Deliberate fare-dodging can lead to prosecution and a criminal record.", "Railways (Penalty Fares) Regulations 2018", "ENG", "https://www.nationalrail.co.uk/tickets-railcards-and-offers/buying-a-ticket/penalty-fares/"],
    ["Delayed flights", "If your flight from a UK airport arrives 3+ hours late and it's the airline's fault, you can claim fixed compensation, from £220 to £520 depending on distance.", "UK Regulation 261", "UK", "https://www.caa.co.uk/passengers-and-public/resolving-travel-problems/delays-and-cancellations/"],
    ["Drones", "Stay below 120 metres (400ft) and well away from airports and crowds. Most drones with a camera must be registered with the Civil Aviation Authority, and the flyer must pass a free online test.", "Air Navigation Order 2016", "UK", "https://register-drones.caa.co.uk/drone-code"],
    ["Death by dangerous driving", "Since 2022 the maximum sentence for causing death by dangerous driving is life imprisonment.", "Police, Crime, Sentencing and Courts Act 2022", "GB", GOV("driving-offences")],
    ["Free bus travel", "In England you get a free bus pass at State Pension age. In Scotland, Wales and NI it's at 60, and in Scotland everyone under 22 also travels free on buses.", "Concessionary Bus Travel Act 2007", "MIX", GOV("apply-for-elderly-person-bus-pass")]
  ],
  quiz: [
    { q: "At what age can you drive a car on public roads in the UK?", o: ["15", "16", "17", "18"], a: 2, why: "17 for a car (16 for a moped). You can apply for the provisional at 15 years 9 months." },
    { q: "A new driver gets 6 points in their first 2 years. What happens?", o: ["A warning letter", "A £50 fine", "Their licence is revoked", "Nothing"], a: 2, why: "Under the New Drivers Act they go back to being a learner and must retake both tests." },
    { q: "What's the penalty for using a hand-held phone while driving?", o: ["£30", "£100 and 3 points", "£200 and 6 points", "Just a warning"], a: 2, why: "£200 and 6 points, enough to cost a new driver their licence in one go." },
    { q: "What is the default speed limit on a street with street lights in Wales?", o: ["20mph", "30mph", "40mph", "50mph"], a: 0, why: "Wales lowered its default built-up limit to 20mph in September 2023. In England it is 30mph." },
    { q: "Is it against the law to cycle without a helmet?", o: ["Yes", "No, but it's strongly recommended", "Only under 16", "Only on main roads"], a: 1, why: "Helmets are advised by the Highway Code but not required by law. Lights at night ARE required." },
    { q: "Which nation has the strictest drink-drive limit in the UK?", o: ["England", "Wales", "Scotland", "Northern Ireland"], a: 2, why: "Scotland cut its limit to 50mg per 100ml of blood in 2014. The safest amount is always none." },
    { q: "Who is at the top of the Highway Code's 'hierarchy of road users' (most protected)?", o: ["Lorry drivers", "Car drivers", "Cyclists", "Pedestrians"], a: 3, why: "Pedestrians are the most vulnerable, so those who can do the most harm bear the most responsibility." },
    { q: "Is 'jaywalking' illegal in England?", o: ["Yes, £100 fine", "No, you may cross where it's safe", "Only at night", "Only for adults"], a: 1, why: "There's no jaywalking offence in Great Britain, though you must not walk on motorways." },
    { q: "How often does a 5-year-old car need an MOT?", o: ["Never", "Every year", "Every 3 years", "Every 5 years"], a: 1, why: "Once a car is 3 years old it needs an MOT every 12 months." },
    { q: "What's the maximum height you can fly a drone?", o: ["30 metres", "120 metres", "500 metres", "No limit"], a: 1, why: "120 metres (400 feet) above the ground." },
    { q: "Who must supervise a learner driver?", o: ["Anyone with a licence", "Someone 21+ who has held a full licence for 3 years", "Any adult", "A police officer"], a: 1, why: "The supervisor must be at least 21 and have held a full licence for that type of vehicle for 3 years." }
  ],
  refs: [
    ["The Highway Code (GOV.UK)", GOV("guidance/the-highway-code"), "gov"],
    ["Learning to drive (GOV.UK)", GOV("driving-lessons-learning-to-drive"), "gov"],
    ["Speed limits (GOV.UK)", GOV("speed-limits"), "gov"],
    ["Road Traffic Act 1988 (full text)", ACT("ukpga/1988/52/contents"), "law"],
    ["THINK! road safety campaigns and films", "https://www.think.gov.uk/", "video"],
    ["The Drone Code (Civil Aviation Authority)", "https://register-drones.caa.co.uk/drone-code", "gov"],
    ["Free practice theory tests (GOV.UK)", GOV("take-practice-theory-test"), "gov"],
    ["Video search: Highway Code hierarchy of road users", YT("Highway Code hierarchy of road users explained"), "video"],
    ["Video search: DVSA official learning to drive", YT("DVSA official driving test what to expect"), "video"]
  ]
});

LAW.add({
  id: "health", icon: "🏥", title: "Health & the NHS", ages: "Any age", color: "#ef6f8f",
  tagline: "Your body, your choice, your rights as a patient.",
  scenes: [
    { bg: "hospital", cap: "The NHS was born on 5 July 1948 with one big idea: healthcare free when you need it, paid for by everyone through taxes.",
      actors: [["🏥", 50, 40, 7, "pop"], ["💙", 24, 36, 3.5, "pulse"], ["👩‍⚕️", 30, 68, 4, "walk-r"], ["🧑‍⚕️", 70, 68, 4, "walk-l"]] },
    { bg: "room", cap: "Anyone can register with a GP. You don't need ID, proof of address or an NHS number. And what you tell your doctor stays private.",
      actors: [["👩‍⚕️", 30, 58, 4.5, "sway"], ["🧑", 62, 60, 4.2, "bounce"], ["🤫", 84, 36, 3.8, "pulse"]] },
    { bg: "hospital", cap: "No treatment without consent. A doctor must explain the risks and options, and YOU decide. An adult can refuse, even if doctors disagree.",
      actors: [["👨‍⚕️", 26, 58, 4.5, "sway", "Here are your options…"], ["🧑", 62, 60, 4.2, "bounce"], ["✅", 82, 40, 3.2, "pop"], ["❌", 92, 40, 3.2, "pop"]] },
    { bg: "room", cap: "Under 16? If you understand the treatment well enough, you can consent yourself. Lawyers call this being 'Gillick competent'.",
      actors: [["🧒", 36, 60, 4.2, "bounce"], ["🧠", 36, 30, 3.5, "pulse"], ["👩‍⚕️", 66, 58, 4.5, "sway"], ["👍", 86, 44, 3.5, "pop"]] },
    { bg: "hospital", cap: "Worried a loved one in hospital is getting worse and nobody's listening? Martha's Rule gives families the right to an urgent second review.",
      actors: [["🛏️", 30, 62, 5, "pop"], ["👩", 54, 60, 4, "shake", "Please check again!"], ["🚨", 76, 36, 4, "pulse"], ["👨‍⚕️", 88, 62, 4, "walk-l"]] },
    { bg: "sky", cap: "One donor can save up to nine lives. Across the UK, adults are now treated as willing organ donors unless they opt out.",
      actors: [["❤️", 50, 42, 6, "pulse"], ["🧑", 22, 68, 3.5, "bounce"], ["👧", 78, 68, 3.5, "bounce"], ["✨", 50, 74, 3, "float"]] }
  ],
  facts: [
    ["Free at the point of use", "NHS care is free for people 'ordinarily resident' in the UK. GP visits, A&E and emergency ambulances cost nothing. A&E treatment is free for everyone, visitors included.", "National Health Service Act 2006", "UK", NHS("using-the-nhs/")],
    ["Registering with a GP", "Anyone in England can register with a GP surgery. You don't need proof of address, immigration status, ID or an NHS number.", "NHS England guidance", "ENG", NHS("nhs-services/gps/how-to-register-with-a-gp-surgery/")],
    ["Prescription charges", "Prescriptions cost £9.90 per item in England but are free in Scotland, Wales and Northern Ireland. In England they're free if you're under 16, 16–18 in full-time education, 60+, pregnant, or on certain benefits.", "NHS (Charges for Drugs and Appliances) Regulations 2015", "MIX", NHS("nhs-services/prescriptions/nhs-prescription-charges/")],
    ["Dentists and opticians", "NHS dental care is free if you're under 18 (or under 19 in full-time education). NHS eye tests are free for under-16s and under-19s in full-time education.", "NHS regulations", "ENG", NHS("nhs-services/dentists/who-is-entitled-to-free-nhs-dental-treatment-in-england/")],
    ["Consent", "A doctor needs your consent before any examination or treatment. It must be voluntary, informed and given by someone with capacity. Since the Montgomery case (2015) doctors must tell you about any risk a reasonable patient would care about.", "Montgomery v Lanarkshire Health Board [2015] UKSC 11", "UK", NHS("conditions/consent-to-treatment/")],
    ["Under-16s and Gillick competence", "If you're under 16 but understand what a treatment involves, you can consent without your parents. Your doctor should encourage you to tell them, but can't force you.", "Gillick v West Norfolk AHA [1985]", "EW", NHS("conditions/consent-to-treatment/children/")],
    ["Confidentiality", "What you tell a doctor or nurse is confidential at any age. They can only break confidence to protect you or someone else from serious harm.", "Common law duty of confidence; Data Protection Act 2018", "UK", NHS("using-the-nhs/about-the-nhs/your-health-records/")],
    ["Your records", "You have the right to see your medical records for free. The NHS must respond within one month.", "UK GDPR, Article 15", "UK", NHS("using-the-nhs/about-the-nhs/your-health-records/")],
    ["Mental capacity", "Everyone aged 16+ is presumed able to make their own decisions. An unwise decision is not proof that you lack capacity. If someone truly can't decide, others must act in their 'best interests'.", "Mental Capacity Act 2005", "EW", NHS("conditions/social-care-and-support-guide/making-decisions-for-someone-else/mental-capacity-act/")],
    ["Mental health", "In rare cases a person with a serious mental disorder can be detained in hospital ('sectioned') to keep them or others safe: up to 28 days for assessment. They have the right to appeal to a tribunal and to an independent advocate.", "Mental Health Act 1983", "EW", NHS("mental-health/social-care-and-your-rights/mental-health-and-the-law/mental-health-act/")],
    ["Organ donation", "All four UK nations now have an 'opt-out' system: adults are considered willing donors unless they register a decision not to be. Families are always consulted. In England it's known as Max and Keira's Law.", "Organ Donation (Deemed Consent) Act 2019", "UK", "https://www.organdonation.nhs.uk/uk-laws/"],
    ["Martha's Rule", "After 13-year-old Martha Mills died of sepsis in 2021, NHS hospitals in England began giving patients and families a way to demand an urgent review by a different senior team.", "NHS England policy (2024)", "ENG", "https://www.england.nhs.uk/patient-safety/marthas-rule/"],
    ["Waiting time pledges", "The NHS Constitution says you should start planned treatment within 18 weeks of referral and be seen in A&E within 4 hours. These are targets you can complain about, not guarantees.", "NHS Constitution for England", "ENG", GOV("government/publications/the-nhs-constitution-for-england")],
    ["Smoke-free places", "Smoking has been banned in enclosed public places and workplaces since 2007 (2006 in Scotland). Since 2015 it's illegal to smoke in a car carrying anyone under 18.", "Health Act 2006", "EW", GOV("smoking-at-work-the-law")],
    ["When care goes wrong", "You can complain to any NHS service for free. If you were harmed by careless treatment you normally have 3 years to bring a claim. For children the clock starts at 18.", "Limitation Act 1980", "EW", NHS("contact-us/how-to-complain-to-the-nhs/")],
    ["End of life", "You can refuse any treatment in advance with an 'advance decision'. Helping someone to end their life is still a crime (up to 14 years). A Bill to allow assisted dying passed the Commons in 2025 but ran out of time in the Lords in April 2026; a new Bill was introduced in July 2026.", "Suicide Act 1961; Mental Capacity Act 2005", "EW", NHS("conditions/end-of-life-care/planning-ahead/advance-decision-to-refuse-treatment/")]
  ],
  quiz: [
    { q: "When was the NHS founded?", o: ["1918", "1948", "1966", "1999"], a: 1, why: "5 July 1948, led by health minister Aneurin 'Nye' Bevan." },
    { q: "What do you need to register with a GP in England?", o: ["A passport", "Proof of address", "Nothing: no ID or address proof is required", "A letter from school"], a: 2, why: "Surgeries may ask, but they can't refuse you just for lacking ID or proof of address." },
    { q: "Where in the UK do adults pay a charge for prescriptions?", o: ["Everywhere", "Only England", "Only Scotland", "Nowhere"], a: 1, why: "England charges £9.90 an item (with many exemptions). Scotland, Wales and NI abolished charges." },
    { q: "A 15-year-old who fully understands the treatment asks for it without telling her parents. Can the doctor treat her?", o: ["Never", "Yes, if she is 'Gillick competent'", "Only with a court order", "Only if she pays"], a: 1, why: "The Gillick case (1985) decided that a child with enough understanding can consent for themselves." },
    { q: "An adult with full mental capacity refuses a life-saving operation. What must doctors do?", o: ["Operate anyway", "Call the police", "Respect the decision", "Ask the patient's boss"], a: 2, why: "A capable adult can refuse any treatment, even if the choice seems unwise. Treating without consent can be an assault." },
    { q: "How does organ donation work for adults in England?", o: ["You must sign up to donate", "You're a donor unless you opt out", "It's banned", "Your GP decides"], a: 1, why: "'Deemed consent' began in England in May 2020. You can record your choice on the NHS Organ Donor Register." },
    { q: "What does Martha's Rule give patients and families?", o: ["Free parking", "The right to an urgent second review", "A private room", "Faster prescriptions"], a: 1, why: "It gives a route to an urgent review by a different critical care team if a patient is getting worse." },
    { q: "Is it legal to smoke in a car with a 12-year-old inside?", o: ["Yes", "Only with the windows open", "No, it has been illegal since 2015", "Only on motorways"], a: 2, why: "It's illegal to smoke in a vehicle carrying anyone under 18." },
    { q: "How long does the NHS have to answer a request to see your own medical records?", o: ["24 hours", "One month", "One year", "It can refuse"], a: 1, why: "It's a 'subject access request' under UK GDPR: free, with a one-month deadline." },
    { q: "Can a 14-year-old's doctor tell their parents about a confidential visit?", o: ["Always", "Only to prevent serious harm", "Whenever parents ask", "Only by email"], a: 1, why: "Confidentiality applies to under-16s too. It is only broken to protect someone from serious harm." }
  ],
  refs: [
    ["NHS: consent to treatment", NHS("conditions/consent-to-treatment/"), "gov"],
    ["NHS Constitution for England (GOV.UK)", GOV("government/publications/the-nhs-constitution-for-england"), "gov"],
    ["Organ donation law across the UK (NHS)", "https://www.organdonation.nhs.uk/uk-laws/", "gov"],
    ["Martha's Rule (NHS England)", "https://www.england.nhs.uk/patient-safety/marthas-rule/", "gov"],
    ["Mental Capacity Act 2005 (full text)", ACT("ukpga/2005/9/contents"), "law"],
    ["YoungMinds: mental health help for young people", "https://www.youngminds.org.uk/", "help"],
    ["NHS 111 online: urgent medical help", "https://111.nhs.uk/", "help"],
    ["Video search: history of the NHS", YT("history of the NHS explained 1948"), "video"],
    ["Video search: Gillick competence explained", YT("Gillick competence explained"), "video"]
  ]
});
