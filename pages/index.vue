<template>
  <div class="container">
   <users-detailsa :info="load" @us="user"/>
  </div>
</template>

<script>
import UsersDetailsa from  '@/components/UsersDetailsa'
export default {
components:
{
  UsersDetailsa
},
computed:
{
  load()
  {
    return this.$store.getters.load
  }
},
methods:
{
  user(data)
  {
    this.$store.dispatch("adddata",data);
  //  console.log(data);
   this.$router.push("/"+data.id)
  
  } 
}
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
 
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
