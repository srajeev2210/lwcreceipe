import { LightningElement } from 'lwc';

export default class EventSimple extends LightningElement {
    page = 1;

    handlePreviousEvent(event){
        if(this.page > 1){
            this.page--;
        }
    }

    handleNextEvent(event){
        if(this.page <= 21){
            this.page++;
        }
    }
}