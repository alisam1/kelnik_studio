$('.sort__room').click(function(){
    var $elements = $('.card__title');
    var $target = $('.main__choise');

    $elements.sort(function (a, b) {
        var an = $(a).text(),
            bn = $(b).text();

        if (an && bn) {
            return an.toUpperCase().localeCompare(bn.toUpperCase());
        }

        return 0;
    });

    $elements.detach().appendTo($target);
});
