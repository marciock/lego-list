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

        <LegoDrop :rodada="9" :referencia1="1" :referencia2="2" read="true"/>
     
        <LegoColchets />
         <LegoCurveDown />

    </div>  
    <div class="lego-keys">
      
        <LegoDrop :rodada="3" principal="true"/>
     
        <LegoColchets />
         <LegoCurveDown />

          <LegoSpace />
          <LegoSpace />
         <LegoDrop :rodada="13" :referencia1="9" :referencia2="10" read="true"/>
     
        <LegoColchets />
        <LegoCurveDown />
      
    </div> 
    <div class="lego-keys">
      
        <LegoDrop :rodada="4" principal="true"/>
     
        <LegoColchets />

        <LegoDrop :rodada="10" :referencia1="3" :referencia2="4" read="true"/>
     
        <LegoColchets />
        <LegoCurveUp />

         
        
          <LegoSpace />
          <LegoSpace />
          <LegoLine />        
    </div> 
    <div class="lego-keys">
      
        <LegoDrop :rodada="5" principal="true"/>
     
        <LegoColchets />
         <LegoCurveDown />

         <LegoSpace />
         <LegoSpace />
          <LegoSpace />
          <LegoSpace />
          <LegoSpace />
         <LegoDrop :rodada="15" :referencia1="13" :referencia2="14" read="true"/>
     
        <LegoColchets />
        <LegoDrop :rodada="16" :referencia1="15" :referencia2="15" oculta="none" final="true" read="true"/>
      
    </div> 
    <div class="lego-keys">
      
        <LegoDrop :rodada="6" principal="true"/>
     
        <LegoColchets />
        <LegoDrop :rodada="11" :referencia1="5" :referencia2="6" read="true"/>
     
        <LegoColchets />
        <LegoCurveDown />

        <LegoSpace />
          <LegoSpace />
          <LegoLine />  
      
    </div> 
    <div class="lego-keys">
      
        <LegoDrop :rodada="7" principal="true"/>
     
        <LegoColchets />
         <LegoCurveDown />


          <LegoSpace />
          <LegoSpace />
         <LegoDrop :rodada="14" :referencia1="11" :referencia2="12" read="true"/>
     
        <LegoColchets />
        <LegoCurveUp />
      
    </div>  
    <div class="lego-keys">
      
        <LegoDrop :rodada="8" principal="true"/>
     
        <LegoColchets />
        <LegoDrop :rodada="12" :referencia1="7" :referencia2="8" read="true"/>
     
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
import LegoLine from '../legos/LegoLine.vue';

import LegoHeader from '../legos/LegoHeader.vue';

export default {

   name:'Chave16',
   components:{
       LegoColchets,LegoDrop,
       LegoCurveDown,LegoSpace,
       LegoCurveUp,
       LegoLine,
       LegoHeader
   },
   data:()=>{
       return{
           texto:[ '16ª de Finais', '8ª de Finais','Semifinais','Final' , 'Campeão']      
     
       }
   }
       
}
</script>