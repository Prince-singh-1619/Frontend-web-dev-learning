                                          // lecture --> 1

console.log('Not impossible');
// This is used to print in console of inspect in the browser

console.log('ehhe boy');
let ab=17;
console.log(ab);

// let a='Singh';
// console.log(a);

let lastName='Singh';
console.log(lastName);

lastName=5;
console.log(lastName);

//object
let person = {
    firstName:"Prince", 
    age:22
}; 
//Here person is a object, Which has its own properties
//accessing:- either use person.age or person['age'] to access age

//Arrays
let names=['Amit', 'Raj', 'Prince'];
//To access use names[1]  or names[0] , you can also change the value afterwards e.g
names[3]='Singh';
names[1]='lodu';
console.log(names[1]);

//Operators
console.log(5<3);
console.log(5>=3);
console.log(5===3);  //uses 3 equal to signs to compare & is known as strict equality
console.log(5!==3);
//
let num=5;
let str='5';
console.log(num==str);   // gives true
console.log(num===str); // gives false

// Ternary operator
let age=17;
let voteStatus =(age>=18)?'You can vote':'Can\'t vote' // if condition is true, executes first, otherwise second statement
console.log(voteStatus);

//Logical operators:- 
// AND e.g. (5>3 && 5>2) gives true 
// OR e.g.  (5>3 || 3>5) gives true
// NOT e.g.  !(5>3 && 5>2) gives false

// Logical operators with non booleans
// e.g. (true || false) gives true
// e.g. (false || 5) gives 5
// e.g. (false || 5 || 3) gives 5
// e.g. (false || 'Singh') gives singh

// Bitwise operators:- Perform operations on the basis of bitwise AND & OR operation like logic gates.

// if else 
let marks=78;
if(marks>=90){
    console.log('A')
}
else if(marks>=80){
    console.log('B')
}
else if(marks>=70){
    console.log('C')
}
else if(marks>=60){
    console.log('D')
}
else {
    console.log('E')
}

// Switch case
let cas=2;
switch (cas){
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    case 4: console.log('D');
    break;
    default: console.log('E');
    break;
}

// For loop
for (let i=0; i<5; i++){       // initialisation; condition; updation
    console.log( 'A' + i)
}

// While loop
let a=0;
while(a<5){
    console.log('B' + a);
    a++ 
}

// Do while loop
let b=0;
do {
    console.log('C' + b);
    b++
} while(b<5);


// camel case is e.g. princeSingh, doThis 
// pascal notation is e.g. PrinceSingh, DoThis



                                              // lecture --> 2


let rectangle = {
    length:5,
    breath:2,

    draw: function() {
        console.log('Drawing rectangle')
    }
}

// Factory function
function createRectangle(a,b) {
    return rectangle = {
        length:a,
        breath:b,

        draw() {
            console.log('Drawing rectangle')
        }
    }
}

let rectangleObj2 = createRectangle();
let rectangleObj3 = createRectangle(14,8);

// constructor function  -> property/methods  -> initialise/define & uses pascal notation
function Rectangle() {
    this.length=17;        // this represents current object
    this.breath=12;
    this.draw=function() {
        console.log('drawing');
    }
}
// object creation using constructor function
let rectangleObject = new Rectangle();   // new returns an empty object in js

// Dynamic nature of object gives you permission to add, update or delete in object.
rectangle.color='Red';
delete rectangle.color;
console.log(rectangle);

// Types in js:- (i) Primitive and (ii) References
// (i) Primitive: are copied by their VALUE
let c=10;
let d=c;
c++;
console.log(c);   // prints c=11
console.log(d);   // prints d=10
// (ii) References: are copied by their ADDRESS or references
let e = { value: 10 };
let f = e;
e.value++;
console.log(e.value);    // prints e=11
console.log(f.value);     // prints f=11

// For-in loop
let rectangle = {
    length:5,
    breadth:4
};

