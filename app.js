
function adding(a,b) {
    return a + b;
}
console.log(adding(5,10));

function subtract(a,b) {
    return a - b;
}
console.log(subtract(5,2));

function multiple(a,b) {
    return a * b;
}
console.log(multiple(8,3));

function divide(a,b) {
    return a / b;
}
console.log(divide(12,3));


function evenNumber(number) {
    return number % 2 === 0;
  }
console.log(evenNumber(8));

function oddNumber(number) {
    return number % 2 > 0;
  }
console.log(oddNumber(11));

function primeNumber(n) {
    return n % 1 === 0 &&  n % n == 0
    
}
console.log(primeNumber());

function max(n,a) {
    return Math.max(n,a)
    
}
console.log(max(15,300));

function min(n,a) {
    return Math.min(n,a)
    
}
console.log(min(15,300));

function sum(n,a,c) {
    return n + a + c
}
console.log(sum(5,10,15));

function avarage(n,a,c,b) {
    return n + a + c + b / avarage.length
}
console.log(avarage(15,30,50,80));


function reverse() {
    let arr = [34, 234, 567, 4];
    console.log(arr);
   
    let reverse_arr = arr.reverse();
    console.log(reverse_arr);
}
console.log(reverse());

function uppercase(str) {
    return str.toUpperCase();
}

console.log(uppercase('azer'));

function lowercase(str) {
    return str.toLowerCase();
}

console.log(lowercase('AZER'));

const str = "azer";


let result = str.charAt(0).toUpperCase() + str.slice(1);

console.log(result);

function checkNumber(str) {
    return str.includes(14);
}
console.log(checkNumber('14azer'));

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(randomInteger(5,13));


  function factorial(n) { 
      if (n === 0) { 
          return 1; 
      } 
      else { 
          return n * factorial( n - 1 ); 
      } 
  } 
   
  console.log(factorial(5))