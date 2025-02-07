// let name = prompt("What is the “official” name of JavaScript?", "");
// if(name == "ECMAScript"){
//     alert("right!");
// } else {
//     alert("You don’t know? ECMAScript!");
// }

// let num = prompt("Enter the number");
// if(num > 0){
//     alert(1)
// } else if(num < 0){
//     alert(-1)
// } else {
//     alert(0)
// }

// let result = (a + b < 4) ? 'Below': 'Over';
//
// if (a + b < 4) {
//     result = 'Below';
// } else {
//     result = 'Over';
// }

// let message = (login == 'Employee' ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '');
//
// if (login == 'Employee') {
//     message = 'Hello';
// } else if (login == 'Director') {
//     message = 'Greetings';
// } else if (login == '') {
//     message = 'No login';
// } else {
//     message = '';
// }
// let age;
// if (age >=14 && age <= 90) {
//     alert("it is!")
// }
//
// if (age <14 || age >90) {
//     alert("it is not!")
// }

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

    let pass = prompt('Password?', '');

    if (pass === 'TheMaster') {
        alert( 'Welcome!' );
    } else if (pass === '' || pass === null) {
        alert( 'Canceled' );
    } else {
        alert( 'Wrong password' );
    }

} else if (userName === '' || userName === null) {
    alert( 'Canceled' );
} else {
    alert( "I don't know you" );
}