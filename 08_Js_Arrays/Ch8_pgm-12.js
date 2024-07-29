// Displaying a multiple choice question

var displayQuestion = function (questionAndAnswer) {
    var options = [ "A", "B", "C", "D", "E" ];
    
    console.log(questionAndAnswer.question);
    
    questionAndAnswer.answers.forEach(
      function (answer, i) {
        console.log(options[i] + " - " + answer);
      }
    );
  };
  
  var question1 = {
    question : "What is the capital of France?",
    answers : [
      "Bordeaux",
      "F",
      "Paris",
      "Brussels"
    ],
    correctAnswer : "Paris"
  };
  
  displayQuestion(question1);
  

var question2 = {
  question : "Who wrote 'The Catcher in the Rye'?",
  answers : [
      "J.D. Salinger",
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "Mark Twain"
  ],
  correctAnswer : "J.D. Salinger"
};

var question3 = {
  question : "Which planet is known as the Red Planet?",
  answers : [
      "Earth",
      "Mars",
      "Venus",
      "Mercury"
  ],
  correctAnswer : "Mars"
};


var questions = [question1, question2, question3];


questions.forEach(function(question, index) {
  console.log("\nQuestion " + (index + 1) + ":");
  displayQuestion(question);
});

console.log("\nDisplaying Question 2:");
displayQuestion(questions[1]);
  
  
  /* Further Adventures
   *
   * 1) Add two more question objects.
   *
   * 2) Create an array with your question objects.
   *
   * 3) Use forEach to call displayQuestion on
   *    each of your questions.
   *
   * 4) Can you execute a command at the prompt
   *    to display a particular question?
   */