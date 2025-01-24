import { AdModal } from "/js/ad-modal.js"

const button = document.querySelector('button');

const adModal = new AdModal("This is a ad modal with user defined string. Nice and shiny.");

button.addEventListener('click', () => {
    adModal.show();
});

document.body.appendChild(adModal);
