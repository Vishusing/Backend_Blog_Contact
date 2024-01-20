import { Schema, model } from 'mongoose';

const blogSchema = new Schema({
    Title: { type: String, required: true},
    Content: { type: String, required: true},
    Author: { type: String, required: true, default: "Admin" },
    Replies: [
        {
          Author: String,
          Content: String,
          createdAt: Date
        }
      ]
});

export default model('Blog', blogSchema);
   