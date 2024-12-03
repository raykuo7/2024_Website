$(function(){

        $(".AA").click(function(){
                
                // $(this).siblings().css({"background-color":"yellow"})
                // $(this).siblings().first().css({"background-color":"yellow"})
                // $(this).siblings().last().css({"background-color":"yellow"})

                $(this).siblings().next().css({"background-color":"yellow"})
                $(this).siblings().prev().css({"background-color":"yellow"})
                
                
                


        })
})