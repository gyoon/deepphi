$(document).ready(function() {

    //image detail

    $('.item').click(function() {
        $(this).addClass('on')
        $(this).find('.bar').attr('style', 'width: 40%;background-color: #ff0000');
        $(this).find('.percent').css('display', 'inline-block');
    });


    //datepicker
    if($('[data-toggle="datepicker"]').length) {
        $('[data-toggle="datepicker"]').datepicker();
    }



    //table sort toggle
    $( ".board-type1 .ico_arr" ).click(function() {
        $( this ).toggleClass( "down" );
    });

    //layout
    $( ".left-inter-section .min" ).click(function() {
        $('.left-section').removeClass( "max" );
        $('.left-section').addClass( "min" );
    });

    $( ".left-inter-section .normal" ).click(function() {
        $('.left-section').removeClass( "min" );
        $('.left-section').removeClass( "max" );
    });

    $( ".left-inter-section .max" ).click(function() {
        $('.left-section').removeClass( "min" );
        $('.left-section').addClass( "max" );
    });



});


