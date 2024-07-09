const express = require('express');
const router = express.Router();
const db = require('../firebase');

router.post('/submit-form', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await db.collection('contacts').add({
      name,
      email,
      message,
      timestamp: new Date()
    });
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error writing document: ', error);
    res.status(500).json({ message: 'Error submitting form' });
  }
});

module.exports = router;