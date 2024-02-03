const PostData = [
  {
    id: 1,
    title: "Finding Inspiration in Everyday Moments",
    description:
      "Discover how to find inspiration and beauty in the ordinary moments of life.",
    author: "Grace Williams",
    dateTime: "February 2, 2024",
    image1: "/images/posts/technology/image-1.jpg",
    image2: "/images/posts/nature/image-2.jpg",
    image3: "/images/posts/lifestyle/image-2.jpg",

    category: "inspiration",
    time: "3 mins read",
    content: `
    <div>
      <p>Life is filled with moments - some big, some small, but all significant in their own way. It's easy to get caught up in the hustle and bustle of daily life and overlook the beauty that surrounds us. However, if we take the time to pause and appreciate the world around us, we can find inspiration in the most unexpected places.</p>
      <p>One of the simplest yet most profound sources of inspiration is nature. Take a moment to step outside and breathe in the fresh air. Look up at the sky and marvel at the colors of the sunset or the dance of the clouds. Even in the midst of chaos, nature has a way of grounding us and reminding us of the beauty of the world.</p>
    </div>
    <br>
    <div>
      <p>Another source of inspiration can be found in the people we encounter every day. Whether it's a kind gesture from a stranger or a heartfelt conversation with a loved one, human connections have the power to uplift and inspire us. Take the time to listen to others' stories, and you may find yourself inspired by their resilience, compassion, and strength.</p>
    </div>
    <br>
   
  `,
    content2: ` 
    <div>
        <p>Even the most mundane activities can spark inspiration if we approach them with mindfulness and curiosity. Something as simple as sipping a cup of coffee or taking a walk around the block can become an opportunity to find beauty in the everyday. Pay attention to the little details - the way the sunlight filters through the trees, the sound of birds chirping in the distance - and you'll discover a world of inspiration waiting to be explored.</p>
        <p>So, the next time you're feeling stuck or uninspired, remember that inspiration is all around you. Whether it's in the natural world, the people you meet, or the everyday moments you experience, there's beauty to be found everywhere you look. All you have to do is open your eyes and heart to it.</p>
    </div>`,
    comments: [
      {
        id: 1,
        author: "Michael Johnson",
        image: "/images/authors/JohnDoe.jpg",
        comment:
          "I absolutely love this article! It's a great reminder to slow down and appreciate the beauty of life.",
        date: "yesterday",
      },
      {
        id: 2,
        author: "Sarah Lee",
        image: "/images/authors/AliceWilliams.jpg",
        comment:
          "I couldn't agree more. It's amazing how much inspiration can be found in the simplest things.",
        date: "a month ago",
      },
      {
        id: 3,
        author: "John Doe",
        image: "/images/authors/BobJohnson.jpg",
        comment:
          "This is a new comment. It's always great to find inspiration in the world around us.",
        date: "2 weeks ago",
      },
    ],
  },
];

export default PostData;
