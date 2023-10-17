
function code1() {
  let plusEqual = document.getElementById('plus_equal');
  let code1_1 = document.getElementById('Code1-1').value;
  let code1_2 = document.getElementById('Code1-2').value;

  plusEqual.addEventListener("click", () => {
    plusEqual =parseInt(code1_1) + parseInt(code1_2);
    document.getElementById('Code1_Final').innerText = `${plusEqual}`;
  })
}

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


function status() {
  let statusOpenClose = document.getElementById('openClose')
  let codeOne = document.getElementById('Code1_Final').innerText;
  let codeTwo = document.getElementById('Code2_Final').innerText;
  let codeThree = document.getElementById('Code3_Final').innerText;
  
  statusOpenClose.addEventListener("click", () => {
    if (codeOne === '10' && codeTwo === '40' && codeThree === '39') {
      alert("Congrats! You have opened the vault!")
      document.getElementById('status').innerText = "OPEN";
    } else{
      document.getElementById('status').innerText = "STILL CLOSED";
    }
  })
}
