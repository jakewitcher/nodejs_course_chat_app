var moment = require('moment');

//UNIX EPIC January 1st, 1970 00:00:00am autocomplete
//0 as a time stamp is exactly the date and time above
//timestamps are in milliseconds before or after this date and time


var date = moment();
date.subtract(27, 'months').add(49, 'years');
console.log(date.format('MMM Do, YYYY'));

var time = moment();
console.log(time.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
