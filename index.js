require('dotenv').config();

const express = require('express');
const { User, Book } = require('./models'); 

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/books', async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

const authRoutes = require('../BT/routes/auth');
const userRoutes = require('../BT/routes/user');
const bookRoutes = require('../BT/routes/book');

app.use(express.json());
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/users', bookRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
