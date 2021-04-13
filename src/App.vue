<template>
  <div>
   <router-view></router-view>
  </div>
 
</template>

<script>
  export default {
    name: 'App',
    onLoad: function(){
     
    },
    mounted() {
      let screenHeight = document.documentElement.clientHeight;
      this.$store.dispatch('changeWindowH',screenHeight);
      const that =  this;
      window.onresize = () => {
        let screenHeight = document.documentElement.clientHeight;
        that.$store.dispatch('changeWindowH',screenHeight);
      };
    }

  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
