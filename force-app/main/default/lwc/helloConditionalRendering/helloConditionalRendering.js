import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    showDetail = false

    onChangeHandler(event){
        this.showDetail = event.target.checked
    }
}