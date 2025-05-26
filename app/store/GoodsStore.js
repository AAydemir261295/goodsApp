Ext.define('testApp.store.GoodsStore', {
    extend: 'Ext.data.Store',

    alias: 'store.goods',

    model: 'testApp.model.GoodsModel',

    storeId: "goodsStore",

    pageSize: 4,

    data: {
        items: [
            {
                'ID': 1, 'name': "name", 'description': "description", 'price': "4134", 'quantity': "0",
            },
            { 'ID': 2, 'name': "name", 'description': "dn", 'price': "123", 'quantity': "10" },
            { 'ID': 3, 'name': "name", 'description': "de", 'price': "5125", 'quantity': "20" },
            { 'ID': 4, 'name': "name", 'description': "des", 'price': "1234", 'quantity': "30" },
            { 'ID': 5, 'name': "name", 'description': "desc", 'price': "15", 'quantity': "40" },
            { 'ID': 6, 'name': "name", 'description': "descr", 'price': "1", 'quantity': "50" },
            { 'ID': 7, 'name': "name", 'description': "descri", 'price': "price", 'quantity': "60" },
            { 'ID': 8, 'name': "name", 'description': "descrip", 'price': "price", 'quantity': "70" },
            { 'ID': 9, 'name': "name", 'description': "descript", 'price': "price", 'quantity': "80" },
            { 'ID': 10, 'name': "name", 'description': "descripti", 'price': "price", 'quantity': "90" },
            { 'ID': 11, 'name': "name", 'description': "descri", 'price': "price", 'quantity': "100" },


        ]
    },

    proxy: {
        type: 'memory',
        enablePaging: true,

        reader: {
            type: 'json',
            rootProperty: 'items',
        }
    }
});