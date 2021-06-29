<template>
  <article class="user" @click="redirect">
      <div class="avathar" 
       :style="{backgroundImage: 'url('+image+ ')'}">
       </div>
       <div class="users-info">
           <table>
             <tbody>
             <tr>
               <td><h1>{{name}}</h1></td>
             </tr>
             <tr>
               <td><h5>Email: {{email}}</h5></td>
             </tr>
             <tr>
               <td><h5>Phone:{{phone}}</h5></td>
                <!-- <td><h6>{{phone}}</h6></td> -->
             </tr>
             <tr>
               <td><h5>Company:{{company.name}}</h5></td>
                <!-- <td><h6>{{company.name}}</h6></td> -->
             </tr>
              <tr>
                <td><h5>Website:{{website}}</h5></td>
                <!-- <td><h6>{{website}}</h6></td> -->
              </tr>
                 <tr>
                <td><h5>Address:{{address.street}}{{address.suite}}{{address.city}}{{address.zipcode}}</h5></td>
                <!-- <td><h6>{{address.street}}{{address.suite}}{{address.city}}{{address.zipcode}}</h6></td> -->
              </tr>
             </tbody>
           </table>
       </div>

  </article>
</template>

<script>
export default {
name:'Userspre',
props:{
      id:
    {
      type:Number,
      required:true
    },
    image:
    {
      type:String,
       required:true
    },
    name:{
        type: String,
        required:true
    },
    email:
    {
          type: String,
        required:true
    },
    phone:
    {
        type: String,
        required:true
    },
    company:
    {
        type: Object,
         required:true
    },
    website:
    {
        type: String,
         required:true
    },
    address:
    {
       type:Object,
       required:true
    }

},
data()
{
   return {
     userdata:
     {
          image:this.image,
          name:this.name,
           email:this.email,
           phone:this.phone,
          company:this.company,
          website:this.website,
          address:this.address,
          id:this.id
     }
   }
},
 methods:
{
  redirect()
  {
    // console.log(this.userdata)
      this.$emit("userdata",this.userdata) 
  }
}
}
</script>
<style scoped>

.user
{
  display: flex;
  background-color: white;
  left:30%;
  width: 90%;
  height: 40%;
  border: 0.5px solid rgba(0, 0, 0, 0.123);
 
   margin:10px 20px 20px 15px;
   padding:5px;
}
.avathar
{
  background-repeat:no-repeat;
  float: left;
  width:20%;
  padding:5px;
  margin-left: 20px;
   /* border: 2px solid rgb(0, 0, 0); */
}
.users-info
{
  float: right;
  width:70%;
   padding:5px;
   margin:0px;
  /* height:70%; */
   /* border: 2px solid rgb(0, 0, 0); */
}
 /* @media (min-width: 768px) {
  .user{
    width: 500px;
  } 
} */
</style>