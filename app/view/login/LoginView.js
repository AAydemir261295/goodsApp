/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('testApp.view.login.LoginView', {
    extend: 'Ext.container.Container',

    xtype: 'login',
    controller: 'login',

    viewModel: {
        type: 'login'
    },

    layout: "center",

    items: [
        {
            xtype: 'formpanel',
            title: 'Окно входа',

            bodyPadding: 20,
            width: 500,


            bbar: ['->', {
                text: 'Войти',
                handler: "onLogin"
            }],

            items: [{
                xtype: 'textfield',
                label: 'Пользователь',
                name: 'login',
                bind: '{login}',
                allowBlank: false,
                required: true,
            }, {
                xtype: 'passwordfield',
                label: 'Пароль',
                name: 'pass',
                bind: '{pass}',

                allowBlank: false,
                required: true,

            }],
        },

    ],


});
