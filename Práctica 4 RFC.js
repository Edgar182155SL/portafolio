function generarfc()
{
    var rfc;
	var RFC;
    var nom= document.getElementById("nombre").value;
    var ap= document.getElementById("apellido p").value;
    var am= document.getElementById("apellido m").value;
    var an=document.getElementById("anio").value;
    var me=document.getElementById("mes").value.padStart(2, "0");
    var di=document.getElementById("dia").value.padStart(2, "0");

    rfc=ap.charAt(0);
    rfc+=ap.charAt(1);
    rfc+=am.charAt(0);
    rfc+=nom.charAt(0);
    rfc+=an.charAt(2);
    rfc+=an.charAt(3);
    rfc+=me.charAt(0);
    rfc+=me.charAt(1);
    rfc+=di.charAt(0);
    rfc+=di.charAt(1);

    RFC=rfc.toUpperCase();

    document.getElementById("resultado").innerHTML=RFC;
}