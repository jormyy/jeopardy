// ============================================================
// JEOPARDY QUESTIONS — edit freely!
// Each category has 5 questions valued $100–$500.
// Set bonus: true on any question that has a bonus component.
// A correct bonus awards an extra $100 per player.
// ============================================================

export const CATEGORIES = [
  {
    name: "Sports (General)",
    questions: [
      {
        value: 100,
        bonus: false,
        question: "This hockey player has the most career points in NHL history, with 2,857.",
        answer: "Wayne Gretzky",
      },
      {
        value: 200,
        bonus: true,
        question: "As of March 11, 2026, this player has the 4th highest single-game point total in NBA history (bonus for naming the point total).",
        answer: "Wilt Chamberlain (78 points)",
      },
      {
        value: 300,
        bonus: false,
        question: "This hall of fame NBA player, who is arguably a top power forward of all time, impregnated a 13-year-old girl when he was 20-years-old.",
        answer: "Karl Malone",
      },
      {
        value: 400,
        bonus: false,
        question: "Tom Brady subbed in for this injured quarterback in 2001, leading the New England Patriots to a Super Bowl victory and starting his legendary career.",
        answer: "Drew Bledsoe",
      },
      {
        value: 500,
        bonus: true,
        question: "This Greek pole vaulter, friend of Giannis Antetokounmpo, recently jumped the second highest height in history. Name this pole vaulter. (Bonus for naming the height in meters.)",
        answer: "Emmanouil Karalis (6.17 meters)",
      },
    ],
  },
  {
    name: "Anime",
    questions: [
      {
        value: 100,
        bonus: false,
        question: "This character aims to become the Pirate King by finding the legendary treasure known as One Piece.",
        answer: "Monkey D. Luffy",
      },
      {
        value: 200,
        bonus: true,
        question: "Kirito, the protagonist of 'Sword Art Online', was the sole owner of this particular skill (bonus for naming how he obtained it).",
        answer: "Dual Wielding (fastest reaction time among players)",
      },
      {
        value: 300,
        bonus: false,
        question: "Finish the quote from 'Chainsaw Man': 'I'll give you my heart, in exchange...'",
        answer: "Show me your dreams",
      },
      {
        value: 400,
        bonus: false,
        question: "This is the highest rated anime on IMDB.",
        answer: "Fullmetal Alchemist: Brotherhood",
      },
      {
        value: 500,
        bonus: false,
        question: "This is the name of the man who was reincarnated as a slime in the anime 'That Time I Got Reincarnated as a Slime'.",
        answer: "Satoru Mikami",
      },
    ],
  },
  {
    name: "Pop Culture",
    questions: [
      {
        value: 100,
        bonus: false,
        question: "This is the true identity of the superhero, Batman.",
        answer: "Bruce Wayne",
      },
      {
        value: 200,
        bonus: false,
        question: "This singer was known for leaving Olivia Rodrigo for Sabrina Carpenter.",
        answer: "Joshua Bassett",
      },
      {
        value: 300,
        bonus: false,
        question: "Finish the lyrics: 'Shawty a lil baddie. She my lil boo thing...'",
        answer: "And shawty got the fatty. Shawty be catching mood swings",
      },
      {
        value: 400,
        bonus: false,
        question: "This song, created by Laufey in her album 'Bewitched', was used in Alysia Liu's performance at the 2026 Winter Olympics, where she won a gold medal in figure skating.",
        answer: "Promise",
      },
      {
        value: 500,
        bonus: true,
        question: "As of March 10, 2026, this is the Disney franchise that has earned the most money (bonus for giving the amount within $1 billion).",
        answer: "Mickey Mouse & Friends ($52.2 billion)",
      },
    ],
  },
  {
    name: "Food & Drink",
    questions: [
      {
        value: 100,
        bonus: false,
        question: "Although they typically indulge in every other vice, such as smoking and drinking, Muslims abstain from consuming this type of meat.",
        answer: "Pork",
      },
      {
        value: 200,
        bonus: false,
        question: "This drink, named after legendary golfer Arnold Palmer, is a mix of these two beverages.",
        answer: "Iced Tea and Lemonade",
      },
      {
        value: 300,
        bonus: false,
        question: "This is the name of the artificial sweetener that is commonly used in diet sodas.",
        answer: "Aspartame",
      },
      {
        value: 400,
        bonus: false,
        question: "As of March 8, 2026, this is the cost of a Caniac Combo (pre-tax) at Davis's Raising Cane's (closest answer wins if no correct answer is given).",
        answer: "$18.69",
      },
      {
        value: 500,
        bonus: false,
        question: "This is the name of the restaurant that is credited with inventing the double-decker hamburger in 1937.",
        answer: "Bob's Big Boy",
      },
    ],
  },
  {
    name: "Meet the Maker",
    questions: [
      {
        value: 100,
        bonus: false,
        question: "This is the name of Jeremy's favorite basketball player.",
        answer: "Michael Porter Jr.",
      },
      {
        value: 200,
        bonus: false,
        question: "Jeremy did taekwondo when he was younger. This is the belt rank he currently holds.",
        answer: "3rd degree black belt",
      },
      {
        value: 300,
        bonus: false,
        question: "This is the name of Jeremy's favorite anime character.",
        answer: "L",
      },
      {
        value: 400,
        bonus: false,
        question: "If Jeremy were to order a drink at a bar, this is the drink he would most likely order.",
        answer: "Gin and tonic",
      },
      {
        value: 500,
        bonus: false,
        question: "These are the names of Jeremy's parents.",
        answer: "Chris and Katie",
      },
    ],
  },
];

// ============================================================
// FINAL JEOPARDY — edit freely!
// ============================================================

export const FINAL_JEOPARDY = {
  category: "Names",
  question:
    "Write down as many boy names as you can that start with the letter J. The person with the most names wins.",
  answer: "",
};
