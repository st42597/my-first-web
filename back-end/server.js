const express = require("express");
const router = express.Router();
const app = express();
const fs = require("fs");
const cors = require("cors");
const MarkdownIt = require("markdown-it"),
        md = new MarkdownIt();

app.use(cors());
router.use(cors());

const port = 5000;
const server = app.listen(port, function(){
    console.log(`Express server has started on port ${port}`);
})

app.use(express.static('../front-end/build'));

app.use('/profile', require('./router/profile'));