for( let key in rectangle) {
    // keys are reflected through key variables
    // values are reflected through rectangle[key]
    console.log(key, rectangle[key]);
}

// For-of loops -> only iterable on arrays and maps
for( let keys of Object.entries(rectangle)) {
    console.log(key);
}


if('length' in rectangle) {
    console.log('Present');
}
else{
    console.log('Absent');
}

// Object cloning:-
// Method #1
let src = {
    a:10,
    b:20,
    c:30
};

let dest = {};
for (let key in src) {
    dest[key] = src[key];
}

console.log(dest);
src.a++;
console.log(dest);

// Method #2
let src1 = {
    a:10,
    b:20,
    c:30
};
let src2 = { Value: 25};
let dest2 = object.assign({}, src1, src2);
console.log(dest2);
src1.a++;
console.log(dest2);

// Method #3
let src3 = {
    a:10,
    b:20,
    c:30
};
let dest3 = {...src3};
console.log(dest3);
src3.a++;
console.log(dest);

// Garbage collector:- it searches for variables that are unallocated and frees their memory automatically in js



                                        //   lecture --> 3



// In-built objects in js :- e.g. Math, 
// Math.random(), Math.PI(), Math.round(1.8), Math.max(1,2,3,4), Math.abs(-2)

// Strings
// create strings: 
let lastNaam='Singh';  // check it by typing "typeof lastName" in console
// creating objects:
let firstName = new String ('Prince');
// string properties:-  
let message = 'This is my first message' ;

// string properties:-  message.toUpperCase(), .contains(), .length(), .endsWith(), .includes(), .indexof(), .trim(), .replace(),
// Template Literals:- you can use ' " by typing \' \" etc 
// Using backtick symbol you can output your lines as same as input written e.g.
let message2 = `This     
is ${lastName}\'s
first 
message` ;
// backtick symbol is left to numerical 1 button
// adding date
let date = new date();  // 4 more types are avialable

// Arrays insertion 
let numbers = [1,3,5,7];
numbers.unshift(2);  // insertion at beginning
numbers.splice(2,0,'a','b');  // insertion at middle, //here 2 is index no., 0 is delete count, a & b are items to be inserted
numbers.push(15);  // insertion at end
console.log([numbers]);

// Arrays deletion 
numbers.shift();     // deletion at beginning
numbers.splice(2,1);      // deletion at middle
numbers.pop();        // deletion at end

// Emptying an array
numbers = [];
numbers.length = 0;     // this one is best practice to empty
numbers.splice(0, numbers.length)

// Searching on primitives
console.log(numbers.indexOf(b));    // this type of searching works only on primitives
console.log(numbers.includes(16)); // this type of searching works only on primitives

// Searching of objects
let courses = [
    {no: 1, name: 'Prince'},
    {no: 2, name: 'Rahul'}
];

let candidate1 = courses.find(function(course){
    return course.name === 'Prince';
} );
console.log(candidate);
// Now this code can reduced further by ARROW FUNCTION
let candidate2 = courses.find(courses => course.name === 'Prince');

// Combining Arrays
let numarr1 = [1,2,3,7,8,9,12,15,18];
let numarr2 = [4,5,6];
let combined = numarr1.concat(numarr2);
let combined2 = [...numarr1, 'a', 'b', ...numarr2, true];        // using SPREAD operator
let another = [...combined2]                                 // using SPREAD operator
// Slicing Arrays
let sliced1 = numarr1.slice(2,6);     // This slices from index 2 to 5 & gives o/p= 3,7,8,9
let sliced2 = numarr1.slice(2);        // This slices from index 2 to last
let sliced3 = numarr1.slice();     // This slices from index 0 to last

// Combining objects
var employee = {
    firstName : "Prince",
    lastName : "singh",
    email : "abc@gmail.com"
};
var location = {
    city : "faizabad",
    country : "India"
};
var merged = object.assign(employee, location);
console.log(merged);

