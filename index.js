const express = require('express')
const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.render('pages/index.ejs')
);

app.listen(port, () => console.log(`Listening to localhost:${port}`));