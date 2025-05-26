/**
 * This view is an example list of people.
 */
Ext.define('testApp.view.goods.GoodsList', {
    extend: 'Ext.grid.Grid',
    xtype: 'goodsList',

    height: 400,
    style: { border: "1px solid gray" },

    requires: [
        'testApp.store.GoodsStore'
    ],

    store: {
        type: "goods",
    },

    plugins: {
        pagingtoolbar: true,
    },

    columns: [{
        text: 'ID',
        dataIndex: 'ID',

        width: 200,
    }, {
        text: 'Имя',
        dataIndex: 'name',
        width: 230
    }, {
        text: 'Описание',
        dataIndex: 'description',
        width: 150
    },
    {
        text: 'Цена',
        dataIndex: 'price',
        // editable: true,
        width: 230
    },
    {
        text: 'Кол-во',
        dataIndex: 'quantity',
        renderer: function (v, m, idx, cell) {
            if (v == "0") {
                cell.setCls("test1");
            } else {
                cell.removeCls("test1");
            }
            return v;
        },
        width: 230
    },
    ],


    listeners: {
        select: 'onItemSelected'
    }
});