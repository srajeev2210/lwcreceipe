import { LightningElement, wire } from 'lwc';
import getSingleContact from '@salesforce/apex/ContactController.getSingleContact';
import { NavigationMixin } from 'lightning/navigation';
export default class NavToContactRecord extends NavigationMixin(LightningElement) {
    
    @wire(getSingleContact) contact;

    navigateToContact() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.contact.data.Id,
                objectApiName: 'Contact',
                actionName: 'view'
            }
        });
    }

    navigateToEdit() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.contact.data.Id,
                objectApiName: 'Contact',
                actionName: 'edit'
            }
        });
    }
}