define(["jquery", "underscore", "backbone", "handlebars", "text!../templates/action-dialog.html"], function($, _, Backbone, Handlebars, actionDialogTemplateHtml) {

    return Backbone.View.extend({

        template: Handlebars.compile(actionDialogTemplateHtml),

        initialize: function(args) {
            this.heading = args.heading;
            this.message = args.message;

            this.confirm_button = args.confirm_button || "Confirm";
            this.cancel_button = args.cancel_button || "Cancel";
        },

        events: {
            "click .cancel": "cancelEvent"
          , "click .confirm": "confirmEvent"
        },

        render: function() {
            // Render the template
            this.$el.html(this.template({
                heading: this.heading
              , message: this.message
              , confirm: this.confirm_button
              , cancel: this.cancel_button
            }));

            return this;
        },

        cancelEvent: function(e) {
            if (e) e.preventDefault();

            this.trigger("cancelled");

            this.destroy();
        },

        confirmEvent: function(e) {
            if (e) e.preventDefault();

            this.trigger("confirmed");

            this.destroy();
        },

        destroy: function() {            
            // Cleanup events
            this.undelegateEvents();

            // Cleanup html
            this.$el.html("");

            this.trigger("closed");

            return this;
        }

    });

});