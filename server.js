console.log("hello world")

const express = require('express')
const app = express()


app.get('/',(req,res) => {
    res.send('Hello node APi')
})

app.listen(3000, ()=>{
    console.log('Node api app is runnint on port 3000')
})