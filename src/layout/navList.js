const navList = [
    {
        title:"商品",
        path: "/product",
        index:"1",
        children: [
            {
                title: "商品管理",
                path: "/product/manage",
                index: "1-1"
            },{
                title: "评论管理",
                path: "/product/comment",
                index: "1-2"
            }
        ]
    },{
        title: "订单",
        path: "/order",
        index: "2",
        children: [
            {
                title: "订单管理",
                path: "/order/manage",
                index: "2-1"
            }
            
        ]
    }
]

export {navList};