const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'https://instagram-story-frontend.onrender.com'
}));
app.use(express.static(path.join(__dirname, 'public')));

const stories = [
  { src: '/images/story1.jpg', name: 'Crish' },
  { src: '/images/story2.jpg', name: 'David' },
  { src: '/images/Crish2.jpeg', name: 'Josh' },
  { src: '/images/story4.jpg', name: 'Mike' },
  { src: '/images/mark2.jpeg', name: 'Mark' },
  { src: '/images/josh2.jpeg', name: 'Josh' },
];

app.get('/api/stories', (req, res) => {
  res.json(stories);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
