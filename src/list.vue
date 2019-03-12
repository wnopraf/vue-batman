<template>
    <div>
      <loader v-if="loading"/>
      <div class="error-alert" v-if="apiError">
        <p>Ups!! sorry, it seems server is crashed out</p> 
      </div>
      <ul v-else>
        
          <li v-for="(showInfo,index) in apiData" v-bind:key="index" 
          class="show-info" >
            <router-link v-bind:to="`/show/${showInfo.show.id}`">
              {{console.log('img fail', showInfo.show)}}
              <img class="responsive-img" v-if="showInfo.show.image" v-bind:src="showInfo.show.image.original" alt="">
              <div class="responsive-img not-avaliable" v-else>
                <p>image not avaliable</p>
              </div>
              <h3>{{showInfo.show.name}}</h3> 
            </router-link>
                   
          </li>
        
        
      </ul>        
    </div> 
</template>

<script>
import axios from 'axios'
import loader from './loader.vue'
export default {
  components: {
    loader
  },
  data(){
    return {
      apiData: [],
      apiError: false,
      loading: true,
      console
    }
      
  },
  methods:{
    async fetchData(){
      const {data} = await axios.get('http://api.tvmaze.com/search/shows?q=batman')
      return data
    }
  },
  created(){
    this.fetchData()
    .then(data => {this.apiData = data; this.loading = false;console.log(data)})
    .catch(e => {
      console.log('error fetching data', e);
      this.apiError = true
    })
     
  }
}
</script>

<style scoped>

ul {
  margin: 0;
  padding: .1rem 1rem;
  background: #efebe8;
}
.show-info {
  padding: 1.6rem;
  list-style: none;
  background: rgb(75, 119, 214);
  margin-bottom: 1rem;
  border-radius: 3px;
}
.show-info:first-child {
  margin-top: 1rem;
}
.show-info h3 {
  margin: 0;
  padding-top: .6rem;
}

a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
  max-width: 300px;
}
</style>

<style>
.responsive-img {
  max-width: 100%;
  height: auto;
}
.not-avaliable:before {
  content: '';
  display: inline-block;
  height: 300px;
  vertical-align: middle;
}
.not-avaliable {
  font-size: 1.8rem;
  background: rgb(225, 218, 218);
}
.not-avaliable p {
  display: inline-block;
  margin: 0;
  vertical-align: middle;
}
.error-alert p {
  color: red;
  font-size: 1.3rem;
}
</style>

