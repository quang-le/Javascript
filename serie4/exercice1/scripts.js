var imageHover=document.getElementById("image1");
imageHover.onmouseover=()=>{
    imageHover.setAttribute("style", "border: 1px solid red");
}
imageHover.onmouseleave=()=>{
    imageHover.setAttribute("style", "border: none");
}