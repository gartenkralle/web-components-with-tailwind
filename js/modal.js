export class Modal extends HTMLElement {
    constructor() {
        super();

        const modalElement = document.createElement('div');
        modalElement.className = 'z-1000 rounded-lg p-3 bg-white fixed shadow-md w-xs duration-400 -right-full';

        this.appendChild(modalElement);
    }

    show() {
        this.firstElementChild.classList.add("translate-x-1/2", "right-1/2");
    }

    hide() {
        this.firstElementChild.classList.remove("translate-x-1/2", "right-1/2");
    }
}

customElements.define('simple-modal', Modal);
