const elemento = "<></>"
class navBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        console.log(elemento)
        this.innerHTML = elemento
    }
}



window.customElements.define("nav-bar", navBar)