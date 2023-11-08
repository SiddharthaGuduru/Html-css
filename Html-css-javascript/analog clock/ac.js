
let hr =document.getElementById("hr");
let mn=document.getElementById("mn");
let sc=document.getElementById("sc");
setInterval(() => {
    let day= new Date();
    let hh=day.getHours() * 30;
    let mm=day.getMinutes() * 6;
    let ss=day.getSeconds() * 6;
     hr.style.transform = `rotatez(${hh+(mm/12)}deg)`;
     mn.style.transform = `rotatez(${mm}deg)`;
     sc.style.transform = `rotatez(${ss}deg)`;
    
})