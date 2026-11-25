//your JS code here. If required.
let line=document.getElementById("line");

let angle=0;

setInterval(() => {
    angle++;
    line.style.transform=`rotate(${angle}deg)`;
},20);