const express = require('express');
const { Book, User } = require('./models');
const authenticateToken = require('../middleware/auth');
const verifyToken = require('../middleware/verifyToken');
const { isAdmin } = require('../middleware/authorizeRole');

const router = express.Router();

router.post('/:userId/books', async (req, res) => {
  const { userId } = req.params;
  const { title, author, publishedDate } = req.body;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const book = await Book.create({ title, author, publishedDate, userId });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:userId/books', async (req, res) => {
  const { userId } = req.params;
  try {
    const books = await Book.findAll({ where: { userId } });
    res.json(books);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
