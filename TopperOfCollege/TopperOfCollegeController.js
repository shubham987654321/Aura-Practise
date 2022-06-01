({
    doInit : function(component, event, helper) {
        console.log('doInit called');
        // component.set('v.showSpinner',true);
        // component.set('v.isError',false);
        // component.set('v.errorMessage','');

        var action = component.get("c.getCollege");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.collegeList',response.getReturnValue());
                console.log('--------->'+component.get('v.collegeList'));
            }
            if(state === "ERROR"){

                alert('Error' + response.getReturnValue());
            }
            component.set('v.showSpinner',false);
        });
        $A.enqueueAction(action);
    },

    getTopperStudent : function(component,event,helper){
        console.log("getTopper function Called");
         component.set('v.showSpinner',true);
         var clgId = component.get('v.selectedCollegeId');
         
        var action = component.get('c.getTopper');
        action.setParams({collegeId : clgId});
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state ==='SUCCESS'){
                console.log(response.getReturnValue());
                component.set('v.toppername',response.getReturnValue());
            }else{
                alert("Error");
                component.set('v.showSpinner',false);
            }
        });
        $A.enqueueAction(action);
    }

})
