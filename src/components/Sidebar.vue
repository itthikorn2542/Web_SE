<template>
  <div class="container">
    <div class="sidebar-box" :class="{'w-0':!sidebarOpen,'w-200':sidebarOpen}">
        <div class="img-box">

        </div>
        <router-link class="menu-list" to="/home">Home</router-link>
        <router-link class="menu-list" to="/about">About</router-link>
    </div>
    <div style="display: flex;
    flex-direction: column;
    width:100vmax">
        <Navbar @openSidebar="openSidebar"/>
        <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
    components:{
        Navbar
    },
    data(){
        return{
            sidebarOpen:true
        }
        
    },
    methods:{
        openSidebar(isOpen){
            // console.log(isOpen)
            this.sidebarOpen = isOpen
        }
    }
};
</script>

<style>
.container{
    display: flex;

}
.sidebar-box{
    height: 100vh;
    width: 300px;
    background-color: #026;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
}
.sidebar-box .img-box{
    display: inline-flex;
    width: 220px;
    height: 220px;
    background-color: greenyellow;
}
.sidebar-box .menu-list{
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    color: honeydew;
}
.w-0{
    width: 0px;
    transition: 0.3s;
    animation-duration: 1s;
}
.w-200{
    width: 220px;
    transition: 0.3s;
    animation-duration: 1s;
}

</style>