({
    fireEvent: function(component, event, helper) {
        var msg = component.get('v.messageString');
        var cmpeve = component.getEvent('cmpEventName');

        cmpeve.setParams({
            message: msg
        });
        cmpeve.fire();

    }
})