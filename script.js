// contacts
define(['jquery', 'underscore', 'twigjs', 'lib/components/base/modal'], function($, _, Twig, Modal) {
    let CustomWidget_WidgetContacts = function() {
        let self = this,
            system = self.system;

        /* ######################################################################### */

        this.callbacks = {
            settings: function() {
                console.log('settings');
            },

            init: function() {
                return true;
            },

            bind_actions: function() {
                return true;
            },

            render: function() {
                console.log('render');
                return true;
            },

            contacts: {
                selected: function () {}
            },

            companies: {
                selected: function () {},
            },

            leads: {
                selected: function () {}
            },

            tasks: {
                selected: function() {}
            },

            destroy: function() {},

            onSave: function() {
                return true;
            },

            advancedSettings: function() {}
        };
        return this;
    };

    return CustomWidget_WidgetContacts;
});
