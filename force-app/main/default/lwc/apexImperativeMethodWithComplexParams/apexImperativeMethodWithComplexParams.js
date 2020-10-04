import { LightningElement } from 'lwc';
import checkApexType from '@salesforce/apex/ApexTypesController.checkApexTypes';

export default class ApexImperativeMethodWithComplexParams extends LightningElement {
    stringValue = 'someString'
    numberValue = 0
    listItemValue = 1

    message
    error

    handleStringChange(event){
       this.stringValue = event.target.value; 
    }

    handleNumberChange(event){
        this.numberValue = event.target.value;
    }

    handleListItemChange(event){
        this.listItemValue = event.target.value;
    }

    handleApexCall(){
        let paramterObject = {
            someString : this.stringValue,
            someInteger : this.numberValue,
            someList : []
        }

        for(let i=0; i< this.listItemValue; i++){
            paramterObject.someList.push({
                someInnerString: this.stringValue,
                someInnerInteger: this.numberValue
            })
        }

        checkApexType({wrapper : paramterObject})
            .then((result)=>{
                this.message = result
                this.error = undefined
            })
            .catch(error=>{
                this.message = undefined
                this.error = error
            });

    }

}