const express = require('express');
const morgan = require('morgan');

const app = express();
app.set('port', 5000);

app.use(morgan('dev'));

app.get('/', (req,res)=>{
    return res.write("Hola mundo")
});

app.post('/api/notification', (req,res)=>{
    if(req.query.validationToken!=null)
    {
        res.set('Content-Type', 'text/plain')
        console.log(req.query.validationToken)
        return res.status(200).write(req.query.validationToken);
    }
});

module.exports = app;