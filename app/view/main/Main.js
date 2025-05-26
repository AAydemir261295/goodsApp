/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */

Ext.define('testApp.view.main.Main', {

    extend: 'Ext.container.Container',
    xtype: 'app-main',
    controller: 'main',

    items: [
        {
            xtype: "login",
        }
    ],



});
