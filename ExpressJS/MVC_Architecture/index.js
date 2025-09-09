const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

const user = [
  {
    name: "Subrata Biswas",
    age: 24,
  },
  {
    name: "Sugo barai",
    age: 22,
  },
];

const htmlFor = `
    <form action="/user" method = "POST">
        <input type="text"  name="name"  placeholder="Enter your name"/>
        <input type="number"  name="age"  placeholder="Enter your age"/>
        <button type="submit">save data</button>
    </form>
`;

app.post("/user", (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);

  const newUser = {
    name,
    age,
  };

  user.push(newUser);

  res.status(201).json({
    success: true,
    user,
  });
});

app.get("/user", (req, res) => {
  res.send(htmlFor);
});

app.use((req, res, next) => {
  res.status(404).send(`<h2>404.Route doesn't found.</h2>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
