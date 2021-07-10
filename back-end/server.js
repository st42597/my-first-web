const express = require("express");
const fs = require("fs");
const cors = require("cors");
const MarkdownIt = require("markdown-it"),
        md = new MarkdownIt();
const app = express();



const port = 5000;
const server = app.listen(port, function(){
    console.log(`Express server has started on port ${port}`);
})

app.use(cors());

/*app.use('/', require('./router/main'));*/

app.get('/content', (req, res) => {
    fs.readFile('./views/Profile.md', 'utf8', (err, data) => {
        let result;
        if(err) throw err;
        result = md.render(data);
        console.log(result)
        res.send({
            "content" : `${result}`
        });
    });
});