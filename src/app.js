const express = require('express');
const morgan = require('morgan');

const app = express();
app.set('port', process.env.PORT||5000);

app.use(morgan('dev'));

app.get('/', (req,res)=>{
    return res.send("Hola mundo")
});

app.post('/api/notification', (req,res)=>{
    if(req.query.validationToken!=null)
    {
        res.set('Content-Type', 'text/plain')
        console.log(req.query.validationToken)
        return res.status(200).send(req.query.validationToken);
    }
});

module.exports = app;