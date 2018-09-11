'use strict';

class CustomModal {
    trigger: HTMLElement;
    modal: HTMLElement;
    background: HTMLElement;
    body: HTMLElement;

    constructor(trigger : HTMLElement) {
        this.trigger = trigger;
        this.modal = document.querySelector('.' + this.trigger.dataset.modal);
        this.background = this.modal.querySelector('.js-modal-background');
        this.body = document.querySelector('body');

        this.init();
    }

    private init = () : void => {
        this.trigger.addEventListener('click', (event : Event) => {
            event.preventDefault();

            this.openModal();
        });

    };

    private openModal = () : void => {
        this.modal.classList.add('is-active');
        this.body.classList.add('no-scroll');

        document.addEventListener('click', this.handleEvents);
    };

    public closeModal = () : void => {
        this.modal.classList.remove('is-active');
        this.body.classList.remove('no-scroll');

        document.removeEventListener('click', this.handleEvents);
    };

    private handleEvents = (event : any) : void => {
        // event.preventDefault();
        event.stopPropagation();

        if (event.target.closest('.js-modal-btn-close') || event.target === this.background) {
            this.closeModal();
        }
    }


}

function addModalWindow() : void  {
    const elements = document.querySelectorAll('.js-modal-trigger');

    elements.forEach(function (item : HTMLElement) : void {
        const newModal = new CustomModal(item);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    addModalWindow();
});