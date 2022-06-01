({
    getMyData: function(component) {
        var action1 = component.get('c.getPicklist');
        action1.setCallback(this, function(response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                component.set('v.stageList', response.getReturnValue());
            }
        });

        $A.enqueueAction(action1);



        console.log('get Data called');
        var action = component.get("c.getAccountDetailsWithRelatedData");
        action.setParams({
            accountId: component.get('v.recordId')
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                var responseObj = JSON.parse(response.getReturnValue());
                component.set('v.view', responseObj);
                console.log('>>>>>>> get Data after the Inserting New Contact' + JSON.stringify(response.getReturnValue()));
                //console.log(component.get('v.view').wrapperStagePickList);
            }
        });
        $A.enqueueAction(action);

    },

    getOpportunityData: function(component) {
        console.log("Opportunity get data called after the insertion of account");
        var action = component.get('c.saveOpprtunityToDatabase');
        action.setParams({
            accountId: component.get('v.recordId')
        })
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                var responseObj = JSON.parse(response.getReturnValue());
                component.set('v.view', responseObj);
                console.log(component.get('v.view').wrapperStagePickList);
            } else {
                alert('Error')
            }
        });
    }

})