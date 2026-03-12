// Student object
const student = {
    id: 101,
    name: "Priya",
    department: "CSE",
    marks: 92
};

// Object destructuring
const { id, name, department, marks } = student;

// Display extracted values
console.log(id, name, department, marks);

// Create new object using spread operator and add grade
const updatedStudent = {
    ...student,
    grade: "A"
};

// Display updated object
console.log(updatedStudent);