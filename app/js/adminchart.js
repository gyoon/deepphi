$(document).ready(function() {

    $(window).resize(function(){

        $('.chart01').removeData('easyPieChart').find('canvas').remove()
        $('.chart02').removeData('easyPieChart').find('canvas').remove()
        $('.chart03').removeData('easyPieChart').find('canvas').remove()
        chartInit();
    });

    chartInit();

    function chartInit() {
        if ($(window).width() <= 500) {
            // is mobile device
            // chart
            $('.chart01').easyPieChart({
                lineWidth: 8,
                size: 120,
                trackColor: '#d1d1d1',
                barColor: '#ff0000',
                lineCap: 'butt ',
                scaleColor: 'transparent'
            });

            $('.chart02').easyPieChart({
                lineWidth: 8,
                size: 120,
                trackColor: '#d1d1d1',
                barColor: '#0060f0',
                lineCap: 'butt',
                scaleColor: 'transparent'
            });

            $('.chart03').easyPieChart({
                lineWidth: 8,
                size: 120,
                trackColor: '#d1d1d1',
                barColor: '#ffd200',
                lineCap: 'butt',
                scaleColor: 'transparent'
            });

        } else if($(window).width() <= 979) {
            // chart
            $('.chart01').easyPieChart({
                lineWidth: 12,
                size: 190,
                trackColor: '#d1d1d1',
                barColor: '#ff0000',
                lineCap: 'butt ',
                scaleColor: 'transparent'
            });

            $('.chart02').easyPieChart({
                lineWidth: 12,
                size: 190,
                trackColor: '#d1d1d1',
                barColor: '#0060f0',
                lineCap: 'butt',
                scaleColor: 'transparent'
            });

            $('.chart03').easyPieChart({
                lineWidth: 12,
                size: 190,
                trackColor: '#d1d1d1',
                barColor: '#ffd200',
                lineCap: 'butt',
                scaleColor: 'transparent'
            });
        } else if($(window).width() <= 1214) {
            // chart
            $('.chart01').easyPieChart({
                lineWidth: 15,
                size: 220,
                trackColor: '#d1d1d1',
                barColor: '#ff0000',
                lineCap: 'butt ',
                scaleColor: 'transparent'
            });

            $('.chart02').easyPieChart({
                lineWidth: 15,
                size: 220,
                trackColor: '#d1d1d1',
                barColor: '#0060f0',
                lineCap: 'butt',
                scaleColor: 'transparent'
            });

            $('.chart03').easyPieChart({
                lineWidth: 15,
                size: 220,
                trackColor: '#d1d1d1',
                barColor: '#ffd200',
                lineCap: 'butt',
                scaleColor: 'transparent'
            });
        } else {
            // chart
            $('.chart01').easyPieChart({
                lineWidth: 18,
                size: 290,
                trackColor: '#d1d1d1',
                barColor: '#ff0000',
                lineCap: 'butt ',
                scaleColor: 'transparent'
            });

            $('.chart02').easyPieChart({
                lineWidth: 18,
                size: 290,
                trackColor: '#d1d1d1',
                barColor: '#0060f0',
                lineCap: 'butt',
                scaleColor: 'transparent'
            });

            $('.chart03').easyPieChart({
                lineWidth: 18,
                size: 290,
                trackColor: '#d1d1d1',
                barColor: '#ffd200',
                lineCap: 'butt',
                scaleColor: 'transparent'
            });
        }
    }


});


