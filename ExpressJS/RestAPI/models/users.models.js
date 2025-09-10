const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "Subrata Biswas",
    email: "subrata@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Ayan khan",
    email: "ayan@gmail.com",
  },
];

module.exports = users;
