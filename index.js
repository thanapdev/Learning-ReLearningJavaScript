console.log('hello world!');
// 

let x = 2; 

let y = 10;

let z = x + y;

console.log(z);

// 

let myNumber = 5.5;

let mySting = 'hi';

let myBoolean = true;

console.log(myNumber);
console.log(mySting);
console.log(myBoolean);

// 

let score = 70;

if (score >= 80) {
    console.log('you get A');
}else if (score >= 70) {
    console.log('you get B ');
}else{
   console.log('you lose');
}

// 

for (let i = 1; i <= 12; i++) {
    if (i % 2 === 0 ) {
        continue;
    }else if (i % 9 === 0) {
        break;
    }
    console.log('now i have value '+i);
}

// 

function calPyramidArea(length , width, height) {
    let base = length * width;
    let volume = 1/3 * base * height;
    return volume;
}

let vol1 = calPyramidArea(2 , 2 ,3);

let vol2 = calPyramidArea(4 , 4 ,6);

console.log('area 1 = '+vol1 +' | area 2 = '+vol2);

// 

let cont2 = document.getElementById('content-2');

let textHtml ='<b>HTML control</b>';
textHtml += '<i> HTML control V2</i>'
cont2.innerHTML = textHtml;

// 

let discount = document.getElementById('discount-btn');
let msg = document.getElementById('message');

function showmsg(){
    msg.innerHTML = 'ช้าไปจ้า';
}

discount.addEventListener('click' , showmsg);   