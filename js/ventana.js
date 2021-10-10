//Ventana Emergente Áreas Formas Geométricas y Cuerpos Geométricos

$(document).ready(() => {

    //Ventana Emergente Formas Geométricas

    $("#btnA").on("click", function(){
        $("#popup").removeAttr("style");
        $("#popup").fadeIn("slow");               
        return false;
    });      
    
    $("#close").on("click", function(){         
        $("#popup").fadeOut("slow");                 
        return false;     
    });

    //Ventana Emergente de Cuerpos Geométricos

    $("#btnV").on("click", function(){ 
        $("#popup2").removeAttr("style");       
        $("#popup2").fadeIn("slow");                  
        return false;     
    });      
    
    $("#close2").on("click", function(){         
        $("#popup2").fadeOut('slow');                 
        return false;     
    }); 
})
    
