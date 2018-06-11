var imageHover=document.getElementById("image1");
imageHover.onmouseover=()=>{
    imageHover.setAttribute("src", "images/image1_2.jpg");
}
imageHover.onmouseleave=()=>{
    imageHover.setAttribute("src","images/image1.jpg");
}