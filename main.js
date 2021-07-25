window.addEventListener('hashchange', function() {
    if(window.location.hash) {
        tag(window.location.hash);
    } else {
        tag('#home');
    }
}, false);

function tag ( t ) {
    if( $('.current').length > 0 ){
        $('.current').removeClass('current').fadeOut('fast', function() {
            $(t).fadeIn().addClass('current');
        });
    } else {
        $(t).fadeIn().addClass('current');
    }
}
