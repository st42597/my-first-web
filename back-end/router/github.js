const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const MarkdownIt = require('markdown-it'),
        md = new MarkdownIt();

router.get('/', (req, res) => {
    res.send('component');
});

module.exports = router;