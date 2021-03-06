public with sharing class AccountController {
    
    
    @AuraEnabled(cacheable=true)
    public static Account getSingleAccount(){
        
        return [SELECT Id,Name, Type, Phone FROM Account WITH SECURITY_ENFORCED
                LIMIT 1];
    }
}
