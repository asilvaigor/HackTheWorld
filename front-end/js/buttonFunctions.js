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
}
