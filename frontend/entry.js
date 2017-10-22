require('./less/import.less');

let loader = require('./js/loader.js');

$(document).ready(() => {
    loader.loadContent().then(
        () => {
            require('./js/header.js');
            require('./js/screen-2.js');
            require('./js/slider.js');
            require('./js/modals.js');

            $('main').css('display', 'block');
            $('.loader-container').css('display', 'none');

            try {
                setTimeout(() => {
                    WebFont.load({
                        google: { families: ['Open+Sans:400,600,800'] }
                    });
                }, 100)
            } catch (err) {
                console.log('WebFont not found');
            }

        }
    );
});