
({
    doInit : function(component, event, helper) {
        component.set('v.showSpinner',true);
        component.set('v.isError',false);
        component.set('v.errorMessage','');
        var action = component.get("c.getAccounts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.accountList',response.getReturnValue());
            }
            if(state === "ERROR"){
                alert('Error');
            }
            component.set('v.showSpinner',false);
        });
        $A.enqueueAction(action);
    },

  
    getContactRecords : function(component, event, helper) {
      //  alert('Selected Account Id is : : : '+component.get('v.selectedAccountId'));
        component.set('v.showSpinner',true);
        component.set('v.showSpinner',true);
        component.set('v.isError',false);
        component.set('v.errorMessage','');
        var action = component.get("c.getContacts");
        var accId = component.get('v.selectedAccountId');
        action.setParams({accountId : accId});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.contactList',response.getReturnValue());
            }
            if(state === "ERROR"){
                var errors = response.getError();
                console.log(JSON.stringify(errors));
                if(error[0].message === 'Assertion Failed'){
                    component.set('v.errorMessage', 'Something Wrong happen , Contact your system admin');

                }
                component.set('v.isError',true);


                // alert("Error");
            }
            component.set('v.showSpinner',false);
        });
        $A.enqueueAction(action);
    }
 })
 