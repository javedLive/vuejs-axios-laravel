require('./bootstrap');
window.Vue = require('vue');
window.VueRouter = require('vue-router').default;
window.VueAxios = require('vue-axios').default;
window.Axios = require('axios').default;
let Applayout = require('./components/App.vue');
// Show All Employee
const Employees = Vue.component('Employees',require('./components/Employees.vue'));

// Add Employee
const AddEmployee = Vue.component('AddEmployee',require('./components/AddEmployee.vue'));

// Edit Employee
const EditEmployee = Vue.component('EditEmployee',require('./components/EditEmployee.vue'));

// Delete Employee
const DeleteEmployee = Vue.component('DeleteEmployee',require('./components/DeleteEmployee.vue'));

//  View Employee
const Employee = Vue.component('Employee',require('./components/Employee.vue'));

// registering Modules
Vue.use(VueRouter, VueAxios, axios);

const routes = [
	{
		name : 'Employees',
		path: '/crud/public/',
		component : Employees
	},
	{
		name : 'AddEmployee',
		path: '/crud/public/AddEmployee',
		component : AddEmployee
	},
	{
		name : 'EditEmployee',
		path: '/crud/public/EditEmployee/:id',
		component : EditEmployee
	},
	{
		name : 'DeleteEmployee',
		path: '/crud/public//DeleteEmployee',
		component : DeleteEmployee
	},
	{
		name : 'Employee',
		path: '/crud/public//Employee/:id',
		component : Employee
	},
];

const router = new VueRouter({mode: 'history', routes: routes});

new Vue(
	Vue.util.extend({router},Applayout)
).$mount('#app');
