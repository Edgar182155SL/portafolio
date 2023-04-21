//Edgardo Saucedo lópez 182155

function suma()
{
    var num1, num2;
    num1=parseFloat(document.getElementById("num1").value);
    num2=parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML=(num1+num2);
}

function resta()
{
    var num1, num2;
    num1=parseFloat(document.getElementById("num1").value);
    num2=parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML=(num1-num2);
}

function multiplicación()
{
    var num1, num2;
    num1=parseFloat(document.getElementById("num1").value);
    num2=parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML=(num1*num2);
}

function división()
{
    var num1, num2;
    num1=parseFloat(document.getElementById("num1").value);
    num2=parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML=(num1/num2);
}