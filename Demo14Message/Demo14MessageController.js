({
    auraShowMessage : function(component, event, helper) {
        var msg = event.getParam('arguments').message;
        // alert('Message is'+msg);
        console.log(msg);
        helper.messageutility('Success',component,event,"green");
    },
  
    auraShowErrorMessage : function(component, event, helper) {
        var msg = event.getParam('arguments').message;
        // alert('Error Message is'+msg);
        console.log(msg);
        helper.messageutility('Error',component,event,"red");
    },
  
    auraRemoveMessage : function(component, event, helper) {
        // alert('Remove Message');
        // helper.messageutility('', component,event,helper);
        helper.removemessage(component);
    }
 
})
