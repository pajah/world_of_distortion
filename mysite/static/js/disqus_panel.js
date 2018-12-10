$(document).ready(function() {
    $('#disqus_panel').click(function(){
        if ($(this).hasClass('visible')) {
            $(this).removeClass('visible');
        }
        else {
            $(this).addClass('visible');
        }
    });
});
