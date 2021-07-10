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

app.get('/Profile', (req, res) => {
    fs.readFile('./views/Profile.md', 'utf8', (err, data) => {
        if(err){
            res.send({
                "content" : `<h1>error</h1>`
            });
            throw err;
        }
        let result = md.render(data);
        console.log(result)
        res.send({
            "content" : `${result}`
        });
    });
});