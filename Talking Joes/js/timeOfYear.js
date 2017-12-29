var month = new Date();
var monthNow = month.getMonth();
var greeting;

if (monthNow <= 2) {
    greeting = 'Happy Spring!';
} else if (monthNow > 2 && monthNow <= 5) {
    greeting = 'Happy Summer!';
} else if (monthNow > 5 && monthNow <= 8) {
    greeting = 'Happy Fall';
} else if (monthNow > 8) {
    greeting = 'Happy Winter!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
