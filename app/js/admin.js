$(document).ready(function() {

   //image detail

    $('.item').click(function() {
        $(this).addClass('on')
        $(this).find('.bar').attr('style', 'width: 40%;background-color: #ff0000');
        $(this).find('.percent').css('display', 'inline-block');
    });


    //color picker
    $(".pick-a-color-no-spectrum").pickAColor({
        showSpectrum            : false,
        showSavedColors         : false,
        saveColorsPerElement    : true,
        fadeMenuToggle          : true,
        showHexInput            : false,
        showBasicColors         : true,
        allowBlank              : false,
        inlineDropdown          : true
    });


    //qna

    $('.qna-list li').click(function() {
        $('.qna-list li').removeClass('on')
        $(this).addClass('on');
    });

    $('.qna-list li .qna-active').click(function(event) {
        event.stopPropagation();
        var activeYn = $(this).parents('li').hasClass('on')
        if (activeYn) {
            $(this).parents('li').removeClass('on');
        } else {
            $(this).parents('li').addClass('on');
        }
    });


    //menu
    $('.more-button').click(function() {
        $(this).next().find('.bg').addClass('active')
        $(this).next().find('.more-wrap').addClass('active')
    });

    $('.more-wrap-container .bg').click(function() {
        $(this).removeClass('active')
        $(this).next('.more-wrap').removeClass('active')
    });


    //setting
    $('.disease-cell .edit-btn').click(function() {
        $(this).parent('.disease-cell').prev().find('.disease-form').attr('readonly', false).focus();
        $(this).css('display', 'none');
        $(this).next('.save-btn').css('display', 'block');
    });

    $('.setting-save').click(function() {
        $('.disease-cell').find('.disease-form').attr('readonly', true);
        $('.disease-cell .save-btn').css('display', 'none');
        $('.disease-cell .edit-btn').css('display', 'block');
    });


    //datepicker
    if($('[data-toggle="datepicker"]').length) {
        $('[data-toggle="datepicker"]').datepicker();
    }



    //table sort toggle
    $( ".board-type1 .ico_arr" ).click(function() {
        $( this ).toggleClass( "down" );
    });



});


