public with sharing class getAccountsForLdsDelete {
    
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountsForDelete(){        
        List<Account> accList = [Select Id,Name from Account WITH SECURITY_ENFORCED LIMIT 10];
        
        return accList;
    }
}
