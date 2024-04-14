let correctAnswer;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;

    const questionElement = document.getElementById('question');
    questionElement.textContent = `Hva er ${num1} * ${num2}?`;

    const resultElement = document.getElementById('result');
    resultElement.textContent = ''; // Clear previous results
}



document.addEventListener('DOMContentLoaded', () => {
    generateQuestion(); // Initialize the first question
    const answerElement = document.getElementById('answer');

    window.submitAnswer = function () {
        const userAnswer = parseInt(answerElement.value, 10);
        const resultElement = document.getElementById('result');
        if (userAnswer === correctAnswer) {
            resultElement.textContent = "Korrekt! Bra gjort!";
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = `Feil svar. Det riktige svaret er  ${correctAnswer}.`;
            resultElement.style.color = 'red';
        }
        answerElement.value = ''; // Clear input after submission
    };

    window.generateQuestion = generateQuestion; // Expose function for new questions
});
