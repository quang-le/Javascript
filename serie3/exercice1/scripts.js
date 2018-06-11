var imageHover=document.getElementById("image1");
imageHover.onmousenter=()=>{
    imageHover.setAttribute("src", "image1_2");
}
imageHover.onmouseleave=()=>{
    imageHover.setAttribute("src","image1");
}