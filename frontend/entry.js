require('./less/import.less');

let loader = require('./js/loader.js');

$(document).ready(() => {
    loader.loadContent().then(
        () => {
            require('./js/header.js');
            require('./js/screen-2.js');
            require('./js/slider.js');

            try {
                WebFont.load({
                    google: { families: ['Open+Sans:400,600,800'] }
                });
            } catch (err) {
                console.log('WebFont not found');
            }

        }
    );
});