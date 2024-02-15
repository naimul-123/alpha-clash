function hideEmementById(id){
    const element = document.getElementById(id);
    element.classList.add("hidden");
    
}
function showEmementById(id){
    const element = document.getElementById(id);
    element.classList.remove("hidden");

}

function getRendomAlphabet(){
    const alphabetetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabetets = alphabetetString.split('');
    // make a random index
    const index= (parseInt((Math.random()*25).toFixed(0)));
    return(alphabetets[index])

}

