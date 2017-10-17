require('./less/import.less');

let loader = require('./js/loader.js');
loader.loadContent().then(
    () => {
        require('./js/header.js');
    }
);