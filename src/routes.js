import Vue from "vue"
import Router from "vue-router"

Vue.use(Router);

import Home from '@/pages/Home.vue'
import Crm from '@/pages/Crm.vue'
export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/crm',
			name: 'crm',
			component: Crm
		}
	]
})