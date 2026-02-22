const students = ["Alice", "Bob", "Charlie", "David", "Eve"];

students.push("Frank");

students.splice(2, 1);

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
