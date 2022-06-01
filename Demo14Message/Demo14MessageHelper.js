({
    messageutility: function(titleparam, cmp,ev, cssclass) {
        var msg = ev.getParam('arguments').message;

        var msgdiv = cmp.find('messagediv');
        
        $A.createComponents([
            ["lightning:card", {
                "title" : titleparam,
                "class" : cssclass
            }],
            ["lightning:formattedText", {
                "value" : msg
            }]
 
        ],function(components,status){
            if(status === 'SUCCESS'){
                var lccard = components[0];
                var formattedtext = components[1];
                lccard.set('v.body', formattedtext);
                msgdiv.set('v.body',lccard);

            }else if(status === "ERROR"){
                console.log("Error: "+errorMessage)
                alert("Error Message: "+errorMessage);
            }
        });


    },

   
    removemessage : function(component){
        var msgdiv = component.find('messagediv');
        msgdiv.set('v.body',[]);
    }
})
