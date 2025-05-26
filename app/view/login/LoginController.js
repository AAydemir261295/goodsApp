
function isAuthorizedUser(values) {
    return values.login == "admin" && values.pass == "padmin";
}

Ext.define('testApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.login',


    onLogin: function (values) {
        var form = values.up().up();
        var values = form.getValues();

        if (isAuthorizedUser(values)) {
            this.redirectTo("goods");
        }
    }

});
