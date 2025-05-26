Ext.define('testApp.view.goods.GoodsView', {

    extend: 'Ext.container.Container',
    xtype: 'goods',
    controller: 'goods',

    itemId: "goodsContainer",

    title: "Учет товаров",

    items: [
        {
            xtype: "titlebar",
            items: [
                { xtype: "panelheader", title: "Учет товаров", style: { border: "none" } },
                { xtype: "button", text: "Товары", handler: "goodsClick", cls: "test" },
                { xtype: "button", text: "Выход", handler: "logout", cls: "test" },
            ],
        },
        {
            xtype: "tabpanel",
            itemId: "tabber",
            layout: {
                type: 'card'
            },
            height: 1000,

            items: [{
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
                    
                },
                    // {
                    //     xtype: "button",
                    //     text: "ASDASD",
                    //     handler: "test"
                    // }
                ],
            }]
        }]



});