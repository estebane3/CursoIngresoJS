
function mostrar()
{
    var mascota1;
    var mascota2;
    var peso1;
    var peso2;
    var pesofinal;

    mascota1=prompt("nombre del primer perro");
    mascota2=prompt("nombre del segundo perro");

    peso1=prompt("peso");
    peso2=prompt("peso")



    peso1=parseInt(peso1);
    peso2=parseInt(peso2);
    
    pesofinal=peso1+peso2
    
    alert("tenes dos mascotas " +mascota1+ " y " +mascota2+ " que pesan " +peso1+ "y " +peso2+ " la suma de los kilos es " +pesofinal)
    


}
