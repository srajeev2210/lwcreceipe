public with sharing class ContactController {
    
    @AuraEnabled(cacheable=true)
    public static Contact getSingleContact() {
        return [
            SELECT Id, Name, Title, Phone, Email, Picture__c
            FROM Contact
            WITH SECURITY_ENFORCED
            LIMIT 1
        ];
    }

    @AuraEnabled(cacheable = true)
    public static List<Contact> getContactList(){
        return [SELECT Id, Name FROM Contact WITH SECURITY_ENFORCED];
    }
}
