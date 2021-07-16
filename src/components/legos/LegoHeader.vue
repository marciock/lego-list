<template>
    <div class="header-wrapper">
   
        <div v-for="(s,i) in status" :key="i" class=" border-all width-header">
            <span><strong> {{s}}</strong></span>
        </div>
        
  
    </div>
</template>
<script>


export default {
    name:'LegoHeader',
    props:['status']
}
 

</script>
