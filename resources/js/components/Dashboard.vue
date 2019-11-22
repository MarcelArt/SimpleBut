<template>
<div>
<!-- dashboard -->
  <v-navigation-drawer fixed v-model="drawer" app >
    <v-list>
       <v-list-tile>
          <v-list-tile-action>
            <v-icon>account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{name}}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="getInfo">
          <v-list-tile-action>
            <v-icon>account_circle</v-icon>
          </v-list-tile-action> 
          <v-list-tile-title>Test</v-list-tile-title>
        </v-list-tile>
        
        
       <v-list-tile @click="logout">
          <v-list-tile-action>
            <v-icon>logout</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile>
      </v-list>    
  </v-navigation-drawer>
  <v-toolbar  color="indigo" dark app >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>GameCoding</v-toolbar-title>
      <v-toolbar-title>{{score}}</v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">           
      </v-toolbar-items>
    </v-toolbar>  
<v-content>
  <v-container fluid fill-height>
    <router-view></router-view>
  </v-container>
</v-content>
</div>
</template>

<script>
import Menu from './Menu'
export default {
    components: {
      Menu,
    },
    data: () => ({
      show: false,
      drawer: null,
      name: null,
      id: null,
      score:null,
      
      
     beforeMount(){
        this.setComponent(this.$route.params.page)
        this.user = JSON.parse(localStorage.getItem('user'))
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt')
      },
  }),
  methods:{
    async getInfo(){
      this.name = localStorage.getItem('name');
      this.id = localStorage.getItem('id');
      const res = await axios.get('api/user/' + this.id);
      this.score = res.data.score;
    },  
    
   async logout(){
     try{
       await this.$user.logout();
       this.$user.clearStorage();
       this.$router.replace({path: "/login"})
     }catch(error){
       alert(error)
     }
    },
  },
  mounted(){
    this.getInfo();
  }
}
</script>