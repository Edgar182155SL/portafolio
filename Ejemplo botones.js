
function suma()
{  
    var num1, num2, sumar;
    num1=prompt("Escribe un número", "");
    num2=prompt("Escribe otro número","");
    sumar=parseinInt(num1)+parseInt(num2);
    alert("La suma es" + sumar);
}

function resta()
{   
    var num1, num2, restar;
    num1=prompt("Escribe un número", "");
    num2=prompt("Escribe otro número","");
    restar=parseinInt(num1)-parseInt(num2);
    alert("La resta es"+ restar);
}

function multiplicación()
{   
    var num1, num2, multiplicar;
    num1=prompt("Escribe un número", "");
    num2=prompt("Escribe otro número","");
    multiplicar=parseinInt(num1)*parseInt(num2);
    alert("La multiplicación es" + multiplicarl);
}

function división()
{   
    var num1, num2, dividir;
    num1=prompt("Escribe un número", "");
    num2=prompt("Escribe otro número","");
    dividir=parseinInt(num1)/parseInt(num2);
    alert("La división es" + dividir);
}

function signo()
{   
    var num=prompt("Escribe un número", "");
    if (parseInt(num>0))
         alert("El número es positivo");
    else 
      if (parseInt(num<0))
         alert("El número es negativo");
}

