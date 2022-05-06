import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. 安装插件
Vue.use(VueRouter)

const Home = () => import('views/Home/home')
const Category = () => import('views/Category/category')
const Cart = () => import('views/Cart/cart')
const Profile = () => import('views/Profile/profile')

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    }
]
// 2. 创建router
const router = new VueRouter({
    routes,
    mode: 'history'
})

// 3. 导出router
export default router