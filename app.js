$(document).ready(function()
    {
        $( document ).click(function() {
        $( "#toggle" ).ready( "bounce", { times: 10}, "fast" );
        });
    });

    document.querySelector(".over").addEventListener("hover",hoverer);

    function hoverer(e){
        e.target.addClass('overlay');
    }