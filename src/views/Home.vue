<template>
   <h1>Home</h1>
    <FilterNav @filterValue="current=$event" :current="current"></FilterNav>
  <div v-for="project in filteredProjects" :key="project.id">
    <Project :project="project" @delete="deleteProject"  @complete="completeProject" />
  </div> 
</template>

<script>
import Project from '@/components/Project.vue';
import FilterNav from '@/components/FilterNav.vue';

export default {
  name: 'Home',
  components: {
    Project,
    FilterNav
  },
  data(){
    return {
      projects : [],
      current : 'all'
    };
  },
  methods:{
    deleteProject(id){
      this.projects=this.projects.filter(project=>{
        return project.id!=id;
      })
    },
    completeProject(id){
        let findProject=this.projects.find(project=>{
          return project.id===id;
        });
        findProject.complete=!findProject.complete
    }
  },
  computed:{
      filteredProjects(){
         if(this.current==="complete"){
           return this.projects.filter((p)=>{
             return p.complete
           })
         }
         if(this.current==="ongoing"){
          return this.projects.filter((p)=>{
             return !p.complete
           })
         }
         return this.projects;
      }
  },
  mounted(){
    fetch('https://planner-seven-rho.vercel.app/projects')
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      this.projects = data;
    })
    .catch((err)=>{
      console.log(err.message);
    })
  }
}
</script>
