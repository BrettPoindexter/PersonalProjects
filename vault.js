//I want to calculate the math problems entered for all three codes

//Create a function for each code
function code1() {

  //Assign the HTML equal button a JS variable
  let plusEqual = document.getElementById('plus_equal');

  //Assign each user input a JS variable
  let code1_1 = document.getElementById('Code1-1').value;
  let code1_2 = document.getElementById('Code1-2').value;

  //Add event listener to update the variables based on user input
  //This will be initiated by clicking on plusEqual button
  plusEqual.addEventListener("click", () => {

    //Change user input from String to Int and compute math problem
    plusEqual =parseInt(code1_1) + parseInt(code1_2);

    //Display final number in empty <p> tag
    document.getElementById('Code1_Final').innerText = `${plusEqual}`;
  })
}


//Rinse and repeat for other two codes
function code2() {
  let minusEqual = document.getElementById('minus_equal');
  let code2_1 = document.getElementById('Code2-1').value;
  let code2_2 = document.getElementById('Code2-2').value;

  minusEqual.addEventListener("click", () => {
    minusEqual =parseInt(code2_1) - parseInt(code2_2);
    document.getElementById('Code2_Final').innerText = `${minusEqual}`;
  })
}

function code3() {
  let timesEqual = document.getElementById('times_equal');
  let code3_1 = document.getElementById('Code3-1').value;
  let code3_2 = document.getElementById('Code3-2').value;

  timesEqual.addEventListener("click", () => {
    timesEqual =parseInt(code3_1) * parseInt(code3_2);
    document.getElementById('Code3_Final').innerText = `${timesEqual}`;
  })
}


//I will then compare the user input to the correct codes and unlock the vault
function status() {
  let statusOpenClose = document.getElementById('openClose')

  //Grab all three final numbers
  let codeOne = document.getElementById('Code1_Final').innerText;
  let codeTwo = document.getElementById('Code2_Final').innerText;
  let codeThree = document.getElementById('Code3_Final').innerText;
  

  //Add new event listener for unlock button
  statusOpenClose.addEventListener("click", () => {

    //Logic statement to compare user numbers to correct numbers
    //Correct input will change status to OPEN
    if (codeOne === '10' && codeTwo === '40' && codeThree === '39') {
      document.getElementById('status').innerText = "OPEN";

      //Incorrect input will provide a STILL CLOSED status
    } else{
      document.getElementById('status').innerText = "STILL CLOSED";
    }
  })
}
