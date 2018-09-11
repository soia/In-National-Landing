'use strict';
class SignOut extends CustomModal {
    constructor(triger) {
        super(triger);
        this.handleSignOut = () => {
            document.querySelector('.js-sign-out-agree').addEventListener('click', () => {
                this.closeModal();
            });
        };
        this.renderLogOutUser = () => {
        };
        this.handleSignOut();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const newSignOut = new SignOut(document.querySelector('.js-modal-trig'));
});
