import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavToNewRecordWithDefaults extends NavigationMixin(LightningElement) {

    handleNavToNewRecordWithDefaults(event){
        // Use the built-in 'Navigate' method
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state: {
                defaultFieldValues : 'FirstName=test,LastName=Contact',
                nooverride: '1'
            }
        });
    }
}