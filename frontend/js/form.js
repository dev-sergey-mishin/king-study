$(document).ready(() => {
    let SendMessage = require('./submit.js');
    let Inputmask = require('inputmask');
    let scrollToElement = require('scroll-to-element');

    let $allForms = $('[data-form="form"]');
    let im = new Inputmask("+7 (999) 999-99-99");
    im.mask('[data-form="phone"]');

    $allForms.map((index) => {
        let $form = $($allForms[index]);
        let $name = $form.find('[data-form="name"]');
        let $phone = $form.find('[data-form="phone"]');
        let $email = $form.find('[data-form="email"]');
        let $submit = $form.find('[data-form="submit"]');
        let $accept = $form.find('[data-form="accept"]');

        $accept.change(() => {
            let checked = $accept[0].checked;
            $submit.attr('disabled', !checked);
        });

        $submit.click((e) => {
            let phoneValid = isPhoneValid($phone.val().replace(/\D/g, ''));
            let emailValid = isMailValid($email.val());

            if (phoneValid && emailValid) {
                openModalDone();
                SendMessage.submit($name.val(), $phone.val(), $email.val());
                try {
                    yaCounter46410024.reachGoal('uznat podrobnee');
                } catch (err) {
                    console.error('yandex counter not found');
                }
            }

            $('.error').removeClass('error');
            let phoneError = showError($phone, phoneValid);
            let mailError = showError($email, emailValid);
            Promise.all([phoneError, mailError]).then(() => {
                if (!$submit.data('scroll')) {
                    let $error = $('.error');
                    if ($error.length) {
                        scrollToElement('.error', {
                            offset: -100
                        });
                    }
                }
            })


        });
    });
});

const showError = ($elem, isValid) => {
    return new Promise((resolve) => {
        if (!isValid) {
            $elem.addClass('error');
            $elem.removeClass("bounce");
            $elem.offsetWidth = $elem.offsetWidth;
            $elem.addClass("bounce");
            setTimeout(() => {
                $elem.removeClass("bounce");
            }, 1000);
        } else {
            $elem.removeClass('error');
        }

        resolve();
    });
};

const isPhoneValid = (phone) => {
    if (phone == null) return true;
    return phone.length > 10 && phone.length < 13;
};

const isMailValid = (email) => {
    if (email == null || email.length === 0) return true;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};