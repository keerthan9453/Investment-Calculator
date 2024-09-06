const express = require('express');
const connectDB = require('./Config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
