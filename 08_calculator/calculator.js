const add = function(num1,num2) {
	console.log(`sum of ${num1} and ${num2} is ${num1+num2}`)
	return num1+num2;
  
};

const subtract = function(num1,num2) {
	console.log(`subtration of${num1} and ${num2} is ${num1-num2}`);
	return num1-num2;
};

const sum = function(array) {
	let theSum=0;
  array.push(theSum);
  theSum=array.reduce((a,b)=>a+b);
  console.log(`sum of the array is ${theSum}`);
  return theSum;
};

const multiply = function(...args) {
	let total=1;
  for(let i=0; i<args.length;i++){
		total*=args[i];
    };
 	console.log(`the multiplication of ${args} is ${total}`);
  return total;
	};

const power = function(num,toThePowerOf) {
	let total=1;
	for(let i=0;i<toThePowerOf;i++){
  	total*=num;
  };
	console.log(`the result of ${num} to the power of ${toThePowerOf} is ${total}`);
  return total;
};

const factorial = function(num) {
	let total=1;
	for (let i=1;i<=num;i++){
  	total*=i;
  };
	console.log(`the factorial of ${num} is ${total}`);
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
