const express = require('express');
const app = express();
const router = express.Router();
const helmet = require('helmet');
const cors = require('cors');
const MarkdownIt = require('markdown-it');
md = new MarkdownIt();

app.use(helmet());
app.use(cors());
router.use(cors());

const port = 4000;
app.listen(port, function(){
    console.log(`Express server has started on port ${port}`);
})

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('../front-end/build'));

app.use('/main', require('./router/main'));
app.use('/profile', require('./router/profile'));
app.use('/github', require('./router/github'));
app.use('/corona', require('./router/corona'));