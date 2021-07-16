<template>
    <div ref="toast" class="toast-message">
      <div class="alert alert-warning alert-dismissible fade show" >
        <strong>{{title}}</strong>:  {{message}}
            <button type="button" class="close" >
               <span aria-hidden="true">&times;</span>
            </button>
      </div>
    </div>
</template>
<script>


export default {
    name:'ToastMessage',
    props:['title','message','posX','posY'],
    mounted(){

        const x=this.posX;
        const y=this.posY;

        this.$refs.toast.left=x;
        this.$refs.toast.top=y;
    }
    
}
</script>
