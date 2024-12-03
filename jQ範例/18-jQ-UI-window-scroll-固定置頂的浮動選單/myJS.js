$(function(){
$(window).scroll(function(){
        var HH = $(window).scrollTop();
        if (HH < 100){
                $ ('#top-bar').stop(true,false).animate({top:"-65px"},500);
        }
        else{
                $('#top-bar').stop(true,false).animate({top:0},500);
        }
});})



// $(function () {
//         let debounceTimer;
    
//         $(window).scroll(function () {
//             clearTimeout(debounceTimer);
//             debounceTimer = setTimeout(() => {
//                 var HH = $(window).scrollTop();
//                 if (HH < 100) {
//                     $('#top-bar').stop(true, false).animate({ top: 0 }, 500);
//                 } else {
//                     $('#top-bar').stop(true, false).animate({ top: "-65px" }, 500);
//                 }
//             }, 50); // Adjust the delay as needed
//         });
//     });
    