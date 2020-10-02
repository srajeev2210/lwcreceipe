import { LightningElement,wire } from 'lwc';
import { getSObjectValue } from '@salesforce/apex';
import getSingleContact from '@salesforce/apex/ContactController.getSingleContact';

import NAME from '@salesforce/schema/Contact.Name'
import TITLE from '@salesforce/schema/Contact.Title'
import PHONE from '@salesforce/schema/Contact.Phone'
import EMAIL from '@salesforce/schema/Contact.Email'

export default class ApexStaticSchema extends LightningElement {

    @wire(getSingleContact)
    contact;

    get name(){
        return this.contact.data ? getSObjectValue(this.contact.data, NAME) : '';
    }

    get title(){
        return this.contact.data ? getSObjectValue(this.contact.data, TITLE) : '';
    }

    get email(){
        return this.contact.data ? getSObjectValue(this.contact.data, EMAIL) : '';
    }

    get phone(){
        return this.contact.data ? getSObjectValue(this.contact.data, PHONE) : '';
    }
}