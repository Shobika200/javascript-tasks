// Using the same function with multiple objects


var quizQuestion1 = {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Rome"],
    answer: "Paris"
};

var quizQuestion2 = {
    question: "Who wrote 'The Great Gatsby'?",
    options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "Jane Austen"],
    answer: "F. Scott Fitzgerald"
};

var quizQuestion3 = {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
};

var showQuizQuestion = function (questionObj) {
    console.log(questionObj.question);
    console.log("------------------------------");
    for (var i = 0; i < questionObj.options.length; i++) {
        console.log("(" + (i + 1) + ") " + questionObj.options[i]);
    }
    console.log("------------------------------");
};


showQuizQuestion(quizQuestion1);
showQuizQuestion(quizQuestion2);
showQuizQuestion(quizQuestion3);


/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */