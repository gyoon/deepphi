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


    // chart
    $('.chart01').easyPieChart({
        lineWidth: 18,
        size: 290,
        trackColor: '#d1d1d1',
        barColor: '#ff0000',
        lineCap: 'butt'
    });

    $('.chart02').easyPieChart({
        lineWidth: 18,
        size: 290,
        trackColor: '#d1d1d1',
        barColor: '#0060f0',
        lineCap: 'butt'
    });

    $('.chart03').easyPieChart({
        lineWidth: 18,
        size: 290,
        trackColor: '#d1d1d1',
        barColor: '#ffd200',
        lineCap: 'butt'
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


});


