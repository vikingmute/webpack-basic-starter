//some shitty jquery plugin...
(function ( $ ) {
    const shade = "#556b2f";
    $.fn.greenify = function() {
        this.css( "color", shade );
        return this;
    };
}( jQuery ));
