// ============================================================
// JEOPARDY QUESTIONS — edit freely!
// Each category has 5 questions valued $100–$500.
// Set bonus: true on any question that has a bonus component.
// A correct bonus awards an extra $100 per player.
// ============================================================

export const CATEGORIES = [
  {
    name: "Animals",
    questions: [
      {
        value: 100,
        bonus: false,
        question: "This is the largest mammal in the world.",
        answer: "Blue whale",
      },
      {
        value: 200,
        bonus: false,
        question: "This bird is the only one that can fly backward.",
        answer: "Hummingbird",
      },
      {
        value: 300,
        bonus: false,
        question: "This group of animals is called a 'murder' when gathered together.",
        answer: "Crows",
      },
      {
        value: 400,
        bonus: true,
        question: "This animal has the longest lifespan of any vertebrate, living over 400 years. (Bonus: name its scientific family.)",
        answer: "Greenland shark (Somniosidae)",
      },
      {
        value: 500,
        bonus: false,
        question: "This is the only mammal capable of true flight.",
        answer: "Bat",
      },
    ],
  },
  {
    name: "U.S. Presidents",
    questions: [
      {
        value: 100,
        bonus: false,
        question: "This president was the first to live in the White House.",
        answer: "John Adams",
      },
      {
        value: 200,
        bonus: false,
        question: "This president served four terms, more than any other in U.S. history.",
        answer: "Franklin D. Roosevelt",
      },
      {
        value: 300,
        bonus: false,
        question: "This president was a peanut farmer before entering politics.",
        answer: "Jimmy Carter",
      },
      {
        value: 400,
        bonus: false,
        question: "This president was the first to be born in a hospital.",
        answer: "Jimmy Carter",
      },
      {
        value: 500,
        bonus: true,
        question: "This president won a Nobel Peace Prize after leaving office. (Bonus: name two other presidents who also won Nobel Peace Prizes.)",
        answer: "Jimmy Carter (also Theodore Roosevelt, Woodrow Wilson, Barack Obama)",
      },
    ],
  },
  {
    name: "Food & Drink",
    questions: [
      {
        value: 100,
        bonus: false,
        question: "This spice is made from the dried buds of a flower native to Indonesia.",
        answer: "Cloves",
      },
      {
        value: 200,
        bonus: false,
        question: "This fruit is the most widely consumed fruit in the world.",
        answer: "Tomato",
      },
      {
        value: 300,
        bonus: false,
        question: "This Italian dessert literally means 'pick me up' in English.",
        answer: "Tiramisu",
      },
      {
        value: 400,
        bonus: false,
        question: "This country is the world's largest producer of coffee.",
        answer: "Brazil",
      },
      {
        value: 500,
        bonus: true,
        question: "This expensive spice comes from the flower of Crocus sativus. (Bonus: approximately how many flowers are needed to produce one pound?)",
        answer: "Saffron (about 75,000 flowers)",
      },
    ],
  },
  {
    name: "Sports",
    questions: [
      {
        value: 100,
        bonus: false,
        question: "This team has won the most NBA championships.",
        answer: "Boston Celtics",
      },
      {
        value: 200,
        bonus: false,
        question: "This tennis player holds the record for most Grand Slam singles titles with 23.",
        answer: "Serena Williams",
      },
      {
        value: 300,
        bonus: false,
        question: "This country has won the most FIFA World Cup titles.",
        answer: "Brazil",
      },
      {
        value: 400,
        bonus: false,
        question: "This horse is the only one to win the Triple Crown twice.",
        answer: "Secretariat",
      },
      {
        value: 500,
        bonus: true,
        question: "This swimmer holds the record for most Olympic gold medals with 23. (Bonus: name the stroke in which he won his first Olympic gold.)",
        answer: "Michael Phelps (100m butterfly)",
      },
    ],
  },
  {
    name: "Literature",
    questions: [
      {
        value: 100,
        bonus: false,
        question: "This author wrote 'Pride and Prejudice.'",
        answer: "Jane Austen",
      },
      {
        value: 200,
        bonus: false,
        question: "This 1954 novel features a character named Ralph and a conch shell.",
        answer: "Lord of the Flies",
      },
      {
        value: 300,
        bonus: false,
        question: "This poet wrote 'The Raven' and 'The Tell-Tale Heart.'",
        answer: "Edgar Allan Poe",
      },
      {
        value: 400,
        bonus: false,
        question: "This dystopian novel features a character named Winston Smith and a concept called Big Brother.",
        answer: "1984",
      },
      {
        value: 500,
        bonus: true,
        question: "This author wrote 'The Odyssey' and 'The Iliad.' (Bonus: name the hero of The Odyssey.)",
        answer: "Homer (Odysseus)",
      },
    ],
  },
];

// ============================================================
// FINAL JEOPARDY — edit freely!
// ============================================================

export const FINAL_JEOPARDY = {
  category: "Famous Firsts",
  question:
    "In 1969, Neil Armstrong became the first person to walk on the moon. Name the second person to walk on the moon, which he did just minutes later during the same mission.",
  answer: "Buzz Aldrin",
};
