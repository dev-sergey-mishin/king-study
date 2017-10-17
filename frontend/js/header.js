$(document).ready(() => {
    let mobileMenu = $('.mobile-menu');
    let mobileMenuButton = mobileMenu.find('.mobile-menu-button');
    let mobileMenuToggle = mobileMenu.find('.mobile-menu-toggle');

    mobileMenuButton.click((e) => {
        mobileMenuButton.toggleClass('active');
        mobileMenuToggle.toggleClass('active');
    });

});
