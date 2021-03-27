const express = require('express');
const mongoose = require('mongoose');

const server = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || '',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

if(process.env.NODE_ENV === 'production') {
    server.use(express.static('client/build'));
}

server.get('/', () => '<h1>Server started!</h1>')
server.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));