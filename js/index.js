function sliderMain() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        spped: 2500,
        navigation: {
            nextEl: ' .main .swiper-button-next',
            prevEl: ' .main .swiper-button-prev',
        },
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                spaceBetween: 30
            },
        }
    })
}

function sliderDiscount() {
    var swiper = new Swiper('.discount .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
            nextEl: '.discount .swiper-button-next',
            prevEl: '.discount .swiper-button-prev',
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            400: {
                slidesPerView: 1.5,
                spaceBetween: 15
            },
            576: {
                slidesPerView: 2,
            },
            790: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            },
        }
    })
}

function sliderHit() {
    var swiper = new Swiper('.hit .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
            nextEl: '.hit .swiper-button-next',
            prevEl: '.hit .swiper-button-prev',
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            400: {
                slidesPerView: 1.5,
                spaceBetween: 15
            },
            576: {
                slidesPerView: 2,
            },
            790: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            },
        }
    })
}

function sliderService() {
    var swiper = new Swiper('.service .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        // centeredSlides: true,
        // loop: true,
        spped: 2500,
        pagination: {
            el: '.service .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                spaceBetween: 30
            },
        }
    })
}


$(document).ready(function() {
    sliderMain()
    sliderDiscount()
    sliderHit()
    sliderService()

    $('.customScroll').mCustomScrollbar({
        axis: "x",
    });

    $(".custom-select").niceSelect()

    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7 (   )    -    ' });

    $(".header__catalog-btn").click(function() {
        $(this).addClass("header__catalog-btn--active")
        if (window.innerWidth < 780) {
            $(".header-catalog").show()
        } else {
            $(".header-catalog").slideDown()
        }
    })


    $(".header-catalog__tab").click(function() {
        let path = $(this).attr("data-tabs-path")
        $(".header-catalog__tab").removeClass("header-catalog__tab--active")
        $(`.header-catalog__tab[data-tabs-path="${path}"]`).addClass("header-catalog__tab--active")
        $(".header-catalog__content").removeClass("header-catalog__content--active")
        $(`.header-catalog__content[data-content-path="${path}"]`).addClass("header-catalog__content--active")
        if (window.innerWidth < 780) {
            $(".header-catalog__right").show()
            $(".header-catalog__left").hide()
        }
    })

    $(".header-catalog__back").click(function() {
        $(".header-catalog__right").hide()
        $(".header-catalog__left").show()
    })

    $(".header-catalog__close").click(function() {
        $(".header__catalog-btn").removeClass("header__catalog-btn--active")
        $(".header-catalog").hide()
    })

    $(".header-catalog__title").click(function() {
        if ($(this).hasClass("header-catalog__title--active")) {
            $(".header-catalog__title").removeClass("header-catalog__title--active")
        } else {
            $(".header-catalog__title").removeClass("header-catalog__title--active")
            $(this).addClass("header-catalog__title--active")
        }

    })

    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $(".header-catalog");
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide()
            if ($(".header__catalog-btn").hasClass("header__catalog-btn--active")) {
                $(".header__catalog-btn").removeClass("header__catalog-btn--active")
            }
        }
    });


    $(".nav__item").hover(onIn, onOut);
    $(".nav__item-show").click(function() {
        if ($(this).hasClass("nav__item-show--active")) {
            $(".nav__item-show").removeClass("nav__item-show--active")
        } else {
            $(".nav__item-show").removeClass("nav__item-show--active")
            $(this).addClass("nav__item-show--active")
        }

    })

})



function cartCalc() {
    $('.ccalc .ccalc-minus').click(function() {
        let a = $(this).closest('.ccalc').find('input').val();
        if (a > 1) {
            let b = +a - 1;
            $(this).closest('.ccalc').find('input').val(b);
        } else {
            $(this).closest('.ccalc').find('input').val(a);
            $(this).addClass("disabled");
        }
    });
    $('.ccalc .ccalc-plus').click(function() {
        let a = $(this).closest('.ccalc').find('input').val();
        let b = +a + 1;
        $(this).closest('.ccalc').find('input').val(b);
        $(this).siblings(".ccalc-minus").removeClass("disabled");
    });
}

function onIn() {
    if (window.innerWidth > 992) {
        let el = $(this)
        setTimeout(function() {
            if (el.is(':hover')) {
                console.log(el)
                el.children(".nav__item-show").addClass("nav__item-show--active")
            }
        }, 200);
    }
}

function onOut() {
    if (window.innerWidth > 992) {
        $(this).children(".nav__item-show").removeClass("nav__item-show--active")
    }
}