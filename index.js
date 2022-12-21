const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.static('dist'));

app.listen(PORT);

console.log(`app listening at localhost:${PORT}`);