// ---------------------------------function expression-------------------------//
console.log("---functions Expression---");
//we can not call function expressin before definition
console.log("ex. 1")

var add = function sum(x, y) {
	return x + y;
}
console.log(add(2, 3));
//-----------------------------------------------------------------
console.log("ex. 2");
var myFunction = function show() {
       console.log("Kritika Patel")
  };
  
  myFunction();

// ------------------------------------IIFE function-----------------------------//
  console.log("---IIFE function---");
//----------------------------------------------------------------
console.log("ex. 1");

(function () {
     console.log("i am kritika");
})();

// -------------------------------------------------------------------
// it is used to avoid the clearing variable in the global scope and to create closure
console.log("ex. 2");
 var a= 4;

 (function(){
     var a=6;
     console.log(a);
 })();
 console.log(a)

 //==================================================================
//---------------------------------------- naming function
console.log("---naming function---");

console.log(" ex. 1");
var x = multi(6, 9);   

function multi(a, b) {
  return a * b;             
}
console.log(x); 

//-----------------------------------------------------------------
console.log(" ex. 2");
var y = divide( 12 ,6) ;
function divide(length, width){
    return length / width;
}
console.log(y); 

//===================================================================
// ---------------------------------------arrow functon-------------------------//
console.log("---Arrow function---");

console.log(" ex.1");
const names = [
    'Raju',
    'Ramesh',
    'Ram',
    'Rakesh'
  ];
  console.log(names.map(names => names.length));

//---------------------------------------------------------------
console.log(" ex.2");
let numbers = [4,2,6];
numbers.sort((a,b) => b - a);
console.log(numbers); 

// ---------------------------------------callback function--------------------------//
console.log("---callback function---");
// example1
console.log(" ex.1");
function sho(a) {
     console.log("i am show function"+" "+a);
  }
  
  function input(callback) {
    var a=20;
    callback(a);
  }
  input(sho);

  //----------------------------------------------------------------
console.log(" ex.2");

var numbers1 = [1, 2, 4, 7, 3, 5, 6];
let oddNumbers = numbers1.filter(function(number) {
    return number % 2===1;
});
console.log(oddNumbers);


// ---------------------------------------Anonymous function------------------------//
console.log("----Anonymous function---");
// example1
console.log(" ex.1");
let show = function () {
    console.log('Its a First Anonymous function');
};
show();

// example2
console.log(" ex.2");
let display = function(){
    console.log("its a Second Anonymous function")
};
display();

//-------------------------------------- function with  default parameter------------//
console.log("---function with default parameter---");
// example1
console.log(" ex.1");
function users(First_name="kritika",Last_name="patel" , age=23 )
    {
    return{First_name , Last_name,age};
    
}
console.log(users("kritika", "patel", 23));

// example2
console.log(" ex.2");
function multiply(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply(5, 2));

  //------------------------- function with parameter and argument---------------------*/
console.log("---function with parameter and argument---");
// example1
console.log(" ex.1");
function user(name,age,company,salary){
    
return{name,age,company,salary};
}
console.log(user("kritika",24,"IBM",30000));

// ---------------------------------------------------------------
console.log(" ex.2");
function showMessage(){
    console.log("hello" +" "+ arguments[0]+" "+arguments[1]);
}
showMessage("kritika", "patel");


// ---------------------------check the number is even or odd--------------------------------*/
console.log("---check the number is even or odd---");
// example
console.log("example");
let number = 26;

// if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}
// if the number is odd
else {
    console.log("The number is odd.");
}


//---------------------------check the number is prime or not---------------------------*//
console.log("// --------------------check the number is prime or not--------------------*/");
// example
console.log("example");
function isPrime(num) {

    if (num === 2) {
      return true;
    }
    else if(num > 1){
      for (var i = 2;  i < num; i++) {
  
        if (num % i !== 0 ) {
          return true;
        }
  
        else if (num === i * i) {
          return false
        }
  
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  
  }
  
  console.log(isPrime(121));


  //-----------------------------------------fabonaci series---------------------------*//
console.log("----print fabonacci series---");
// example
console.log("example");
let fnumber=9;
let n1=0, n2=1, nextTerm;
console.log("series");

for(let i=1; i<=fnumber; i++){
    console.log(n1);
    nextTerm=n1+n2;
    n1=n2;
    n2=nextTerm;
}

//-----------------------------------------palindrome or not---------------------------*//
console.log("---palindrome or not---");
// example
console.log("example");
function Palindrome(str) {
    let len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
let string = 'kuruk';
let value = Palindrome(string);
console.log(value);

//----------------------------------------find biggest among three---------------------------*//
console.log("---find biggest among three number---");
// example
console.log("example");
let num1 = 12;
let num2 = 34;
let num3 = 50;
let largest;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
console.log("The largest number is " + largest);


//----------------------------------------factorial of a number---------------------------*//
console.log("---factorial of a number---");
// example
console.log("example");
let numb = 5;
if (numb < 0) {
    console.log('invalid');
}
else if (number === 0) {
    console.log("The factorial of ${numb} is 1.");
}
else {
    let fact = 1;
    for (i = 1; i <= numb; i++) {
        fact *= i;
    }
    console.log("The factorial of "+numb+"= "+fact);
}


//----------------------------------------reverse a string------------------------------*//
console.log("----reverse a string---");
// example
console.log("example");
function revString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString = newString+str[i];
    }
    return newString;
}
let string1= 'kritikapatel';
let result1 = revString(string1);
console.log(result1)