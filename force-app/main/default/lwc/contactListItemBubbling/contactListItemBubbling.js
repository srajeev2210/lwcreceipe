import { LightningElement, api } from 'lwc';

export default class ContactListItemBubbling extends LightningElement {
    @api contact;

    handleSelect(event){
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('contactselect',{bubbles : true}));
    }
}