// iterating an array
let arr = [10,20,30,40,50,60];
// 1. using FOR_OF loop
for (let value of arr){
    console.log(value);
}
// 2. using FOREACH loop
arr.forEach(function(number) {
    console.log(number);
});

// joining an array
let numarr = [10,20,30,40,50,60];
const joined = numarr.join(',');
// splitting an string
let message3 = 'This my third message';
let parts = message3.split(' ');
let joined2 = parts.join('_');

//sorting an array
let numbers4 = [50,80,10,15,62,73]
numbers4.sort();     // sorts in ascending order
numbers4.reverse();   // sorts in descending order
console.log(numbers4); 

// Filtering arrays
let filtered = numbers4.filter(function(value) {
    return value >= 25 ;
});     //OR
let filtered2 = numbers4.filter(value => value >= 25);

// Mapping arrays :- Maps each elements of array to something else
let numbers5 = [1,2,3,4,5];
let studentItems = numbers5.map(function(value) {
    return 'Student_no.' + value ;
});
//  OR  let studentsItems = numbers5.map(value  => return 'Student_no.' + value ;);

// MAPPING with OBJECTS
let number6 = [4,9,-5,-6];
let filtered3 = number6.filter(value => value >= 0);
let item = filtered3.map(num => {value: num});
// Chaining : using this we can write the above two lines of code as
let item2 = 
            number6.filter(value => value >= 0)
            .map(num => {value: num});




                                        //   lecture --> 4

// Functions : a block of code that fulfills a specific task
// HOISTING : it moves all the function declaration to the top of file automatically in JS.

// function declaration 
function run() {
    console.log('running');
}
run();       // calling or invoking run function
// function assignment 
let stand = function walk() {
    console.log('walking');
}
stand();     // calling walk function, can't be called by walk() 
// a declared function can be called BEFORE its declaration line, BUT a assigned function can be called only AFTER its written line 

// Dynamic function 
function sum () {
    let total = 0;
    for ( let value of arguments )
        total = total + value ;
    return total ;
}
let ans = sum(1,2,3,4,5,6)    // now in this you can any no. of arguments

// Rest operator
function sum2(a, b, ...args) {        // can't pass value after ...args
console.log(args);
}
sum2(1,2,3,4,5,6)     // the value 1 & 2 goes to a & b respectively and rest are printed accordingly

// Default parameters
function interest(p,r=5,y=4) {      // if value of r&y is not given, it takes it's default value 4&5, 
    return p*r*y/100;            // once you declared a calue default, then you have make default every variable after it
}
console.log(interest(1000,3,10));

// getter -> access properties
// setter -> change or mutate properties

// Try & Catch -> error handling
let fullName = 'Prince';
SetfullName (value); 
{
    if (typeof value !== string) {
        throw new error("You have not enetred a string");
    }
}

try {
    fullName = true;
}
catch (e) {
    alert(e);
}

// Scope 
// let : have scope upto its NEAREST CLOSING curly braces
// var : have scope upto inside the whole file 

// Reducing an array




//                                  -----------JS DOM---------------


let links = document.querySelectorAll('a');
let insta = links[2];
insta.addEventListener('click', function(event) {
    event.preventDefault(event);
    console.log('Ehhe boy');
});


// Adding 100 para
for(let i=1; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = "This is para no." + i;
    
    document.body.append(newElement);
}

Promise 
let promised = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Made a promise')}, 3000);
    reject(new Error ('147'));
});

console.log(promised);

let waada1 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Waada 1 executed')}, 2000);
        resolve(true);
});


let output = waada1.then(() => {
   let waada2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Waada 2 executed')}, 4000);
    resolve("Waada 2 resolved");
   })
   return waada2;
})

output.then((value) => console.log(value));

async function utility() {
    let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let output = await content.json();
    console.log(output);
}
utility();