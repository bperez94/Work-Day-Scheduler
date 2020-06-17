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

//form for user to put info
var formDiv = $("#form");
// loop for forms
for (i = 0; i < amNum.length; i++) {
  // variable for form
  var userInput = $("<form>" + amNum[i] + "<input type='text' id='formBox' name'box' value'Enter Event'></form>");
  console.log(userInput);
  $(formDiv).append(userInput);
}
//form for user to put info
var formDiv2 = $("#form2");
// loop for forms
for (i = 0; i < pmNum.length; i++) {
  // variable for form
  var userInput = $("<form>" + pmNum[i] + "<input type='text' id='formBox' name'box' value'Enter Event'></form>");
  console.log(userInput);
  $(formDiv2).append(userInput);
}

