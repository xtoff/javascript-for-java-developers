/* Exercise 1
 *
 *
 *
 */
 function validate(){

 	// retrieve the value of the input field by element id
 	var animalType = document.getElementById("animal").value;
 	var isValid = true; 
	var color = 'unknown'; // color of the animal
	var animalTypes = {
		'flamingo': {
			color: 'pink'
		},
		'leopard': {
			color: 'golden/black'
		},
		'penguin': {
			color: 'black/white'
		},
		'wallaroo': {
			color: 'brown'
		}
	};

	//  --------- ADD YOUR CODE BELOW ------------

 	// check if the given animal type is valid and show a correct message
 	if(isValid){
 		document.getElementById('valid').style.display = 'block';
 		document.getElementById('error').style.display = 'none';
 		document.getElementById('valid').innerHTML = 'The animal type \'<strong>' + animalType + '</strong>\' with color \'' + color + '\' is valid! :D';
 	}else{
 		document.getElementById('valid').style.display = 'none';
 		document.getElementById('error').style.display = 'block';
 		document.getElementById('error').innerHTML = 'The animal type \'<strong>' + animalType + '</strong>\' with color \'' + color + '\' is not valid! :@';
 	}

 }

 // make sure the 'ENTER' key triggers the validate button
 document.getElementById("animal")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("validate").click();
    }
});