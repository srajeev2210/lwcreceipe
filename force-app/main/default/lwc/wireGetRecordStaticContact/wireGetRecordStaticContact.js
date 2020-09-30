import { LightningElement, wire, api } from 'lwc';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi'

import NAME from '@salesforce/schema/Contact.Name';
import TITLE from '@salesforce/schema/Contact.Title';
import PHONE from '@salesforce/schema/Contact.Phone';
import EMAIL from '@salesforce/schema/Contact.Email';

const fields = [NAME, TITLE, PHONE, EMAIL];

export default class WireGetRecordStaticContact extends LightningElement {
    @api recordId;

    @wire(getRecord , {recordId : '$recordId', fields })
    contact;

    get name(){
        return getFieldValue(this.contact.data, NAME);
    }

    get title(){
        return getFieldValue(this.contact.data, TITLE);
    }

    get email(){
        return getFieldValue(this.contact.data, EMAIL);
    }

    get phone(){
        return getFieldValue(this.contact.data, PHONE);
    }

}