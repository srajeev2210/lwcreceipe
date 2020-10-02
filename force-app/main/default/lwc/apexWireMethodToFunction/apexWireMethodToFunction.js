import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import { refreshApex } from '@salesforce/apex';

export default class ApexWireMethodToFunction extends LightningElement {
    contacts
    error
    _wiredResult

    @wire(getContactList)
    getContact(result){
        this._wiredResult = result
        if(result.data){
            this.contacts = result.data
            this.error = undefined
        }
        else if(result.error){
            this.error = result.error
            this.contacts = undefined
        }
    }

    refreshContacts(){
        return refreshApex(this._wiredResult);
    }

}