$(document).ready(() => {
    let $modal = $('.modal-window');
    $modal.map((index) => {
        let $currentModal = $($modal[index]);
        let $close = $currentModal.find('.close');
        let $layer = $currentModal.find('.modal-layer');

        $close.click(() => {
            $currentModal.addClass('hide');
        });
        $layer.click(() => {
            $currentModal.addClass('hide');
        });
    });
});

window.openModalForm = () => {
    $('#modal-form').removeClass('hide');
};
window.openModalDone = () => {
    $('#modal-form').addClass('hide');
    $('#modal-done').removeClass('hide');
};
window.openPolicy = () => {
    $('#modal-form').addClass('hide');
    $('#modal-done').addClass('hide');
    $('#modal-policy').removeClass('hide');
};
window.openVideoModal = () => {
    document.getElementById('modal-video').classList.remove('hide');
};

setTimeout(() => window.openVideoModal(), 30000);