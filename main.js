function tab(t){
    if( $('.current').length > 0 ){
        $('.current').removeClass('current').fadeOut('fast', function() {
            $('#' + t).fadeIn().addClass('current');
        });
    } else {
        $('#' + t).fadeIn().addClass('current');
    }

}
