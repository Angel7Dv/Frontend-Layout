
class component extends HTMLElement {
    constructor() {
        super();
        this.img_path
        this.title 
        this.price
        this.tag 
    }
    static get observedAttributes(){
        return ['img_path','title','price','tag',]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {
        switch (nameAtr) {
            case "img_path":
                this.img_path = newValue;
                break;
            case "title":
                this.title = newValue;
                break;
            case "price":
                this.price = newValue;
                break;
            case "tag":
                this.tag = newValue;
                break;

            default:
                break;
        }
    }

    connectedCallback() {
        this.innerHTML =
            `<div class="mb-[31px]  flex flex-col items-center">
                    <img class="w-[214px] h-auto mb-[10px]" src="${this.img_path}" alt="">
                    <div class="flex flex-col spacey-[8px] text-center">
                        <span class="font-semibold">${this.title}</span>
                        <span class="font-normal color-2">${this.price}</span>
                        <span class="font-bold color-1">${this.tag}</span>
                    </div>
                </div>`
    }
}



window.customElements.define("product-1", component)