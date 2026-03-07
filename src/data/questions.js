// ============================================================
// JEOPARDY QUESTIONS — edit freely!
// Each category has 5 questions valued $100–$500.
// ============================================================

export const CATEGORIES = [
  {
    name: "Science & Nature",
    questions: [
      {
        value: 100,
        question: "This planet is known as the Red Planet.",
        answer: "Mars",
      },
      {
        value: 200,
        question: "The chemical formula H₂O represents this everyday substance.",
        answer: "Water",
      },
      {
        value: 300,
        question: "This force is responsible for keeping planets in orbit around the Sun.",
        answer: "Gravity",
      },
      {
        value: 400,
        question: "DNA stands for this full scientific term.",
        answer: "Deoxyribonucleic Acid",
      },
      {
        value: 500,
        question: "This element has atomic number 79, the chemical symbol Au, and is prized for its lustrous yellow sheen.",
        answer: "Gold",
      },
    ],
  },
  {
    name: "World History",
    questions: [
      {
        value: 100,
        question: "These massive structures in Egypt were built as royal tombs for pharaohs.",
        answer: "The Pyramids (Great Pyramid of Giza)",
      },
      {
        value: 200,
        question: "The Berlin Wall fell in this year, reuniting East and West Germany.",
        answer: "1989",
      },
      {
        value: 300,
        question: "After his defeat at Waterloo, Napoleon Bonaparte was exiled to this remote South Atlantic island.",
        answer: "Saint Helena",
      },
      {
        value: 400,
        question: "Signed in 1215 by King John of England, this document was one of the first to limit royal power.",
        answer: "The Magna Carta",
      },
      {
        value: 500,
        question: "Founded by Genghis Khan in the 13th century, this became the largest contiguous land empire in history.",
        answer: "The Mongol Empire",
      },
    ],
  },
  {
    name: "Pop Culture",
    questions: [
      {
        value: 100,
        question: "This boy wizard, created by J.K. Rowling, lives at 4 Privet Drive and attends Hogwarts School.",
        answer: "Harry Potter",
      },
      {
        value: 200,
        question: "This DC superhero is also known as billionaire Bruce Wayne, the Dark Knight of Gotham City.",
        answer: "Batman",
      },
      {
        value: 300,
        question: "Released in 1982, this Michael Jackson album is the best-selling album of all time.",
        answer: "Thriller",
      },
      {
        value: 400,
        question: "This 1991 Nirvana album, featuring 'Smells Like Teen Spirit', defined grunge rock.",
        answer: "Nevermind",
      },
      {
        value: 500,
        question: "In this 1994 Quentin Tarantino film, John Travolta and Uma Thurman perform a memorable twist dance at Jack Rabbit Slim's.",
        answer: "Pulp Fiction",
      },
    ],
  },
  {
    name: "Geography",
    questions: [
      {
        value: 100,
        question: "This is the largest continent on Earth by both land area and population.",
        answer: "Asia",
      },
      {
        value: 200,
        question: "The Amazon River, the world's largest river by discharge, flows primarily through this country.",
        answer: "Brazil",
      },
      {
        value: 300,
        question: "Despite popular belief, this city — not Sydney — is the capital of Australia.",
        answer: "Canberra",
      },
      {
        value: 400,
        question: "The world's largest hot desert, the Sahara, stretches across this continent.",
        answer: "Africa",
      },
      {
        value: 500,
        question: "This tiny republic, completely surrounded by Italy, claims to be the world's oldest surviving sovereign state.",
        answer: "San Marino",
      },
    ],
  },
  {
    name: "Sports",
    questions: [
      {
        value: 100,
        question: "Played on a diamond-shaped field with four bases, this is America's pastime.",
        answer: "Baseball",
      },
      {
        value: 200,
        question: "Michael Jordan won all six of his NBA championships playing for this team.",
        answer: "The Chicago Bulls",
      },
      {
        value: 300,
        question: "With five FIFA World Cup titles, this South American country has won the tournament more than any other.",
        answer: "Brazil",
      },
      {
        value: 400,
        question: "Born Cassius Clay, this heavyweight boxing legend was nicknamed 'The Greatest'.",
        answer: "Muhammad Ali",
      },
      {
        value: 500,
        question: "In 1980, this American hockey team's upset victory over the Soviet Union at the Lake Placid Olympics was dubbed the 'Miracle on Ice'.",
        answer: "Team USA (United States)",
      },
    ],
  },
];

// ============================================================
// FINAL JEOPARDY — edit freely!
// ============================================================

export const FINAL_JEOPARDY = {
  category: "American Icons",
  question:
    "Dedicated in 1886, this gift from France stands on Liberty Island in New York Harbor and depicts a robed figure holding a torch aloft.",
  answer: "The Statue of Liberty",
};
