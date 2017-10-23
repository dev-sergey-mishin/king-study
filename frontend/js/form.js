$(document).ready(() => {
    let $allForms = $('[data-form="form"]');

    let Inputmask = require('inputmask');
    let im = new Inputmask("+7 (999) 999-99-99");
    im.mask('[data-form="phone"]');

    $allForms.map((index) => {
        let $form = $($allForms[index]);
        let $name = $form.find('[data-form="name"]');
        let $phone = $form.find('[data-form="phone"]');
        let $email = $form.find('[data-form="email"]');
        let $submit = $form.find('[data-form="submit"]');
        let $accept = $form.find('[data-form="accept"]');

        $accept.change((event) => {
            let checked = $accept[0].checked;
            $submit.attr('disabled', !checked);
            if (!checked) {

            }
        });


        $submit.click((e) => {
            let phoneValid = isPhoneValid($phone.val().replace(/\D/g, ''));
            let emailValid = isMailValid($email.val());

            if (phoneValid && emailValid) {
                openModalDone();
            }

            if (!phoneValid) {
                $phone.addClass('error');
                $phone.removeClass("bounce");
                $phone.offsetWidth = $phone.offsetWidth;
                $phone.addClass("bounce");

                setTimeout(() => {
                    $phone.removeClass("bounce");
                }, 1000);
            } else {
                $phone.removeClass('error');
            }
            if (!emailValid) {
                $email.addClass('error');
                $email.removeClass("bounce");
                $email.offsetWidth = $email.offsetWidth;
                $email.addClass("bounce");

                setTimeout(() => {
                    $email.removeClass("bounce");
                }, 1000);
            } else {
                $email.removeClass('error');
            }

        });
    });
});

const isPhoneValid = (phone) => {
    if (phone == null) return true;
    return phone.length > 10 && phone.length < 13;
};

const isMailValid = (email) => {
    if (email == null || email.length === 0) return true;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};