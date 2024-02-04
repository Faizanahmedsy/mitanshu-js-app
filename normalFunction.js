//Here name is varible (also called prop)

// function is just a block of code so that we can reuse it

function greet(name) {
  return "Good Morning" + " " + name;
}

//here we are calling the function and passing the propz

const students = [
  "faizan",
  "mitansu",
  "katrina kaif",
  "alia bhat",
  "jonny liever",
  "akshay kumar",
  "varun dhawan",
  "virat koli",
];

for (let i = 0; i < students.length; i++) {
  console.log(greet(students[i]));
}

// console.log(greet(students.second));
