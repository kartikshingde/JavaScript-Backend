require('dotenv').config()

const express = require('express')

const app = express()

const port=5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('kartik@123')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Hello from kartik</h2>')
})

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`)
})