// import express from 'express';

// const app = express()

// const Port = 3000;

// app.use(express.json())

// app.get("/" , (req,res) => {
//     res.status(200).send("welcome jan")
// })

// app.get("/post" , (req,res) => {
//     res.status(200).send("welcome post")
// })

// app.listen(Port,() => {
//     console.log(`Example app listening on port ${Port}`)

// })

import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    massage: "welcome bro",
        data : [
  {
    id: 1,
    name: "Ali Raza",
    rollNo: "WEB-101",
    age: 19,
    course: "Web & App Development",
    grade: "A",
    isActive: true,
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    id: 2,
    name: "Ayesha Khan",
    rollNo: "WEB-102",
    age: 20,
    course: "Frontend Engineering",
    grade: "A+",
    isActive: true,
    skills: ["React", "Tailwind CSS", "TypeScript"]
  },
  {
    id: 3,
    name: "Usman Tariq",
    rollNo: "WEB-103",
    age: 18,
    course: "Full Stack Development",
    grade: "B",
    isActive: false,
    skills: ["JavaScript", "Node.js", "Firebase"]
  },
  {
    id: 4,
    name: "Sara Ahmed",
    rollNo: "WEB-104",
    age: 21,
    course: "UI/UX & Frontend",
    grade: "A",
    isActive: true,
    skills: ["HTML", "CSS", "Bootstrap", "React"]
  }
]
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: true,
    massage: "welcome to health page ",
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
