<template>
    <div >
      
      <div class="lego-wrapper">
        <div class="lego-height">
               <h4><strong>Rodada -{{rodada}} </strong></h4>
          </div>

    
            <div class="lego-height">
              <span> &#32;</span>
            </div>
      </div>
      
        <div class="lego-wrapper">
           
                <div class="form-group lego-height">
                   <div class="form-control player" data-id="jogador1" 
                   ref="jogador1" :anterior="referencia1" >
                    {{recebimento.nome1}}
                    
                  </div>

                   
                </div>
        
        
                <div class="form-group lego-height">
                    <div ref="pontos1" class="form-control point">{{ recebimento.pontos1}} </div>
                </div>
       
         </div>
         <div class="lego-wrapper">
           
                <div class="form-group lego-height" >
                 <div class="form-control player" data-id="jogador2" 
                  ref="jogador2" :anterior="referencia2"  >
                   {{recebimento.nome2}}                
                   
                 </div> 

                </div>
        
        
                <div class="form-group lego-height" >
                    <div class="form-control point" ref="pontos2">{{recebimento.pontos2}}</div>
                </div>
        
         </div>
         <div class="lego-wrapper lego-height">
               <div class="form-group player">
                 <div  class="form-control player" ref="dateTime"   >
                   {{recebimento.data}}
                </div>
    
                <div class="lego-height">
                    
                </div>
          </div>      
         </div>
         <div class="lego-wrapper lego-height">
           <div class="form-control player" ref="pontuacao"  >{{recebimento.pontuacao}}</div>
         </div>
        
    
  </div>
</template>
<script>
   
   import Vue from 'vue';
   
  

export default {
    name:'LegoDrop',
   
    props:{
      rodada:Number,
      referencia1:Number,
      referencia2:Number,
      campeonatos:Number,
      anterior:Number,
      pontoanterior:Number,
      final:String,
      pontua:String,
      read:String,
      principal:String,

           
      },
      data:()=>{
        return{
          store:'',
          recebimento:{
             rodada:'',
            jogador1:'',
            pontos1:'0',
            nome1:'',
            jogador2:'',
            pontos2:'0',
            nome2:'',
            data:'',
            campeonato:'',
            quantidade:'',
            pontuacao:''
          },
        }
      },

   
    methods:{
             
      convertDate(data){

          let today = new Date(data);
            let date = today.getFullYear() + '-' +
             (today.getMonth() + 1).toString().padStart(2, '0') + '-' +
               today.getDate().toString().padStart(2, '0');
            let time = today.getHours().toString().padStart(2, '0') + ':' + today.getMinutes().toString().padStart(2, '0');
              let juntaData=date + 'T' + time;
             this.recebimento.data=juntaData;

             //this.$refs.data.value=juntaData;

      },
       carregaRodada(payload){

            const data=payload;
            
             Vue.http.post('instituicao/carrega_rodada.php',data).then(res=>{
             //  console.log(res.body)
               let result=res.body;
               
               switch (result.length) {
                 case 0:
                    this.recebimento
                   //this.carregaRef();
                   break;
                   case 1:
                      
                     this.recebimento.rodada=result[0].rodada
                     this.recebimento.jogador1=result[0].jogador1
                     this.recebimento.pontos1=result[0].pontos1
                     this.recebimento.nome1=result[0].nome
                    // this.recebimento.jogador2='0'
                   //  this.recebimento.pontos2='0'
                     this.convertDate(result[0].data);
                     this.recebimento.campeonato=result[0].campeonato
                     this.recebimento.pontuacao=result[0].pontuacao
                    
                   
                   break;
                   case 2:
                    
                     this.recebimento.rodada=result[0].rodada

                      this.recebimento.jogador1=result[0].jogador1
                     this.recebimento.pontos1=result[0].pontos1
                     this.recebimento.nome1=result[0].nome

                     this.recebimento.jogador2=result[1].jogador2
                     this.recebimento.pontos2=result[1].pontos2
                     this.recebimento.nome2=result[1].nome

                    this.convertDate(result[0].data);
                     this.recebimento.campeonato=result[0].campeonato
                     this.recebimento.pontuacao=result[0].pontuacao
                     // this.carregaRef();

                    // this.jogo.pontos1=result[0].pontos1;
                   //  this.jogo.pontos2=result[1].pontos2;
                   
                   break;
               
                 default:
                   break;
               }
              
             });
                  
            
        },
        
       
        
      
    },
    mounted(){

     if(localStorage.getItem('store')){
      this.store=JSON.parse(localStorage.getItem('store'));
      
    }
      
      
     this.recebimento.rodada=`${this.rodada}`;
     this.recebimento.campeonato=`${this.store.torneio}`;
     this.recebimento.quantidade=`${this.store.qtd}`;
     this.recebimento.nome1='teste de nome1';
     this.recebimento.nome2='teste de nome2';
     this.recebimento.data='00/00/00'
   
     this.carregaRodada({torneio:this.store.torneio,rodada:this.rodada});
        
        
    },
    
    
    
    
}
</script>
