const word = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');
const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];
const correctLetters = [];
const wrongLetters = [];

function displayWord() {
    word.innerHTML = `
        ${selectedWord.split('').map(letter => `<span class="letter">${correctLetters.includes(letter) ? letter : ''}</span>`).join('')}
    `;
    const innerWord = word.innerText.replace(/\n/g, '');
    if(innerWord === selectedWord){
        finalMessage.innerText = 'Congratulations! You Won! :)';
        popup.style.display = 'flex';
    }
}
//keydown letter press
function showNotification() {
    notification.classList.add('show');

    setTimeout(function () {
        notification.classList.remove('show');
    }, 2000);
}
function updateWrongLettersEl() {
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
window.addEventListener('keydown', e =>{

    if(e.keyCode >= 65 && e.keyCode <= 90 ){
        const letter = e.key;
        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();
            }else{
                showNotification();
            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                updateWrongLettersEl();
            }else{
                showNotification();
            }
        }
    }
});

//Restart game and play again

playAgainBtn.addEventListener('click',() => {

    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];
    displayWord();
    updateWrongLettersEl();
    popup.style.display = 'none';
});
window.addEventListener('click',(e) => e.target === popup ? popup.style.display='none' : false);
displayWord();
