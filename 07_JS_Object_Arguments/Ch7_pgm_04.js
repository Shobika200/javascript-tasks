// Moving a point in 2D

var point1;
var point2;
var move;
var showPoint;
var reflectX;
var rotate90;

move = function (point, change) {
    return {
        x: point.x + change.x,
        y: point.y + change.y
    };
};

showPoint = function (point) {
    console.log("( " + point.x + " , " + point.y + " )");
};

reflectX = function (point) {
    return {
        x: point.x,
        y: -point.y
    };
};

rotate90 = function (point) {
    return {
        x: -point.y,
        y: point.x
    };
};

point1 = { x : 2, y : 5 };

point2 = move(point1, { x : 6, y : -3 });

showPoint(point1);
console.log("Move 6 across and 3 down");
showPoint(point2);

var point3 = { x: 3, y: 7 };
var reflectedPoint = reflectX(point3);

console.log("\nOriginal point:");
showPoint(point3);

console.log("Reflected point in X-axis:");
showPoint(reflectedPoint);

var point4 = { x: 2, y: 3 };
var rotatedPoint = rotate90(point4);

console.log("\nOriginal point:");
showPoint(point4);

console.log("Rotated point by 90 degrees anticlockwise:");
showPoint(rotatedPoint);




/* Further Adventures
 *
 * 1) Change the amount by which the point is moved
 *    by altering the x and y properties of
 *    the object literal passed to the move function.
 *
 * 2) Write a reflectX function that reflects
 *    a point in the x-axis, returning the new point.
 *
 * 3) How about a rotate90 function that rotates
 *    the point by 90 degrees anticlockwise
 *    around ( 0 , 0 )?
 *
 */