// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481 ];

var report = getVisitorReport(visitors, 2);

console.log(report);


var fridayReport = getVisitorReport(visitors, 5); 
console.log(fridayReport);
var monthVisitorInfo = [
  [354, 132, 210, 221, 481, 200, 180], // Week 1
  [300, 150, 220, 250, 490, 210, 190], // Week 2
  [320, 140, 230, 260, 500, 220, 200], // Week 3
  [340, 160, 240, 270, 510, 230, 210]  // Week 4
];
var getVisitorReportByDay = function(monthArray, weekIndex, dayIndex) {
  var days = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ];

  var visitorReport = "There were ";
  visitorReport += monthArray[weekIndex][dayIndex];
  visitorReport += " visitors on " + days[dayIndex];

  return visitorReport;
};
var week1 = monthVisitorInfo[0];
var week2 = monthVisitorInfo[1];
var week3 = monthVisitorInfo[2];
var week4 = monthVisitorInfo[3];

var monthArray = [week1, week2, week3, week4];
var reportWeek1Wednesday = getVisitorReportByDay(monthArray, 0, 2); 
var reportWeek3Saturday = getVisitorReportByDay(monthArray, 2, 5); 

console.log(reportWeek1Wednesday);
console.log(reportWeek3Saturday);


/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */