$(document).ready(function() {

    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'demo', 'service', 'blog', 'contact'],
        menu: '#menu',
        css3: true
    });


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


    $( ".qq-upload-button" ).click(function() {
        setTimeout(function () {

            $(".progress").css('opacity', 1);

            $('.progress .bar').animate({
                    opacity: 1,
                    width: 330,
                    percent: 100
                },
                {
                    complete: function(){
                        $(".progress").css('display', 'none');
                        $(".default").css('display', 'none');
                        $(".upcomp").css('display', 'block');
                    }
                }
            );

        }, 4000);
    })



});


