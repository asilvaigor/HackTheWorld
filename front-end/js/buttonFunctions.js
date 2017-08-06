function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function topBarClick(){
    var estadoBotao = $(".is-button-show-hidde").css("background-color");
    if( estadoBotao == "rgba(0, 0, 0, 0)" ){
        $(".is-button-show-hidde").css({ "background-color" : "var(--fundo-botao)" });
        if( $(".is-login-buttons").css("display") == "none"  ){
            $(".is-login-buttons").css({ "display" : "inline" });
        }
    }
    else{
        $(".is-button-show-hidde").css({ "background-color" : "rgba(0, 0, 0, 0)" });
        if( $(".is-login-buttons").css("display") != "none"  ){
            $(".is-login-buttons").css({ "display" : "none" });
        }
    }
};

function loginClickCliente(){
    $(".is-escurecimento-fundo").css({ "display" : "block" });
    $(".is-login-window").css({ "display" : "block" });
}

function loginClickColaborador(){
    $(".is-escurecimento-fundo").css({ "display" : "block" });
    $(".is-login-window").css({ "display" : "block" });
}

function clickX(){
    $(".is-escurecimento-fundo").css({ "display" : "none" });
    $(".is-login-window").css({ "display" : "none" });
}


function clickFacebook(){
    $( "#imagemFacebook" ).attr( "src" , "img/loader.gif" );
    sleep(2000);
    $( "#imagemFacebook" ).css({ "display" : "none" });
    $( "#botaoFacebook" ).css({ "display" : "none" });
    $( "#map" ).css({ "display" : "block" });
    $( ".is-login-window" ).css({ "display" : "none" });
    $(".is-escurecimento-fundo").css({ "display" : "none" });
    findNearbyBars();
    $( ".is-text-place" ).css({ "display" : "none" });
    $( ".is-leaderboard" ).css({ "display" : "block" });
    $( ".is-bar-name" ).html( getNearestBarName() );
}
