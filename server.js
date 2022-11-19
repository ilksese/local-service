var path = require('path');
var express = require('express')
var app = express()
// 配置模板引擎
app.engine('html',require('express-art-template'));
const Freemarker = require('freemarker');
const freemarker = new Freemarker({ root: __dirname });

app.get('/', function (req, res) {
    res.render("index.html");
})
app.get('/freemarker', async function (req, res) {
    freemarker.renderFile(path.join(__dirname, '/src/freemarker/index.ftl'), { title: 'test render' }, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
})
var server = app.listen("3000", "127.0.0.1", function () {
    let host = server.address().address // host域
	let port = server.address().port // 端口号
	console.log(`Server running at http://${host}:${port}`);
})