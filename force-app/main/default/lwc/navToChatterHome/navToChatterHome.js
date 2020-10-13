import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavToChatterHome extends NavigationMixin(LightningElement) {

    handleNavigateChatterHome(event){
        // Use the built-in 'Navigate' method
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName : 'chatter',
            },
        });
    }
}