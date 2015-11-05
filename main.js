//first problem
function quiz() {
 return function() {var answer1 = "blue",
  answer2 = "no",
  answer3 = "yes";
  var userAnswer1 = prompt("what color is the sky?");
  if (userAnswer1 === answer1) {
    alert("Correct");
  } else {
      alert("Sorry, that was wrong");
  }
    var userAnswer2 = prompt("Do cows fly?");
    if (userAnswer2 === answer2) {
      alert("Correct");
    } else {
      alert("Sorry, that was wrong");
    }
    var userAnswer3 = prompt("Do birds fly?");
    if (userAnswer3 === answer3) {
      alert("Correct");
    } else {
      alert("Sorry, that was wrong");
    }
 };
}
var myQuiz = quiz();
console.log(myQuiz());
//second problem

function getNames() {
  var counter = -1;
  var names = ["William","Cindy","Maureen","Brenden"];
  return function() {
    return names[counter += 1];
  };
}
var names = getNames();

console.log(names());
console.log(names());
console.log(names());
console.log(names());
