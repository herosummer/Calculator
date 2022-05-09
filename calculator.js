function clearScreen() {
   document.getElementById("result").value="";
}

function display(p1) {
   document.getElementById("result").value+=p1;
}

function calculate() {
    
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}