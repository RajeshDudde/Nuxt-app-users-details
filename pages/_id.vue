<template>
    <individual   :info="display"  />
   
</template>
 <!-- <users-pre v-if="pre($route.params.id)" :data="check($route.params.id)" :key="data.id"
      :image="`'https://avatars.dicebear.com/v2/avataaars/${data.name}.svg?options[mood][]=happy' `"
    :name="data.name"  
    :email="data.email"
    :phone="data.phone"
    :company="data.company"
    :website="data.website"
    :address="data.address"
    <h1 >hello  {{$route.params.id}}</h1>
    /> -->
<script>
import Individual from '@/components/Individual'

export default
{
    
    components:
    {
    Individual,
    
    },
    // data()
    // {
    //     error=false;
    // },
    computed:
    {
        display()
        {
          
            if(this.$route.params.id-1>=0 && this.$route.params.id-1<10)
            {
            return this.$store.getters.load[this.$route.params.id-1]  
            }
            else{
                console.log("error");
            }
            // }
            // catch(error){
            //     error({ statusCode: 500, message: 'Post not found' })
            // }
            // if(typeof(this.$store.getters.display)==='undefined')
            // {
            // //  if(Object.keys(this.$store.getters.display).length !=0)
            // //  {
               
            //      return this.$store.getters.load[this.$route.params.id-1]
            //     // return this.$store.getters.display
            //  }
            //  else{
            //      return this.$store.getters.display
            //  }
        }
      
    },

    
}
</script>
