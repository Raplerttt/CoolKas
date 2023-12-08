const { User, users } = require('../Models/userModels');

const createUser = (req, res) => {
  const { name, age } = req.body;
  const newUser = new User(users.length + 1, name, age);
  users.push(newUser);
  res.send('User added to the in-memory database');
};

const readUsers = (req, res) => {
  res.json(users);
};

const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (user) {
    const { name, age } = req.body;
    user.name = name || user.name;
    user.age = age || user.age;
    res.send('User updated in the in-memory database');
  } else {
    res.status(404).send('User not found in the in-memory database');
  }
};

const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === userId);
  if (index !== -1) {
    users.splice(index, 1);
    res.send('User deleted from the in-memory database');
  } else {
    res.status(404).send('User not found in the in-memory database');
  }
};

module.exports = {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
};
