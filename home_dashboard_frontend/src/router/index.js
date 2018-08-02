import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Todo from '@/components/Todo'
import Weather from '@/components/Weather'
import SocketTest from '@/components/SocketTest'
import Home_edit from '@/components/Home_edit'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/home/:id', name:'Home_edit', component: Home_edit },
    {path: '/todo', name: 'Todo', component: Todo},
    {path: '/weather', name: 'Weather', component: Weather},
    {path: '/socket', name:'Socket', component: SocketTest}


  ]
})
