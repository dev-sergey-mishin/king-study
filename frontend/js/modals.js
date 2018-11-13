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

window.isShow = false;
const hideAllModels = () => {
    window.isShow = true;
    let allModals = document.querySelectorAll('.modal-window');
    if (allModals) {
        Array.from(allModals).map((modal) => {
            modal.classList.add('hide')
        })
    }
};

window.openModalForm = () => {
    hideAllModels();
    document.getElementById('modal-form').classList.remove('hide');
};
window.openModalDone = () => {
    hideAllModels();
    document.getElementById('modal-done').classList.remove('hide');
};
window.openPolicy = () => {
    hideAllModels();
    document.getElementById('modal-policy').classList.remove('hide');
};
window.openVideoModal = () => {
    hideAllModels();
    document.getElementById('modal-video').classList.remove('hide');
};

setTimeout(() => {
    if (window.outerWidth > 768 && !window.isShow) {
        window.openVideoModal();
    }
}, 30000);

