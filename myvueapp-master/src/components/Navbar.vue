<template>
  <div class="navbar">
    <nav class="nav1">
        <li class="manu_buttom" ><button  @click="openSidebar"><i class="fa-solid fa-bars"  style="font-size:30px;" ></i></button></li>
        <li class="logo"><img src="../assets/logo.svg" /></li>
        <div class="closeandname">
            <li class="Name_bar"><a  class="Name_nav"  >{{getFullName()}}</a></li> 
            <li class="close_buttom" ><a href=""><i  class="fa-solid fa-right-from-bracket" style="font-size:18px;"></i></a></li>
        </div>
          <!-- <div class="nav2">
        <h6>คณะวิศวกรรมศาสตร์ศรีราชา มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา</h6> 
    </div> -->
    </nav>
     <!-- <div class="nav2">
        <h6>คณะวิศวกรรมศาสตร์ศรีราชา มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา</h6> 
    </div> -->
    
    
 
  </div>
</template>

<script scoped>
export default {
    name:"Navbar",
    data(){
        return{
            FirstName:"นพวัสสต์",
            LastName:"กาญจนนินทร์",
            ID:"6230300XXX",
            Img:"./assets/user.svg",
            isOpen:true
        }
    },
    methods:{
        openSidebar(){
            this.isOpen = !this.isOpen
            this.$emit('openSidebar',this.isOpen)
        },
        getFullName(){
            return this.FirstName +" "+ this.LastName +" "+ this.ID 
        }
    }
    }

</script>

<style >
.navbar{
        height: auto;
        width: 100%;
        margin: 0;
        padding: 0; 
        
        
    }
    .nav1{
        position: relative;
        background-color: rgba(104, 12, 7, 1) ; 
        display: flex;
        height: auto;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    li button i{
        color:rgba(255, 255, 255, 1);
        text-decoration: none;
    }
    .nav1 li{
        font-size: 16px;
        padding: 10px 10px;
        white-space: nowrap;
    }
    .nav1 a{
        color:rgba(255, 255, 255, 1);
    }
    .nav1 .logo{
    
        margin: 0 auto;
        position: relative;
        left: 130px;
        
    }
    .closeandname{
        display: flex;
        justify-content: space-between;
        
    }
    /* .nav2{
        top: 52px;
        width: 100%;
        height: 26px;
        background-color: rgba(135, 18, 12, 1) ;
        position: relative;
    }
     .nav2 h6{

        color:white;
        left: 35%;
        position: re;
    }  */
    
</style>