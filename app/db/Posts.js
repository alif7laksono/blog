const Posts = [
  // inspiration Posts
  {
    id: "in-1",
    title: "10 Inspirational Quotes to Brighten Your Day",
    content:
      "Every day is a new opportunity to achieve greatness. Here are 10 quotes to inspire you: 1. 'The only way to achieve the impossible is to believe it is possible.' - Charles Kingsleigh, 2. 'The best way to predict the future is to create it.' - Abraham Lincoln, 3. 'Believe you can and you're halfway there.' - Theodore Roosevelt, 4. 'Don't watch the clock; do what it does. Keep going.' - Sam Levenson, 5. 'The only limit to our realization of tomorrow will be our doubts of today.' - Franklin D. Roosevelt, 6. 'Act as if what you do makes a difference. It does.' - William James, 7. 'Success is not final, failure is not fatal: It is the courage to continue that counts.' - Winston Churchill, 8. 'Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.' - Roy T. Bennett, 9. 'I can't change the direction of the wind, but I can adjust my sails to always reach my destination.' - Jimmy Dean, 10. 'You are never too old to set another goal or to dream a new dream.' - C.S. Lewis.",
    author: "John Doe",
    category: "Inspiration",
    tags: ["inspiration"],
    date: "2024-01-30",
    images: ["/images/posts/inspiration/image-1.jpg"],
    time: "3 mins read",
  },
  {
    id: "in-2",
    title: "Finding Inspiration in Everyday Moments",
    content:
      "Every day is a new opportunity to achieve greatness. Here are 10 quotes to inspire you: 1. 'The only way to achieve the impossible is to believe it is possible.' - Charles Kingsleigh, 2. 'The best way to predict the future is to create it.' - Abraham Lincoln, 3. 'Believe you can and you're halfway there.' - Theodore Roosevelt, 4. 'Don't watch the clock; do what it does. Keep going.' - Sam Levenson, 5. 'The only limit to our realization of tomorrow will be our doubts of today.' - Franklin D. Roosevelt, 6. 'Act as if what you do makes a difference. It does.' - William James, 7. 'Success is not final, failure is not fatal: It is the courage to continue that counts.' - Winston Churchill, 8. 'Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.' - Roy T. Bennett, 9. 'I can't change the direction of the wind, but I can adjust my sails to always reach my destination.' - Jimmy Dean, 10. 'You are never too old to set another goal or to dream a new dream.' - C.S. Lewis.",
    author: "Jane Smith",
    category: "Inspiration",
    tags: ["inspiration"],
    date: "2024-01-29",
    images: ["/images/posts/inspiration/image-2.jpg"],
    time: "3 mins read",
  },
  // Nature Posts
  {
    id: "na-1",
    title: "Exploring the Beauty of National Parks",
    content:
      "Every day is a new opportunity to achieve greatness. Here are 10 quotes to inspire you: 1. 'The only way to achieve the impossible is to believe it is possible.' - Charles Kingsleigh, 2. 'The best way to predict the future is to create it.' - Abraham Lincoln, 3. 'Believe you can and you're halfway there.' - Theodore Roosevelt, 4. 'Don't watch the clock; do what it does. Keep going.' - Sam Levenson, 5. 'The only limit to our realization of tomorrow will be our doubts of today.' - Franklin D. Roosevelt, 6. 'Act as if what you do makes a difference. It does.' - William James, 7. 'Success is not final, failure is not fatal: It is the courage to continue that counts.' - Winston Churchill, 8. 'Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.' - Roy T. Bennett, 9. 'I can't change the direction of the wind, but I can adjust my sails to always reach my destination.' - Jimmy Dean, 10. 'You are never too old to set another goal or to dream a new dream.' - C.S. Lewis.",
    author: "Bob Johnson",
    category: "Nature",
    tags: ["nature"],
    date: "2024-01-28",
    images: ["/images/posts/nature/image-1.jpg"],
    time: "3 mins read",
  },
  {
    id: "na-2",
    title: "Capturing the Serenity of Forest Landscapes",
    content:
      "Every day is a new opportunity to achieve greatness. Here are 10 quotes to inspire you: 1. 'The only way to achieve the impossible is to believe it is possible.' - Charles Kingsleigh, 2. 'The best way to predict the future is to create it.' - Abraham Lincoln, 3. 'Believe you can and you're halfway there.' - Theodore Roosevelt, 4. 'Don't watch the clock; do what it does. Keep going.' - Sam Levenson, 5. 'The only limit to our realization of tomorrow will be our doubts of today.' - Franklin D. Roosevelt, 6. 'Act as if what you do makes a difference. It does.' - William James, 7. 'Success is not final, failure is not fatal: It is the courage to continue that counts.' - Winston Churchill, 8. 'Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.' - Roy T. Bennett, 9. 'I can't change the direction of the wind, but I can adjust my sails to always reach my destination.' - Jimmy Dean, 10. 'You are never too old to set another goal or to dream a new dream.' - C.S. Lewis.",
    author: "Alice Williams",
    category: "Nature",
    tags: ["nature"],
    date: "2024-01-29",
    images: ["/images/posts/nature/image-2.jpg"],
    time: "3 mins read",
  },

  // health Posts
  {
    id: "he-1",
    title:
      "Simple Yet Effective Strategies to Boost Your Well-being and Enhance Your Quality of Life",
    content:
      "Every day is a new opportunity to achieve greatness. Here are 10 quotes to inspire you: 1. 'The only way to achieve the impossible is to believe it is possible.' - Charles Kingsleigh, 2. 'The best way to predict the future is to create it.' - Abraham Lincoln, 3. 'Believe you can and you're halfway there.' - Theodore Roosevelt, 4. 'Don't watch the clock; do what it does. Keep going.' - Sam Levenson, 5. 'The only limit to our realization of tomorrow will be our doubts of today.' - Franklin D. Roosevelt, 6. 'Act as if what you do makes a difference. It does.' - William James, 7. 'Success is not final, failure is not fatal: It is the courage to continue that counts.' - Winston Churchill, 8. 'Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.' - Roy T. Bennett, 9. 'I can't change the direction of the wind, but I can adjust my sails to always reach my destination.' - Jimmy Dean, 10. 'You are never too old to set another goal or to dream a new dream.' - C.S. Lewis.",
    author: "Jane Smith",
    category: "Health",
    tags: ["health"],
    date: "2024-01-29",
    images: ["/images/posts/health/image-1.jpg"],
    time: "3 mins read",
  },
  {
    id: "he-2",
    title: "The Benefits of Regular Exercise every day",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Bob Johnson",
    category: "Health",
    tags: ["health"],
    date: "2024-01-25",
    images: ["images/posts/health/image-2.jpg"],
    time: "5 mins read",
  },

  // lifestyle Posts
  {
    id: "li-1",
    title: "5 Tips for a Minimalist Lifestyle",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Alice Williams",
    category: "Lifestyle",
    tags: ["lifestyle"],
    date: "2024-01-30",
    images: ["images/posts/lifestyle/image-1.jpg"],
  },
  {
    id: "li-2",
    title: "How to Create a Cozy Home",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Charlie Brown",
    category: "Lifestyle",
    tags: ["lifestyle"],
    date: "2024-01-30",
    images: ["images/posts/lifestyle/image-2.jpg"],
  },

  // Travel Posts
  {
    id: "tr-1",
    title: "Top 10 Destinations for 2024",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Charlie Brown",
    category: "Travel",
    tags: ["travel"],
    date: "2024-01-30",
    images: ["images/posts/travel/image-1.jpg"],
  },
  {
    id: "tr-2",
    title: "How to Travel on a Budget",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Alice Williams",
    category: "Travel",
    tags: ["travel"],
    date: "2024-01-30",
    images: ["/images/posts/travel/image-2.jpg"],
    time: "3 mins read",
  },

  // food posts
  {
    id: "fo-1",
    title: "10 Easy Recipes for Beginners",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Jane Smith",
    category: "Food",
    tags: ["food"],
    date: "2024-01-30",
    images: ["/images/posts/food/image-1.jpg"],
    time: "3 mins read",
  },
  {
    id: "fo-2",
    title: "The Benefits of a Plant-Based Diet",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "John Doe",
    category: "Food",
    tags: ["food"],
    date: "2024-01-30",
    images: ["/images/posts/food/image-2.jpg"],
    time: "3 mins read",
  },

  // technology posts
  {
    id: "te-1",
    title: "The Latest Advances in AI",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Bob Johnson",
    category: "Technology",
    tags: ["technology"],
    date: "2024-01-30",
    images: ["/images/posts/technology/image-1.jpg"],
    time: "3 mins read",
  },
  {
    id: "te-2",
    title: "How to Build a PC",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "John Doe",
    category: "Technology",
    tags: ["technology"],
    date: "2024-01-30",
    images: ["/images/posts/technology/image-2.jpg"],
    time: "3 mins read",
  },
];

export default Posts;
