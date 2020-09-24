import { LightningElement } from 'lwc';

export default class HelloBinding extends LightningElement {
    greeting = 'World!'

    onValueChange(event){
        this.greeting = event.target.value
    }
}