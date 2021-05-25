function compute() {
    if(document.getElementById("principal").value>0) {
        var princ = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var result = princ*rate*years/100;
        for (var i=0; i<2021; i++)years++;
        document.getElementById("result").innerHTML=result;
        document.getElementById("princout").innerHTML=princ;
        document.getElementById("rateout").innerHTML=rate;
        document.getElementById("yearout").innerHTML=(years);
        document.getElementById("Answer").style.display="block";
    } 
    else {
        alert("Please enter positive value as principal");
        document.getElementById("principal").value = '\0';
        document.getElementById("Answer").style.display="none";
        document.getElementById("principal").focus();
    }
}
function update() {
    var values=document.getElementById("rate").value;
    //values = values.toFixed(1);
    document.getElementById("rangeout").innerHTML = values;
}
