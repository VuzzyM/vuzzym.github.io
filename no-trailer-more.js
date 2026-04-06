(function () {
    'use strict';	
    
    Lampa.Listener.follow('full', function (e) {
        if (e.type == 'complite') {
            // Remove the "Trailer" button
            e.object.activity.render().find('.view--trailer').remove();
            
            // Remove the "More" button
            e.object.activity.render().find('.button--options').remove();

            // Hide Microphone
            $('head').append('<style>.simple-keyboard-mic,[data-skbtn="{mic}"]{display:none!important;}</style>');
        }
    });
})();