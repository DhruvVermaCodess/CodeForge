require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const AuthRoutes = require('./routes/AuthRoutes')
const ProfileRoutes = require('./routes/ProfileRoutes')
const CareerCounsellingRoutes = require('./routes/CareerCounsellingRoutes')
const app = express();
const PORT = 5000;

app.use(cors({
    origin: 'https://codeforge.in',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Database connected'))
    .catch((err) => console.error(err.message));

app.get('/', (req, res) => {
    res.send('API is running....')
})
app.get('/wakeup', (req, res) => {
    res.json({
        message: 'Backend is awake...'
    })
})

app.use('/auth', AuthRoutes)
app.use('/user', ProfileRoutes)
app.use('/mail', CareerCounsellingRoutes)

app.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT}`)
})