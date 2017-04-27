window.onscroll = function() {
    $('#topScrollButton').css({'display' : document.body.scrollTop > 5 || document.documentElement.scrollTop > 5 ? 'block' : 'none'});
};

function toTop() {
    $("html, body").animate({scrollTop: 0}, 500);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function scrollWork() {
    var scrollOffset = $("#showcaseStart").offset().top - $("#navbar").outerHeight(true);
    console.log(scrollOffset);
    $("html, body").animate({scrollTop: scrollOffset}, 500)
}