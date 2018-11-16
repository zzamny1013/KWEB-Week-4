const express= require('express');
const app = express();
const port = 3000;

app.listen('3000', '0.0.0.0', () => {
  console.log('server online');
});

app.get('/', (req, res) =>{
    printReq(req);
    res.send('This is main page.');
});

app.get('/board', (req, res) =>{
    printReq(req);
    res.send('This is board page.');
});

app.post('/board', (req, res) =>{
    printReq(req);
    res.send('This is board write page.');
});

app.use(function (err, req, res, next) {
    res.statusCode = 404;
    res.send(err.message);
    res.end();
});

app.use( (req,res) => { printReq(req); res.status(404).send("404 Not found"); });


function printReq(req){
    console.log(`${req.method} ${req.url}
${Object.keys(req.headers).map(k => `${k}: ${req.headers[k]}`).join('\n')}
`);

  req.on('data', d => console.log(d.toString()));
};