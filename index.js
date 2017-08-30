
/*Program logic
Display intro screen
On start button event
  hide intro screen
  display question screen
  intiate question counter 
  load question 

on answer  button event
  if answer is correct
    increment correct answer counter
    display book cover and feedback text
  else 
    display incorrect feedback 

on continue button event  
  increment question counter
  if question answer counter less than max
    load next question
  else
    display user score 
    prompt to play again
    if user selects to play again 
      reinitialize score and question counter
*/
let questionNumber=0;
let correctAnswer=0;

function initVars(){
   questionNumber=0;
   correctAnswer=0;
}

$('#startButton').on({
    'click': function(){
       event.preventDefault();
       $('#intro').toggleClass('hidden');
       $('#main').toggleClass('hidden');
       initVars();
      
      loadQuestion(questionNumber);
      }
});


$('#answerButton').on({'click':function(){ 
        event.preventDefault();
        evaluateAnswer(correctAnswer);
        $('#answerEval').toggleClass('hidden');
        $('#answerForm').toggleClass('hidden');
        }
});

$('#continueButton').on('click',function(){
  event.preventDefault();
  if (questionNumber < quizObjects.length ){
    loadQuestion(questionNumber);
    $('#answerEval').toggleClass('hidden');
  }
  else{
      $('#main').toggleClass('hidden');
      $('#userScore').text('You answered ' + correctAnswer + ' of ' + quizObjects.length + ' questions correctly.')
      $('#scoreScreen').toggleClass('hidden');
  }
   $('#answerForm').toggleClass('hidden');
});

$('#playAgain').on('click', function(){
        $('#scoreScreen').toggleClass('hidden');   
       $('#intro').toggleClass('hidden');
       $('#answerEval').toggleClass('hidden');
       
       
})  
function loadQuestion(questionNumber){
  
  $('#bookTitle').text(quizObjects[questionNumber].bookname);
  $('#bookDescription').text(quizObjects[questionNumber].bookDescription);
  
  $('#author1').text(authors[quizObjects[questionNumber].distractors[0]]);
  $('#author2').text(authors[quizObjects[questionNumber].distractors[1]]);
  $('#author3').text(authors[quizObjects[questionNumber].distractors[2]]);
  $('#author4').text(authors[quizObjects[questionNumber].distractors[3]]);
  $('#bookCover').html('<img src=\'' + quizObjects[questionNumber].bookcover + '\'>');
  $('#answer1').val(quizObjects[questionNumber].distractors[0]); 
  $('#answer2').val(quizObjects[questionNumber].distractors[1]);
  $('#answer3').val(quizObjects[questionNumber].distractors[2]);
  $('#answer4').val(quizObjects[questionNumber].distractors[3]);
  $('#progressCount').text('Question ' + (questionNumber +1) + ' of ' + quizObjects.length); 
   $('#correctAnswerCount').text('Correct Answers: ' + correctAnswer);
}
 
function evaluateAnswer(){
  
  var userEntered =$("input[type='radio']:checked").val();
  if (userEntered == questionNumber){
    
    correctAnswer++;
    $('#scoreBox').text('CORRECT!');
     $('#correctAnswerCount').text('Correct Answers: ' + correctAnswer);
  }
  else{
    $('#scoreBox').text('Incorrect.');
  }
  questionNumber++;
}


