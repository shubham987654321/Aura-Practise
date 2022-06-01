({
    fireEvent : function(component, event, helper) {
        var appeve = $A.get('e.c:appevent');
        var msg = component.get('v.messageString');

        appeve.setParams({
            message : msg
        });

        appeve.fire();

    }
})
