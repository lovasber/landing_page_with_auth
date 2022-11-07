const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

app.use(cors());

const users = [
    {
        id: Date.now().toString(),
        name: 'admin',
        email: 'a@a.com',
        password: 'admin'
    },
    {
        id: Date.now().toString(),
        name: 'user',
        email: 'u@u.com',
        password: 'user'
    }
]

app.post('/login', jsonParser, (req, res)=>{
    const isAuth = users.find(user => user.email === req.body.email) && users.find(user => user.password === req.body.password)
    if(isAuth){
        res.sendStatus(200)
    }else{
        res.sendStatus(401)
    }
})

app.listen(3001);