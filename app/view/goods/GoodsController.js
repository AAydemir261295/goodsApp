function logoutLogic() { }

function goodsTab() {
    return Ext.create("Ext.container.Container", {
        // extend: "Ext.container.Container",
        xtype: "container",
        title: "Товары",
        closable: true,

        items: [{
            xtype: 'formpanel',
            title: 'Список товаров',
            bodyPadding: 20,

            items: [{
                xtype: 'searchfield',
                label: 'ID',
                name: 'ID',
                width: 350,
                listeners: {
                    change: "handleIdValue",
                    keyPress: "searchById"

                },
            }, {
                xtype: 'searchfield',
                label: 'Описание',
                name: 'description',

                width: 350,
                listeners: {
                    change: "handleDesriptionValue",
                    keyPress: "searchByDescription"

                },
            }],

        },
        {
            xtype: 'goodsList',
        }],
    })
}

function createModal(store, itemFoChange) {
    var rowData = itemFoChange[0].data;
    var priceError = 'Цена не может быть отрицательной';
    var quantityErrors = { negative: 'Кол-во не может быть отрицательным', double: "'Кол-во не может быть дробным'" };
    return Ext.create('Ext.form.Panel', {
        floated: true,
        modal: true,
        centered: true,
        closable: true,
        width: 500,
        padding: 6,
        title: `Карточка товара: ${rowData.name}`,
        buttons: {
            decline: {
                text: "Отмена",
                handler: function () {
                    this.up().up().destroy();
                }
            },
            submit: {
                text: "Сохранить",
                handler: function () {
                    var form = this.up().up();
                    var values = form.getValues();
                    console.log(values);
                    if (values.price != rowData.price || values.quantity != rowData.quantity) {
                        store.each(function (record) {
                            if (record.get("ID") == rowData.ID) {
                                console.log(record);
                                record.set({ price: values.price, quantity: values.quantity })
                            }
                        })
                        Ext.toast("Сохранено");
                    }
                    this.up().up().hide();
                }
            },

        },
        items: [{
            xtype: 'textfield',
            name: 'ID',
            label: 'ID',
            value: rowData.ID,
            editable: false,
            clearable: false,
        }, {
            xtype: 'textfield',
            name: 'description',
            label: 'Описание',
            value: rowData.description,
            editable: false,
            clearable: false,
        }, {
            xtype: 'numberfield',
            name: 'price',
            label: 'Цена',
            value: rowData.price,
            validators: function (value) {
                return value >= 0 ? true : priceError;
            },
            errorTarget: 'under'
        },
        {
            xtype: 'numberfield',
            name: 'quantity',
            label: 'Кол-во',
            value: rowData.quantity,
            validators: function (value) {
                if (value.toString().indexOf(".") == -1 && value > 0) {
                    return true;
                } else if (value <= 0) {
                    return quantityErrors.negative;
                } else {
                    return quantityErrors.double
                }
            },
            errorTarget: 'under'
        }]
    });
}

Ext.define('testApp.view.goods.GoodsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.goods',

    searchValues: { id: { type: "ID", value: "" }, description: { type: "description", value: "" } },
    editRow: null,

    requires: [
        'testApp.store.GoodsStore'
    ],



    onItemSelected: function (e, item) {
        var store = e.getStore();
        var modal = createModal(store, item);
        modal.show();

    },

    goodsClick: function (s) {
        var tabPanel = Ext.ComponentQuery.query("#tabber")[0];
        tabPanel.add(goodsTab());

    },

    createGoodsTab: function () {

    },

    logout: function () {
        logoutLogic();
        this.redirectTo("login");
    },

    handleDesriptionValue(e) {
        var inputValue = e.getValue();
        if (inputValue == "") {
            this.searchValues.description.value = inputValue;
            var store = e.up().up().items.items[1].store;
            var propertyType = this.searchValues.description.type;
            store.filters.removeAtKey(propertyType)
            store.reload()
        }

    },

    searchByDescription: function (event, opts) {
        if (opts.keyCode == Ext.event.Event.ENTER) {
            var tmp = event.getValue();
            var searchValue = tmp.toLowerCase();
            this.searchValues.description.value = searchValue;

            var store = event.up().up().items.items[1].store;
            var propertyType = this.searchValues.description.type;

            if (searchValue) {
                var filter = { id: propertyType, property: propertyType, value: searchValue };
                filter.anyMatch = true;
                filter.caseSensitive = false;
                store.addFilter(filter)
                store.reload();

            }
        }
    },

    handleIdValue(e) {
        var inputValue = e.getValue();
        if (inputValue == "") {
            this.searchValues.id.value = inputValue;
            var store = e.up().up().items.items[1].store;
            var propertyType = this.searchValues.id.type;
            store.filters.removeAtKey(propertyType)
            store.reload()
        }
    },

    searchById: function (event, opts) {
        if (opts.keyCode == Ext.event.Event.ENTER) {
            var tmp = event.getValue();
            var searchValue = tmp.toLowerCase();
            this.searchValues.id.value = searchValue;

            var store = event.up().up().items.items[1].store;
            var propertyType = this.searchValues.id.type;

            if (searchValue) {
                var filter = { id: propertyType, property: propertyType, value: searchValue };
                filter.exactMatch = true;
                store.addFilter(filter)
            }
        }
    }


});