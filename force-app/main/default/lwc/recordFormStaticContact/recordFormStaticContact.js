import { LightningElement, api } from 'lwc';
import ACCOUNT_ID from '@salesforce/schema/Contact.AccountId'
import NAME from '@salesforce/schema/Contact.Name'
import TITLE from '@salesforce/schema/Contact.Title'
import PHONE from '@salesforce/schema/Contact.Phone'
import EMAIL from '@salesforce/schema/Contact.Email'

export default class RecordFormStaticContact extends LightningElement {
    @api recordId;
    @api objectApiName;

    fields = [ACCOUNT_ID, NAME, TITLE, PHONE, EMAIL]
}