function readMore(){
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btnmore = document.getElementById("btnmore");
    if(dots.style.display === "none")
    {
        dots.style.display="inline";
        btnmore.innerlHTML="Czytaj więcej";
        more.style.display="none";
    }
    else{
        dots.style.display="none";
        btnmore.innerlHTML="Czytaj mniej";
        more.style.display="inline";
    }
}