
window.responsive = function responsive() {



    var slider = $('.owl-carousel');

    slider.owlCarousel({
        margin:10,
        rtl:true,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    $('.icons-Arrow-Left').click(function () {
        slider.trigger('next.owl.carousel');
    });
    $('.icons-Arrow-Right').click(function () {
        slider.trigger('prev.owl.carousel');
    });

}
//Call the function on load and resize
$(window).on('ready load resize orientationchange', function () {
    responsive();
});
/---------------------------------search-large-------------------------------------------------/
$(".search input").click(function () {
            $(".search").css({
            width: "340",
            transition: ".222s"
        })
})

$('body').click(function(evt){
    if(evt.target.id == "search")
        return;
    if($(evt.target).closest('#search').length)
        return;

    $(".search").css({
        width:300
    })


});
//---------------------------------search-large----------------------

//-------------------menu-fix---------------------------------
(window), function (t) {
    t.fn.equalHeights = function () {
        var e = 0, i = t(this);
        return i.each(function () {
            var i = t(this).innerHeight();
            i > e && (e = i)
        }), i.css("height", e)
    }, t("[data-equal]").each(function () {
        var e = t(this), i = e.data("equal");
        e.find(i).equalHeights()
    })
}(jQuery), $(window).scroll(function () {
    var t = $(window).scrollTop();
    t >= $(".headerLargeBottom").offset().top ? $(".headerLargeBottom > div").addClass("FixMenuLarge") : $(".headerLargeBottom > div").removeClass("FixMenuLarge");
    t >= $(".headerLargeBottom").offset().top+50 ? $(".headerLargeBottom > div").addClass("FixMenuLarge-h") : $(".headerLargeBottom > div").removeClass("FixMenuLarge-h");
    t >= $(".headerLargeBottom").offset().top+50 ? $(".logo").addClass("logo-off") : $(".logo").removeClass("logo-off");
    t >= $(".headerLargeBottom").offset().top+50 ? $(".logo-title").addClass("logo-title-off") : $(".logo-title").removeClass("logo-title-off");
    t >= $(".headerLargeBottom").offset().top+50 ? $(".menuLarge").addClass("menuLarge-off") : $(".menuLarge").removeClass("menuLarge-off");
});
//-------------------menu-fix---------------------------------
//-------------------------------menu-responsive------------
$(".MenuItems li > div i").click(function () {
    var t = $(this);
    t.parent("div").siblings("ul").stop().slideToggle(), t.parents("li").siblings("li").children("ul").slideUp(), t.parents("li").siblings("li").children("div").children("i").removeClass("OpenCloseMenuS"), t.toggleClass("OpenCloseMenuS")
}), $(".BlackPage,.ButtonCloseMenuS i").click(function () {
    $(".MenuItems").css("right", ""), $(".BlackPage,.SearchBox").fadeOut(), $("html,body").css({
        overflow: "",
        width: ""
    })
}), $(".searchLarge").click(function () {
    $(".BlackPage,.SearchBox").fadeIn(), body()
}), $(".IconMenuSmall").click(function () {
    $(".MenuItems").css("right", "0"), $(".BlackPage").fadeIn()
}), $(".IconSearchSmall").click(function () {
    $(".BlackPage,.SearchBox").fadeIn(), body()
})
//-------------------------------menu-responsive------------



//------------------------------archive------------------------

    $(".archive ul > li aside").css("height", "");
    $(".archive ul > li aside").equalHeights()


//------------------------------archive------------------------

$('.LeftContentSite').theiaStickySidebar({
    'containerSelector': '.ThisFactorSticky',
    'additionalMarginTop': 80,
    'additionalMarginBottom': 25,
})

if ($(".left-panel")[0]) {
    $('.left-panel').theiaStickySidebar({
        'containerSelector': '.Single',
        'additionalMarginTop': 70,
        'additionalMarginBottom': 25,
    })
}


if ($(".SocialNetwork")[0]) {
    $('.SocialNetwork').theiaStickySidebar({
        'containerSelector': '.Single',
        'additionalMarginTop': 80,
        'additionalMarginBottom': 25,
    })
}




$(document).ready(function () {
    $('select').material_select();
});

$(document).ready(function() {
    $("#lightgallery").lightGallery({
        thumbnail:false
    });
});