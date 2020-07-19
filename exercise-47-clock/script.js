function fillWheel(wheel, start, bound) {
    let clockWheel = document.getElementById(wheel);

    chain = "";

    for(let i=start; i<10; i++){
        chain = chain + `<div class='card c${i}'>`;
        if(i <= bound) chain=chain + i;
        chain = chain + "</div>";
    }

    for(let j=0; j<start; j++){
        chain = chain + `<div class='card c${j}'>`;
        if(j <= bound) chain = chain + j;
        chain = chain + "</div>";
    }
    clockWheel.innerHTML = chain;
}

let time = new Date();
let hours1 = time.getHours();
while(hours1%10!==0) hours1--;
hours1 = hours1/10;
fillWheel("hours1", hours1, 2);

let hours2 = time.getHours();
hours2 = hours2 - (hours1*10);
fillWheel("hours2", hours2, 9);

let minutes1 = time.getMinutes();
while(minutes1%10!==0) minutes1--;
minutes1 = minutes1/10;
fillWheel("minutes1", minutes1, 5);

let minutes2 = time.getMinutes();
minutes2 = minutes2 - (minutes1*10);
fillWheel("minutes2", minutes2, 9);

let seconds1 = time.getSeconds();
while(seconds1%10!==0) seconds1--;
seconds1 = seconds1/10;
fillWheel("seconds1", seconds1, 5);

let seconds2 = time.getSeconds();
seconds2 = seconds2 - (seconds1*10);
fillWheel("seconds2", seconds2, 9);
