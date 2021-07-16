<template>
    <div>
     
        <Chave4 v-if="quantidade===4" />
        <Chave8 v-if="quantidade===8"  />
        <Chave16 v-if="quantidade===16"  />
        <Chave32 v-if="quantidade===32"  />
    </div>

</template>
<script>
import Chave4 from './Chave4.vue'
import Chave8 from './Chave8.vue';
import Chave16 from './Chave16.vue';
import Chave32 from './Chave32.vue';




export default {
  components: { 
    Chave4,
    Chave8 ,
    Chave16 ,
    Chave32
  
    
  },
   name:'ChavePrincipal',
   props:{quantidade:Number,
   campeonato:Number
   },
   data:()=>{
     return{
       store:''
     }
   },
   methods:{
     
   },
   mounted(){

      

    
      
   }

   

   
}
</script>
