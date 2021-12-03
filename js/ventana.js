
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

    $("#btnA").on("click", _ => onBTN("#popup"));      
    
    $("#close").on("click",_ => onClose("#popup"));

    $("#btnV").on("click", _ => onBTN("#popup2"));      
    
    $("#close2").on("click", _ => onClose("#popup2"));    
})
    
