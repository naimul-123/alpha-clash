
function getRendomAlphabet(){
    const alphabetetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabetets = alphabetetString.split('');
    // make a random index
    const index= (parseInt((Math.random()*25).toFixed(0)));
    return(alphabetets[index])

}

function addClassById(id, className){
    document.getElementById(id).classList.add(className)
}

function removeClassById(id, className){
    const selectedId =document.getElementById(id);
    if(selectedId.classList.contains(className)){
        selectedId.classList.remove(className)
    }

}

function getInnertextById(id){
    const text = document.getElementById(id).innerText;
    return text;
}
function updateInnertextById(id, value){
    document.getElementById(id).innerText = value ;
    
}





