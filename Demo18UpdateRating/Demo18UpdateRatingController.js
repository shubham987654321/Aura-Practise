({
    doInit: function(component, event, helper) {
        var action  = component.get("c.getAccountInfo");
        action.setParams({recordId : component.get("v.recordId")});
        action.setCallback(this, function(response){
            component.set("v.accountRec", response.getReturnValue());
        });
        $A.enqueueAction(action);
    },

    handleClick: function(component, event,helper){
        console.log("handleclick is called");
        var action = component.get("c.updateAccountDetails");
        action.setParams({acc:component.get("v.accountRec")});
        action.setCallback(this, function(response){
            var state  = response.getState();
            if(state === "SUCCESS"){
                var result = response.getReturnValue();
                if(result==="OK"){
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "Success!",
                        "message": "The record has been updated successfully."
                    });
                    toastEvent.fire();
                }

                //  for refersh our screen  after update
                $A.get('e.force:refreshView').fire();
            }
        })
        $A.enqueueAction(action);

    }

    
})
