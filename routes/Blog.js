import { Router } from 'express';
import Blog from '../models/Blog.js';


const router = Router();

// Create a Blog
router.post('/create', async (req, res) => {
try {
    const { Title, Content, Author } = req.body;
    const newPost = new Blog({ Title, Content, Author });
    const savedPost = await newPost.save(); 
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
 
// Update an already posted Blog
router.put('/update/:id', async (req, res) => {
  try {
    const { Title, Content } = req.body; 
    const blog = await Blog.findByIdAndUpdate(req.params.id, { Title, Content }, { new: true });
    if (!blog) {
      res.status(404).json({ message: 'Blog not found' });
    } else {
      res.status(200).json(blog);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a Blog
router.delete('/delete/:id', async (req, res) => { 
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      res.status(404).json({ message: 'Blog not found' });
    } else {
      res.status(200).json({ message: 'Blog deleted successfully' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Replies on a Particular Blog
router.post('/reply/:blogId', async (req, res) => {
  try {
    const { Author, Content } = req.body;
    const blog = await Blog.findByIdAndUpdate(req.params.blogId, {
      $push: { Replies: { Author, Content, createdAt: new Date() } }
    }, { new: true });

    if (!blog) {
      res.status(404).json({ message: 'Blog not found' });
    } else {
      res.status(201).json(blog);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  } 
}); 
 
// To get a Particular Blog
router.get('/get/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.json(blog);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// To get all posted Blog
router.get('/get-all', async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
