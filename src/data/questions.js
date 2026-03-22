// ============================================================
// JEOPARDY QUESTIONS — edit freely!
// Each category has 5 questions valued $100–$500.
// Set bonus: true on any question that has a bonus component.
// A correct bonus awards an extra $100 per player.
// ============================================================

export const CATEGORIES = [
  {
    name: "Science",
    questions: [
      {
        value: 100,
        bonus: false,
        question: "This is the chemical symbol for gold on the periodic table.",
        answer: "Au",
      },
      {
        value: 200,
        bonus: false,
        question: "This planet in our solar system has the most moons, with 146 confirmed as of 2024.",
        answer: "Saturn",
      },
      {
        value: 300,
        bonus: false,
        question: "This physicist developed the theory of general relativity in 1915.",
        answer: "Albert Einstein",
      },
      {
        value: 400,
        bonus: true,
        question: "This is the name of the particle accelerator located on the France-Switzerland border, operated by CERN. (Bonus: name the particle it famously confirmed the existence of in 2012.)",
        answer: "Large Hadron Collider (Higgs boson)",
      },
      {
        value: 500,
        bonus: false,
        question: "This is the name of the process by which a caterpillar dissolves almost entirely into a soup of cells before reorganizing into a butterfly inside the chrysalis.",
        answer: "Histolysis (or metamorphosis)",
      },
    ],
  },
  {
    name: "Movie Quotes",
    questions: [
      {
        value: 100,
        bonus: false,
        question: "Finish the quote: 'You can't handle...'",
        answer: "the truth! (A Few Good Men)",
      },
      {
        value: 200,
        bonus: false,
        question: "In this 1994 film, the character Forrest Gump says: 'Life is like a box of chocolates...' — finish the quote.",
        answer: "you never know what you're gonna get",
      },
      {
        value: 300,
        bonus: false,
        question: "This 1999 film contains the line: 'I see dead people.' Name the film.",
        answer: "The Sixth Sense",
      },
      {
        value: 400,
        bonus: false,
        question: "In The Dark Knight, the Joker asks: 'Why so serious?' — name the actor who played the Joker in that film.",
        answer: "Heath Ledger",
      },
      {
        value: 500,
        bonus: true,
        question: "This 1967 film contains the line: 'Are you talking to me?' (Bonus: name the actor who delivers it.)",
        answer: "Taxi Driver, 1976 (Robert De Niro)",
      },
    ],
  },
  {
    name: "World Geography",
    questions: [
      {
        value: 100,
        bonus: false,
        question: "This is the smallest country in the world by area.",
        answer: "Vatican City",
      },
      {
        value: 200,
        bonus: false,
        question: "This river is the longest in the world.",
        answer: "The Nile",
      },
      {
        value: 300,
        bonus: false,
        question: "This country contains both the Sahara Desert and the Amazon Rainforest.",
        answer: "Trick question — no single country contains both. (Brazil has the Amazon; the Sahara is in North Africa.)",
      },
      {
        value: 400,
        bonus: true,
        question: "This is the only country in the world to border both the Atlantic and Indian Oceans. (Bonus: name its capital city.)",
        answer: "South Africa (Pretoria / Cape Town / Bloemfontein)",
      },
      {
        value: 500,
        bonus: false,
        question: "This landlocked country is completely surrounded by Italy.",
        answer: "San Marino",
      },
    ],
  },
  {
    name: "Music",
    questions: [
      {
        value: 100,
        bonus: false,
        question: "This pop star holds the record for the most Grammy wins ever, with 32 wins as of 2024.",
        answer: "Beyoncé",
      },
      {
        value: 200,
        bonus: false,
        question: "This instrument has 88 keys in its standard modern form.",
        answer: "Piano",
      },
      {
        value: 300,
        bonus: false,
        question: "The Beatles were originally from this city in England.",
        answer: "Liverpool",
      },
      {
        value: 400,
        bonus: false,
        question: "This Kendrick Lamar song, released in 2024 as a diss track aimed at Drake, became the fastest song ever to reach 1 billion Spotify streams.",
        answer: "Not Like Us",
      },
      {
        value: 500,
        bonus: true,
        question: "This composer wrote all nine of his symphonies, including his famous Ninth, while almost completely deaf. (Bonus: name the famous choral finale of his Ninth Symphony.)",
        answer: "Ludwig van Beethoven (Ode to Joy)",
      },
    ],
  },
  {
    name: "Weird History",
    questions: [
      {
        value: 100,
        bonus: false,
        question: "In 1518, residents of this French city reportedly danced uncontrollably for days in what historians call the 'Dancing Plague.'",
        answer: "Strasbourg",
      },
      {
        value: 200,
        bonus: false,
        question: "This U.S. president was also a licensed bartender.",
        answer: "Abraham Lincoln",
      },
      {
        value: 300,
        bonus: false,
        question: "In 1945, a rooster named Mike survived for 18 months after having this done to him.",
        answer: "His head cut off (Miracle Mike, the Headless Chicken)",
      },
      {
        value: 400,
        bonus: false,
        question: "This country declared war on emus in 1932 — and lost.",
        answer: "Australia (The Great Emu War)",
      },
      {
        value: 500,
        bonus: true,
        question: "In 1859, a pig owned by an American settler was shot by a British colonist, nearly triggering a war between the U.S. and Britain. Name this conflict. (Bonus: what island did it take place on?)",
        answer: "The Pig War (San Juan Island, off the coast of Washington State)",
      },
    ],
  },
];

// ============================================================
// FINAL JEOPARDY — edit freely!
// ============================================================

export const FINAL_JEOPARDY = {
  category: "Connections",
  question:
    "What do a bolt of lightning, a nuclear reactor, a banana, and a human body all have in common? Write down your answer — most specific correct answer wins.",
  answer: "They all produce or contain radiation / radioactivity (bananas contain potassium-40, lightning produces gamma rays, nuclear reactors produce fission radiation, and the human body contains radioactive potassium and carbon).",
};
