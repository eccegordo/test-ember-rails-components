
App.MyWidgetComponent = Ember.Component.extend({
    foo: "the value of foo",

    actions: {
        edit: function(input) {
            alert("edit");
            // Send action to external scope
            this.sendAction('actionEdit', input);
        }       
    },

    setupDefaults: function(){
        // implement setup bootstrapping when added to DOM
    }.on("didInsertElement")

});


/* 
* Handlebars Usage

{{ my-widget 
    actionEdit="edit" 
    foo="externalValue"
}}

*/
