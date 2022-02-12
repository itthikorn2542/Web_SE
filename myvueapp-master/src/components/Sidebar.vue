<template>
  <div class="sidebar">
    <div class="sidebar-box" :class="{'w-0':!sidebarOpen,'w-200':sidebarOpen}">
            <div class="sidebar_data">
                <li class="side_img"><a href="#"><img  src="../assets/user.svg"></a></li> 
            </div>  
            <div class="side_manu">
                <ul>
                    <li class="side_profile">
                        <button>
                            <a href="#">
                                <i class="fa-solid fa-user"> 
                                    <span>ข้อมูลส่วนตัว</span>
                                </i>
                            </a>
                        </button>
                    </li>
                    <li class="side_scholarship">
                        <button>
                            <a href="#">
                                <i class="fa-solid fa-graduation-cap">
                                    <span> ทุนที่เปิดให้ลงทะเบียน</span>
                                </i>
                            </a>
                        </button>
                    </li>
                    <li class="side_step">
                        <button>
                            <a href="#">
                                <i class="fa-solid fa-book">
                                    <span> ขั้นตอนการลงทะเบียนทุน</span>
                                </i>
                             </a>
                        </button>
                    </li>
                    <li class="side_status">
                        <button>
                            <a href="#">
                                <i class="fa-solid fa-user-pen">
                                    <span> สถานะ</span>
                                </i>
                            </a>
                        </button>
                    </li>
                    <li class="side_contact">
                        <button>
                            <a href="#">
                                <i class="fa-solid fa-square-phone-flip">
                                    <span> ติดต่อเรา</span>
                                </i>
                            </a>
                        </button>
                    </li>
                </ul>
            </div>
    </div>
    <div style="display: flex;
    flex-direction: column;
    width:1010vmax">
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
    name:"Sidebar",
    data(){
        return{
            sidebarOpen:false
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

<style >
.sidebar{
    display: flex;
}
.sidebar-box{
    position: relative;
    height: 100vh;
    width: 300px;
    background-color: rgba(104, 12, 7, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: 500px;
    /* justify-content: center; */
}
.sidebar-box .side_img{
    display: inline-flex;
    margin: 20px;
    align-items: center;
}
.sidebar-box .sidebar_data li a{
        font-size: 16px;
        padding: 10px 10px;
        display: flex;
        align-items: center;
}
.side_img{
    position: relative;
    top: 20px;
    margin: 0 50px;
}
.side_manu{
    position: relative;
    margin: 40px auto;
    background-color: rgba(135, 18, 12, 1);
    width: 300px;
    height: 370px;
    top: 10px;
    opacity: 0;
    visibility: 0;
}
.side_manu button{
    background-color: rgba(122, 23, 18, 1);
    width: 299px;
    height: 68px;
    position: relative;
    top: 15px;
    border:1px solid white ;

  
}

.w-0{
    width: 0px;
    transition: 0.5s;
    animation-duration: 3s;
}

.w-200 .side_manu{
    width: 300px;
    transition: 0.3s;
    animation-duration: 3s; 
    opacity: 1;
    visibility: visible;
}


</style>