/*
    Méthodes d'accès aux services Web API ContactsManager
 */

//const apiBaseURL= "http://localhost:5000/api/Contacts";
const apiBaseURL= "https://tar-truth-gauge.glitch.me/api/contacts";
let addonsArray=[0,0,0];
function webAPI_getContacts( successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: contacts => {  successCallBack(contacts);
                                console.log("webAPI_getContacts - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_getContacts - error");
        }
    });
}
function webAPI_getContactsSort( b,successCallBack, errorCallBack) {
    let addons="";
    if(b==1 || b==-1)
    {
        addonsArray[0]=b;
    }
    if(b==2 || b==-2)
    {
        addonsArray[1]=b;
    }
    if(b==3 || b==-3)
    {
        addonsArray[2]=b;
    }
    if(addonsArray[0]==1)
    {
        addons=addons+"&sort=name"
    }
    if(addonsArray[0]==-1)
    {
        addons=addons+"&sort=name,desc"
    }
    if(addonsArray[1]==2)
    {
        addons=addons+"&sort=category";
    }
    if(addonsArray[1]==-2)
    {
        addons=addons+"&sort=category,desc"
    }
    if(addonsArray[2]==3)
    {
        addons=addons+"&sort=usager"
    }
    if(addonsArray[2]==-3)
    {
        addons=addons+"&sort=usager,desc"
    }
    addons=addons.replace('&','?');
    console.log("addons:"+apiBaseURL+addons);
    $.ajax({
        url: apiBaseURL+addons,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: contacts => {  successCallBack(contacts);
                                console.log("webAPI_getContacts - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_getContacts - error");
        }
    });
}

function webAPI_getContact( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + id,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: contact => { successCallBack(contact); console.log("webAPI_getContact - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_getContact - error");
        }
    });
}

function webAPI_addContact( contact, successCallBack, errorCallBack) {
    console.log('add', contact)
    $.ajax({
        url: apiBaseURL,
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify(contact),
        success: () => {successCallBack();  console.log("webAPI_addContact - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_addContact - error");
        }
    });
}

function webAPI_modifyContact( contact, successCallBack, errorCallBack) {
    console.log('modify', contact)
    $.ajax({
        url: apiBaseURL,
        type: 'PUT',
        contentType:'application/json',
        data: JSON.stringify(contact),
        success:() => {successCallBack();  console.log("webAPI_modifyContact - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_modifyContact - error");
        }
    });
}

function webAPI_searchContact( contactgiven,successCallBack, errorCallBack) {
    let addons="";
    if(contactgiven.Name!="")
    {
        addons="?name="+contactgiven.Name;
    }
    console.log(apiBaseURL+addons);
    $.ajax({
        url: apiBaseURL+addons,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: contacts => {  successCallBack(contacts);
                                console.log("webAPI_getContacts - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_getContacts - error");
        }
    });
}

function webAPI_deleteContact( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL+"/" + id,
        contentType:'text/plain',
        type: 'DELETE',
        success:() => {successCallBack();  console.log("webAPI_deleteContact - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_deleteContact - error");
        }
    });
}
