(function($) {
    $.fn.placeholdit = function() {
        this.find('img').each( function(i,element) {
            var w, h;
            w = element.width;
            h = element.height;
            if(w&&h) {
                var src='http://placehold.it/'+w+'x'+h;
                element.src=src;
            }
        });
    };
})(jQuery);
