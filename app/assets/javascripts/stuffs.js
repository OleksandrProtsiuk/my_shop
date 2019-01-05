//= require jquery
//= require jquery_ujs
//= require activestorage
//= require_tree .


$(document).ready(function () {
    let count = 120 - $('#short-description').val().length;
    $('#inputted').text(count);

    $(this).keyup(function () {
        let currentCount = 120 - $('#short-description').val().length;
        let res = count - (count - currentCount);
        if(res < 0 || res === 0){
            $('#inputted').text(res).css({'color': 'red'});
        }else{
            $('#inputted').text(res).css({'color': 'black'});
        }
        console.log(count + '-' + currentCount + '=' +res);
    })
});
