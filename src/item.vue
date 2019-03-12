<template>
  <div class="show-props">
      <header>
          <h1>{{showProps.name}}</h1>
      </header>
      <loader v-if="loading"/>
      <div class="error-alert" v-if="apiError">
        <p>Ups!! sorry, it seems server is crashed out</p> 
      </div>
      <div v-else class="row">
        <div class="column">
          <figure>
              <img class="img-responsive" v-if="showProps.image" v-bind:src="showProps.image.original" alt="">
              <div v-else class="not-avaliable">
                  <p>image not avaliable</p>
              </div>
          </figure>
        </div>
        <div class="column summary" v-html="showProps.summary">

        </div>
      </div>
      <div class="link">
          <router-link to="/">go to list</router-link>
      </div>
      
  </div>
</template>

<script>
import axios from 'axios'
import loader from './loader.vue'
export default {
    data(){
        return {
            showProps: {},
            loading: true,
            apiError: false
        }
    },
    methods:{
        async fetchData(){
            const {data} = await axios.get(`http://api.tvmaze.com/shows/${this.$route.params.id}`)
            return data
        }
    },
    async created(){
        try {
            this.showProps = await this.fetchData()
            this.loading = false
        } catch (error) {
            console.log('error fetching api data', e)
            this.apiError = true
            this.loading = false
        }
        
    },
    components: {
        loader,
        top
    }
}
</script>

<style scoped>
.show-props {
    background: whitesmoke;
    padding: 1rem 0;
}
.row {
    display: flex;
}
.row .column:nth-child(1) {
    width: 35%;
}
.row .column:nth-child(2) {
    width: 65%;
}
.row figure {
    margin: 0;
    padding: 1rem 1rem;
}

.row img {
    max-width: 100%;
    height:auto;
}
.row .summary {
    text-align: left;
    padding:0 1rem;
}
.link a.router-link-active {
    display: inline-block;
    padding: .3rem 2rem;
    background: #89a3f7;
    color: #695b8e;
    border-radius: 3.2px;
    box-shadow: 1px 1px 1px 1px #b7b9b9;
}
@media screen and (max-width: 650px) {
    .row {
        flex-direction: column;
    }
    .row .column:nth-child(1) {
        width: auto;
    }
    .row .column:nth-child(2) {
        width: auto;
    }
    h1 {
        font-size: 1.6rem;
    }
}
</style>
