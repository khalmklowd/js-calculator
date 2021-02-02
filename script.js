var displayValue = [];
var c = [];
function reset() {
    displayValue = [];
    document.getElementById("display").value = '';
    console.log(displayValue);
}

function appNum(num){
    displayValue.push(num);
    document.getElementById("display").value += num;
    console.log(displayValue);
}

function equate(){
    let a = displayValue.toString();
    var b = a.replace(/,/g, '');
    var c = eval(b);
    reset();
    if (c == 'Infinity') {
        document.getElementById("display").value = 'Click "C" to undivide by zero!';
    }else {
        document.getElementById("display").value = c;
    }
        console.log(c);  
    displayValue.push(c);
}

function randomNum(){
    appNum(Math.random());
}