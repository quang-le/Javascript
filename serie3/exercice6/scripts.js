var imageStock= ['images/image1.jpg','images/image2.jpg','images/image3.jpg','images/image4.jpg','images/image5.jpg'];

var altImageStock=['images/image1_2.jpg','images/image2_2.jpg','images/image3_2.jpg','images/image4_2.jpg','images/image5_2.jpg'];
            
document.getElementById("image1").setAttribute("class","images");
document.getElementById("image2").setAttribute("class","images");
document.getElementById("image3").setAttribute("class","images");
document.getElementById("image4").setAttribute("class","images");
document.getElementById("image5").setAttribute("class","images");

images=document.getElementsByClassName("images");  // or images=document.querySelectorAll("img");
control=()=> console.log(images, imageStock, altImageStock);

imageAttribution=(elements)=>{
    for(let count=0;count<images.length;count++){
        elements[count].onmouseover= ()=> elements[count].setAttribute("src", altImageStock[count])
        elements[count].onmouseleave= ()=> elements[count].setAttribute("src", imageStock[count])
    }
}