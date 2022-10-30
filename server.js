const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pagesRouter = require('./controller/pages');
const app = express();
port = process.env.PORT || 80

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', pagesRouter);

app.listen(port, () => {
    console.log('server is running...')
});