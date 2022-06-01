({
    handleEvent: function(component, event, helper) {
        var msg = event.getParam('message');
        console.log(event);
        component.set('v.messageFromEvent', msg);

    }
})