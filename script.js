

// program to display the date
// get local machine date time
const date = new Date();

// get the date as a string
const n = date.toDateString();

// get the time as a string
document.getElementById("date").innerHTML=n;
const time = date.toLocaleTimeString();
document.getElementById("time").innerHTML=time;

// display date and time
console.log('Date: ' + n + 'time: ' + time );


