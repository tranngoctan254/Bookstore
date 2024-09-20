const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('./models');
const authenticateToken = require('../middleware/auth');
const checkUserExist = require('../middleware/checkUserExist');

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret'; // Nên lưu trong biến môi trường

router.post('/signup', async (req, res) => {
  const { fullName, username, email, iam_role, hash_pwd } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(hash_pwd, 10);
    const user = await User.create({ fullName, username, email, iam_role, hash_pwd: hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/signin', async (req, res) => {
  const { username, hash_pwd } = req.body;
  
  try {
    const user = await User.findOne({ where: { username } });

    if (!user || !await bcrypt.compare(hash_pwd, user.hash_pwd)) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Tạo JWT
    const token = jwt.sign(
      { id: user.id, username: user.username, iam_role: user.iam_role },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
