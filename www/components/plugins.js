// This is a JavaScript file
$(document).on("click", "#alerta", function(){
    function retorno ()
    {
        
    }
     navigator.notification.alert("Minha Mensagem",retorno, "Aviso!","Aceito");
});

$(document).on("click", "#confirm", function(){
    function confirma (buttonIndex) {
    navigator.notification.alert(buttonIndex);
    }
navigator.notification.confirm("Escolha A ou B", confirma, "Escolha:", ['A', 'B']);
});
$(document).on("click", "#beep", function() { 
    navigator.notification.beep (4);
});
$(document).on("click", "#vibration", function() { 
    navigator.vibrate.vibration;
});
