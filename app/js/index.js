$(document).ready(function() {

    //page
    var fullPageCreated = false;
    createFullpage();

    function createFullpage() {
        if(fullPageCreated === false) {
            fullPageCreated = true;
            $('#fullpage').fullpage({
                anchors: ['home', 'about', 'demo', 'service', 'blog', 'contact'],
                menu: '#menu',
                css3: true,
                normalScrollElements: '.remodal'
            });
        }
    }

    $(window).on( "orientationchange", function( event ) {
        if(window.innerHeight > window.innerWidth){
            createFullpage();
        } else {
            fullPageCreated = false;
            $.fn.fullpage.destroy('all');
        }
    });



    //blog
    $('.autoplay').slick({
        slidesToShow: 3,
        //dots: true,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    /*var isMobile = $(window).width();
    function blogInit() {
        if(isMobile < 980) {

        } else {

        }
    }
     blogInit();

     $( window ).resize(function() {
     $('.autoplay').slick('unslick');
     blogInit();
     });
    */




    ///demo
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


    //burger
    var burger = $('.menu-trigger');

    burger.each(function(index){
        var $this = $(this);

        $this.on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('active-' + (index+1));
        })
    });


    //modal
    var modalHeight = $(window).height();

    $(".scrollDiv").css('height', modalHeight - 100);


});


