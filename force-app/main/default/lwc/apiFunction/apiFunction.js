import { LightningElement } from 'lwc';

export default class ApiFunction extends LightningElement {
    
    handleRefreshTime(event){
        this.template.querySelector('c-clock').refresh();
    }
}