<template>
    <div class="inicio ">
       <div class="transpara" >
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#formatoModal" v-on:click="openModal">
                <i class="fa fa-list "></i>
            </button>
        </div>

            <div class="card" ref="formatoModal"  v-show="modal">
                <div class="card-body">
                        <div class="form-group row justify-content-center">
                            <label for="qtd">Escolha o Formato da Chave</label>
                            <select class="form-control" id="formato" v-model="chaves">
                                <option value=""></option>
                                <option value="4">4</option>
                                <option value="8">8</option>
                                <option value="16">16</option>
                                <option value="32">32</option>
                                <option value="64">64</option>
                                <option value="80">80</option>
                            </select>
                        </div>
                        <div class="row justify-content-center">
                            <button class="btn btn-success" v-on:click="updateFormato">Atualizar</button>
                        </div>
                </div>

               
        
        </div>




        
    </div>
</template>
<script>
import {mapActions} from 'vuex';


export default {
   name:'IconMenuBar',
   data:()=>{
       return{
           modal:false,
             chaves:''
       }
   },
   props:['campeonato'],
   methods:{
       ...mapActions(['updateChaves']),
       openModal(){
           if(this.modal===true){
               this.modal=false;
           }else{
                this.modal=true;
           }
         console.log(this.campeonato)
          
       },
       updateFormato(){

           const data={torneio:this.campeonato,quantidade:this.chaves}
           this.updateChaves(data);

           window.location.reload();
           
       },
      
   },
   
}
</script>
<style >
    .inicio{
        position: absolute;
        z-index: 99;
        top:300px;
        right:50px;
        float:right;
       
    }
    .transpara{
        background-color: rgba(198, 255, 198, 0.2);
    }
</style>