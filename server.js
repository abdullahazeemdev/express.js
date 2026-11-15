// console.log("pappu kara")

import express from 'express';

const app = express();

// Port Number

const PORT = 5000;

// middile wear

app.use(express.json())

// database

let users = [];

// user create 

app.post("/users", (req,res) => {

    const data = req.data;

    if(data){
        users.push(req.body)
    }
    if(!data){
        return res.status(404).json({
             status : "false",
             massage : "some problem"
        })
    }

    res.status(200).json({
        status: "true",
        massage : "user added sucessfully",
        data : users
    })
})

app.listen(PORT,() =>{
    console.log(`server is running on ${PORT}`)
})