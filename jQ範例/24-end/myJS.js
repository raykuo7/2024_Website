$(function(){

        $(".BANNER").click(function(){


                $(this).find(".BOX").slideToggle(300).end().siblings().find(".BOX").slideUp(300)
        })
})
