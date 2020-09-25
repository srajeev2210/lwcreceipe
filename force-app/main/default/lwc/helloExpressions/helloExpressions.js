import { LightningElement } from 'lwc';

export default class HelloExpressions extends LightningElement {

    firstName = ''
    lastName = ''

    onChangeHandler(event){
        const field = event.target.name
        if(field === 'firstName'){
            this.firstName = event.target.value
        }
        else if(field === 'lastName'){
            this.lastName = event.target.value
        }        
    }


    get upperCaseFullName(){
        return `${this.firstName} ${this.lastName}`.toUpperCase()
        
    }

}