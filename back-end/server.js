const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const MarkdownIt = require("markdown-it"),
        md = new MarkdownIt();

app.use(cors());
router.use(cors());
const port = 5000;
app.listen(port, function(){
    console.log(`Express server has started on port ${port}`);
})

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('../front-end/build'));

app.use('/Main', require('./router/main'));
app.use('/Profile', require('./router/profile'));
app.use('/Github', require('./router/github'));
app.use('/Corona', require('./router/corona'));