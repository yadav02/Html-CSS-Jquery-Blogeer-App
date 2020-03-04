const responsive ={
    0:{
      items:1
    },
    
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        imtes:3
    }

}


$(document).ready(function(){

    $nav = $('.nav');
    $toggelCollapse = $('.toggel-collapse');

    // click event on toggel menu
    $toggelCollapse.click(function(){

        $nav.toggleClass('collapse');
    })
    // owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:responsive
    });

    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000)
    })
    AOS.init();
});