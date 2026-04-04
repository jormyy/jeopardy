// ============================================================
// JEOPARDY QUESTIONS — edit freely!
// Each category has 5 questions valued $100–$500.
// Set bonus: true on any question that has a bonus component.
// A correct bonus awards an extra $100 per player.
// ============================================================

export const CATEGORIES = [
    {
        name: 'home ec',
        questions: [
            {
                value: 100,
                bonus: false,
                question: 'If you eat raw chicken, you might get this foodborne illness.',
                answer: 'Salmonella',
            },
            {
                value: 200,
                bonus: false,
                question: 'A whole egg commonly contains this many grams of protein.',
                answer: '6',
            },
            {
                value: 300,
                bonus: false,
                question: "This makes the difference between a bake and a broil.",
                answer: 'Where the heat source is (baking = below, broiling = above)',
            },
            {
                value: 400,
                bonus: false,
                question: 'According to the USDA, the average adult should consume this many cups of vegetables per day.',
                answer: '2.5',
            },
            {
                value: 500,
                bonus: false,
                question: 'For a stiff meringue, this is the ideal ratio of egg whites to sugar.',
                answer: '1:2',
            },
        ],
    },
    {
        name: 'ain\'t that what they do?',
        questions: [
            {
                value: 100,
                bonus: false,
                question: 'These two consecutive numbers became a meme after a viral TikTok edit of Lamelo Ball.',
                answer: '6 7',
            },
            {
                value: 200,
                bonus: false,
                question: 'This is the prime minister of Israel.',
                answer: 'Benjamin Netanyahu',
            },
            {
                value: 300,
                bonus: false,
                question: 'This legendary athlete was recently arrested for a DUI.',
                answer: 'Tiger Woods',
            },
            {
                value: 400,
                bonus: false,
                question: 'This is the date that Charlie Kirk met his fate (hey that rhymed).',
                answer: 'September 10, 2025',
            },
            {
                value: 500,
                bonus: true,
                question: 'Bam Adebayo holds the NBA record for most points in a single game (Wilt is fake news). His girlfriend, A\'ja Wilson, is tied for the WNBA record for this many points (bonus for naming the person she\'s tied with).',
                answer: '53 (Liz Cambage)',
            },
        ],
    },
    {
        name: 'instrumental intuition',
        questions: [
            {
                value: 100,
                bonus: false,
                questionAudio: '/jeopardy/audio/100.mp3',
                answer: 'Party in the USA - Miley Cyrus',
            },
            {
                value: 200,
                bonus: false,
                questionAudio: '/jeopardy/audio/200.mp3',
                answer: 'Mo Bamba - Sheck Wes',
            },
            {
                value: 300,
                bonus: false,
                questionAudio: '/jeopardy/audio/300.mp3',
                answer: 'Maniac - Conan Gray',
            },
            {
                value: 400,
                bonus: false,
                questionAudio: '/jeopardy/audio/400.mp3',
                answer: 'My Way - Frank Sinatra',
            },
            {
                value: 500,
                bonus: false,
                questionAudio: '/jeopardy/audio/500.mp3',
                answer: 'My Way - KATSEYE',
            },
        ],
    },
    {
        name: 'famous foreheads',
        questions: [
            {
                value: 100,
                bonus: false,
                questionImage: '/jeopardy/foreheads/100-forehead.png',
                answerImage: '/jeopardy/foreheads/100-full.png',
                answer: 'Lebron James',
            },
            {
                value: 200,
                bonus: false,
                questionImage: '/jeopardy/foreheads/200-forehead.png',
                answerImage: '/jeopardy/foreheads/200-full.png',
                answer: 'Olivia Rodrigo',
            },
            {
                value: 300,
                bonus: false,
                questionImage: '/jeopardy/foreheads/300-forehead.png',
                answerImage: '/jeopardy/foreheads/300-full.png',
                answer: 'Timothée Chalamet',
            },
            {
                value: 400,
                bonus: false,
                questionImage: '/jeopardy/foreheads/400-forehead.png',
                answerImage: '/jeopardy/foreheads/400-full.png',
                answer: 'Anna from Frozen',
            },
            {
                value: 500,
                bonus: false,
                questionImage: '/jeopardy/foreheads/500-forehead.png',
                answerImage: '/jeopardy/foreheads/500-full.png',
                answer: 'Alex Fong',
            },
        ],
    },
    {
        name: 'matthew mania',
        questions: [
            {
                value: 100,
                bonus: false,
                question: 'Matthew Hong has an aversion to this type of food.',
                answer: 'Seafood',
            },
            {
                value: 200,
                bonus: false,
                question: 'This Matthew has starred in numerous award-winning films such as Interstellar and The Wolf of Wall Street.',
                answer: 'Matthew McConaughey',
            },
            {
                value: 300,
                bonus: false,
                question: 'This is Matthew Hong\'s birthday.',
                answer: 'May 31, 2004',
            },
            {
                value: 400,
                bonus: false,
                question: 'Matthew is a big name for people of the Christian faith for this reason.',
                answer: 'One of the 12 apostles and the author of the first gospel in the New Testament',
            },
            {
                value: 500,
                bonus: false,
                question: 'This is the name of Matthew Hong\'s second girlfriend.',
                answer: 'Emma',
            },
        ],
    },
]

// ============================================================
// FINAL JEOPARDY — edit freely!
// ============================================================

export const FINAL_JEOPARDY = {
    category: 'Black Excellence',
    question: 'Name as many Black artists as you can in 2 minutes.',
    answer: '',
}
