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