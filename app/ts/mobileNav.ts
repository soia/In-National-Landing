'use strict';

class MobileNav {
    trigger: HTMLElement;
    content: HTMLElement;
    body: HTMLElement;

    constructor(trigger : HTMLElement, content : HTMLElement) {
        this.trigger = trigger;
        this.content = content;
        this.body = document.querySelector('body');
        
        this.init();
    }
    
    private init() : void {
        this.trigger.addEventListener('click',  (event) => {
            event.preventDefault();

            if (this.trigger.classList.contains('is-active')) {
                this.closeNav();
            } else  {
                this.openNav();
            }

        });
    }

    private openNav = () : void => {
        this.trigger.classList.add('is-active');
        this.content.classList.add('visible');
        this.body.classList.add('no-scroll');

        document.addEventListener('click', this.openContentHandler);
    };

    private closeNav = () : void => {
        this.trigger.classList.remove('is-active');
        this.content.classList.remove('visible');
        this.body.classList.remove('no-scroll');

        document.removeEventListener('click', this.openContentHandler);
    };

    private openContentHandler = (event : any) : void => {
        if (event.target.classList.contains('no-scroll')) this.closeNav();
    }
    
    
}

function addMobileNav() {
    const firstNav = new MobileNav(document.querySelector('.js-mobile-nav-1'), document.querySelector('.js-mobile-nav-content-1'));
    const secondNav = new MobileNav(document.querySelector('.js-mobile-nav-2'), document.querySelector('.js-mobile-nav-content-2'));
}

document.addEventListener("DOMContentLoaded", function() {
    addMobileNav();
});