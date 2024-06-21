const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const Pay = require('./schema');

dotenv.config();
const app = express()
const port = 3000

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.post('/payroll', async function(req,res) {
    console.log(req.body);
    
    const data = new Pay({
        perday_salary : req.body.perday_salary,
        gross_salary : req.body.gross_salary,   
        pay_period : req.body.pay_period,
        salary_date : req.body.salary_date,
    })
    
    const val = await data.save();
    console.log(val);
    res.json(val);

})

app.listen(port);