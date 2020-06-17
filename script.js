// date for top of page
var date = new Date();
document.getElementById("currentDay").innerHTML = date.toLocaleDateString();
//time for top of page
var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
document.write(time);
// array for am numbers
var amNum = ["12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am"];
console.log(amNum);
// array for pm numbers
var pmNum = ["12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm"];
console.log(pmNum);

// loop to put individual hours for am in block
function getTime() {
  for (var i= 0;i < amNum.length ;i ++) {
    document.write("<table border=1>");
    document.write("<tr><td width=1250px height=100px>" + amNum[i] + "</td></tr>");
    document.write("</table>");
}return "";

}

document.getElementById("times").innerHTML=getTime();
console.log(getTime);

// loop to put individual hours for am in block
function getTime2() {
  for (var i= 0;i < pmNum.length ;i ++) {
    document.write("<table border=1>");
    document.write("<tr><td width=1250px height=100px>" + pmNum[i] + "</td></tr>");
    document.write("</table>");
}return "";
}

document.getElementById("times2").innerHTML=getTime2();
console.log(getTime2);

//form for user to put info
var formDiv = $("#form");
// loop for forms
for (i = 0; i < amNum.length; i++) {
  // variable for form
  var userInput = $("<form><input type='text' id='formBox' name'box' value'Enter Event'></form>");
  console.log(userInput);
  $(formDiv).append(userInput);
}
