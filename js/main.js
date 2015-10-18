
document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    console.log("hello");
    $('h1').ready(function() {
        $('h1').fadeIn(1600)
            /*.animate({
            'marginTop': '-=10%'
        }, 'slow', function() {
            // Animation complete.
        });*/
    });

});