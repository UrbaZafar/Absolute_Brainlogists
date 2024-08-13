// Function to calculate score and show it
function showScore(event) {
    event.preventDefault(); // Prevent default form submission
    let totalScore = 0;
    // Loop through all radio buttons with name attribute starting with 'q'
    document.querySelectorAll('input[name^="q"]:checked').forEach(function(radio) {
        totalScore += parseInt(radio.getAttribute('data-score')); // Add score of selected option
        const correctAnswer = radio.getAttribute('data-correct'); // Get the correct answer
        const answerContainer = radio.parentNode.parentNode; // Get the parent container of the radio button
        if (correctAnswer === 'true') {
            answerContainer.classList.add('correct'); // Add a class to indicate correct answer
        } else {
            answerContainer.classList.add('incorrect'); // Add a class to indicate incorrect answer
        }
    });
    // Display total score
    document.getElementById('score').innerText = totalScore;
    // Show the result container
    document.getElementById('result-container').style.display = 'block';
}

// Attach event listener to form submission
document.getElementById('quiz-form').addEventListener('submit', showScore);