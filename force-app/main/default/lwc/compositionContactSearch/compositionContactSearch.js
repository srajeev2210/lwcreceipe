import { LightningElement } from 'lwc';
import findContacts from '@salesforce/apex/ContactController.findContacts'

export default class CompositionContactSearch extends LightningElement {

    searchKey = ''
    contacts;
    error;


    handleKeyChange(event){
        let key =  event.target.value;
        
        findContacts({searchKey : key})
            .then((result)=>{
                this.contacts = result
                this.error = undefined
            })
            .catch(err => {
                this.error = err;
                this.contacts = undefined
            })
    }    

}