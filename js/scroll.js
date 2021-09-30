$(document).ready(()=>{

    //WHEN ABOUT CLICK
    $('#about').click(()=>{
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });
    })

    //WHEN SKILL CLICK
    $('#skill').click(() =>{
        $('html, body').animate({
            scrollTop: $("#skill-list").offset().top
        }, 1);
    })


    //WHEN PROJECT CLICK
    $('#project').click(() =>{
        $('html, body').animate({
            scrollTop: $("#mini-app").offset().top
        }, 1);
    })

})