module.exports.loadContent = () => {
    let header = new Promise((resolve, ) => { $('.header-container').load('partial/header.html', () => resolve()); });
    let footer = new Promise((resolve, ) => { $('.footer-container').load('partial/footer.html', () => resolve()); });
    let modals = new Promise((resolve, ) => { $('.modals').load('partial/modals.html', () => resolve()); });

    let screen1 = new Promise((resolve, ) => { $('.screen-container-1').load('partial/screen-1.html', () => resolve()); });
    let screen2 = new Promise((resolve, ) => { $('.screen-container-2').load('partial/screen-2.html', () => resolve()); });
    let screen3 = new Promise((resolve, ) => { $('.screen-container-3').load('partial/screen-3.html', () => resolve()); });
    let screen4 = new Promise((resolve, ) => { $('.screen-container-4').load('partial/screen-4.html', () => resolve()); });
    let screen5 = new Promise((resolve, ) => { $('.screen-container-5').load('partial/screen-5.html', () => resolve()); });
    let screen6 = new Promise((resolve, ) => { $('.screen-container-6').load('partial/screen-6.html', () => resolve()); });
    let screen7 = new Promise((resolve, ) => { $('.screen-container-7').load('partial/screen-7.html', () => resolve()); });
    let screen8 = new Promise((resolve, ) => { $('.screen-container-8').load('partial/screen-8.html', () => resolve()); });
    let screen9 = new Promise((resolve, ) => { $('.screen-container-9').load('partial/screen-9.html', () => resolve()); });

    return new Promise((resolve) => {
        Promise.all([header, footer, modals, screen1, screen2, screen3, screen4, screen5, screen6, screen7, screen8, screen9]).then(
            () => { resolve();}
        )
    });
};

