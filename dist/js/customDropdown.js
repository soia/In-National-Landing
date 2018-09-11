'use strict';
class CustomDropdown {
    constructor(container) {
        this.openContent = () => {
            this.isActive = true;
            this.content.classList.add('dropdown-visible');
            document.addEventListener('click', this.openContentHandler);
        };
        this.closeContent = () => {
            this.isActive = false;
            this.content.classList.remove('dropdown-visible');
            document.removeEventListener('click', this.openContentHandler);
        };
        this.openContentHandler = (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (!event.target.closest('.js-dropdown-content')) {
                this.closeContent();
            }
        };
        this.closeActiveDropdowns = () => {
            const activeElem = document.querySelector('.dropdown-visible');
            if (activeElem)
                activeElem.classList.remove('dropdown-visible');
        };
        this.container = container;
        this.trigger = this.container.querySelector('.js-dropdown-trigger');
        this.content = this.container.querySelector('.js-dropdown-content');
        this.isActive = false;
        this.init();
    }
    init() {
        this.trigger.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.closeActiveDropdowns();
            if (this.isActive) {
                this.closeContent();
            }
            else {
                this.openContent();
            }
        });
    }
}
function addDropdown() {
    const elements = document.querySelectorAll('.js-dropdown-container');
    elements.forEach(function (item) {
        const dropdownItem = new CustomDropdown(item);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    addDropdown();
});
