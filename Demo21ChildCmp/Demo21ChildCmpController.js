({
    handleBubble : function(component, event, helper) {

        console.log('Bubble Phase for  Child Handler for '+event.getName());
    },

    handleCapture : function(component, event, helper) {
        console.log('Capture Phase for  Child Handler for '+event.getName());
    }
 
})
