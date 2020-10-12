import { LightningElement,api } from 'lwc';

export default class Clock extends LightningElement {
    timestamp = Date.now();

    @api
    refresh(){
        this.timestamp = Date.now();
    }
}