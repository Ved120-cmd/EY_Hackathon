const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 

const JWT_SECRET = process.env.JWT_SECRET; 

// -------------------------------------------------------------------
// POST /api/auth/signup - Register a new user
// -------------------------------------------------------------------
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({ email, password });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        res.status(201).json({ 
            msg: 'User registered successfully!', 
            id: user.id,
            email: user.email 
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error during sign up');
    }
});


// -------------------------------------------------------------------
// POST /api/auth/login - Authenticate user & get token
// -------------------------------------------------------------------
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        
        const user = await User.findOne({ email }).select('+password'); 
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = {
            user: {
                id: user.id,
                role: user.role 
            }
        };

        jwt.sign(
            payload,
            JWT_SECRET, 
            { expiresIn: '1h' }, 
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error during login');
    }
});

module.exports = router;