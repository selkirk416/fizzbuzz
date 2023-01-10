"use strict";
const arr = [...Array(100).keys()]
	.map(n => n+1)
	.map(n => n%15 ? n : "fizzbuzz")
	.map(n => isNaN(n) || n%5 ? n : "buzz")
	.map(n => isNaN(n) || n%3 ? n : "fizz")
	.forEach(line => console.log(line));
