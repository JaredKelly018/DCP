 
  function makeNegative(num) {
    return num < 0 ? num :  -num; 
  }  

 /* function makeNegative(num) {
    if ( num > 0 ) {
          return -num;
      }
      else {
          return num;
      }
      
  } 
  
  const removeChar = str => {
    return str.slice(1, - 1)
}*/  


/*





*/

function basicOp(operation, value1, value2)
{
  // Code

  if (operation === '+') {
    return value1+value2
  }else if (operation === '-') {
    return value1-value2
  } else if (operation ==='*'){
    return value1*value2
  }else if (operation ==='/') {
    return value1/value2
  }else{
    return 'invalid input'
  }

}

function noSpace(x){
  return x.split(' ').join('')
 }

//for bullin you dont have to make an if statment just do return then the check
 function hero(bullets, dragons){
  return bullets >= dragons * 2
}

function findNeedle(haystack) {
  // your code here
 const needleLocation = haystack.indexOf('needle');
  return `found the needle at position  ${needleLocation}`
}

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

//set is important
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

function bmi(weight, height) {
  const userBmi = weight/height**2;

  if (userBmi <= 18.5){
    return 'Underweight'
  }else if (userBmi<=25.0 && userBmi >18.5){
    return 'Normal'
  }else if (userBmi <= 30&& userBmi >20){
    return 'Overweight'
  }else if (userBmi > 30){
    return 'Obeses '
  }
  
}

//https://www.programmingbasic.com/multiply-all-numbers-in-array-javascript reduce mthod call back functiuon
function grow(x){
  return x.reduce((a,b) => a*b)
 }

 function greet() {
  return 'hello world!'
}

//or 
const greet= () =>"hello world!";

function areYouPlayingBanjo(name) {
  // Implement me
  if (name[0] == 'R' || name[0] == 'r')
    return name + " plays banjo";
  else
    return name + " does not play banjo";
}

function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}    

function friend(friends){
  return friends.filter(n => n.length === 4)
}
  

const friend = friends =>  friends.filter(friend => friend.length == 4);   


function greet (name, owner) {
  return `Hello ${owner? 'boss': 'guest'}`
}

function greet (name, owner) {
  return `Hello ${name==owner?'boss':'guest  '}`
}

function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
      z.push(x * i);
  }
  return z;
}

function enough(cap, on, wait) {
  // your code here
  if ((on + wait)<= cap)
    return 0
  else if ((on + wait)>= cap)
    return (on+wait)- cap
}

// lets go

function greet(name){
  if(name === "Johnny"){
    return "Hello, my love!";
} else{
    return `Hello, ${name}!`;
}
}

//Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
  return ( n% x== 0 && n%y ==0) ? true : false;
}

/TEST PU BLISH

