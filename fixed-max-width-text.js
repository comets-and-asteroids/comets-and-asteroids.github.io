pArr = document.querySelectorAll(".comments p");
function strmaxlenth(str, maxwidth){
    if(str.textContent.length > maxwidth){
        str.textContent = str.textContent.substr(0, maxwidth - 3) + "...";
    }
}

for(var i = 0; i < pArr.length; i++){
    strmaxlenth(pArr[i], 300 );
}