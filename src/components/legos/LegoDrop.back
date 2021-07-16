<template>
    <div>
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
                   <select class="form-control player" data-id="jogador1" ref="jogador1" :anterior="referencia1" >
                     <option :value="jogo.jogador1">{{textPlayer1}}</option>
                     <option  v-for="(j,i) in jogadores " :key="i" :value="j.id">{{j.nome}}</option>
                     

                   </select>
                </div>
        
        
                <div class="form-group lego-height">
                    <input type="text" class="form-control point" ref="pontos1" 
                    v-on:change="carregaRef()" v-on:click="selectPoint"
                     v-model="jogo.pontos1" v-mask="'###'" >
                </div>
        
         </div>
         <div class="lego-wrapper">
           
                <div class="form-group lego-height" v-show="oculta !=='none'" >
                 <select class="form-control player" data-id="jogador2"  ref="jogador2" :anterior="referencia2"  >
                    <option :value="jogo.jogador2">{{textPlayer2}}</option>
                   <option v-for="(j,i) in jogadores " :key="i" :value="j.id">{{j.nome}}</option>
                   
                 </select>
                </div>
        
        
                <div class="form-group lego-height" v-show="oculta!=='none'">
                    <input type="text" class="form-control point" ref="pontos2" 
                    v-on:change="carregaRef()" v-on:click="selectPoint"
                    v-model="jogo.pontos2" v-mask="'###'"  >
                </div>
        
         </div>
         <div class="lego-wrapper lego-height">
               <div class="form-group player">
                 <input type="datetime-local" class="form-control player" ref="dateTime" v-model="jogo.data"  >
                
                </div>
    
                <div class="lego-height">
                    <button type="button" class="btn btn-success rounded-pill " ref="butonSave" v-on:click="save">
                        <span class="fa fa-save"> </span>
                    </button>
                </div>
                
         </div>
         <toast-message :title="titleToast" :message="messagegeToast" v-show="timeToast===true" :posX="toastX" :posY="toastY"/>
          {{this.jogo.data}}
    </div>
</template>
<script>
   import {mapState} from 'vuex';
   import {mapActions} from 'vuex';
   
   import ToastMessage from '../widgets/ToastMessage.vue';

export default {
    name:'LegoDrop',
    components:{
      ToastMessage
    },
    props:{
      rodada:Number,
      oculta:String,
      referencia1:Number,
      referencia2:Number,
      campeonatos:Number,
      anterior:Number,
      carregamento:{}
      
      },
      data:()=>{
        return{
          store:'',
          jogo:{
            rodada:'',
            jogador1:'',
            pontos1:'0',
            jogador2:'',
            pontos2:'0',
            data:'',
            campeonato:'',
            quantidade:''
          },
          titleToast:'',
          messagegeToast:'',
          timeToast:Boolean,
          toastX:'',
          toastY:'',
          textPlayer1:'',
          textPlayer2:'',
          pointPlayer1:'',
          pointPlayer2:''

                  
         
        }
      },

    computed:{
      ...mapState(['rodadas','jogadores'])
    },
    methods:{
      ...mapActions(['jogadoresAction','salvaRodada']),
      carregaJogador(){
      // console.log(this.campeonatos)
       const data={torneio:this.store.torneio}
        const url='instituicao/jogadores.php';
        const payload={url:url,data:data}
        this.jogadoresAction(payload);
      },
      selectPoint(e){
          e.target.select();
      },
      selectedPress(){

          const index1=this.$refs.jogador1.selectedIndex;
          const index2=this.$refs.jogador2.selectedIndex;

          this.$refs.jogador1.selectedIndex=index1;
          this.$refs.jogador2.selectedIndex=index2;
      },
      carregaRef(){
        
        const rod=this.rodada;
        const r=document.querySelector(`[anterior="${rod}"]`)

        const jogador1=this.$refs.jogador1.selectedIndex;
        const jogador2=this.$refs.jogador2.selectedIndex;

        const pontos1=this.$refs.pontos1.value;
        const pontos2=this.$refs.pontos2.value;

        const data=[
          {
            jogador:jogador1,
            pontos:pontos1
          },
          {
            jogador:jogador2,
            pontos:pontos2
            }
          ]

          const val1=data[0].pontos;
          const val2=data[1].pontos;

          let max=Math.max(val1,val2);

          max=`${max}`;

          const find=data.find(f=>f.pontos===max)
          
          if(find !==undefined){
           r.selectedIndex=find.jogador;

            this.jogo.jogador2=r.value;
           
          }
           
           
                 
      },
      save(e){

          
        const btn=e.target;

            this.jogo.jogador1=this.$refs.jogador1.value;
            this.jogo.jogador2=this.$refs.jogador2.value;

           
             this.salvaRodada(this.jogo);

           

            if(btn.classList.contains('btn-success')){
              
                this.timeToast=true;
                this.toastX=btn.left;
                this.toastY=btn.top;

           
                btn.classList.remove('btn-success');
                btn.classList.add('btn-dark');
            
                 this.titleToast='Salvando Rodada - '+this.rodada;
                 this.messagegeToast='Rodada salva com sucesso';

                setTimeout(()=>{
                    this.timeToast=false;
                },2000)
            }else{

                //  this.salvaRodada(this.jogo);
                this.timeToast=true;
                this.toastX=btn.left;
                this.toastY=btn.top;

                 this.titleToast='Salvando Rodada - '+this.rodada;
                 this.messagegeToast='Rodada atualizada com sucesso';
                 setTimeout(()=>{
                    this.timeToast=false;
                },2000)
            }
         
      },
      open(){

      //  if(this.jogadores !==[]){
        this.jogadores.forEach(f => {

          if(f.jogador1 !==undefined){

            this.textPlayer1=f.nome;
            this.jogo.jogador1=f.jogador1;
          
            this.jogo.pontos1=f.pontos1;
            this.$refs.pontos2.value=f.pontos2

          }
          if(f.jogador2 !==undefined){

            this.textPlayer2=f.nome;
            this.jogo.jogador2=f.jogador2;
             this.jogo.ponto2=f.pontos2;
             this.$refs.pontos2.value=f.pontos2
          }

          let today = new Date(f.data);
            let date = today.getFullYear() + '-' +
             (today.getMonth() + 1).toString().padStart(2, '0') + '-' +
               today.getDate().toString().padStart(2, '0');
            let time = today.getHours().toString().padStart(2, '0') + ':' + today.getMinutes().toString().padStart(2, '0');
              let juntaData=date + 'T' + time;
             this.jogo.data=juntaData;

             this.$refs.data.value=juntaData;

        
          
        })

       // }
      }
      
    },
    mounted(){

     if(localStorage.getItem('store')){
      this.store=JSON.parse(localStorage.getItem('store'));
      
    }
      
      
     this.jogo.rodada=`${this.rodada}`;
     this.jogo.campeonato=`${this.store.torneio}`;
     this.jogo.quantidade=`${this.store.qtd}`;

      this.open();

      this.carregaJogador();
    },
    created(){

        

       
      
      
    }

    
}
</script>
