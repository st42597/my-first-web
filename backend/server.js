const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const MarkdownIt = require('markdown-it');
md = new MarkdownIt();

app.use(helmet());
app.use(cors());

const port = process.env.PORT | 4000;
app.listen(port, () => {
    console.log(`Express server has started on port ${port}`);
})

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('../front-end/build'));

app.use('/home', require('./routes/home'));
app.use('/profile', require('./routes/profile'));
app.use('/github', require('./routes/github'));
app.use('/corona', require('./routes/corona'));