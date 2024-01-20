import { Router } from 'express';

import Contact from '../models/Contact.js';

const router = Router();

// Create one contact
router.post('/post', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
 

export default router;

 