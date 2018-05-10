<template id="employee-delete">
  <div>
    <h3>Delete employee {{ employee.name  }}</h3>
    <form v-on:submit.prevent = "deleteEmployee">
      <p>The action cannot be undone</p>
      <button class="btn btn-xs btn-danger" type="submit" name="button">Delete</button>
      <router-link class="btn btn-xs btn-primary" v-bind:to="'/crud/public/'">Back</router-link>
    </form>
  </div>
</template>

<script>
export default {
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
    deleteEmployee: function() {
    let uri = 'http://localhost/crud/public/employees/'+this.$route.params.id;
    Axios.delete(uri, this.employee).then((response) => {
      this.$router.push({name: 'Employees'})
    })
    }
  }
}
</script>