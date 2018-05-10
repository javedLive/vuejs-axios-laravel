<template id="employee-edit">
  <div>
    <h3>Update employee</h3>
    <form v-on:submit.prevent = "updatePost">
      <div class="form-group">
        <label for="edit-name">Name</label>
        <input id="edit-name" v-model="employee.name" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="edit-email">Email</label>
        <input type="email" v-model="employee.email" class="form-control" required >
      </div>
      <button type="submit" class="btn btn-xs btn-primary">Update Employee</button>
      <router-link class="btn btn-xs btn-warning" v-bind:to="'/crud/public/'">Cancel</router-link>
    </form>
  </div>
</template>

<script>
export default{
  data: function () {
    return {employee: {name: '', email: ''}}
  },
  created: function(){
    let uri = 'http://localhost/crud/public/employees/'+this.$route.params.id+'/edit';
    Axios.get(uri).then((response) => {
    this.employee = response.data;
  });
  },
  methods: {
    updatePost: function() {
      let uri = 'http://localhost/crud/public/employees/'+this.$route.params.id;
      Axios.patch(uri, this.employee).then((response) => {
      this.$router.push({name: 'Employees'})
    })
  }
  }
}
</script>