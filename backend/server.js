// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5174;

app.use(cors());
app.use(express.json());

let blogs = [
  {
    id: 1,
    blogTitle: 'Exciting Adventure in the Alps',
    summary: 'Travel and you will be born for a second time. Explore the breathtaking views of the Alps, where every moment feels like a new beginning.',
    authorName: 'Sam Guy',
    authorImage: 'https://img.icons8.com/color/48/user.png',
    publicationDate: '2023-11-01',
    category: 'Destination',
    subCategory: 'Europe',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    mainContent: 'Explore the breathtaking views of the Alps...',
    travelTags: 'Adventure, Alps',
    additionalImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989',
      'https://images.unsplash.com/photo-1491557345352-5929e9c39bd1',
    ],
  },
  {
    id: 2,
    blogTitle: 'Serenity Over the Santorini Cliffs',
    summary: 'Witness the magic of Santorini’s whitewashed villages and stunning sunsets. A perfect escape for romance and relaxation.',
    authorName: 'Elena Martinez',
    authorImage: 'https://img.icons8.com/color/48/user.png',
    publicationDate: '2023-12-15',
    category: 'Destination',
    subCategory: 'Europe',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    mainContent: 'Santorini is a dream destination with its iconic blue domes and breathtaking views...',
    travelTags: 'Romance, Santorini',
    additionalImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989',
    ],
  },
  {
    id: 3,
    blogTitle: 'A Foodie’s Journey Through Tokyo',
    summary: 'From sushi to ramen, explore the vibrant food scene of Tokyo and discover why it’s a paradise for food lovers.',
    authorName: 'Hiro Tanaka',
    authorImage: 'https://img.icons8.com/color/48/user.png',
    publicationDate: '2024-01-10',
    category: 'Destination',
    subCategory: 'Asia',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989',
    mainContent: 'Tokyo’s culinary landscape is a blend of tradition and innovation...',
    travelTags: 'Food, Tokyo',
    additionalImages: [
      'https://images.unsplash.com/photo-1591171406489-2b2a4a0a560f',
      'https://images.unsplash.com/photo-1539185440975-7e79619c5b20',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    ],
  },
  {
    id: 4,
    blogTitle: 'Top 5 Tips for Solo Travelers',
    summary: 'Embarking on your first solo trip? These tips will help you travel with confidence and make unforgettable memories.',
    authorName: 'Sophie Clark',
    authorImage: 'https://img.icons8.com/color/48/user.png',
    publicationDate: '2024-02-05',
    category: 'Travel Tips',
    subCategory: 'General',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    mainContent: 'Solo travel can be a transformative experience if you plan wisely...',
    travelTags: 'Solo Travel, Tips',
    additionalImages: [
      'https://images.unsplash.com/photo-1491557345352-5929e9c39bd1',
      'https://images.unsplash.com/photo-1526392060635-9d6019884377',
      'https://images.unsplash.com/photo-1517508737642-2d798532e0a8',
    ],
  },
  {
    id: 5,
    blogTitle: 'Safari Adventures in the Serengeti',
    summary: 'Experience the thrill of a lifetime with a safari in the Serengeti, where you’ll encounter the Big Five in their natural habitat.',
    authorName: 'John Mwangi',
    authorImage: 'https://img.icons8.com/color/48/user.png',
    publicationDate: '2024-03-20',
    category: 'Destination',
    subCategory: 'Africa',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989',
    mainContent: 'The Serengeti offers an unparalleled safari experience with its vast plains...',
    travelTags: 'Safari, Serengeti',
    additionalImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    ],
  },
  {
    id: 6,
    blogTitle: 'Hiking the Inca Trail to Machu Picchu',
    summary: 'Trek through history on the Inca Trail and uncover the ancient wonders of Machu Picchu, a UNESCO World Heritage site.',
    authorName: 'Carlos Rivera',
    authorImage:'https://img.icons8.com/color/48/user.png',
    publicationDate: '2024-04-12',
    category: 'Destination',
    subCategory: 'South America',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377',
    mainContent: 'The Inca Trail is a challenging but rewarding journey to one of the world’s most iconic sites...',
    travelTags: 'Hiking, Machu Picchu',
    additionalImages: [
      'https://images.unsplash.com/photo-1491557345352-5929e9c39bd1',
      'https://images.unsplash.com/photo-1517508737642-2d798532e0a8',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    ],
  },
  {
    id: 7,
    blogTitle: 'The Ultimate Guide to Budget Travel in Europe',
    summary: 'Discover how to explore Europe on a budget with these practical tips for affordable travel.',
    authorName: 'Michael Lee',
    authorImage: 'https://img.icons8.com/color/48/user.png',
    publicationDate: '2024-05-08',
    category: 'Travel Tips',
    subCategory: 'Europe',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377',
    mainContent: 'Europe doesn’t have to be expensive if you know where to look...',
    travelTags: 'Budget Travel, Europe',
    additionalImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989',
      'https://images.unsplash.com/photo-1526392060635-9d6019884377',
    ],
  },
  {
    id: 8,
    blogTitle: 'Diving into the Great Barrier Reef',
    summary: 'Explore the underwater wonders of the Great Barrier Reef, home to vibrant coral and marine life.',
    authorName: 'Liam Harris',
    authorImage: 'https://img.icons8.com/color/48/user.png',
    publicationDate: '2024-06-15',
    category: 'Destination',
    subCategory: 'Australia',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e',
    mainContent: 'The Great Barrier Reef is a diver’s paradise with its colorful ecosystems...',
    travelTags: 'Diving, Great Barrier Reef',
    additionalImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      'https://images.unsplash.com/photo-1516426122075-c03c8e36d7b5',
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989',
    ],
  },
  {
    id: 9,
    blogTitle: 'Winter Escapes in Banff, Canada',
    summary: 'Embrace the magic of winter in Banff with skiing, snowboarding, and stunning snowy landscapes.',
    authorName: 'Megan White',
    authorImage: 'https://img.icons8.com/color/48/user.png',
    publicationDate: '2024-07-22',
    category: 'Destination',
    subCategory: 'North America',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    mainContent: 'Banff is a winter wonderland perfect for outdoor enthusiasts...',
    travelTags: 'Winter, Banff',
    additionalImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1491557345352-5929e9c39bd1',
      'https://images.unsplash.com/photo-1526392060635-9d6019884377',
    ],
  },
  {
    id: 10,
    blogTitle: 'Photography Tips for Capturing Your Travels',
    summary: 'Learn how to take stunning travel photos with these expert tips for beginners and pros alike.',
    authorName: 'Oliver Brown',
    authorImage: 'https://img.icons8.com/color/48/user.png',
    publicationDate: '2024-08-10',
    category: 'Travel Tips',
    subCategory: 'General',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    mainContent: 'Photography can elevate your travel memories to the next level...',
    travelTags: 'Photography, Travel Tips',
    additionalImages: [
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      'https://images.unsplash.com/photo-1516426122075-c03c8e36d7b5',
    ],
  },
  {
    id: 11,
    blogTitle: 'Cultural Immersion in Rajasthan, India',
    summary: 'Dive into the vibrant culture of Rajasthan with its palaces, festivals, and rich traditions.',
    authorName: 'Priya Sharma',
    authorImage: 'https://img.icons8.com/color/48/user.png',
    publicationDate: '2024-09-05',
    category: 'Destination',
    subCategory: 'Asia',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377',
    mainContent: 'Rajasthan is a land of color, history, and hospitality...',
    travelTags: 'Culture, Rajasthan',
    additionalImages: [
      'https://images.unsplash.com/photo-1591171406489-2b2a4a0a560f',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1526392060635-9d6019884377',
    ],
  },
];

