// import { isLogined } from "../../src/AuthGuard.js";

Ext.define('testApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',


    routes: {
        goods: {
            action: "showGoodsPage"
        },
        login: {
            action: "showLoginPage"
        },
    },

    showGoodsPage: function () {
        // if (isLogined()) {
        var mainView = this.getView();
        var currentView = mainView.down();
        currentView.destroy();
        mainView.add({ xtype: 'goods' })
        // }
    },

    showLoginPage: function () {
        var mainView = this.getView();
        var currentView = mainView.down();
        currentView.destroy();
        mainView.add({ xtype: 'login' })
    }

});