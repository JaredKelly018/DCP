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