function gameOver(score){
        addClassById('playGround', 'hidden');
        removeClassById('score', 'hidden') ;
        
        document.getElementById('totalScore').innerText= score;


}




function continueGame(){
 const alphabet = getRendomAlphabet();
//  set randomly genareted alphabet to the screen
const alphabetelement =document.getElementById("randomAlphabet");
alphabetelement.innerText= alphabet;
addClassById(alphabet, "bg-selected")
}


function enterGame(){
    // hide the home screen and show the playground screen
    addClassById('home', 'hidden')
    removeClassById('playGround', 'hidden')
    continueGame();
}




function handlekeyboardButtonpress(event){
    let score = parseInt(getInnertextById('scoreContainer'));
    let life = parseInt(getInnertextById('lifeContainer'));
    
    const playeredPressedKey = event.key.toLowerCase();
    const randomAlphabet = getInnertextById('randomAlphabet').toLowerCase();

if(playeredPressedKey === randomAlphabet){
     score ++
     updateInnertextById('scoreContainer', score)

}

else{
    life--
    updateInnertextById('lifeContainer', life)

}

if(life>=0){
    continueGame()
}
else{
    gameOver(score)
}



removeClassById(randomAlphabet, "bg-selected")


}

 document.addEventListener('keyup', handlekeyboardButtonpress)



function playAgain(){
    addClassById('score', 'hidden')
    removeClassById('playGround', 'hidden')
    document.getElementById('lifeContainer').innerText= 5; 
    document.getElementById('scoreContainer').innerText= 0;
    enterGame();
}




