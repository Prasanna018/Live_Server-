const express = require("express")
const app = express();

app.get('/index.html', function (req, res) {
    res.sendFile('index.html', { root: './' })

})




app.listen(3000);