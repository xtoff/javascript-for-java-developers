/*
 * Exercise 1
 * ----------
 * Complete the function “max”. This function takes 2 parameters and returns the largest number. 
 * If one of the 2 parameters is not a number, return the String “Only numbers are allowed”.
 *
 * Complete the second function "retrieveAndDisplayHighestNumber" so it retrieves the numbers 
 * from the 2 input fields and calls the "max" function with those 2 numbers.
 * Display the highest number by calling the build-in "Alert" function.
 *
 * TIPS:
 * - Use the function "isNumber" in this file to check if a parameter is a number
 * - Retrieve the value of an HTML input field with this code: "document.getElementById(<html id>).value"
 * - Convert the number parameters to Integer before comparing them
 */

 function max() {
 	// complete this
 }

 function retrieveAndDisplayHighestNumber(){
 	// complete this
 }

/**
 * Use this function to check if the parameter is a number
 */
function isNumber(obj) { 
	return !isNaN(parseInt(obj));
}