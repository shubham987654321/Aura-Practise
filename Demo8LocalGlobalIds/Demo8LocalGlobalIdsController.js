({
    handleClick : function(component, event, helper) {
        var cmp = component.find('demo1input');
        console.log('Local Id is '+cmp.getLocalId());
        console.log('Global Id is '+cmp.getGlobalId());
        console.log('Value of Input is '+cmp.get('v.value'));
        console.log('Lable of INput is '+cmp.get('v.label'));
        
        cmp.set('v.value', 'Trainaing Demo');
        cmp.set('v.label','Changed Input Lable');

    },

    showMultipleIds : function(component) {
        var cmp = component.find('demo2input');
        cmp.forEach(function(item,index){
            console.log('Item Index is -----'+index + ' Local Id is '+item.getLocalId()+ 
              ' Global Id is '+ item.getGlobalId() +
              ' ----->> value is : '+item.get('v.value'));
            var myvalue = item.get('v.value');
            if(myvalue !== ''){
                item.set('v.readonly',true);
            }
        });
    },
  
    resetValues :  function(component) {
        var cmp = component.find('demo2input');
        cmp.forEach(function(item,index){
            item.set('v.value','');
            item.set('v.readonly',false);
        });
    }
 
})