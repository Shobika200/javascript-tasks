// Using Math.min and Math.max to constrain an argument

  
var emptyBox = function(width) {
    width = Math.max(0, width);    
    width = Math.min(40, width);   
    
    var topBottom = "=".repeat(width);
    var middle = "=" + " ".repeat(width - 2) + "=";
    
    // Draw the box
    console.log(topBottom);
    for (var i = 0; i < 3; i++) {
        console.log(middle);
    }
    console.log(topBottom);
};

// Test emptyBox function
emptyBox(12);

  
  /* Further Adventures
   *
   * 1) Test line lengths from -20 to 60
   *    in steps of 10.
   *
   * 2) Define a spaces function that returns a string
   *    made up of a specified number of space characters.
   *    The line of spaces returned can have a length
   *    between 0 and 40.
   *
   * 3) Add an emptyBox function
   *    that draws an empty box of specified
   *    width and height 5.
   *
   *    emptyBox(12);
   *
   *    > ============
   *    > =          =
   *    > =          =
   *    > =          =
   *    > ============
   *
   */