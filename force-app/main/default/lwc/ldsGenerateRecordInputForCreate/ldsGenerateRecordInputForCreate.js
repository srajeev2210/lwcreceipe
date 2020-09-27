import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord, getRecordCreateDefaults,generateRecordInputForCreate } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCNUMBER_FIELD from '@salesforce/schema/Account.AccountNumber';

export default class LdsGenerateRecordInputForCreate extends LightningElement {
    accName
    accNumber
    accNameField = NAME_FIELD.fieldApiName
    accNumberField = ACCNUMBER_FIELD.fieldApiName
    accNumberCreateable
    recordInput
    error

    @wire(getRecordCreateDefaults, { objectApiName: ACCOUNT_OBJECT })
    loadAccountCreateDefaults({data, error}){
        if(data){
            // Creates a record input with default field values
            this.recordInput = generateRecordInputForCreate(
                data.record,
                data.objectInfos[ACCOUNT_OBJECT.objectApiName] // Filters it to only createable fields
            );
            const fields = this.recordInput.fields;
            console.log('recordInput:',JSON.stringify(this.recordInput))
            this.accNumberCreateable = ACCNUMBER_FIELD.fieldApiName in fields;
            this.accNumber = fields[ACCNUMBER_FIELD.fieldApiName];
            this.error = undefined;
        } else if (error) {
            this.recordInput = undefined;
            this.error = error;
        }
    }

    handleChange(event){
        this.recordInput.fields[event.target.dataset.fieldName] =
            event.target.value;
    }

    createAccount() {
        console.log('RecordImput:'+JSON.stringify(this.recordInput))
        createRecord(this.recordInput)
        .then((account) => {
            console.log(JSON.stringify(account))
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Account created with Id : '+account.id,
                    variant: 'success'
                })
            );
        })
        .catch((error) => {
            console.log(error)
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error,
                    variant: 'error'
                })
            );
        });
    }
}