import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavToHelloTab extends NavigationMixin(LightningElement) {

    handleNavigateHelloTab(event){
        // Use the built-in 'Navigate' method
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Hello'
            },
        });
    }

}