const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const server = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://admin:admin@cluster0.69iil.mongodb.net/webMo?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

server.use(express.json({ extended: true }));

server.use('/auth', require('./routh/authRoutes'));

if (process.env.NODE_ENV === 'production') {
    server.use(express.static('client/build'));
}

server.get('/', () => '<h1>Server started!</h1>');
server.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));