function getNewId() {
  let maxId = 0;
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].id > maxId) {
      maxId = blogs[i].id;
    }
  }
  return maxId + 1;
}

app.get('/api/blogs', (req, res) => {
  let page = req.query.page || 1;
  let limit = req.query.limit || 6;
  let category = req.query.category;
  let subCategory = req.query.subCategory;
  let search = req.query.search;

  let myBlogs = blogs;

  if (category) {
    let tempBlogs = [];
    for (let i = 0; i < myBlogs.length; i++) {
      if (myBlogs[i].category.toLowerCase() == category.toLowerCase()) {
        tempBlogs.push(myBlogs[i]);
      }
    }
    myBlogs = tempBlogs;
  }

  if (subCategory) {
    let tempBlogs = [];
    for (let i = 0; i < myBlogs.length; i++) {
      if (myBlogs[i].subCategory.toLowerCase() == subCategory.toLowerCase()) {
        tempBlogs.push(myBlogs[i]);
      }
    }
    myBlogs = tempBlogs;
  }

  if (search) {
    let tempBlogs = [];
    let searchWord = search.toLowerCase();
    for (let i = 0; i < myBlogs.length; i++) {
      if (
        myBlogs[i].blogTitle.toLowerCase().includes(searchWord) ||
        myBlogs[i].mainContent.toLowerCase().includes(searchWord) ||
        myBlogs[i].authorName.toLowerCase().includes(searchWord) ||
        myBlogs[i].category.toLowerCase().includes(searchWord) ||
        myBlogs[i].subCategory.toLowerCase().includes(searchWord)
      ) {
        tempBlogs.push(myBlogs[i]);
      }
    }
    myBlogs = tempBlogs;
  }

  let start = (page - 1) * limit;
  let end = page * limit;
  let finalBlogs = [];
  for (let i = start; i < end && i < myBlogs.length; i++) {
    finalBlogs.push(myBlogs[i]);
  }

  res.json({
    blogs: finalBlogs,
    totalBlogs: myBlogs.length,
    totalPages: Math.ceil(myBlogs.length / limit),
    currentPage: Number(page),
  });
});

app.get('/api/blogs/:id', (req, res) => {
  let id = Number(req.params.id);
  let foundBlog = null;
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].id == id) {
      foundBlog = blogs[i];
      break;
    }
  }
  if (!foundBlog) {
    res.status(404).json({ message: 'Blog not found' });
  } else {
    res.json(foundBlog);
  }
});

app.post('/api/blogs', (req, res) => {
  let newBlog = req.body;
  newBlog.id = getNewId();
  if (!newBlog.publicationDate) {
    newBlog.publicationDate = new Date().toISOString().split('T')[0];
  }
  blogs.push(newBlog);
  res.status(201).json(newBlog);
});

app.put('/api/blogs/:id', (req, res) => {
  let id = Number(req.params.id);
  let blogIndex = -1;
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].id == id) {
      blogIndex = i;
      break;
    }
  }
  if (blogIndex == -1) {
    res.status(404).json({ message: 'Blog not found' });
  } else {
    blogs[blogIndex] = { ...blogs[blogIndex], ...req.body };
    res.json(blogs[blogIndex]);
  }
});

app.delete('/api/blogs/:id', (req, res) => {
  let id = Number(req.params.id);
  let blogIndex = -1;
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].id == id) {
      blogIndex = i;
      break;
    }
  }
  if (blogIndex == -1) {
    res.status(404).json({ message: 'Blog not found' });
  } else {
    let deleted = blogs.splice(blogIndex, 1);
    res.json(deleted[0]);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});