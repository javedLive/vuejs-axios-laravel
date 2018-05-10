<template id="AddEmployee">
    <div>
     <h3> Add new Employee</h3>
     <form  v-on:submit.prevent="createEmployee">
       <div class="form-group">
         <label> name</label>
         <input type="text" v-model="employee.name" class="form-control" required>
       </div>
       <div class="form-group">
         <label> Email</label>
         <input type="email" v-model="employee.email" class="form-control" required>
       </div>
       <button type="submit" class="btn btn-xs btn-primary"> Create </button>
       <router-link class="btn btn-xs btn-warning" v-bind:to="'/crud/public/'"> Cancel</router-link>
     </form>
    </div>
</template>

<script>
    export default {
      data:function()
      {
        return {employee: { name:'', email:''}}
      },
      methods:{
        createEmployee:function()
        {
          let uri = 'http://localhost/crud/public/employees/';
           Axios.post(uri,this.employee).then((response)=>{
              this.$router.push({name: 'Employees'})
           })
        }
      }
    }
</script>
