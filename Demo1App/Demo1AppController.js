({
    handleEvent: function(component, event, helper) {
        var msg = event.getParam('message');
        component.set('v.messageFromEvent', msg);
    },

    doInit: function(component, event, helper) {
        console.log('Init event get called on Application');
    },

    onRender: function(component, event, helper) {
        console.log('Render event  get called on Application');
    }

})