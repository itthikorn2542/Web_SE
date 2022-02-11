<template>
  <div class="navbar">
      <button  @click="openSidebar">&#9776;</button>
      <button class="logout">logout</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isOpen:true
        }
    },
    methods:{
        openSidebar(){
            this.isOpen = !this.isOpen
            this.$emit('openSidebar',this.isOpen)
        }
    }
}
</script>

<style>
.navbar{
  height: 40px;
  /* width: 100vh;
  max-width: 100vh; */
  /* max-width: 100vh; */
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

}
.logout{
    background-color: red;
    color: white;
    padding: 2px;
    border-radius: 2px;
}
</style>