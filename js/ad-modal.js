import { Modal } from "/js/modal.js"

export class AdModal extends Modal {
    constructor(content) {
        super();

        const adElement = document.createElement('div');
        adElement.className = 'text-sm';

        const headerElement = document.createElement('div');
        headerElement.className = 'pb-4 text-slate-900 font-medium';
        headerElement.textContent = 'Check this out';

        const bodyElement = document.createElement('div');

        const imgElement = document.createElement('img');
        imgElement.src = 'https://www.hofladenfinder.org/img/brand/brand_icon.png';
        imgElement.alt = 'icon';
        imgElement.width = 50;
        imgElement.height = 50;
        imgElement.className = 'block float-left pr-4';

        const contentElement = document.createElement('div');
        contentElement.className = 'text-slate-700';
        contentElement.textContent = content;    

        bodyElement.appendChild(imgElement);        
        bodyElement.appendChild(contentElement);

        adElement.appendChild(headerElement);
        adElement.appendChild(bodyElement);

        this.firstElementChild.appendChild(adElement);
    }

    show() {
        this.firstElementChild.classList.add("translate-x-1/2", "right-1/2");
    }

    hide() {
        this.firstElementChild.classList.remove("translate-x-1/2", "right-1/2");
    }
}

customElements.define('ad-modal', AdModal);
