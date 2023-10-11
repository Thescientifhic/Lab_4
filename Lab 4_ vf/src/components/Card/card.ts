import StyleCard from "./card.css"

export enum AttributeCard {
    "name" = "name",
    "status" = "status",
    "image" = "image",


}
class Card extends HTMLElement{
    name?: string;
    status?: string;
    image?: string;


    static get observedAttributes(){
        const attrs: Record <AttributeCard, null> ={

            name: null,
            status: null,
            image: null,


        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeCard,
       oldValue: string | undefined,
        newValue: string | undefined){

            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
            this.render();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){ //literales
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <style>${StyleCard}</style>

        <section>
        <div class="Words"><h1>${this.name}</h1>
        <p>${this.status}</p></div>
        <img class="principalimg" src="${this.image}">
        </section>
    `
    }
}

customElements.define('app-card',Card);
export default Card;
