// Displaying a menu


var displayMenu, displayMyMenu;

displayMenu = function () {
    console.log("Standard Menu Options:");
    console.log("(1) Print log");
    console.log("(2) Upload file");
    console.log("(3) Delete file");
    console.log("(4) Rename file");
    console.log("(9) Quit");
};

displayMyMenu = function () {
    console.log("Custom Menu Options:");
    console.log("(A) View profile");
    console.log("(B) Settings");
    console.log("(C) Help");
    console.log("(D) Logout");
};

displayMenu();
console.log(); 
displayMyMenu();


/* Further Adventures
 *
 * 1) Add two more options to the displayMenu
 *    function and run the program.
 *
 * 2) Create your own displayMyMenu function.
 *
 * 3) Add a line to call your function as well.
 *    Run the program
 *
 */