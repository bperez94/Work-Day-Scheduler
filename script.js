// time for topm of page
var dateTime = new Date();
document.getElementById("currentDay").innerHTML = dateTime.toLocaleDateString();

// array for am numbers
var amNum = ["12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","llam"];
console.log(amNum);
// array for pm numbers
var pmNum = ["12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm"];
console.log(pmNum);

//varibale for id on html using jquery
var bodyDiv = $(".a");
console.log(bodyDiv);

// for loop for amNumber array
for (let i = 0; i < amNum.length; i++) {
   //variable that creates new time blocks
   var newTimeBlocks = $("<div class= card> <div class= card-body> <p id='timeblocks1' class= 'tb1'></p></div></div>");
    console.log(newTimeBlocks);
    //add times from array
    var timeblock = $(".timeblocks");
    console.log(timeblock);
   $(timeblock).text(amNum);
   // add to bodyDiv
  bodyDiv.append(newTimeBlocks);
    
}

 

