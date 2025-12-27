$(document).ready(function(){

    $('.container').hide().fadeIn(1200);

    $('.carousel-item img').mouseenter(function() {
        $(this).css("transform", "scale(1.05)").css("transition", "0.3s");
    }).mouseleave(function() {
        $(this).css("transform", "scale(1)");
    });

    $('#secretGoober').dblclick(function() {
        $('#homeTitle').css("color", "gold");
        alert("You found the secret Goober! 👀");
    });

    $(".dropdown").hover(
        function () {
            $(this).find(".dropdown-menu").stop(true, true).slideDown(200);
        },
        function () {
            $(this).find(".dropdown-menu").stop(true, true).slideUp(200);
        }
    );

    $(".card").hover(
        function () {
            $(this).css("transform", "scale(1.05)");
        },
        function () {
            $(this).css("transform", "scale(1)");
        }
    );

    $(".profile-button").on("click", function () {
        $(this).text("Loading...");
    });

    $("#Goober_Carousel").hover(
        function () {
            $(this).carousel("pause");
        },
        function () {
            $(this).carousel("cycle");
        }
    );


});