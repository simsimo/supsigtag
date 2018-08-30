var express = require('express');

var app = express();
const port = 9090;

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(port, ()=>{
    console.log('serveur en écoute sur le port ' + port);
})
