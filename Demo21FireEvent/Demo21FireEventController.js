({
    fireEvent : function(component, event, helper) {
         var cmpeve = component.getEvent('bubbleevent');
         cmpeve.setParams({
             message : 'event bubbling'
         });

         cmpeve.fire();

    }
})
