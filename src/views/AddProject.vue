<template>
    <h1>Add Project</h1>
    <form @submit.prevent="addProject">
        <div class="form-group">
            <label class="form-label">Title</label>
            <input type="text" v-model="title" class="form-input" placeholder="Project Title" required>
        </div>
        <div class="form-group">
            <label class="form-label">Description</label>
            <textarea  v-model="detail" class="form-input" rows="7" placeholder="Description" required></textarea>
        </div>
      <button>Add Project</button>
    </form>
</template>

<script>
export default {
  data(){
      return{
        title:"",
        detail:""
      }
  },
  methods:{
    addProject(){
      fetch("http://localhost:3000/projects",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(
          {
            title:this.title,
            detail:this.detail,
            complete:false
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
  }
}
</script>

<style>
.form-group{
    padding: 20px 0;
}
.form-label{
    display: block;
    color: gray;
    font-size: 20px;
    margin-bottom: 10px;
}
.form-input{
    width: 100%;
    padding: 15px 20px;
    border: 1px solid rgba(169, 169, 169, 0.467);
    font-size: 18px;
    border-radius: 5px;
}

.form-input::placeholder{
    font-size: 18px !important;
}

.form-input:focus,
.form-input:focus-visible{
    box-shadow: none !important;
}

button{
    color: white;
    background-color: dodgerblue;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
}
</style>