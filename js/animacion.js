//Animación de la calculadora

$(document).ready(() => {

    $(".container").removeAttr("style");
    $(".container").hide();

    $("#btnM").on("click", function(){
        $(".container")
            .slideDown(2000);
    });
    
    
    $("#btnE").on("click", function(){
        $(".container")
            .slideUp(2000);
    });
})