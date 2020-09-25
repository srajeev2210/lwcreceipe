import { LightningElement,api } from 'lwc';

export default class ViewSource extends LightningElement {
    
    base = 'https://github.com/srajeev2210/lwcreceipe/tree/master/force-app/main/default/';
    @api source

    get sourceUrl(){
        return this.base + this.source
    }
}