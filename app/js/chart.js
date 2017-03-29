$(document).ready(function() {

    if ($(window).width() <= 979) {
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



});


