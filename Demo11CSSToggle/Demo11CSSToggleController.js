({
    handleClick : function(component, event, helper) {

        var toogleText = component.find("mytext");
        $A.util.toggleClass(toogleText, 'toggle');
        if($A.util.hasClass(toogleText,'toggle')){
            component.find('mybutton').set('v.label','Show');
        }else{
            component.find('mybutton').set('v.label','Hide');
        }

    }
})