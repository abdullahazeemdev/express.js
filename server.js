// console.log("pappu kara")

import express from "express";

const app = express();

// Port Number

const PORT = 5000;

// middile wear

app.use(express.json());

// database

let users = [
  {
    username: "abdullah",
    email: "abdullahazeemkhi@gmail.com",
    id: 1,
  },

  {
    username: "hassan",
    email: "hassan@gmail.com",
    id: 2,
  },
];

// user create

app.post("/users", (req, res) => {
  const data = req.body;

  if (data) {
    users.push(req.body);
  }
  if (!data) {
    return res.status(404).json({
      status: "false",
      massage: "some problem",
    });
  }

  res.status(200).json({
    status: "true",
    massage: "user added sucessfully",
    data: users,
  });
});

// read

app.get("/users", (req, res) => {
  res.status(200).json({
    status: "true",
    data: users,
  });
});

// single user

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return res.status(404).json({
      status: false,
      message: "User not found",
    });
  }

  res.status(200).json({
    status: true,
    message: "Single user found",
    data: user,
  });
});

// edit user

app.put("/users/:username", (req, res) => {
  const body = req.body;
  const { username } = req.params;

  users = users.map((user) => {
    if (user.username == username) {
      return {...user, ...body}
    }

    return user;
  });

  res.status(200).json({
    status: "true",
    massage : "update sucessfully",
    data: users,
  });
});

// delete user

app.delete("/users/:username", (req, res) => {
  
  const { username } = req.params;

  users = users.filter((user) => user.username != username)

  res.status(200).json({
    status: "true",
    massage : "update sucessfully",
    data: users,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
