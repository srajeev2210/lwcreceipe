import { LightningElement, wire } from 'lwc';
import Id from '@salesforce/user/Id';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME from '@salesforce/schema/User.Name';
import EMAIL from '@salesforce/schema/User.Email';

const FIELDS = [NAME, EMAIL];

export default class WireGetRecordUser extends LightningElement {

    userId = Id;

    @wire(getRecord, {recordId : '$userId', fields : FIELDS})
    currentUser;

    get userName(){
        return getFieldValue(this.currentUser.data, NAME);
    }

    get userEmail(){
        return getFieldValue(this.currentUser.data, EMAIL);
    }

}