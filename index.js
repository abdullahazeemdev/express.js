import express from 'express';

const app = express()

const Port = 3000;

app.use(express.json())

app.get("/" , (req,res) => {
    res.status(200).send("welcome jan")
})

app.get("/post" , (req,res) => {
    res.status(200).send("welcome post")
})

app.listen(Port,() => {
    console.log(`Example app listening on port ${Port}`)

})

