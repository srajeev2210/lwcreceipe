import { LightningElement, wire } from 'lwc';
import getAccountsForLds from '@salesforce/apex/getAccountsForLdsDelete.getAccountsForDelete';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';

export default class LdsDeleteRecord extends LightningElement {
    accounts
    error

    wiredResultData;

    @wire(getAccountsForLds)
    getAccounts(result){
        this.wiredResultData = result;
        if(result.data){
            this.accounts = result.data
            this.error = undefined
        }
        else if(result.error){
            this.error = result.error
            this.accounts = undefined
        }
    }

    deleteAccount(event){
        const recordId = event.target.dataset.recordid;
        console.log('recordid:', recordId)
        deleteRecord(recordId)
        .then(() => {
            this.dispatchEvent(new ShowToastEvent({
                title : 'Success',
                message : 'Account Deleted.',
                variant : 'success'
            }));
            return refreshApex(this.wiredResultData);
        })
        .catch(err => {
            this.dispatchEvent(new ShowToastEvent({
                title : 'Error',
                message : 'Error Account Deleted.',
                variant : 'error'
            }));
        })
    }

}