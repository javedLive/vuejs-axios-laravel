<template id="employees">
    <div class="row">
      <div class="pull-right">
        <router-link class="btn btn-xs btn-primary" v-bind:to="{path: '/crud/public/AddEmployee'}">
          <span class="glyphicon glyphicon-plus"></span>
          Add New Employee
        </router-link>
        <br><br>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th class="col-md-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(employee, index) in employeeList" >
             <td>{{index + 1}}</td>
             <td>{{employee.name}}</td> 
             <td>{{employee.email}}</td>
             <td>
               <router-link class="btn btn-info btn-xs" v-bind:to= "{name: 'Employee', params: {id: employee.id}}"><i class="fa fa-eye" aria-hidden="true"></i>Show</router-link>
               <router-link class="btn btn-warning btn-xs" v-bind:to= "{name: 'EditEmployee', params: {id: employee.id}}"><i class="fa fa-pencil" aria-hidden="true"></i>Edit</router-link>
               <router-link class="btn btn-danger btn-xs" v-bind:to= "{name: 'DeleteEmployee', params: {id: employee.id}}"><i class="fa fa-trash-o" aria-hidden="true"></i>Delete</router-link>
             </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
    export default {
      data:function()
      {
        return {employees: ''};
      },
      created:function(){
        let uri = 'http://localhost/crud/public/employees';
        Axios.get(uri).then((response)=>{
          this.employees = response.data;
        }) ;
      },
      computed:{
        employeeList : function(){
          if(this.employees.length){
            return this.employees;
          }
        }
      }
    }
</script>
