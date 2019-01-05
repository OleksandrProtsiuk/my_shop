// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require jquery
//= require jquery_ujs
// require rails-ujs
//= require activestorage
// require turbolinks
//= require_tree .


$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

$(document).ready(function () {
    $(location).attr('pathname');
    $('.link').each(function () {
        let l = $(this).attr('href');
        if(l === location.pathname){
            $(this).toggleClass('text-success');
        }
    })
});

$(document).ready(function () {
    $('#search').on('submit', function(event) {
        event.preventDefault();
        let txt = $('#search-field').val();
        $('#root').replaceWith($('#results').text(txt).removeAttr('hidden'));
    });
});
