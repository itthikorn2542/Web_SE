 <template>
    <div class="container"> 
       <div class="navandside">
          <!-- <Sidebar/>  -->
          <!-- <Navbar/>    -->
       </div>
      <center><div class="main">
          <Content/>
       </div></center>
      <div class="end">
          <!-- <Endbar> -->
      </div>
       <router-view/>
    </div>

</template>


<script>
// import Sidebar from './components/Sidebar'
// import Navbar from './components/Navbar'
// import Endbar from './components/endbar.vue'
import Content from './components/content.vue'
export default {
  name: 'App',
  components:{
    // Sidebar,
    //  Navbar,
      Content,
      // Endbar
  },

}
</script>



<style>
*{
    box-sizing: border-box;
    font-family: 'Roboto',sans-serif;
    list-style-type: none;
  }

.container{
  
    max-width: 100%;
    height: 100vh;
    padding: 0%;
    margin: 0%;
    }
.container .main{
 position: absolute;
 width: 100%;
  height: 100vh;
  border:1px solid black ;
}
</style>
