'use strict';
class CustomModal {
    constructor(trigger) {
        this.init = () => {
            this.trigger.addEventListener('click', (event) => {
                event.preventDefault();
                this.openModal();
            });
        };
        this.openModal = () => {
            this.modal.classList.add('is-active');
            this.body.classList.add('no-scroll');
            document.addEventListener('click', this.handleEvents);
        };
        this.closeModal = () => {
            this.modal.classList.remove('is-active');
            this.body.classList.remove('no-scroll');
            document.removeEventListener('click', this.handleEvents);
        };
        this.handleEvents = (event) => {
            // event.preventDefault();
            event.stopPropagation();
            if (event.target.closest('.js-modal-btn-close') || event.target === this.background) {
                this.closeModal();
            }
        };
        this.trigger = trigger;
        this.modal = document.querySelector('.' + this.trigger.dataset.modal);
        this.background = this.modal.querySelector('.js-modal-background');
        this.body = document.querySelector('body');
        this.init();
    }
}
function addModalWindow() {
    const elements = document.querySelectorAll('.js-modal-trigger');
    elements.forEach(function (item) {
        const newModal = new CustomModal(item);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    addModalWindow();
});
