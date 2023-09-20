$(document).ready(function () {
    $(".header__right-search .form .input").val("Từ khóa tìm kiếm")
    $(".header__right-search .form .input").on('click', function (e) {
        e.stopPropagation()
        $(this).val("")
    })

    $(document).on("click", function () {
        $(".header__right-search .form .input").val("Từ khóa tìm kiếm")
    })

    $('.single__list').slick({
        dots: true,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.product .product__list').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        prevArrow: $('.product__prev'),
        nextArrow: $('.product__next'),
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
        ]
    });
    $('.standout__list').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: '20px',
    })


    $('.referrence__nav').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '130px',
        asNavFor: '.referrence__for',
        arrows: false,
    });
    $('.referrence__for').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '130px',
        asNavFor: '.referrence__nav',
        focusOnSelect: true
    });


    $(".refference__img-nav").click(function () {

        $(".referrence__modal-nav li").removeClass("active");

        $(".refference__img-for").attr("src", $(this).attr('src'))

        $(this).parent().addClass('active');

    })



    $(".icon.next").click(function () {
        let index = $(".referrence__modal-nav .active").index()
        if (index >= $(".referrence__modal-nav li").length - 1) {
            index = -1
        }
        const img = $(".refference__img-nav")[index + 1]
        $(".refference__img-for").attr("src", $(img).attr('src'))
        $(".referrence__modal-nav li").removeClass("active");
        $($(".referrence__modal-nav li")[index + 1]).addClass('active')
    })

    $(".icon.prev").click(function () {
        let index = $(".referrence__modal-nav .active").index()
        if (index <= 0) {
            index = $(".referrence__modal-nav li").length
        }
        const img = $(".refference__img-nav")[index - 1]
        $(".refference__img-for").attr("src", $(img).attr('src'))
        $(".referrence__modal-nav li").removeClass("active");
        $($(".referrence__modal-nav li")[index - 1]).addClass('active')
    })

    $(".referrence__modal .close").click(function() {
        $(".referrence__modal").removeClass("active")
    })

    $(".referrence__nav img").click(function(){
        $(".referrence__modal").addClass('active')
    })


})

