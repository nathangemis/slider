
timerInterval = setInterval(timer,1);

let time = 2000;
let slideCrop1 = time - time;
let slideCrop2 = time;

let createStyle = document.createElement("style");
let addStyle = document.head.appendChild(createStyle);
let style = document.querySelector("style");


let slider = document.querySelector(".slider");
let slide1 = document.querySelector(".slide1");
let slide2 = document.querySelector(".slide2");
let silde3 = document.querySelector(".slide3");


function timer(){
    if(slideCrop1 < time && slideCrop2 == time){
        
        slideCrop1 ++
    }else if(slideCrop1 == time && slideCrop2 > 0 ) {
        slideCrop2 --
    }else{
        
        slideCrop2 ++
       
        
    }
   
    style.textContent = ` 
    .slide1 {
        clip-path: inset(0% ${(slideCrop1/time)*50}% 0% ${(slideCrop1/time)*50}%)
    }
    .slide2 {
        clip-path: inset(0% ${(slideCrop2/time)*50}% 0% ${(slideCrop2/time)*50}%)
    }
    `


    
}

function playStop(){
    slider.addEventListener("mouseenter",function(){
        clearInterval(timerInterval);
     })

     slider.addEventListener("mouseleave",function(){
        timerInterval = setInterval(timer,1);
         
     })

     
     
}

playStop();

















