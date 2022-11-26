const word = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.querySelector(".popup-container");
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll(".figure-part");

const words = ['application', 'programming',
    'javascript', 'html', 'css', 'interface',
    'class', 'salesforce'];

const generateRandomNumber = () => {
    return Math.floor(Math.random() * words.length);
}

let selectedWord = words[generateRandomNumber()];

const correctLetters = [];
const wrongLetters = [];


const displayWord = () => {
    word.innerHTML = `
        ${selectedWord.split('').map(letter =>
        `<span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
         </span>`).join('')}
    `;

    const innerWord = word.innerText.replace(/\n/g, '');
    if (innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations. You Won! :)';
        popup.style.display = 'flex';
    }
}

const showNotification = () => {
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}
function updateWrongLettersElement() {
    // Display wrongLetters
    wrongLettersEl.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;
    //Display parts
    figureParts.forEach((part,index) => {
        const errors = wrongLetters.length;
        if(index < errors){
            part.style.display = 'block';
        }else{
            part.style.display = 'none';
        }
    });
    // Chech if lost
    if(wrongLetters.length === figureParts.length){
        finalMessage.innerText = 'Unfortunately you lost! :(';
        popup.style.display = 'flex';
    }

}


window.addEventListener('keydown', (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;
        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord(); // prikazi tacno slovo
            } else {
                showNotification();
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                updateWrongLettersElement();
            } else {
                showNotification();
            }
        }
    }
});

playAgainBtn.addEventListener('click', () => {
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[generateRandomNumber()];

    displayWord();
    updateWrongLettersElement();
    popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    return e.target === popup ? popup.style.display = 'none' : false;
})
displayWord();


