<template>
  <footer>
      <div>
          <h2>{{content}}</h2>
      </div>    
  </footer>
</template>

<script>
export default {
    props:['content']
}
</script>

<style scoped>
footer {
    padding: 5rem 0;
    background: rgb(249, 174, 106);
}
footer h2 {
    color: rgb(53, 53, 53);
}
@media screen and (max-width:760px) {
    footer h2 {
        font-size: 1.6rem;
    }
}
@media screen and (max-width:450px) {
    footer h2 {
        font-size: 1.1rem;
    }
}
</style>
