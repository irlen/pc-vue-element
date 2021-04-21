
import Login from '../login/index.vue'
import Layout from '../layout/index.vue'

import ProductManage from '../productManage/index.vue'
import CommentManage from '../commentManage/index.vue'
import OrderManage from '../orderManage/index.vue'
import ProductForAdd from '../productForAdd/index.vue'

export default [
    { path: '/',component: Login },
    { path: '/login',component: Login },
    {
        path: '/app',component: Layout,
        children: [
            {
                path: "/app/productManage",
                component: ProductManage
            },{
                path: "/app/commentManage",
                component: CommentManage
            },{
                path: "/app/orderManage",
                component: OrderManage
            }
        ]
    },
    { path: '/productForAdd', component: ProductForAdd }
]

