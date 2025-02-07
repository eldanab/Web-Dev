// let schedule = {};
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
// alert( isEmpty(schedule) ); // false
// function isEmpty(obj) {
//     for (let key in obj) {
//         // if the loop has started, there is a property
//         return false;
//     }
//     return true;
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
//
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
//
// alert(sum); // 390

// // before the call
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// multiplyNumeric(menu);
//
// after the call
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };
//
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     }
// }

// let calculator = {
//     sum() {
//         return this.a + this.b;
//     },
//
//     mul() {
//         return this.a * this.b;
//     },
//
//     read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     }
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         alert( this.step );
//         return this;
//     }
// };
//
// ladder.up().up().down().showStep().down().showStep();

function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum; // 650
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert( sumSalaries(salaries) );