$(function() {
    $(".nav-item-products").hover(function() {
        $(this).find(".navpopup-products").fadeIn();
    }, function() {
        $(this).find(".navpopup-products").fadeOut();
    })
})