import { LightningElement } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import { refreshApex } from '@salesforce/apex';

export default class ApexImperativeMethod extends LightningElement {
    contacts
    error
    imperateData

    handleLoad(){
        getContactList()
        .then(result =>{
            this.imperateData = result
            this.contacts = result;
            this.error = undefined
        })
        .catch(error =>{
            this.error = error
            this.contacts = undefined
        })
    }

    refreshContact(){
        return refreshApex[this.imperateData]
    }
}