<template>
    <div>
        <LegoHeader :status="texto" />
     <div class="lego-keys">
      
        <LegoDrop :rodada="1" principal="true"/>
     
        <LegoColchets />

        <LegoCurveDown />
      
    </div>
    <div class="lego-keys">
        
            
            <LegoDrop :rodada="2" principal="true"/>
        
            <LegoColchets />
        

        
            
            <LegoDrop :rodada="5" :referencia1="1" :referencia2="2" read="true"/>
        
            <LegoColchets />
             <LegoCurveDown />
        
      
    </div>
    <div class="lego-keys">
        
            <LegoDrop :rodada="3" principal="true"/>
        
            <LegoColchets />
             <LegoCurveDown />

             <LegoSpace />
             <LegoSpace />  
             
              <LegoDrop :rodada="7" :referencia1="5" :referencia2="6" read="true"/>
               <LegoColchets />

             <LegoDrop :rodada="8" :referencia1="7" :referencia2="7" oculta="none" final="true" read="true"/>
        
    </div>
    <div class="lego-keys">
        
          <LegoDrop :rodada="4" principal="true"/>
      
          <LegoColchets />

           <LegoDrop :rodada="6"  :referencia1="3" :referencia2="4" read="true"/>
      
          <LegoColchets />
          <LegoCurveUp />
        
    </div>
    
    
</div>
</template>
<script>


import LegoDrop from '../legos/LegoDrop.vue';
import LegoColchets from '../legos/LegoColchets.vue';
import LegoCurveDown from '../legos/LegoCurveDown.vue';
import LegoSpace from '../legos/LegoSpace.vue';
import LegoCurveUp from '../legos/LegoCurveUp.vue';
import LegoHeader from '../legos/LegoHeader.vue';


export default {

   name:'Chave8',
   components:{
       LegoColchets,LegoDrop,
       LegoCurveDown,LegoSpace,
       LegoCurveUp,
       LegoHeader
   },
    data:()=>{
       return{
           texto:[ '8ª de Finais','Semifinais', 'Final' , 'Campeão']      
     
       }
   }
   
  
       
}
</script>