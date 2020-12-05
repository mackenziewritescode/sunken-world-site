const express = require("express");
const path = require('path');
const app = express();

app.use('/jquery', express.static((__dirname, 'node_modules', 'jquery', 'dist')));

app.use(express.static(path.join(__dirname + '/react/build')));
app.use(express.static(path.join(__dirname + '/interval-timer')));

app.use(require(__dirname + '/api.js'));

// app.use(express.static(path.join(__dirname + '/photo-search')));
// app.get("/photo-search", (req, res) => {
//     res.sendFile(path.join(__dirname + '/photo-search/index.html'));
// });

app.get("/interval-timer", (req, res) => {
    res.sendFile(path.join(__dirname + '/interval-timer/index.html'));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + '/react/build/index.html'));
});


const port = process.env.PORT || 80;

app.listen(port, () => console.log(`listening on port ${port}...`));