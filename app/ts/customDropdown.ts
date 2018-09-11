'use strict';


class CustomDropdown {
    container : HTMLElement;
    trigger : HTMLElement;
    content : HTMLElement;
    isActive : boolean;


    constructor(container : HTMLElement) {
        this.container = container;
        this.trigger = this.container.querySelector('.js-dropdown-trigger');
        this.content = this.container.querySelector('.js-dropdown-content');
        this.isActive = false;

        this.init();
    }

     private init () : void {
        this.trigger.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();

            this.closeActiveDropdowns();

            if (this.isActive) {
                this.closeContent();
            } else {
                this.openContent();
            }


        });
    }

    private openContent = () : void => {
         this.isActive = true;

         this.content.classList.add('dropdown-visible');

         document.addEventListener('click', this.openContentHandler);
    };

    private closeContent = () : void => {
        this.isActive = false;

        this.content.classList.remove('dropdown-visible');

        document.removeEventListener('click', this.openContentHandler);
    };

    private openContentHandler = (event: any) : void => {
        event.preventDefault();
        event.stopPropagation();

        if (!event.target.closest('.js-dropdown-content')) {
            this.closeContent();
        }
    };

    private closeActiveDropdowns = () : void => {
        const activeElem = document.querySelector('.dropdown-visible');

        if (activeElem) activeElem.classList.remove('dropdown-visible');
    }
}

function addDropdown() {
    const elements = document.querySelectorAll('.js-dropdown-container');

    elements.forEach(function (item : HTMLElement) {
        const dropdownItem = new CustomDropdown(item);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    addDropdown();
});