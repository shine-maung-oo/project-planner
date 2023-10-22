<template>
    <div class="pro-card" :class="{complete:project.complete}">
    <div class="d-flex">
        <div>
            <h1 class="title mt-0" @click="showDetail=!showDetail">{{ project.title }}</h1>
        </div>
        <div>
            <span class="material-icons delete mx-2" @click="deleteProject">
                delete
            </span>
            <router-link :to="{name:'EditProject',params:{id:project.id}}">
                <span class="material-icons edit mx-2">
                    edit
                </span>
            </router-link>
            <span class="material-icons done mx-2" @click="completeProject"> 
                done
            </span>
        </div>
    </div>
    <p class="text" v-if="showDetail">{{ project.detail }}</p>
    {{  project.complete }}
  </div>
</template>

<script>
export default {
    name: "Project",
    props: ['project'],
    data(){
        return { 
            showDetail : false,
            api:'http://localhost:3000/projects/'
        };
    },
    methods: {
        deleteProject(){
            let deleteMessage = confirm('Are you sure you want to delete?');
            if(deleteMessage == true){
                let deleteRoute=this.api+this.project.id;
                fetch(deleteRoute,
                {method:"DELETE"})
                .then(()=>{
                    this.$emit("delete",this.project.id)
                })
                .catch((err)=>{
                    console.log(err);
                })
            }else{
                return false;
            }
            
        },
        completeProject(){
            let completeRoute=this.api+this.project.id;
            fetch(completeRoute,
            {
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(
                    {
                        complete:!this.project.complete
                    }
                )
            })
            .then(()=>{
                this.$emit("complete",this.project.id)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }
}
</script>

<style>
.pro-card{
    background-color: #fdfdfd;
    padding: 30px 20px;
    margin: 25px auto;
    border-radius: 5px;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.074);
    border-left: 4px solid red;
}

.title{
    color: gray;
}

.text{
    color: #000;
}
.d-flex{
    display: flex;
    justify-content: space-between;
}
.mt-0{
    margin-top: 0;
}
.mx-2{
    margin: 0.51rem;
}
.material-icons{
    cursor: pointer;
}
.material-icons.delete:hover{
    color: red !important;
}
.material-icons.edit:hover{
    color: green !important;
}
.material-icons.done:hover{
    color: blue !important;
}
.complete{
    border-left: 4px solid green;
}
</style>