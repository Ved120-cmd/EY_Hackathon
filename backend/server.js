require('dotenv').config();

const express = require('express');
const cors = require('cors'); // Corrected assignment
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Single declaration for mongoose
const authRoutes = require('./routes/auth');
const providerRoutes = require('./routes/provider');


const app = express();
const PORT = process.env.PORT || 5000;

// --- Mongoose Database Connection ---
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected successfully!'))
.catch(err => console.error('MongoDB connection error:', err));


// --- Middleware ---
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', authRoutes);
app.use('/api/provider', providerRoutes);


// --- Routes ---
app.get('/', (req, res) => {
    res.send('Server running! Time to add auth routes.');
});

app.get('/', (req, res) => {
    res.send('Server running! Time to add auth routes.');
});

// --- Start Server ---
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});