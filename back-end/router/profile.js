const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const MarkdownIt = require('markdown-it'),
        md = new MarkdownIt();

router.get('/', (req, res) => {
    let markdown = fs.readFileSync(path.join(__dirname, '../views/Profile.md'), 'utf8');
    markdown = md.render(markdown);
    res.send(markdown);
});

module.exports = router;
