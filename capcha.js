var p = document.getElementById("capcha");
var label = document.querySelector("label")
var button = document.getElementById('submit');
button.setAttribute('disabled', "");


function randomString(){
    var letters = 'qwertyuioplkjhgfdsazxcvbnm';
    var str = "";
    for(var i = 0; i < 8; i++){
        if(Math.floor(Math.random()*2) == 1){
            str += letters[Math.floor(Math.random()*26)];
        }
        else{
            str += letters[Math.floor(Math.random()*26)].toUpperCase();
        } 
    }
    return str;
}
label.innerHTML = randomString();

function checked(e){
    if(p.value == label.textContent)button.disabled = false;
}

p.addEventListener("input", checked);