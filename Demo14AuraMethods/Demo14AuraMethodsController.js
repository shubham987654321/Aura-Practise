({
    showMessage : function(component, event, helper) {
        component.find("auramessage").show('message passed from parent');
    },
    showErrorMessage : function(component, event, helper) {
        component.find("auramessage").error('error message passed from parent');
    },
    removeMessage : function(component, event, helper) {
        component.find("auramessage").remove();
    },
 
 
 
})
