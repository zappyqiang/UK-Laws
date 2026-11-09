/* UK Law Life Quest — shared data registry.
   Content checked against public sources in November 2026.
   Educational only: not legal advice. Laws change, so always follow the reference links. */
window.LAW = {
  updated: "November 2026",
  stages: [],
  stories: [],
  add(stage) { this.stages.push(stage); },
  story(s) { this.stories.push(s); }
};

/* Link helpers: search links never break, so they are used wherever an exact page address may move. */
const GOV = slug => "https://www.gov.uk/" + slug;
const GOVS = q => "https://www.gov.uk/search/all?keywords=" + encodeURIComponent(q);
const ACT = path => "https://www.legislation.gov.uk/" + path;
const WIKI = q => "https://en.wikipedia.org/wiki/Special:Search?go=Go&search=" + encodeURIComponent(q);
const YT = q => "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);
const NHS = slug => "https://www.nhs.uk/" + slug;
const CAB = q => "https://www.citizensadvice.org.uk/search/?q=" + encodeURIComponent(q);

/* Where a rule applies */
LAW.places = {
  UK: "All of the UK",
  GB: "England, Scotland & Wales",
  EW: "England & Wales",
  ENG: "England",
  SCO: "Scotland",
  WAL: "Wales",
  NI: "Northern Ireland",
  MIX: "Differs by nation"
};

LAW.ranks = [
  { xp: 0, name: "Curious Citizen", icon: "🐣" },
  { xp: 150, name: "Law Rookie", icon: "📘" },
  { xp: 400, name: "Rights Ranger", icon: "🧭" },
  { xp: 800, name: "Junior Paralegal", icon: "🗂️" },
  { xp: 1300, name: "Trainee Solicitor", icon: "💼" },
  { xp: 1900, name: "Barrister", icon: "🎓" },
  { xp: 2600, name: "King's Counsel", icon: "👑" },
  { xp: 3400, name: "Supreme Court Justice", icon: "⚖️" }
];

LAW.glossary = [
  ["Act of Parliament", "A law that has been agreed by Parliament and signed off by the King. Also called a statute."],
  ["Bill", "A draft law. It only becomes an Act once Parliament passes it and it gets Royal Assent."],
  ["Royal Assent", "The King's formal 'yes' that turns a Bill into an Act. It has not been refused since 1708."],
  ["Common law", "Law built up by judges' decisions in real cases over hundreds of years, rather than written by Parliament."],
  ["Precedent", "A past court decision that later courts must follow when the facts are similar."],
  ["Statute", "Another word for an Act of Parliament: written law."],
  ["Civil law", "Disputes between people or organisations (money, contracts, injuries). The loser usually pays compensation."],
  ["Criminal law", "Rules about behaviour the state punishes, like theft or assault. The state prosecutes you."],
  ["Claimant", "The person who starts a civil court case. In Scotland: the pursuer."],
  ["Defendant", "The person being sued or accused. In Scotland: the defender (civil) or the accused (criminal)."],
  ["Prosecution", "The side that brings a criminal case, usually the Crown Prosecution Service (CPS) in England & Wales."],
  ["Beyond reasonable doubt", "The very high level of proof needed to convict someone of a crime. The jury must be sure."],
  ["Balance of probabilities", "The level of proof in civil cases: more likely than not (over 50%)."],
  ["Negligence", "Carelessness that harms someone you owed a duty of care to."],
  ["Duty of care", "A legal responsibility to avoid harming people who could obviously be affected by what you do."],
  ["Contract", "A promise or deal the law will enforce. It needs an offer, acceptance, and something of value swapped."],
  ["Consent", "Freely agreeing to something while understanding what it means."],
  ["Capacity", "Being able to understand and make a decision for yourself."],
  ["Parental responsibility", "The legal rights and duties a parent has for a child, such as naming them and choosing a school."],
  ["Discrimination", "Treating someone worse because of who they are, such as their race, sex, age or disability."],
  ["Protected characteristic", "One of nine things the Equality Act 2010 protects: age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, and sexual orientation."],
  ["Tribunal", "A less formal kind of court for special topics, such as employment or benefits."],
  ["Magistrates' court", "Where almost all criminal cases in England & Wales start. No jury."],
  ["Crown Court", "Deals with serious crimes in England & Wales, with a judge and a jury of 12."],
  ["Supreme Court", "The UK's highest court. It opened in 2009 and has 12 Justices."],
  ["Jury", "Ordinary members of the public (12 in England, Wales and NI; 15 in Scottish criminal trials) who decide if someone is guilty."],
  ["Bail", "Being released while you wait for your trial, sometimes with conditions."],
  ["Caution", "Either the warning police read you on arrest, or a formal warning for a minor crime given instead of going to court."],
  ["Appropriate adult", "A parent, guardian or trained person who must be with under-18s when police question them."],
  ["Devolution", "Passing law-making powers from the UK Parliament to Scotland, Wales and Northern Ireland."],
  ["Jurisdiction", "The area where a set of laws applies. The UK has three: England & Wales, Scotland, and Northern Ireland."],
  ["Human rights", "Basic rights everyone has, protected in the UK by the Human Rights Act 1998."],
  ["Intestate", "Dying without a valid will. Fixed rules then decide who inherits."],
  ["Executor", "The person named in a will to carry out its instructions."],
  ["Probate", "The legal permission to deal with a dead person's money and property."],
  ["Estate", "Everything a person owns when they die, minus their debts."],
  ["Lasting Power of Attorney", "A legal document letting someone you trust make decisions for you if you can no longer do so."],
  ["Tenancy", "The legal agreement between a renter (tenant) and a landlord."],
  ["Statutory", "Required or set by an Act of Parliament. Example: statutory sick pay."],
  ["Redundancy", "Losing your job because the job itself is no longer needed, not because of anything you did."],
  ["Unfair dismissal", "Being sacked without a fair reason or a fair process."],
  ["Whistleblowing", "Reporting serious wrongdoing at work. The law protects you from punishment for doing it."],
  ["Liability", "Being legally responsible for something."],
  ["Damages", "Money a court orders someone to pay as compensation."],
  ["Injunction", "A court order telling someone to do, or stop doing, something."],
  ["Judicial review", "Asking a court to check whether a public body acted lawfully."],
  ["Gillick competence", "When someone under 16 understands enough to make their own medical decision."],
  ["Deed poll", "The legal document used to change your name."],
  ["Triple lock", "The promise that the State Pension rises each year by the highest of inflation, average wages, or 2.5%."]
];
