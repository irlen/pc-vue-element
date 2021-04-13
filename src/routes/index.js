
import Login from '../login/index.vue'
import Layout from '../layout/index.vue'

export default [
    {path: '/',component: Login},
    {path: '/login',component: Login},
    {
        path: '/app',component: Layout,
        children: [
            
        ]
    }
]

