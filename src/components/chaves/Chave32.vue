<template>
    <div >
    <LegoHeader :status="texto" />
     <div class="lego-keys">
      
        <LegoDrop :rodada="1" principal="true" />
     
        <LegoColchets />
        <LegoCurveDown />
      
    </div>
    <div class="lego-keys">
       
            
            <LegoDrop :rodada="2" principal="true" />
        
            <LegoColchets />

             <LegoDrop :rodada="17" :referencia1="1" :referencia2="2" read="true"/>
        
            <LegoColchets />
            <LegoCurveDown />

    </div> 
        
    <div class="lego-keys">
    
        <LegoDrop :rodada="3" principal="true" />

        <LegoColchets />
        <LegoCurveDown />

        <LegoSpace />
        <LegoSpace />
         <LegoDrop :rodada="25" :referencia1="17" :referencia2="18" read="true"/>
        
            <LegoColchets />
            <LegoCurveDown />


            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="4" principal="true" />

        <LegoColchets />

         <LegoDrop :rodada="18" :referencia1="3" :referencia2="4" read="true"/>
        
        <LegoColchets />
        <LegoCurveUp />


            <LegoSpace />
            <LegoSpace />
            
            <LegoLine />

            <LegoSpace />
            <LegoSpace />
            <LegoSpace />
            

            
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
            
            <LegoDrop :rodada="29" :referencia1="25" :referencia2="26" read="true"/>
             <LegoColchets />
             <LegoCurveDown />

          

        
            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="6" principal="true" />

        <LegoColchets />
         <LegoDrop :rodada="19" :referencia1="5" :referencia2="6" read="true"/>
         <LegoColchets />
         <LegoCurveDown />
             <LegoSpace />
            <LegoSpace />
                      
            <LegoLine />

            
            <LegoSpace />
            <LegoSpace style="width:12.3rem;" />   
                      
            <LegoLine />

            
            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="7" principal="true"/>

        <LegoColchets />
        <LegoCurveDown />

        <LegoSpace />
        <LegoSpace />
         <LegoDrop :rodada="26" :referencia1="19" :referencia2="20" read="true"/>
    
        <LegoColchets />
        <LegoCurveUp />

        <LegoSpace />
        <LegoSpace  />   
                      
        <LegoLine />
            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="8" principal="true"/>

        <LegoColchets />
         <LegoDrop :rodada="20 " :referencia1="7" :referencia2="8" read="true"/>
         <LegoColchets />
         <LegoCurveUp />

         <LegoSpace />
         <LegoSpace />
         <LegoSpace />
         <LegoSpace />
        <LegoSpace />   
                    
        <LegoLine />

            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="9" principal="true"/>

        <LegoColchets />
        <LegoCurveDown />

        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoSpace />

        <LegoDrop :rodada="31" :referencia1="29" :referencia2="30" read="true"/>
        <LegoColchets />
        <LegoDrop :rodada="32" :referencia1="31" :referencia2="31" oculta="none" final="true" read="true"/>
        
        
            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="10" principal="true"/>

        <LegoColchets />
         <LegoDrop :rodada="21" :referencia1="9" :referencia2="10" read="true"/>
         <LegoColchets />
         <LegoCurveDown />

        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoSpace />

        <LegoLine />

         
            
    </div>
    <div class="lego-keys">
    
        <LegoDrop :rodada="11" principal="true"/>

        <LegoColchets />
        <LegoCurveDown />

        <LegoSpace />
        <LegoSpace />
         <LegoDrop :rodada="27" :referencia1="21" :referencia2="22" read="true"/>
        
        <LegoColchets />
        <LegoCurveDown />

        <LegoSpace />
        <LegoSpace />

        <LegoLine />

            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="12" principal="true"/>

        <LegoColchets />
         <LegoDrop :rodada="22" :referencia1="11" :referencia2="12" read="true"/>
         <LegoColchets />
         <LegoCurveUp />

        <LegoSpace />
        <LegoSpace />

        <LegoLine />

        <LegoSpace />
        <LegoSpace style="width:12.4rem;"  />
      

        <LegoLine />
         
         

            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="13" principal="true"/>

        <LegoColchets />
        <LegoCurveDown />

        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoDrop :rodada="30" :referencia1="27" :referencia2="28" read="true"/>
         <LegoColchets />
          <LegoCurveUp />
            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="14" principal="true"/>

        <LegoColchets />
         <LegoDrop :rodada="23" :referencia1="13" :referencia2="14" read="true"/>
         <LegoColchets />
         <LegoCurveDown />

         <LegoSpace />
        <LegoSpace />
        
        <LegoLine />
            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="15" principal="true"/>

        <LegoColchets />
        <LegoCurveDown />

        <LegoSpace />
        <LegoSpace />
         <LegoDrop :rodada="28" :referencia1="23" :referencia2="24" read="true"/>
        
        <LegoColchets />
        <LegoCurveUp />
       
            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="16" principal="true"/>

        <LegoColchets />
         <LegoDrop :rodada="24" :referencia1="15" :referencia2="16" read="true"/>
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
 
   name:'Chave32',
   components:{
      LegoColchets,LegoDrop,
       LegoCurveDown,
       LegoSpace,
       LegoCurveUp,
       LegoLine,
       LegoHeader
       
   },
   data:()=>{
       return{
           texto:[ '32ª de Finais','16ª de Finais', '8ª de Finais','Semifinais','Final' , 'Campeão']      
     
       }
   }
   
       
}
</script>