// Getting a string for a player’s name

var getPlayerName;

getPlayerName = function (playerName) {
};

console.log(getPlayerName("Kiki"));    // Output: ==== Kiki ====
console.log(getPlayerName("Mahesha")); // Output: ==== Mahesha ====

var getPlayerName;

getPlayerName = function (playerName) {
    var border = "|";
    var prefix = " ";
    var suffix = "\n";
    return border + suffix + border + prefix + playerName + suffix + border;
};

console.log(getPlayerName("Jahver"));



/* Further Adventures
 *
 * 1) Update the getPlayerName function
 *    so it adds a prefix and suffix
 *    made up of the = character.
 *    The length of the prefix and suffix
 *    should be 4.
 *
 *    getPlayerName("Kiki") should return
 *    ==== Kiki ====
 *
 *    getPlayerName("Mahesha") should return
 *    ==== Mahesha ====
 *
 * 2) Update the getPlayerName function
 *    so it includes a border on the left
 *    when displaying the name.
 *
 *    getPlayerName("Jahver") should return
 *    
 *    |
 *    | Jahver
 *    |
 *
 * Note: to add a new-line character to a
 * string, use the escape sequence '\n'
 *
 * var msg = "\na\nb\n";
 * console.log(msg) would display:
 * "
 * a
 * b
 * "
 *
 */