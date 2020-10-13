import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavToFilesHome extends NavigationMixin(LightningElement) {
    
    handleNavigateFilesHome(event){
        // Use the built-in 'Navigate' method
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'home'
            },
        });
    }

}