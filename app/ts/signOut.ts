'use strict';

class SignOut extends CustomModal {
    constructor(triger : HTMLElement) {
        super(triger);

        this.handleSignOut();
    }

    private handleSignOut = () : void => {
        document.querySelector('.js-sign-out-agree').addEventListener('click', () => {
            this.closeModal();

        });
    };

    private renderLogOutUser = () : void => {

    }
}


document.addEventListener("DOMContentLoaded", function() {
    const newSignOut = new SignOut(document.querySelector('.js-modal-trig'));
});
