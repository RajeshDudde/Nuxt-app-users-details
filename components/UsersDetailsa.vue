<template>
  <div class="Allusersdetails">
  <users-pre  @userdata="display"
   v-for="data in info"  :key="data.id"
    :id="data.id"
    :image="`'https://avatars.dicebear.com/v2/avataaars/${data.name}.svg?options[mood][]=happy' `"
    :name="data.name"  
    :email="data.email"
    :phone="data.phone"
    :company="data.company"
    :website="data.website"
    :address="data.address"
/>
  </div>
</template>
<!-- @click="redirect(data)" -->
<script>
import UsersPre from '@/components/UsersPre'
export default {
components:{
    UsersPre
},
props:{
    info:
    {
      type: Array,
      required: true
    }
},

methods:
{
  display(data)
  {
   //  console.log(data)
  
       this.$emit("us",data)
  }
}
}
</script>


<style scoped>
.Allusersdetails
{
  display:block;
  background-color: rgba(212, 212, 212, 0.788);
  width:100%;
  height: 35%;
  margin:0px;
  padding:2px;
}
</style>