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
