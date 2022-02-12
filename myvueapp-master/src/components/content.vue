<template>
    <section class="header-user"   >
                <div class="img-User">
                     <img  src="../assets/user.svg" />
                </div>
                <div class="Profile_User">
                    <h1>สถานะขอทุน</h1><br/>
                    <h5>{{getFullName()}}</h5>
                </div> 
                <div class="Table_User">
                    <table class="table table-striped">
                        <thead >
                            <tr>
                            <th scope="col">ทุนที่สมัค</th>
                            <th scope="col">เอกสาร</th>
                            <th scope="col">วันสัมภาษณ์</th>
                            <th scope="col">วันสัมภาษณ์</th>
                            <th scope="col">รายละเอียดในการสัมภาษณ์</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">โครงการทุนการศึกษา</th>
                                <td><img src="../assets/Yes.svg" ></td>
                                <td>15/8/2563</td>
                                <td><img src="../assets/Yes.svg" ></td>
                                <td><img src="../assets/click.svg" ></td>
                            </tr>
                            <tr>
                                <th scope="row">ทุนฉลองสมโภชพระเจ้าหลานเธอ</th>
                                <td><img src="../assets/Yes.svg" ></td>
                                <td>21/9/2563</td>
                                <td><i class="fa-solid fa-clock"></i></td>
                                <td><img src="../assets/none.svg" ></td>
                            </tr>
                            <tr>
                                <th scope="row">ทุนการศึกษาประจำปีการศึกษา2564</th>
                                <td><img src="../assets/No.svg" ></td>
                                <td >25/10/2563</td>
                                <td><img src="../assets/No.svg" ></td>
                                <td><img src="../assets/none.svg" ></td>
                            </tr>
                          
                        </tbody>
                    </table>
                </div>
                <div class="Buttom_back" >
                    <button type="button" class="btn btn-danger"><a >Back</a></button>
                </div>
                
    </section>
</template>

<script >
export default {
    name:"Content",
    data(){
      return {
          FirstName:"นพวัสสต์",
          LastName:"กาญจนนินทร์",
          ID:"6230300XXX",
          Img:"../assets/user.svg"
      }

  },
   methods:{
        getFullName(){
            return this.FirstName +" "+ this.LastName +" "+ this.ID 
        }
    }
}
</script>

<style scoped>
.header-user{
        position: relative;
        height: 100%;
        max-width: 100%;
        padding: 130px;     
    }

    .Profile_User{
        position: relative;
        top: 10px;
    }
   .Profile_User h1,h5{
        color: rgba(104, 12, 7, 1);
        text-align: center;
        font-size : 20px;
    }
    .Table_User{
        position: relative;
        top: 50px;
        height: auto;
        width: 85%;

    }
    table thead tr,td,th{
        position: relative;
        /* top: 15px;  */
        table-layout: auto;
        text-align: center;
        border:1px solid tan ;
        border-width: thin;
    }
    .Buttom_back{
        position: relative;
        width: 100%;
        padding: 0;
        margin: 0;    
        height: auto;
        display:flex  ;
        top: 20%;
    }
    .Buttom_back button{
        position: relative;
        width: 80px;
        height: 50px;
        background: rgba(180, 45, 37, 1);
    }
    
</style>