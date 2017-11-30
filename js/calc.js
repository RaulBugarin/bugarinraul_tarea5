$(document).ready(function(){
    $('#boton').click(function(){   
        var i=0;
        var numero=$("#num").val();
        var mult=$("#mult").val();

        if(numero<=9 && numero>=1) {
            $("#tabla").empty();

            $("#tabla").append("<th> Tabla de multiplicar del "+numero+"</th>");
        
            for (i; i< mult; i++) {
                $("#tabla").append("<tr><td>" +numero+ "*" +i+ "</td><td>" +i*numero+ "</td></tr>")
            };
        } else {
                $("#tabla").append("Necesitamos un número entre 1 y 9")
        };
        
    });
});