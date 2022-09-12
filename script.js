const quoteArray = [ //from https://type.fit/api/quotes
    {
    "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison"
    },
    {
    "text": "You can observe a lot just by watching.",
    "author": "Yogi Berra"
    },
    {
    "text": "A house divided against itself cannot stand.",
    "author": "Abraham Lincoln"
    },
    {
    "text": "Difficulties increase the nearer we get to the goal.",
    "author": "Johann Wolfgang von Goethe"
    },
    {
    "text": "Fate is in your hands and no one elses",
    "author": "Byron Pulsifer"
    },
    {
    "text": "Be the chief but never the lord.",
    "author": "Lao Tzu"
    },
    {
    "text": "Nothing happens unless first we dream.",
    "author": "Carl Sandburg"
    },
    {
    "text": "Well begun is half done.",
    "author": "Aristotle"
    },
    {
    "text": "Life is a learning experience, only if you learn.",
    "author": "Yogi Berra"
    },
    {
    "text": "Self-complacency is fatal to progress.",
    "author": "Margaret Sangster"
    },
    {
    "text": "Peace comes from within. Do not seek it without.",
    "author": "Buddha"
    },
    {
    "text": "What you give is what you get.",
    "author": "Byron Pulsifer"
    },
    {
    "text": "We can only learn to love by loving.",
    "author": "Iris Murdoch"
    },
    {
    "text": "Life is change. Growth is optional. Choose wisely.",
    "author": "Karen Clark"
    },
    {
    "text": "We need to find the courage to say NO to the things and people that are not serving us if we want to rediscover ourselves and live our lives with authenticity.",
    "author": "Barbara De Angelis"
    },
    {
    "text": "Great is the art of beginning, but greater is the art of ending.",
    "author": "Lazurus Long"
    },
    {
    "text": "Simply put, you believer that things or people make you unhappy, but this is not accurate. You make yourself unhappy.",
    "author": "Wayne Dyer"
    },
    {
    "text": "Nothing will work unless you do.",
    "author": "Maya Angelou"
    },
    {
    "text": "Our ability to achieve happiness and success depends on the strength of our wings.",
    "author": "Catherine Pulsifer"
    },
    {
    "text": "To go against the dominant thinking of your friends, of most of the people you see every day, is perhaps the most difficult act of heroism you can perform.",
    "author": "Theodore H. White"
    },
    {
    "text": "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.",
    "author": "Melody Beattie"
    },
    {
    "text": "Into each life rain must fall but rain can be the giver of life and it is all in your attitude that makes rain produce sunshine.",
    "author": "Byron Pulsifer"
    },
    {
    "text": "We are all inclined to judge ourselves by our ideals; others, by their acts.",
    "author": "Harold Nicolson"
    },
    {
    "text": "Nothing is a waste of time if you use the experience wisely.",
    "author": "Rodin"
    },
    {
    "text": "If one way be better than another, that you may be sure is natures way.",
    "author": "Aristotle"
    },
    {
    "text": "Here is one quality that one must possess to win, and that is definiteness of purpose, the knowledge of what one wants, and a burning desire to possess it.",
    "author": "Napoleon Hill"
    },
    {
    "text": "It is not in the stars to hold our destiny but in ourselves.",
    "author": "William Shakespeare"
    },
    {
    "text": "Using the power of decision gives you the capacity to get past any excuse to change any and every part of your life in an instant.",
    "author": "Tony Robbins"
    },
    {
    "text": "I will prepare and some day my chance will come.",
    "author": "Abraham Lincoln"
    },
    {
    "text": "Sometimes the cards we are dealt are not always fair. However you must keep smiling and moving on.",
    "author": "Tom Jackson"
    }
]; 

const _random = Math.floor(Math.random() * quoteArray.length);

function messageGenerator () {
    let generate = quoteArray[_random];
    let q_text = generate.text;
    let q_author = generate.author;
    //return "<p> q_text + ' by ' + q_author </p>";
    document.getElementById("message").innerHTML = q_text + ' by ' + q_author;
    //return '<p> test </p>';
    //console.log(generate.text + ' by ' + generate.author);
};

//console.log(messageGenerator());
