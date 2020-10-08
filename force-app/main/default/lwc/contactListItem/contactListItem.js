import { LightningElement, api } from 'lwc';

export default class ContactListItem extends LightningElement {
    @api contact;

    handleSelect(event){
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('select',{detail : this.contact.Id}));
    }
}