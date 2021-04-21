const navList = [
    {
        title:"商品",
        path: "/product",
        index:"1",
        children: [
            {
                title: "商品管理",
                path: "/app/productManage",
                index: "/app/productManage"
            },{
                title: "评论管理",
                path: "/app/commentManage",
                index: "/app/commentManage"
            }
        ]
    },{
        title: "订单",
        path: "/order",
        index: "2",
        children: [
            {
                title: "订单管理",
                path: "/app/orderManage",
                index: "/app/orderManage"
            }
            
        ]
    }
]

export {navList};