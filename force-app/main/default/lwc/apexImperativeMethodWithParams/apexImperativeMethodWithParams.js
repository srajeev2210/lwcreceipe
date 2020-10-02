import { LightningElement, wire } from 'lwc';
import findContacts from '@salesforce/apex/ContactController.findContacts';

export default class ApexImperativeMethodWithParams extends LightningElement {
    contacts;
    error;
    searchKey = ''

    handleKeyChange(event){
        this.searchKey = event.target.value;
    }


    handleSearch(){ 
        findContacts({ searchKey : this.searchKey })
        .then(results =>{
            this.contacts = results
            this.error = undefined
        })
        .catch(error=>{
            this.error = error;
            this.contacts = undefined;
        });
    }
}