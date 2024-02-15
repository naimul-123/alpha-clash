

function continueGame(){
 const alphabet = getRendomAlphabet();
//  set randomly genareted alphabet to the screen
const alphabetelement =document.getElementById("randomAlphabet");
alphabetelement.innerText= alphabet.toUpperCase();

const alphabetBtns = document.querySelectorAll(".kbd");

for (const alphabetBtn of alphabetBtns) {
    // if(alphabetBtn.innerText === alphabet){
    //     alphabetBtn.style.backgoundColor = "#FFA500"
    // }
    if(alphabetBtn.innerText ===alphabet ){
        alphabetBtn.classList.toggle('bg-selected')
    }
    // else{
    //     if(alphabetBtn.classList.contains('bg-selected')){
    //         alphabetBtn.classList.remove('bg-selected')
    //     }

    // }

    // alphabetBtn.classList.toggle

}



}
function enterGame(){
    // hide the home screen and show the playground screen
    hideEmementById('home');
    showEmementById('playGround');
    continueGame()
}

