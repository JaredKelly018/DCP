function greet(name){
  if (name === 'Johnny'){
    return "Hello, my love!";
  } else {
     return "Hello,  " + name + "!";
  }
  }
  
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
    return 'Obese'
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