({
    handleSuccess: function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": "The record has been updated successfully."
        });
        toastEvent.fire();
    },

    handleSubmit: function(component, event, helper) {
        // you can do validation
        // set some default values
        event.preventDefault(); // stop the form from submitting
        var fields = event.getParam('fields');
        console.log(JSON.stringify(fields));
        fields.Description = 'this is the demo on LDS';
        component.find('myRecordForm').submit(fields);
    },


    handleRecordFormSubmit: function(component, event, helper) {
        event.preventDefault(); // stop the form from submitting
        var fields = event.getParam('fields');
        console.log(JSON.stringify(fields));
        fields.Description = 'this is the demo on LDS';
        component.find('myAuraRecordForm').submit(fields);
    }



})