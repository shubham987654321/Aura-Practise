({
    doInit: function(component, event, handler) {

        component.find("contactRecord").getNewRecord(
            "Contact", null, false, $A.getCallback(function() {
                var error = component.find("v.contactError");
                if (error) {
                    alert(error);
                }
                console.log(JSON.stringify(component.get("v.newContact")));
                console.log(JSON.stringify(component.get("v.simpleNewContact")));
            })
        );

    },


    handleSave: function(component, event, helper) {
        component.set("v.simpleNewContact.AccountId", component.get("v.recordId"));
        component.find("contactRecord").saveRecord(function(response) {
            console.log(JSON.stringify(response));
            if (response.state === "SUCCESS") {
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Success!",
                    "message": "The record has been created successfully."
                });
                toastEvent.fire();
                $A.get('e.force:refreshView').fire();
            }
        });
    }




})