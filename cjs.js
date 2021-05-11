var a1 = document.getElementById("a1");
var star=document.getElementById("star");
a1.addEventListener("click",()=>{
    star.src="img/photo.jpg";
    setTimeout(()=>{
    star.src="img/icecream.png";
    },5000)
})