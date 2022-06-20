const express = require('express');
const router = express.Router();
const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();

router.get('/', (req, res) => {
  res.send('component');
});

module.exports = router;