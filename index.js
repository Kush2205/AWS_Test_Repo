const express = require('express');

const app = express();

app.get('/get', (req, res) => {
    res.send('Hello World!GET route');
});

app.post('/post', (req, res) => {
    res.send('Hello World!POST route');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});