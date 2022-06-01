({

    handleClick: function(component, event, helper) {
        var action = component.get("c.getAccounts");
        component.set('v.showSpinner', true);


        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.accountList', response.getReturnValue());
            }

            component.set('v.showSpinner', false);
        });
        $A.enqueueAction(action);




        var toogleText = component.find("mytext");
        $A.util.toggleClass(toogleText, 'toggle');
        if ($A.util.hasClass(toogleText, 'toggle')) {
            component.find('mybutton').set('v.label', 'Show AccountList');
        } else {
            component.find('mybutton').set('v.label', 'Hide Accountist');

        }
    }

})