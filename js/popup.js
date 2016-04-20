/*
 *  popup events
 */

(function() {
    $(document).ready(function(){
        $('.popup').hide();
        $('.popup').on('click', function() {
            $(this).hide();
        });
        $('.content').click(function(event){
            event.stopPropagation();
        });
        $(document).keyup(function(e) {
            if (e.keyCode == 27) {
                $('.popup').hide();
            }
        });
    })
})()