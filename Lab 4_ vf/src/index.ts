import { getRicky } from "./service/getData";
import Card,{ AttributeCard } from "./components/Card/card";
import * as components from "./components/export"


class AppContainer extends  HTMLElement {

    card: Card[] = [];

    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        const ricky = await getRicky();
        ricky.forEach((element:any)=>{
            const things = this.ownerDocument.createElement('app-card') as Card;
            things.setAttribute(AttributeCard.name, element.name);
            things.setAttribute(AttributeCard.image, element.image);
            things.setAttribute(AttributeCard.status, element.status);

            this.card.push(things)
        })

    this.render(this.card)
}

    render(card: any){
        if(this.shadowRoot)
            this.shadowRoot.innerHTML = '';


            card.forEach((element:any)=> {
                this.shadowRoot?.appendChild(element)
            })
        }

    }



customElements.define("app-container", AppContainer)

