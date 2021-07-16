<template>
  <div id="app">
    <IconMenuBar :campeonato="store.torneio"/>
     <ChavePrincipal :quantidade="4" />
   
  </div>
</template>

<script>
/*import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import '@popperjs/core/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';*/
 import './assets/style/lego.css';
//store.qtd

import ChavePrincipal from './components/chaves/ChavePrincipal.vue';
import IconMenuBar from './components/widgets/IconMenuBar.vue';
export default {
  name: 'App',
  components: {
    ChavePrincipal,
     IconMenuBar
  },
  data:()=>{
    return{
      store:'',
      
    }
  },
  computed:{
    
  },
  
  
  mounted(){
    if(localStorage.getItem('store')){
      this.store=JSON.parse(localStorage.getItem('store'));
      
    }
    
    

  },
 
 
}
</script>



