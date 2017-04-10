$(document).ready(function() {

    //page
    var fullPageCreated = false;
    createFullpage();

    function createFullpage() {
        $('.section').each(function( index ) {
            $(this).attr('id', '').attr('style', '')
        });
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
            var sectionH =  $(window).height();
            $('.section').css('height', sectionH);
            $('.section').each(function( index ) {
                var value = $(this).attr('class').substring(8);
                $(this).attr('id', value)
            });
        }
    });



    //blog
    $('.autoplay').slick({
        slidesToShow: 3,
        //dots: true,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
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
                        $(".upload-view .default").css('display', 'none');
                        $(".updefault").css('display', 'none');
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

    $(".menu").click(function() {
        $('.menu-trigger').trigger('click');
    });


    //modal
    var modalHeight = $(window).height();

    if ($(window).width() <= 500) {
        $(".scrollDiv").css('height', modalHeight);
    } else if($(window).width() <= 979) {
        $(".scrollDiv").css('height', modalHeight - 100);
    } else if($(window).width() <= 1214) {
        $(".scrollDiv").css('height', modalHeight - 300);
    } else {
        $(".scrollDiv").css('height', modalHeight - 300);
    }

    $(document).on('click', '.sliderItem', function() {
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
    });


    //demo toggle
    $(".toggle-box .toggle").click(function() {
        $(".toggle-box .toggle").removeClass( "active" );
        $( this ).toggleClass( "active" );
    });


});


