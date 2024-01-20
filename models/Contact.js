import { Schema, model } from 'mongoose';

const contactSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Telephone: {
    type: String,
    required: true,
    unique: true
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  Message: { 
    type: String,
    required: true
  }
}, { 
  timestamps: true
});

export default model('Contact', contactSchema);