({
    jScript1: function(component, event, helper) {

        var data = {
            name: "Shubham Kumar",
            email: "shubhamche99@gmail.com"

        };

        // component.get("v.mystring");
        component.set('v.JsObject', data);

        component.set('v.myCustomType', { 'myname': 'Shubham Sharma', 'email': 'kumarshubham221199@gmail.com' });


    }
})