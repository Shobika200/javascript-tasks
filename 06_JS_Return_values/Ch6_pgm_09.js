// Getting a string for a player’s information

var getPlayerName;
var getPlayerHealth;
var getPlayerPlace;
var getPlayerInfo;
var getBorder;

getPlayerName = function (playerName) {
    return playerName;
};

getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

getBorder = function () {
    return "********************";
};

getPlayerInfo = function (playerName, playerPlace, playerHealth) {
    var playerInfo;

    playerInfo = "\n" + getPlayerName(playerName);
    playerInfo += "\n" + getBorder();
    playerInfo += "\n" + getPlayerPlace(playerName, playerPlace);
    playerInfo += "\n" + getPlayerHealth(playerName, playerHealth);
    playerInfo += "\n" + getBorder();
    playerInfo += "\n";

    return playerInfo;
};


var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

console.log(getPlayerInfo(player1.name, player1.place, player1.health));
console.log(getPlayerInfo(player2.name, player2.place, player2.health));


/* Further Adventures
 *
 * 1) Add a second call to getPlayerInfo with
 *    different player information. Log the
 *    returned string to the console.
 *
 * 2) Call getPlayerInfo at the console prompt.
 *
 * 3) What happens if you call getPlayerInfo
 *    without any arguments?
 *
 *    > getPlayerInfo()
 *
 */
