$(document).ready(function () {
    $(".faqList p").hide();

    $(".faqList h3").click(function() {
        $(this).next("p").slideToggle("flow");
    });
})