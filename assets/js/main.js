
const time = document.getElementById('time');
let scores = document.getElementById('scores');
// let currentTime = document.getElementById('')
let quizContent = document.getElementById('main')
const firstPage = document.getElementById('first-page')
let message = 
    'You cannot have those';
let words = message.split('');
// this variable will populate the questions in the document 
let introduction = document.getElementById('questions')
let startBtn = document.getElementById('startBtn')
const questionSection = document.getElementById('question-section')
const question = document.getElementById('question')
const choices = document.getElementById('choices')
let quizIndex = 0;


// when the timer is clicked it calls the timer to begin
startBtn.addEventListener('click', startQuiz)
function startQuiz() {
  scoreTimer()
    firstPage.style.display = 'none'

    questionSection.style.display = 'block'
    renderQuiz()

};

// this sets the timer for the quiz to start
function scoreTimer() {
    let currentTime = 100;
    let timeInterval = setInterval(function() {
        if (currentTime > 0){
            time.textContent = currentTime;
            currentTime--;
        } else{
            time.textContent = '';
        }
    },1000);
    return currentTime
}
// console.log(scoreTimer());
// This section will populate the questions and randomize the display

    const statementOne = {
        statementQuest: 'What language is used most prominently to create websites on the internet?',
        
        choices: ['Javascript', 'Agile', 'HTML', 'CSS']
    };
    const statementTwo = {
        statementQuest: 'Which is the correct way to display a message to the console?',
        choiceOne: 'console.log(desired message);',
        choiceTwo: 'function display(desired message);',
        choiceThree: 'display.window(desired message);',
        choiceFour: '<log>desired message</log>;'
    };
    const statementThree = {
        statementQuest: 'What does OOP stand for?',
        choiceOne: 'Object Oriented Programming',
        choiceTwo: 'Orienting Objective Potential',
        choiceThree: 'Orderly Object Programming',
        choiceFour: 'Object Orientation Persists'
    }; 
    const statementFour = {
        statementQuest: 'What is DRY programming',
        choiceOne: 'A principal for clean coding',
        choiceTwo: 'A Language',
        choiceThree: 'A euphemism',
        choiceFour: 'A way to call a variable'
    };
    const statementFive = {
        statementQuest: 'You have been trying to fix the same bug for 5 hours what do you do?',
        choiceOne: 'Drink more coffee, try not to cry, and take a 30 min break',
        choiceTwo: 'Smash your keyboard',
        choiceThree: 'Give up coding forever',
        choiceFour: 'Write a heated yelp review for a restaurant you have never been to, alleviating your frustation temporarily'
    };
    let qList = [ statementOne, statementTwo, statementThree, statementFour, statementFive ];
    

   function renderQuiz() { 
    //    displays choice
        question.textContent =  qList[quizIndex].statementQuest
        for (let i = 0 ; i < qList[quizIndex].choices.length; i++) {
            let choiceButtons = document.createElement('button')
            choiceButtons.textContent = qList[quizIndex].choices[i]
            // Add addeventListener to choiceButtons with eventFunc.
            choices.appendChild(choiceButtons)
// each choice button should have an addevent listener 
// when button is clicked get used answer compare to compare answer then call renderQuiz event 
// if render global quiz index is zero you can display first quiz 
        } 

   }

// inside eventFunc 
// comparing user'answer and correct anw.
// increasing quizIndex variable 0 => 1.
// call renderQuiz func to display a question.




function questionClick(event) {
    var answerChoice = event.target;



    if (answerChoice.value === questions[0].answer) {
        // penalizes a wrong answer 
        time.textContent -= 10;
    }
    time.textContent = timeInterval;
};







// function displayloser() {
//     var wordCount = 0;
//     var msgInterval =setInterval( function() {
//         if(words [wordCount] === undefined) {
//             clearInterval(msgInterval);
//         }else  {
//             main.element.textContent = words[wordcount];
//             wordCount++;
//         }
//     })};