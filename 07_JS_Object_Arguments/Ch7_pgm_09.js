// Finding a character with indexOf


var message = "We choose to go to the Moon!";


var indexOfGo = message.indexOf("go");
console.log("Index of 'go':", indexOfGo); 

var indexOfChoose = message.indexOf("choose");
var chooseWord = message.substr(indexOfChoose, "choose".length);
console.log("Word 'choose':", chooseWord); 


var lastIndexOfOo = message.lastIndexOf("oo");
console.log("Index of 'oo' in 'Moon':", lastIndexOfOo); 

/* Further Adventures
 *
 * 1) Use indexOf to find the index of where the
 *    word 'go' starts in the message string.
 *
 * 2) Use indexOf and substr to display the word
 *    'choose' from the message string.
 *
 * There is also a lastIndexOf string method.
 *
 * 3) Use lastIndexOf to find the index of the
 *    'oo' in the word 'Moon' of the message string.
 * */