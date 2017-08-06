var scroll = $(window).scrollTop();

function windowResize(){
    //Obtendo o tamanho da tela:
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;

    highWidthLimit = 1180;
    lowWidthLimit = 600;

    if ( winWidth > highWidthLimit ){
        $( "#responsive-sheet" ).attr( "href" , "css/stateHig.css" );
    }
    else if ( winWidth > lowWidthLimit ){
        $( "#responsive-sheet" ).attr( "href" , "css/stateMid.css" );
    }
    else{
        $( "#responsive-sheet" ).attr( "href" , "css/stateLow.css" );
    }

}

function scrollAction(){
    if( scroll <= 120 ){
        $( ".is-top-bar" ).css({ "opacity" : "" + ( 120 - scroll )/120 });
    }
    else{
        $( ".is-top-bar" ).css({ "opacity" : "0" });
    }
}

windowResize();

window.addEventListener('resize', function(){
    windowResize();
});

$(window).scroll(function (event) {
    scroll = $(window).scrollTop();
    scrollAction();
});
