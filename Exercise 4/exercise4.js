/* Exercise 4
 * 
 * Create a function sum that will work like that: sum(a)(b) = a+b.
 * Yes, the syntax is dual brackets. Funny, isn’t it? For instance: sum(1)(2) = 3
 * 
 * HINT: The idea is that the function sum should return a function which knows a and will take care about next argument.
 */


// execute the sum function immediately
(function(){
	console.log( sum(1)(2) ); // should log 3
	console.log( sum(5)(-1) ); // should log 4
}());