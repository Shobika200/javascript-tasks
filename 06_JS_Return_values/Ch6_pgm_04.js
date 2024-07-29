// Returning the sum of two numbers

var add;

add = function (number1, number2) {
	var total = number1 + number2;

	return total;
};

var sum = add(50, 23);

console.log(sum);

var sum = add(75, 31);
console.log(sum);  // Output: 106

var sum = add(50, 23);
console.log('The sum of 50 and 23 is ' + sum);  // Output: The sum of 50 and 23 is 73

var sum = add(add(10, 20), 30);
console.log(sum);  // Output: 60

var addThreeNumbers = function (num1, num2, num3) {
    var total = num1 + num2 + num3;
    return total;
};

var sumThree = addThreeNumbers(10, 20, 30);
console.log(sumThree);  // Output: 60


/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */