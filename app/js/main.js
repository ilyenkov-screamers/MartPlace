$(function() {
    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "12px",
        readOnly: true,
        normalFill: "#fff",
    });

    $(".product__items").slick({
        nextArrow: '<button class="slick-arrow__right slick-next"></button>',
        prevArrow: '<button class="slick-arrow__left slick-prev"></button>',
    });

    $(".prodict__slider-items").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: '<button class="slick-arrow__right-btn slick-next"></button>',
        prevArrow: '<button class="slick-arrow__left-btn slick-prev"></button>',
    });

    $(".product-btn__filter-list").on("click", function() {
        $(".product-btn__filter-list").addClass("activ");
    });

    var mixer = mixitup(".product-btn__items");
});