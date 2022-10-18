function addBorder(){
    img = document.querySelector("img");
    
    if(img.style.border === "none"){
        img.style.border = "2px solid red";
    } else {
        img.style.border = "none";
    } 
}