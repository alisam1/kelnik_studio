$(function () {
    $(".main__card").slice(0, 12).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".main__card:hidden").slice(0, 20).slideDown();
        if ($(".main__card:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

$('a[href="#top"]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#top_button a').fadeIn();
    } else {
        $('#top_button a').fadeOut();
    }
});

var main__card = jQuery(".main__card")
$('.sort__button').click(function(){
                main__card.sortElements(function(a, b){
                    return $(a).text() > $(b).text() ? 1 : -1;
                });
            });
