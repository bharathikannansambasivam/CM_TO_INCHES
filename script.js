
function convert(){

let cmval = document.getElementById('input').value;
let inch = cmval/ 2.54
;
console.log(cmval);
let result = document.getElementById('result');
result.innerHTML=inch.toFixed(2) + "    INCH";




}

function clearInput() {
    let inputField = document.getElementById('input');
    let result = document.getElementById('result');
  
    inputField.value = "";
    result.innerHTML = "";
  }
  