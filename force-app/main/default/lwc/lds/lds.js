import { LightningElement,wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
import getContact from '@salesforce/apex/ContactController.getSingleContact';

export default class Lds extends NavigationMixin(LightningElement) {
    //test = true

    @wire(getContact)
    contact;
    
    navigateToContact(event){
        console.log(this.contact.data)
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId : this.contact.data.Id,
                apiName: 'Contact',
                actionName : 'view'
            },
        });
    }

}