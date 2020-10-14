import { LightningElement , wire } from 'lwc';
import getSingleAccount from '@salesforce/apex/AccountController.getSingleAccount';
import { NavigationMixin } from 'lightning/navigation';

export default class NavToRelatedList extends NavigationMixin(LightningElement) {
    
    @wire(getSingleAccount)
    account;

    handleNavToRelatedList(event){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: this.account.data.Id,
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
        });
    }
}