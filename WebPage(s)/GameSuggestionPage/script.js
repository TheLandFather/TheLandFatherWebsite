$(document).ready(function() {
    // Fade in the body when the page loads
    $('body').css('opacity', '0').animate({opacity: 1}, 2000);

    // Function to show the box with fade effect
    function showBox(boxId) {
        $(boxId).css('display', 'flex').animate({opacity: 1}, 500);
    }

    // Function to hide the box with fade effect
    function hideBox(boxId) {
        $(boxId).animate({opacity: 0}, 500, function() {
            $(this).css('display', 'none');
        });
    }

    $('.icon img').click(function() {
        var genre = $(this).attr('alt').replace(/\s/g, '');
        showBox('#'+genre+'Box');
    });

    $('.box button').click(function() {
        hideBox($(this).closest('.box'));
    });

    $('#OfflineBotGames').click(function() {
        window.open('https://www.offlinebots.com', '_blank');
    });
});
