function mostrar()
{
    var amigos;
    var precio;
    var propina;
    var precioindividual;
    var preciofinal;


    amigos=prompt("cantidad de personas");

    precio=prompt("total a pagar")

    amigos=parseInt(amigos);
    precio=parseInt(precio);
    propina=parseInt(propina);
    precioindividual=parseInt(precioindividual);

    propina=precio*10/100

    precioindividual=precio/amigos


    alert("cada uno de los amigos debe pagar "+precioindividual+ " el precio total seria de "+precio+ " la propina sera de "+propina)











}
