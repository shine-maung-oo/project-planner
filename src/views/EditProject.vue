<template>
    <h1>Edit Project</h1>
    <form @submit.prevent="editProject">
        <div class="form-group">
            <label class="form-label">Title</label>
            <input type="text" v-model="title" class="form-input" placeholder="Project Title" required>
        </div>
        <div class="form-group">
            <label class="form-label">Description</label>
            <textarea  v-model="detail" class="form-input" rows="7" placeholder="Description" required></textarea>
        </div>
      <button class="update">Update</button>
    </form>
</template>

<script>
export default {
    name: "EditProject",
    props: ['id'],
    data(){
        return {
            title: "",
            detail: "",
            api: 'http://localhost:3000/projects/'
        }
    },
    methods: {
        editProject(){
            fetch(this.api+this.id,{
            method:"PATCH",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(
                {
                    title:this.title,
                    detail:this.detail
                }
            )
            })
            .then(()=>{
                this.$router.push("/")
            })
            .catch((err)=>{
                console.log(err);
            })
        
        }
    },
    mounted(){
    fetch(this.api+this.id)
    .then((res)=>{
        return res.json()
    })
    .then((datas)=>{
      this.title=datas.title
      this.detail=datas.detail
    })
    .catch((err)=>{
      console.log(err);
    })
  },
}
</script>

<style>
.update{
    color: white;
    background-color: forestgreen;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
}
</style>