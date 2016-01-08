//this is a javascript file for david z's guessing game.

//program prompts user to enter their name
function namePrompt() {
  var userName = prompt("What is your name?");
  document.getElementById('demoText1').innerHTML = "Whats crackalackin, " + userName + "?";
  console.log("The users name is " + userName);
}
//call the namePrompt function
namePrompt();

// var count = 0;
// function countFunk() {
//   count += 1;
//}
var quesData =  [
  ['Does New York City have more than 20 million people? Y or N', 'Y', 'y', 'N', 'n', 'NO MAN, COME ON!! That is WAAAAY to many people.', 'Correctomundo. As far as I know, there is no more than 8 - 10 million living in NYC', demo1],
  ['Does it take more than 100 hours to drive from NJ to CA at 70 mph without stopping? Y or N', 'Y', 'y', 'N', 'n', 'You must have never driven cross country before. Or seen a map for that matter.', 'You are correct. You would probably be in Russia by then. Depending on the direction you are driving.', demo2],
  ['Is the following a question? How Much wood could a woodchuck chuck if a woodchuck could chuck wood. Y or N?', 'N', 'n', 'Y', 'y', 'WRONG. You lose the game and are banished for all of eternity to a dungeon inside your mind that you will never escape!!', 'Wow. You just blew my mind. Im not sure if it is a trick question or not, but... you rock.', demo3],
  //['How many times in the last 2 years have I been on an air-plane?', < 7, > 7, 7, 'Wrong. Too low.', 'Sorry, too High.', 'CORRECT!!!!!!!!!!!', demo4],
  ['Did you believe when I said that you could fly off of a building? Y or N', 'Y', 'y', 'N', 'n', 'Wow. You got more issues than I realized. You need help.', 'PHEWWWW. I thought I was gonna need a lawyer so I could protect my self when I got sued by you. Or your family if you didn\'t survive. GREAT! I will now give you 1,000$. Just close your eyes and think real hard about the 1,000$ while rubbing your tummy and patting your head, and it will appear in front of you after 30 seconds.', demo4]
  //['I\'m thinking of a number between 1 and 10. What is it?', < 7, > 7, 7, 'Wrong. guess again', 'Right on!', demo6]
]

function question() {
    var ans1 = prompt(quesData[i][0]);
    if (ans1 === quesData[i][1] || ans1 === quesData[i][2]){
      quesData[i][7].textContent = quesData[i][5];
      quesData[i][7].className = 'wrong';
    } else if (ans1 === quesData[i][3] || ans1 === quesData[i][4]){
      quesData[i][7].textContent = quesData[i][6];
      quesData[i][7].className = 'right';
    } else {
      alert('Please answer Y or N.')
    }
}

for (var i = 0; i < quesData.length; i++){
  question();
}

// //set up function for the fist question
// function firstQuestion() {
//   //set parameters for first question
//   var count = 0;
//   //promt user for answer
//   var userAnswer1 = prompt("Does New York City have more than 20 million people? Y or N").toUpperCase();
//   console.log("Answer for question 1 is " + userAnswer1);
//   if (userAnswer1 === "Y") {
//     document.getElementById('demoText2').innerHTML = "NO MAN, COME ON!! That is WAAAAY to many people.";
//   }
//   else {
//     document.getElementById('demoText2').innerHTML = "Correctomundo. As far as I know, there is no more than 8 - 10 million living in NYC";
//     countFunk();
//   }
// }
//
// //call the firstQuestion function
// firstQuestion();
//
// //set up function for the second question
// function secondQuestion() {
//   var userAnswer2 = prompt("Does it take more than 100 hours to drive from NJ to CA at 70 mph without stopping? Y or N").toUpperCase();
//   console.log("Answer for question 2 is " + userAnswer2);
//   if (userAnswer2 === "Y") {
//     document.getElementById('demoText3').innerHTML = "You must have never driven cross country before. Or seen a map for that matter.";
//   }
//   else {
//     document.getElementById('demoText3').innerHTML = "You are correct. You would probably be in Russia by then. Depending on the direction you are driving.";
//     countFunk();
//   }
// }
// secondQuestion();
//
// //set up function for the third question
// function thirdQuestion() {
//   alert("Time for the LAST and FINAL question, punk, are you ready??\
//   If you get this wrong,things could go bad for you. REALLY BAD!!");
//   var userAnswer3 = prompt("Is the following a question? 'How Much wood could a woodchuck\
//   chuck if a woodchuck could chuck wood.' Y or N, or.... trick question? ").toUpperCase();
//   console.log("User answer for question 3 is " + userAnswer3);
//   if (userAnswer3 === "TRICK QUESTION") {
//     document.getElementById('demoText4').innerHTML = "Wow. You just blew my mind. Im not sure if it is a trick question or not, but... you rock.";
//     countFunk();
//   }
//   else if (userAnswer3 === "Y" || userAnswer3 === "N") {
//     document.getElementById('demoText4').innerHTML = "Im gonna let you in on a secret... The answer could have been Yes, no or trick question. So you got it correct. ANYTHING else and you would be wrong.";
//     countFunk();
//   }
//   else {
//     document.getElementById('demoText4').innerHTML = "WRONG. You lose the game and are banished for all of eternity to a dungeon inside your mind that you will never escape!!";
//   }
// }
// thirdQuestion();
//
// //set up function for the fourth question
//  function fourthQuestion() {
//    var userAnswer4 = prompt("How many times in the last 2 years have I been on an air-plane?");
//    console.log("User answer for question 4 is " + userAnswer4);
//    if (userAnswer4 < 7) {
//      document.getElementById('demoText5').innerHTML = "Wrong. Too low.";
//    }
//    else if(userAnswer4 > 7) {
//      document.getElementById('demoText5').innerHTML = "Sorry, too High.";
//    }
//    else {
//      document.getElementById('demoText5').innerHTML = "CORRECT!!!!!!!!!!! :)";
//      countFunk();
//    }
//  }
// fourthQuestion();
//
// //tallies number of user's correct answers
//    document.getElementById('demoText6').innerHTML = "Ok man, look. You have gotten " + count + " of my questions correct. Don't tell anyone, but you now will be able to fly if you jump off a tall building......\ but WAIT!!! One last goodbye question.";
//
// //set up function for the fifth question
// function fifthQuestion() {
//   var jump = prompt("Did you believe when I said that you could fly off of a building? Y or N").toUpperCase();
//   if(jump === "Y") {
//     document.getElementById('demoText7').innerHTML = "Wow. You got more issues than I realized. You need help.";
//   }
//   else {
//     document.getElementById('demoText7').innerHTML = "PHEWWWW. I thought I was gonna need a lawyer so I could protect my self when I got sued by you. Or your family if you didn't survive. GREAT! I will now give you 1,000$. Just close your eyes and think real hard about the 1,000$ while rubbing your tummy and patting your head, and it will appear in front of you after 30 seconds.";
//   }
// }
// fifthQuestion();
//
// //set up function for the sixth question
// function sixthQuestion() {
//   var guess = prompt("Im thinking of a number between 1 and 10. What is it?");
//   while (guess != 7){
//     guess = prompt("wrong. guess again");
//   }
// }
// sixthQuestion();
//
// //give the user a congratulatory message
// document.getElementById('demoText8').innerHTML = "Congratulations. You are finished with my test Javascript. Goodbye. Please don't contact me about insurance.";
