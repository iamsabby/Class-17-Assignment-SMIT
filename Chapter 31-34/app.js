// QUESTION 1

// var currDate = new Date();
// document.write(currDate);

// QUESTION 2

// var month=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var currDate = new Date();
// document.write("Current month: "+month[currDate.getMonth()]);

// QUESTION 3

// var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var currDate = new Date();
// document.write("Today is "+day[currDate.getDay()]);

// QUESTION 4

// var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var currDate = new Date();
// if (day[currDate.getDay()]==="Sun" || day[currDate.getDay()]==="Sat")
// {
// document.write("Its Fun day");
// }
// else 
// {
//     document.write("Today is "+day[currDate.getDay()]);
// }

// QUESTION 5

// var currDate = new Date();
// if (currDate.getDate()<16)
// {
//     document.write("First fifteen days of the month");
// }
// else {
//     document.write("Last days of the month");
// }

// QUESTION 6

// var currDate = new Date();
// var nDate = currDate.getTime();

// document.write("Current Date: "+currDate);
// document.write("<br>Elapsed millliseconds since January 1, 1970: " +nDate);
// document.write("<br>Elapsed minutes since January 1, 1970: " +(nDate/60000));

// QUESTION 7

// var currDate = new Date();
// if (currDate.getHours() > 11 && currDate.getHours() < 24)
// {
//     document.write("It's PM");
// }
// else if (currDate.getHours()<12 || currDate.getHours()==24)
// {
//     document.write("It's AM");

// }

// QUESTION 8

// var laterDate = new Date("Dec 31, 2020");
// document.write("Later date: "+laterDate);

// QUESTION 9

// var ramDate = new Date("Mar 22, 2023");
// var currDate = new Date();

// var daySinceRam = currDate-ramDate;
// var result = Math.floor(daySinceRam/(1000 * 60 * 60 * 24));
// document.write(result+" days have passed since 1st Ramadan, 2023");

// QUESTION 10

// var currDate = new Date();
// var refDate = new Date("Jan 1, 2015");

// var newDate = currDate-refDate;
// var result = newDate/1000;
// document.write("On reference date "+currDate+", "+result+" seconds have passed since beginning of 2015");

// QUESTION 11


// QUESTION 12


// QUESTION 13

// var uAge = +prompt("Enter your age: ");
// var currDate = new Date();
// var currYear = currDate.getFullYear();
// var dOB = currYear-uAge;

// document.write("Your age is: "+uAge);
// document.write("<br>Your birth year is: "+dOB);

// QUESTION 14

// var cName, nUnits, cPerUnits=55, lateSurcharge=350;

// cName = prompt("Enter your name: "); 
// nUnits = +prompt("Enter no. of units: ");
// var month = prompt("Enter month: ");
// var currDate = new Date();

// document.write("<h1>K-Electric Bill<br></h1>");
// document.write("Customer Name: <b>"+cName+"</b>");
// document.write("<br>Month: <b>"+month+"</b><br>");
// document.write("Number of units: <b>"+nUnits+"</b><br>");
// document.write("Charges per unit: <b>"+cPerUnits+"</b><br>");

// var nAmountPayable = nUnits*cPerUnits;
// var gAmountPayable = nAmountPayable+lateSurcharge;

// document.write("<br>Net amount Payable (within Due Date): <b>"+nAmountPayable+"</b><br>");
// document.write("Late payment surcharge: <b>"+lateSurcharge+"</b><br>");
// document.write("Gross Amount Payable (after Due Date): <b>"+gAmountPayable+"</b>");