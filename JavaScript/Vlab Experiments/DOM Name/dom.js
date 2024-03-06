function makeChanges() {
    for (image of document.querySelectorAll("img")){
        image.src = "timepass.png";
    }
    for (tag of document.querySelectorAll("h1")) {
        tag.remove();
    }    
    for (para of document.querySelectorAll("p")) {
        para.innerHTML = "Enough of JavaScript, let’s stop.";
    }
    for (tag of document.querySelectorAll("h2")) {
        tag.innerHTML = tag.innerHTML.toUpperCase();
    }
    for (division of document.querySelectorAll("div#div1")) {
        const heading = document.createElement("h3");
        division.appendChild(heading);
    }
}