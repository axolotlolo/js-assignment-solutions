const user = {
  name: "Jane Smith",
  email: "jane@example.com",
  age: 28
};

const jsonString = JSON.stringify(user);
console.log(jsonString);

const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name);
