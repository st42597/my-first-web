const express = require('express');
const path = require('path');
const fs = require('fs');
const MarkdownIt = require("markdown-it"),
        md = new MarkdownIt();
const router = express.Router();

router.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, '../views/profile.md'), 'utf8', (err, data) => {
        if(err) throw err;
        let result = md.render(data);
        res.send({
            "content" : `${result}`
        });
    });
});

module.exports = router