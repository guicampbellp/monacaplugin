// This is a JavaScript file
$(document).on("click", "#alerta", function(){
    function retorno ()
    {       
    }
     navigator.notification.alert("Bem-vindo professor, dá um MB ai :)",retorno, "Aviso!","Dar MB");
});

$(document).on("click", "#confirm", function(){
    function confirma (buttonIndex) {
if(buttonIndex == "1"){
navigator.notification.alert("Escolheu MB, boa Professor!!!");
    }else{
navigator.notification.alert("Opção inválida, só tem MB");
}
}
navigator.notification.confirm("Escolha B ou MB", confirma, "Escolha:",['MB','B']);
});



$(document).on("click", "#beep", function() { 
    navigator.notification.beep (4);
});
$(document).on("click", "#vibration", function() { 
    navigator.vibrate;
});