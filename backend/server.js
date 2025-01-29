/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { body, validationResult } = require('express-validator');
const bodyParser = require("body-parser");
// Initialize the app
const app = express();
app.use(cors());
app.use(express.json());




// MongoDB connection
mongoose.connect("mongodb://localhost:27017/event-management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log("Error connecting to MongoDB:", err);
});

// MongoDB Schema for Contact Form
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// Route to handle contact form submission
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save contact message to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("Error saving contact message:", err);
    res.status(500).json({ message: "Failed to send message" });
  }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Event model
const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }
});

const Event = mongoose.model('Event', eventSchema);

// Routes

// GET all events
app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

// GET a single event by ID
app.get('/api/events/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch event' });
  }
});

// POST create a new event with validation
app.post('/api/events', [
  body('title').notEmpty().withMessage('Title is required'),
  body('date').notEmpty().withMessage('Date is required'),
  body('location').notEmpty().withMessage('Location is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('image').notEmpty().withMessage('Image URL is required'),
], async (req, res) => {
  // Check validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, date, location, description, image } = req.body;

  try {
    const newEvent = new Event({ title, date, location, description, image });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create event' });
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
