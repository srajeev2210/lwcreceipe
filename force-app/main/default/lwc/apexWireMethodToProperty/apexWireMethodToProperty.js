import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import { refreshApex } from '@salesforce/apex';

export default class ApexWireMethodToProperty extends LightningElement {

    @wire(getContactList)
    contacts;

    refreshContact(){
        return refreshApex(this.contacts);
    }
    
}