function heart(){
    const heart =document.createElement("div");
    heart.classList.add("heart");
    heart.style.left=math.random()*100+"vw";
    heart.style.animationDirection=math.random()*2+3;
    heart.innerText="❤️";
    document.body.appendChild(heart);
    setTimeout(() => {
       heart.remove(); 
    }, 3000)
}
setInterval(heart,200);
