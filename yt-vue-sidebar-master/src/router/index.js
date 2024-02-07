import { createRouter, createWebHistory } from 'vue-router'
import Dash from '../views/Dashboard.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: () => import('../views/mainApp.vue'),

			children : [

				{
					path: 'dashboard',
					component: Dash
				},
				{
					path: 'rooms',
					component: () => import('../views/Rooms.vue')
				},
				{
					path: 'groups',
					component: () => import('../views/Groups.vue')
				},
				{
					path: 'teachers',
					component: () => import('../views/Teachers.vue')
				},
				{
					path: 'students',
					component: () => import('../views/Students.vue')
				},
			]
		},
		{
			path: '/login',
			component: () => import('../views/LoginPage.vue'),
		},

	],
})

export default router