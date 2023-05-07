
$(document).ready(function () {
    $('.menu-item').bind('click', function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        window.scrollTo({ top: $(target).offset().top + 10, behavior: "smooth" });
        return false;
    });

    var scrollReveal = function () {
        window.sr = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 2500,
            delay: 400,
            reset: true
        })

        sr.reveal(".scroll-reveal-top-down", { delay: 300 });
        sr.reveal(`.scroll-reveal-bottom-up`, { delay: 400, origin: 'bottom' });
    }

    scrollReveal();
});

$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    $('.page-section').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('.fixed-menu a.active').removeClass('active');
            $('.fixed-menu a').eq(i).addClass('active');
        }
    });
}).scroll();