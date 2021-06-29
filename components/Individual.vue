<template>
 <users-pre  :key="info.id" 
    :id="info.id"
    :image="`'https://avatars.dicebear.com/v2/avataaars/${info.name}.svg?options[mood][]=happy' `"
    :name="info.name"  
    :email="info.email"
    :phone="info.phone"
    :company="info.company"
    :website="info.website"
    :address="info.address"
 />
</template>
<script>
import UsersPre from '@/components/UsersPre'
export default
{
    components:{
    UsersPre
},
    props:{
    info:
    {
      type: Object,
      required: true
    }
},
}
</script>
