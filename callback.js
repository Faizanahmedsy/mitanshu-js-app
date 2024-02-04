const greet = (name) => "Hello" + name;

//This variable will store the returned value of the function
const result = greet("faizan");

// console.log(result);

//When we add a function inside the parameter of the function and that function is returing a fucntion that is called a callback funcrion

// const greet = (()=>{}) => "Hello" + name;

const firstFunc = () => {
  console.log("I am a call back function");
};

const anotherFunction = (callback) => {
  return callback();
};

anotherFunction(firstFunc);
