$(function () {
    let N = 16;

    $("#BBB").click(function () {
        $("#CON_BOX").css( "font-size", "25px" ).css("color","red");
    });

    $("#MMM").click(function () {
        $("#CON_BOX").css("font-size", N +"px").css("color", "YELLOW");
    });

    $("#SSS").click(function () {
        N-=1
        $("#CON_BOX").css("font-size",  N+"px").css("color", "BLUE");
    });


})