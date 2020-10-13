import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavToHome extends NavigationMixin(LightningElement) {
    
    handleNavigateHome(event){
        // Use the built-in 'Navigate' method
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName : 'home',
            },
        });
    }
    
}