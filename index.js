import express from 'express';
import bodyParser from 'body-parser';
import { connect } from 'mongoose';
import dotenv from "dotenv";
import cors from "cors";

import Contact from './routes/Contact.js';
import Blog from './routes/Blog.js'


const port = process.env.PORT || 3000;

// Initialize Express app
const app = express();
dotenv.config();
  
// Implementation of middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); 
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
  ); 

  // APIs
app.use('/api/contact', Contact);
app.use('/api/blog', Blog)

app.get('/', (req, res) => {
  res.send('Hello world!!!!!!!')
})

// Db connection 
app.listen(port, connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
    console.log(`Server is running on ${port}`);
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  }));

