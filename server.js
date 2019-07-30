const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080 || process.env.PORT;

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'public', 'index.html')));

app.get('*', (req, res) => res.redirect('/'));

app.listen(PORT, () => console.log(`App started at port ${PORT}...`));
