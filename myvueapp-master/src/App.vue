<template>
    <div class="container"> 
       <div class="navandside">
            <!-- <Sidebar/>  -->
           <!-- <Navbar/>    -->
       </div>
       <div class="main">
            <Content/>
       </div>
       
            <!-- <router-view/> -->
    </div>

</template>


<script>
// import Sidebar from './components/Sidebar'
// import Navbar from './components/Navbar'
import Content from './components/content.vue'
export default {
  name: 'App',
  components:{
    // Sidebar,
    //  Navbar,
      Content
  },

}
</script>



<style scoped>
*{
    box-sizing: border-box;
    font-family: 'Roboto',sans-serif;
    list-style-type: none;
    }
.container{
    max-width: 100%;
    height: 100%;
    padding: 0%;
    margin: 0%;
    border:1px solid tan ;
    
    }
</style>
