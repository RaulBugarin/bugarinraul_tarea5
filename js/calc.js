$(document).ready(function(){
    $('#boton').click(function(){   
        var i=0;
        var numero=$("#num").val();
        var mult=$("#mult").val();

        $("#tabla").empty()

        $("#tabla").append("<th> Tabla de multiplicar del"+numero+"</th>");
        
        for (i; i< mult; i++) {
            $("#tabla").append("<tr><td>" +numero+ "*" +i+ "</td><td>" +i*numero+ "</td></tr>")
        }


    });
});
   
   
   
   
   
   
   
   
   
   
    /*var nombre = document.getElementById('nombre').value;

    for (var i = i) {
    $('#tablaMultiplicar tr:last').after('<tr><td>' + nombre + '</td><td>' + (multiplicacio) + '</td>');
    
    
    }
} */   