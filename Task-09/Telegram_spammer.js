var message = "Hi";
var timer = setInterval(function(){
    document.getElementsByClassName('composer_rich_textarea')[0].innerHTML = message;
    $('.im_submit').trigger('mousedown');    
} , 100 ) ;
