function readMore(){
    var dots = document.getElementById("dots");
    var answer= document.getElementById("answer");
    var btnanswers = document.getElementById("btnanswers");
    if(dots.style.display === "none")
    {
        dots.style.display="inline";
        btnanswers.innerlHTML="Czytaj więcej";
        answer.style.display="none";
    }
    else{
        dots.style.display="none";
        btnanswers.innerlHTML="Czytaj mniej";
        answer.style.display="inline";
    }
}