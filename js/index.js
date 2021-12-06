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

function sliderCatalog() {
    var swiper = new Swiper('#catalog-slider1 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: '#catalog-slider1 .swiper-button-next',
            prevEl: '#catalog-slider1 .swiper-button-prev',
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
                slidesPerView: 2,
                spaceBetween: 10
            },
            992: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        }
    })
}

function sliderCatalog2() {
    var swiper = new Swiper('#catalog-slider2 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: '#catalog-slider2 .swiper-button-next',
            prevEl: '#catalog-slider2 .swiper-button-prev',
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
                slidesPerView: 2,
                spaceBetween: 10
            },
            992: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        }
    })
}

function sliderCatalog3() {
    var swiper = new Swiper('#catalog-slider3 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: '#catalog-slider3 .swiper-button-next',
            prevEl: '#catalog-slider3 .swiper-button-prev',
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
                slidesPerView: 2,
                spaceBetween: 10
            },
            992: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        }
    })
}

function gallery() {
    var swiper = new Swiper(".catalog-item .mySwiper", {
        spaceBetween: 35,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".catalog-item .mySwiper2", {
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
    });
}

$(document).ready(function() {
    sliderMain()
    sliderDiscount()
    sliderHit()
    sliderService()
    sliderCatalog()
    sliderCatalog2()
    sliderCatalog3()
    gallery()
    cartCalc()

    $('.customScroll').mCustomScrollbar({
        axis: "x",
    });

    $(".custom-select").niceSelect()
    $(".city-select").niceSelect()

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

    $(".catalog__sidebar-all").click(function() {
        $(this).siblings(".catalog__sidebar-link").removeClass("catalog__sidebar-link--hidden")
    })


    $(".catalog__sidebar-title").click(function(e) {
        e.preventDefault()
        $(this).toggleClass("catalog__sidebar-title--active")
    })

    $(".catalog-nav__back").click(function(e) {
        e.preventDefault()
        $(this).toggleClass("catalog-nav__back--active")
    })

    $(".catalog-filter__title").click(function(e) {
        $(this).toggleClass("catalog-filter__title--active")
    })

    $(".catalog-filter__open").click(function() {
        $(".catalog-filter").slideToggle()
    })


    const rangeSlider = document.getElementById("range-slider")
    const rangeInput0 = document.getElementById("input-range0")
    const rangeInput1 = document.getElementById("input-range1")
    const rangeInputs = [rangeInput0, rangeInput1]
    if (rangeSlider) {
        noUiSlider.create(rangeSlider, {
            start: [0, 999999],
            connect: true,
            step: 1,
            range: {
                'min': 0,
                'max': 999999
            }
        });
    }
    if (rangeSlider) {
        rangeSlider.noUiSlider.on('update', function(values, handle) {
            rangeInputs[handle].value = Math.round(values[handle])
        })
        rangeInputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setRangeSlider(index, e.currentTarget.value)
            })
        })
    }


    const setRangeSlider = (i, value) => {
        let array = [null, null];
        array[i] = value;

        rangeSlider.noUiSlider.set(array);
    };


    $(".catalog-filter__all").click(function() {
        $(this).siblings(".catalog-filter__check").removeClass("catalog-filter__check--hidden")
    })

    $(".catalog-item__tab").click(function() {
        let path = $(this).attr("data-tabs-path")
        $(".catalog-item__tab").removeClass("catalog-item__tab--active")
        $(`.catalog-item__tab[data-tabs-path="${path}"]`).addClass("catalog-item__tab--active")
        $(".catalog-item__content").removeClass("catalog-item__content--active")
        $(`.catalog-item__content[data-content-path="${path}"]`).addClass("catalog-item__content--active")

    })
})



function cartCalc() {
    $('.ccalc .ccalc-minus').click(function() {
        console.log(true)
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