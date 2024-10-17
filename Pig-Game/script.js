let diceNumber = Math.trunc(Math.random()*6) + 1;
let currentDiceNumber = 0;
let holdValue = 0;
let currentScore = document.querySelector('.current-score-0');
const winMessage = document.querySelector('.pop-up');

const diceImage = document.querySelector('.dice-image');
const roll = document.querySelector('.roll');
const hold = document.querySelector('.hold');
let holdValueDom = document.querySelector('.hold-value-0');

const bgColor0 = document.querySelector('.game__player-0');
const bgColor1 = document.querySelector('.game__player-1');
const reset = document.querySelector('.new');
let isPlayer2 = false;


roll.addEventListener('click',function()
{   
    diceNumber = Math.trunc(Math.random()*6) + 1;
    currentDiceNumber += diceNumber;

    currentScore.textContent = currentDiceNumber;
    diceImage.src =`./image/dice-${diceNumber}.png`
    
    if(diceNumber == 1){
        currentDiceNumber = 0;
        currentScore = document.querySelector(`.current-score-${Number(isPlayer2)}`);
        currentScore.textContent = currentDiceNumber;
        isPlayer2 =  isPlayer2 ? false :true;
        currentScore = document.querySelector(`.current-score-${Number(isPlayer2)}`);
        
        currentScore.textContent = currentDiceNumber;
        bgColor0.classList.toggle('game__player-1');
        bgColor1.classList.toggle('game__player-toggle');
    }

})

hold.addEventListener('click',function(){
    
    holdValue = currentDiceNumber;
    holdValueDom = document.querySelector(`.hold-value-${Number(isPlayer2)}`);
    holdValueDom.textContent = holdValue;
    currentDiceNumber = 0; 
    currentScore.textContent = currentDiceNumber;
    
        isPlayer2 =  isPlayer2 ? false :true;
        currentScore = document.querySelector(`.current-score-${Number(isPlayer2)}`);
        
        currentScore.textContent = currentDiceNumber;
        bgColor0.classList.toggle('game__player-1');
        bgColor1.classList.toggle('game__player-toggle');
    
    if(holdValue >= 100){
        
        winMessage.textContent = `HURRAH ! PLAYER ${+isPlayer2 + 1} WIN !!`
        winMessage.classList.add('pop-up-active')
        
    }
   
})

reset.addEventListener('click',function(){
    location.reload();
})
