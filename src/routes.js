import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

import App from './App.vue'
export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: App
		}
	]
})