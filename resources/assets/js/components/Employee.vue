<template id="viewEmployee">
    <div>
     <h3> {{employee.name}}</h3>
     <strong>Email :</strong>
     <div>
       {{employee.email}}
     </div>
     <br>
     <span class="glyphicon glyphicon-arrow-left"></span>
     <router-link v-bind:to="'/crud/public/'"> Back to Home</router-link>
    </div>
</template>

<script>
    export default {
      data:function()
      {
        return {employee: { name:'', email:''}}
      },
  
        created:function()
        {
          let uri = 'http://localhost/crud/public/employees/'+this.$route.params.id;
           Axios.get(uri).then((response)=>{
           this.employee = response.data;
           })
        } 
    }
</script>
