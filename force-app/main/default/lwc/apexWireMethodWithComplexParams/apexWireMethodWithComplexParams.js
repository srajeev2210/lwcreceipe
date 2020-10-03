import { LightningElement,wire } from 'lwc';
import checkapexType from '@salesforce/apex/ApexTypesController.checkApexTypes';

export default class ApexWireMethodWithComplexParams extends LightningElement {
    stringValue = 'someInteger'
    numberValue = 0
    listItemValue = 1

    paramterObject = {
        someString : this.stringValue,
        someInteger : this.numberValue,
        someList : []
    }

    @wire(checkapexType, {wrapper : '$paramterObject'})
    apexResponse;

    handleStringChange(event){
        // console.log('String change Obj', this.paramterObject)
        // console.log('String', event.target.value)
        this.paramterObject = {
            ...this.paramterObject,
            someString : (this.stringValue = event.target.value)
        }
        // console.log('String After:',this.paramterObject)
        
    }

    handleNumberChange(event){
        this.paramterObject = {
            ...this.paramterObject,
            someInteger : parseInt(this.numberValue = event.target.value)
        }
    }

    handleListItemChange(event){
        // console.log('List Item Obj',this.paramterObject)
        // console.log('List item value',event.target.value)
        const someList = []

        for(let i=0;i<event.target.value; i++){
            someList.push({
                someInnerString : this.stringValue,
                someInnerInteger : this.numberValue
            });
        }

        this.paramterObject = {
            ...this.paramterObject,
            someList
        }
        // console.log('List after:',this.paramterObject)
    }
}