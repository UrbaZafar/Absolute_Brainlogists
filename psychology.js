// that score we span declare as function
// it take event as an argument this event present the form submission
function showScore(event){
    event.preventDefault();
    let totalScore=0;
//   the event handler is the showScore function.
// if the button were a link or a submit button, the event.preventDefault() line would prevent the browser from:

// Navigating to a new page (if it were a link)
// Submitting the form data to the server (if it were a submit button)

// --------------------------------------------------------
// this selects all radio buttons inputs whose name starts with "q"
// .forEach(function(radio) {...}): This loops through each selected radio button and executes the provided function for each one.

    document.querySelectorAll('input[name^="q"]:checked').forEach(function(radio){

// -----------------------------------------

// parseInt is a function that converts a string into an integer (a whole number).
// This gets the data-score attribute of the selected radio button (which contains the
//  score for that answer), converts it to an integer using parseInt, and adds it to totalScore.
        totalScore +=parseInt(radio.getAttribute('data-score'));
// -----------------------------------------------------------------
// This gets the data-correct attribute of the selected radio button, which indicates whether 
// the selected answer is correct.
        const correctAnswer=radio.getAttribute('data-correct');
// ---------------------------------------------------------------
// parentNode is a property that gets the parent element of the current element.
// radio.parentNode gets the parent element's parent element, which is 
// the <li> element (list item) containing the radio button.
        const answerContainer =radio.parentNode;
// ---------------------------------------------------------------
        if(correctAnswer ==='true'){
            answerContainer.classList.add('correct');
        }else{
            answerContainer.classList.add('incorrect');
        }
    });
// ---------------------------------------------
// document is the root element of the HTML document.
// getElementById is a method that returns an element with the specified ID.
// 'score' is the ID of the element we're looking for.
// So, document.getElementById('score') returns the element with the ID score.
// .innerText: This property of the selected element represents the text content inside the element. By setting this property, you can change 
// the displayed text within that element.

// so basically in easy words phailay span is empty after you ise innertext = total
// is nai score jo totalscore kai equal kr diay to jab ap submit karay gay ap ka score span mai nazar aya ga

// display total score
    document.getElementById('score').innerText=totalScore;
// ---------------------------------------------------------
// basically before submitting the score thing is invisible
// but after submitting it beacuse of style =block it shows you your score
    document.getElementById('score-container').style.display='block';
}
// ----------------------------------------------------------------
// u remember that showscore in the starting we called by using event now we calling it
// his attaches an event listener to the form with the ID quiz-form. When the form is submitted, the showScore function is called.
document.getElementById('quiz-container').addEventListener('submit', showScore);
