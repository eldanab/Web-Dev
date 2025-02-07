// let d1 = new Date(2012, 1, 20, 3, 12);
// alert( d1 );
//
// function getWeekDay(date) {
//     let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
//
//     return days[date.getDay()];
// }
//
// let date = new Date(2014, 0, 3);
// alert( getWeekDay(date) );
//
// function getLocalDay(date) {
//
//     let day = date.getDay();
//
//     if (day == 0) {
//         day = 7;
//     }
//
//     return day;
// }
//
//
// function getDateAgo(date, days) {
//     let dateCopy = new Date(date);
//
//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy.getDate();
// }
//
// let date = new Date(2015, 0, 2);
//
// alert( getDateAgo(date, 1) );
// alert( getDateAgo(date, 2) );
// alert( getDateAgo(date, 365) );
//
//
function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

alert( getSecondsToday() );