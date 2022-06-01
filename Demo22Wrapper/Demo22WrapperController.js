({
    doInit: function(component, evenet, helper) {
        helper.getMyData(component);
    },

    handleEdit: function(component, event, helper) {
        component.set("v.editable", true);
        var _contactList = component.get('v.view.wrapperContactList');
        var _tempContactList = [];


        _contactList.forEach((element, index) => {

            element.isEditable = true;
            _tempContactList.push(element);
        })
        component.set('v.view.wrapperContactList', _tempContactList);
    },


    handleEdit2: function(component, event, helper) {
        component.set('v.editable2', true);
        var oppList = component.get('v.view.wrapperOpportunityList');
        var tempOppList = [];

        oppList.forEach((element, item) => {
            element.isEditable = true;
            tempOppList.push(element);

        });
        component.set('v.view.wrapperOpportunityList', tempOppList);
    },


    handleSaveAll: function(component, event, helper) {

        var action = component.get("c.saveDataToDatabase");
        action.setParams({
            jsonString: JSON.stringify(component.get("v.view"))
        });
        // console.log('$$$$$$$$$' + JSON.stringify(component.get("v.view")));

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                alert("Reecords Updated Successfully");
                helper.getMyData(component);
                component.set('v.editable', false);
                component.set('v.editable2', false);
            }
        })

        $A.enqueueAction(action);


    },

    handleSaveAll2: function(component, event, helper) {
        var action = component.get("c.saveOpprtunityToDatabase");
        action.setParams({
            jsonString: JSON.stringify(component.get("v.view"))
        });
        console.log('>>>>>>>>' + JSON.stringify(component.get("v.view.OpportunityWrapper")));

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                alert("Opprtunity Record Updated Successfully");
                helper.getMyData(component);
                component.set('v.editable', false);

            }
        })

        $A.enqueueAction(action);
    },




    addNewContact: function(component, event, helper) {
        var _newContact = {
            "isEditable": true,
            "contactObj": {
                "attributes": { "type": "Contact" },
                "FirstName": "",
                "LastName": "",
                "Phone": "",
                "Email": "",
                "AccountId": component.get('v.recordId'),
            }
        };

        var _contactList = component.get('v.view.wrapperContactList');
        _contactList.push(_newContact);
        component.set('v.view.wrapperContactList', _contactList);

    },

    addNewOpportunity: function(component, event, helper) {
        console.log(JSON.stringify(component.get('v.view')));
        console.log(component.get('v.recordId'));
        var newOpp = {
            isEditable: true,
            oppObj: {
                "attributes": { "type": "Opportunity" },
                "Name": "",
                "CloseDate": "",
                "Amount": 0,
                "AccountId": component.get('v.recordId'),
                "StageName": ""
            }
        };

        component.set('v.editable2', true);
        var _oppList = component.get('v.view.wrapperOpportunityList');
        _oppList.push(newOpp);
        component.set('v.view.wrapperOpportunityList', _oppList);

    },



    // inline editable for each item  which item is selected

    editInlineRecord: function(component, event, helper) {

        // which item is selected 
        var selectedId = event.getSource().get('v.name');
        var _contactList = component.get('v.view.wrapperContactList');
        var _tempContactList = [];
        _contactList.forEach((element, index) => {
            if (element.contactObj.Id === selectedId) {
                element.isEditable = true;
            }
            _tempContactList.push(element);
        })
        component.set('v.view.wrapperContactList', _tempContactList);

    },




    //  save the single record

    saveInlineRecord: function(component, event, helper) {
        // to save the singlerecord in database
        var jsonData = null;
        var selectedId = event.getSource().get('v.name');
        var _contactList = component.get('v.view.wrapperContactList');
        var _tempContactList = [];

        _contactList.forEach((element, index) => {
            console.log('Save Contact record :------' + element.contactObj.Id + '=== ' + selectedId)
            if (element.contactObj.Id === selectedId) {
                jsonData = JSON.stringify(element);
            }
            //  _tempContactList.push(element);
        })

        // component.set('v.view.wrapperContactList', _tempContactList);

        // call the apex class
        var action = component.get('c.saveSingleRecord');
        action.setParams({
            jsonString: jsonData
        });


        action.setCallback(this, function(response) {
            var state = response.getState();
            var count = 0;
            alert(response.getReturnValue() + ' state : ' + state);
            if (state === 'SUCCESS') {
                var _recordId = response.getReturnValue();
                console.log('----------->' + _recordId);
                alert('Single Record Update Sucessfully' + response.getReturnValue());

                _contactList.forEach((element, index) => {
                    if (element.contactObj.Id === selectedId) {
                        element.isEditable = false;
                        element.contactObj.Id = _recordId;
                    }
                    _tempContactList.push(element);
                    if (element.isEditable) {
                        count++;
                    }
                });

                component.set('v.view.wrapperContactList', _tempContactList);
                if (count == 0) {
                    component.set('v.editable', false);
                }

            }
        });
        $A.enqueueAction(action);
    },



    //------------------------------ Opportunity -----------------------------------------------------------------------------

    // inline edit for Opportunity
    editInlineOppRecord: function(component, event, helper) {
        var selectedRecordId = event.getSource().get('v.name');
        var oppList = component.get('v.view.wrapperOpportunityList');
        var tempOppList = [];

        oppList.forEach((element, item) => {
            if (element.oppObj.Id === selectedRecordId) {
                element.isEditable = true;
            }
            tempOppList.push(element);

        });
        component.set('v.view.wrapperOpportunityList', tempOppList);



    },


    saveInlineOppRecord: function(component, event, helper) {
        //  alert('save Opp is invoke');
        var jsonData = null;
        var selectedId = event.getSource().get('v.name');
        var oppList = component.get('v.view.wrapperOpportunityList');
        console.log(oppList);

        var tempOppList = [];

        oppList.forEach((element, item) => {
            if (element.oppObj.Id == selectedId) {
                jsonData = JSON.stringify(element);
            }

        });

        // save in the database
        var action = component.get('c.saveSingleOpportunity');
        action.setParams({
            jsonString: jsonData
        })

        action.setCallback(this, function(response) {
            var state = response.getState();

            //  alert(' state of single on saving' + state);
            if (state === 'SUCCESS') {
                // alert('opp record updated/ created sucessfully');

                var getOpportunityId = response.getReturnValue();
                var count = 0;
                console.log(getOpportunityId);
                oppList.forEach((element, item) => {
                    if (element.oppObj.Id == selectedId) {
                        element.isEditable = false;
                        element.oppObj.Id = getOpportunityId;

                    }
                    tempOppList.push(element);
                    if (element.isEditable) {
                        count++;
                    }

                });

                component.set('v.view.wrapperOpportunityList', tempOppList);
                if (count == 0) {
                    component.set('v.editable2', false);
                }
            }
        })

        $A.enqueueAction(action);


    }






})