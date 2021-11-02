

$("#btnTerminos").on("click", function(){
    $("#tyc").hide()
    $("#btnTerminos").hide()
    $("#btnTerminos2").show();
});

$("#btnTerminos2").on("click", function(){
    $("#btnTerminos2").hide();
    $("#tyc").show();
    $("#btnTerminos").show();
})



$(document).ready(function(){    
    $('#guardar').click(function(){        
        /*Captura de datos escrito en los inputs*/        
        var nom = document.getElementById("usuario").value;
        /*Guardando los datos en el LocalStorage*/
        localStorage.setItem("Nombre", nom);
        /*Limpiando los campos o inputs*/
        document.getElementById("usuario").value = "";
       
    });   
});


var nombre = localStorage.getItem("Nombre");
console.log("Nombre");