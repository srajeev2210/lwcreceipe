import { LightningElement } from 'lwc';

export default class Paginator extends LightningElement {

    handlePrevious(event){
        this.dispatchEvent(new CustomEvent('previous'));
    }

    handleNext(event){
        this.dispatchEvent(new CustomEvent('next'));
    }
}