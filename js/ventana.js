//Ventana Emergente Áreas Formas Geométricas y Cuerpos Geométricos

var onClose = res => {
    $(res).fadeOut('slow');                 
    return false; 
}

var onBTN = res => {
    $(res).removeAttr("style");
    $(res).fadeIn("slow");               
    return false;
}

$(document).ready(() => {

    //Ventana Emergente Formas Geométricas

    $("#btnA").on("click", () => onBTN("#popup");      
    
    $("#close").on("click",() => onClose("#popup"));

    //Ventana Emergente de Cuerpos Geométricos

    $("#btnV").on("click", () => onBTN("#popup2");      
    
    $("#close2").on("click", () => onClose("#popup2"));    
})
    
