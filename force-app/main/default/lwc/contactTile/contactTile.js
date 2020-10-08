import { LightningElement, api } from 'lwc';

export default class ContactTile extends LightningElement {
    @api contact;

    connectedCallback(){
        console.log(this.contact.Picture__c)
    }
}