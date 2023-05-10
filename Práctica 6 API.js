function iniciar()
{
var boton=document.getElementById('grabar');
boton.addEventListener('click', nuevoitem, false);
}
    
function nuevoitem()
{
var nom=document.getElementById('nombre').value;
var ed=document.getElementById('edad').value;
sessionStorage.setItem(nom,ed);
mostrar(nom);
}
    
function mostrar(nom)
{
var cajadatos=document.getElementById('cajadatos');
var ed=sessionStorage.getItem(nom);
cajadatos.innerHTML='<div>'+nom+' - '+ed+'</div>'; 
}
window.addEventListener('load', iniciar, false);
    