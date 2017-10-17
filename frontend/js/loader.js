module.exports.loadContent = () => {
    return new Promise((resolve, reject) => {
        $('.header-container').load('partial/header.html');

        $('.screen-container-1').load('partial/screen-1.html');
        $('.screen-container-2').load('partial/screen-2.html');
        $('.screen-container-3').load('partial/screen-3.html');
        $('.screen-container-4').load('partial/screen-4.html');
        $('.screen-container-5').load('partial/screen-5.html');
        $('.screen-container-6').load('partial/screen-6.html');
        $('.screen-container-7').load('partial/screen-7.html');
        $('.screen-container-8').load('partial/screen-8.html');
        $('.screen-container-9').load('partial/screen-9.html');

        $('.footer-container').load('partial/footer.html', () => {
            resolve();
        });
    });
};

