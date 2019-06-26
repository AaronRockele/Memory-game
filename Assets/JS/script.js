const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(){
   this.classList.add('flip');

   if (!hasFlippedCard) {
       hasFlippedCard = true;
       firstCard = this;

       return;
   }
   hasFlippedCard = false;
   secondCard = this;

   checkForMatch()
   
}
function disableCards() {
firstCard.removeEventListener('click', flipCard);
secondCard.removeEventListener('click', flipCard);
}

function unFlipCards() {
    setTimeout(() => {   
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
}, 800);
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unFlipCards();
}

cards.forEach(card => card.addEventListener('click', flipCard))