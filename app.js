const output = document.querySelector(".output");

let res;

let typeSpeed = 300;

let removeSpeed = 100;

let id = 0;
 const words = [
    "Web\xa0Developer",
    "Front-End\xa0Developer",
    "FullStack\xa0Developer",
 ];

 const colors = [
    "#0fdcb6",
    "#fae039",
    "#fc821e",
 ];

 let charCount = 0;

 let time = setInterval(type, typeSpeed);

 function type() {
    res = words[id].substr(0, charCount);
    output.style.color = colors[id];

    if (charCount >= words[id].length + 3) {
        clearInterval(time);
        charCount = 1;
        time = setInterval(remove, removeSpeed);
    }

    output.innerHTML = res;
    charCount++;
 }
 function remove(){
    res = words[id].substr(0, words[id].length - charCount);

    if(res.length <= 0){

        if(id >= words.length - 1){
             id = 0;
        }else {
            id++;
        }
        clearInterval(time);
        charCount = 0;
        time = setInterval(type, typeSpeed);
    }
    output.innerHTML = res;
    charCount++;
 }
