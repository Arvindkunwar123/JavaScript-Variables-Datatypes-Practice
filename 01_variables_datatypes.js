//Ques 01: print values of different variables

let a = 10;
let b = 5.5;
let ch = "A";
console.log(a);
console.log(b);
console.log(ch);

// Ques 02: print datatype of different values using typeof

let a1 = 10;
let b1 = 5.5;
let c = "Hello";
let d = true;
let e;
let f = null;
console.log(typeof a1 );
console.log(typeof b1 );
console.log(typeof c );
console.log(typeof d );
console.log(typeof e );
console.log(typeof f );

// Ques 03: add two numbers

let num = 7;
let num1 = 5;
let sum = num + num1;
console.log("Sum =", sum);

// Ques 04 : swap two no using third variable

let a2 = 10;
let b2 = 20;
console.log("Before swapping:");
console.log("a =", a2);
console.log("b =", b2);
let temp = a2;
a2 = b2;
b2 = temp;
console.log("After swapping:");
console.log("a =", a2);
console.log("b =", b2);

// Ques 5: Swap without third variable

let a5 = 5;
let b5 = 8;

console.log("Before swapping:");
console.log("a =", a5);
console.log("b =", b5);

a5 = a5 + b5;
b5 = a5 - b5;
a5 = a5 - b5;

console.log("After swapping:");
console.log("a =", a5);
console.log("b =", b5);

// Question 6: Celsius to Fahrenheit

let C = 30;

let F = (C * 9 / 5) + 32;

console.log("F =", F + "°F");

// Ques 7: Calculate Simple Interest

let P = 1000;
let R = 6;
let T = 2;

let SI = (P * R * T) / 100;

console.log("SI =", SI);

// Ques 8: Area of Circle

let radius = 5;

let area = 3.14 * radius * radius;

console.log("Area =", area);

// Question 9: Average of three numbers

let a3 = 10;
let b3 = 20;
let c3 = 30;

let avg = (a3 + b3 + c3) / 3;

console.log("Average =", avg);

// Ques 10: Decimal to Integer

let num2 = 7.85;

let integer = parseInt(num2);

console.log("Integer =", integer);

// Ques 11: implicit type conversion

let x = 5;
let result = x + "10";

console.log("Result =", result);
console.log("Type =", typeof result);

// Ques 12: Total Bill Calculation

let price = 120;
let quantity = 3;

let total = price * quantity;

console.log("Total Bill =", total);

// Ques 13: Value and Data Type

let a4 = 10;
let b4 = 4.5;
let c4 = "Z";

console.log("Value:", a4, "Type:", typeof a4);
console.log("Value:", b4, "Type:", typeof b4);
console.log("Value:", c4, "Type:", typeof c4);

// Ques 14: Student Details

let name1 = "A";
let age = 18;
let percentage = 92.5;

console.log("Name =", name1);
console.log("Age =", age);
console.log("Percentage =", percentage);

// Ques 15: let, const and var

var g = 10;
let h = 20;
const i = 30;

console.log("var =", g);
console.log("let =", h);
console.log("const =", i);

// Question 16: Undefined and Null

let value;
let data = null;

console.log("Value =", value);
console.log("Type =", typeof value);

console.log("Value =", data);
console.log("Type =", typeof data);

// Ques 17: Check Data Types

let num3 = 100;
let str = "JavaScript";
let bool = true;

console.log("Value =", num3, "Type =", typeof num3);
console.log("Value =", str, "Type =", typeof str);
console.log("Value =", bool, "Type =", typeof bool);

// Ques 18: Explicit Type Conversion

let a7 = "25";
let b7 = Number(a7);

console.log("Value =", b7);
console.log("Type =", typeof b7);

// Ques 19: Total Marks and Percentage

let english = 80;
let maths = 90;
let science = 85;

let total1 = english + maths + science;
let percentage1 = total1 / 3;

console.log("Total Marks =", total1);
console.log("Percentage =", percentage1);