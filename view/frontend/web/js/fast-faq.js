require([ 'jquery', 'domReady!'], function($){ $(document).ready(function($) {
    $(window).load(function() {
        {
            $('#fast-faq dt').click(function () {
                $(this).next('#fast-faq dd').slideToggle(500);
                $(this).toggleClass("expanded");
            });
            $('#fast-faq dd').hide();
        }
    });
}); });

