 
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './components/Layout'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import detailPage from './pages/detail'
import d1page from './pages/detail/d1'
import d2page from './pages/detail/d2'
import d3page from './pages/detail/d3'
import d4page from './pages/detail/d4'

Vue.use(VueRouter)
Vue.use(VueResource) 
let router=new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			component:IndexPage
		},
		{
			path:'/detail',
			component:detailPage,
			redirect:'/detail/d1',
			children:[
				{
					path:'d1',
					component:d1page
				},
				{
					path:'d2',
					component:d2page
				},
				{
					path:'d3',
					component:d3page
				},
				{
					path:'d4',
					component:d4page
				},

			]
		},
		 


	],
})
 
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout}
})
