
class sctCard extends HTMLElement {
    constructor() {
        super();
        this.img_path
        this.id 
    }
    static get observedAttributes(){
        return ['img_path','id']
    }
    attributeChangedCallback(nameAtr, oldValue, newValue) {
        switch (nameAtr) {
            case "img_path":
                this.img_path = newValue;
                break;
            case "title":
                this.id = newValue;
                break;
            default:
                break;
        }
    }
    
    connectedCallback() {
        const direction = (this.id % 2 == 0 )? "md:text-left md:flex-row" : "md:text-right md:flex-row-reverse"
        
        this.innerHTML =
            `<section class="box flex flex-col justify-end  items-center my-48
${direction}
h1
            w-[90%] md:w-[80%] mx-auto my-14 text-center">
                <div id="img-marc_${this.id}" class="img-marc mx-auto ">
                    <img id="img_${this.id}" class="img" src="./img/${this.img_path}" alt="">
                </div>
                <div class="mt-5 md:mx-10 md:w-2/5">
                    <p>
                    <h1 class="under-mate inline
                        text-xl sm:text-4xl mb-10 cursor-pointer
                        ">Lorem ipsum dolor sit amet consectetur.</h1>
                    </p>
    
                    <p class="text-sm sm:text-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
                        repudiandae</p>
                </div>
            </section>`
    }
}

window.customElements.define("setion-card", sctCard)