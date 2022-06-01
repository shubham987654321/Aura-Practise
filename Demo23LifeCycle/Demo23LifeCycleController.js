({
    handleClick: function(component, event, helper) {
        console.log('data updated');
        var count = component.get("v.mydata");
        count = count + 1;
        component.set("v.mydata", count);
    },

    doInit: function(component, event, helper) {
        console.log('Init event get called');
    },

    onRender: function(component, event, helper) {
        console.log('Render event  get called');
    },

    destroyCmp: function(component, event, helper) {
        var cmp = component.find('mycmp');
        cmp.destroy();
    }




})