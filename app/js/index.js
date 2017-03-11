$(document).ready(function() {

    $('#fullpage').fullpage();


    $('.autoplay').slick({
        slidesToShow: 3,
        //dots: true,
        slidesToScroll: 1,
        autoplay: false
    });


    $('#fine-uploader-gallery').fineUploader({
        template: 'qq-template-gallery',
        request: {
            endpoint: '/server/uploads'
        },
        thumbnails: {
            placeholders: {
                waitingPath: '/source/placeholders/waiting-generic.png',
                notAvailablePath: '/source/placeholders/not_available-generic.png'
            }
        },
        validation: {
            allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
        }
    });

});


