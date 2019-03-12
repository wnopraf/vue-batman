<template>
  <header>
      <div>
          <h1>{{content}}</h1>
          <img src="src/assets/batman-logo.png" alt="">
      </div>
  </header>
</template>

<script>
export default {
    props: ['content']
}
</script>

<style scoped>
    header {
        background: rgb(235, 239, 133);
        padding: 3rem 0;
    }
    header h1 {
        font-family: 'Open Sans', sans-serif;
        color: rgb(14, 14, 14);
        font-size: 4rem;
    }
    img {
        max-width: 15%;
        min-width: 125px;
        height: auto;
        margin-top: -3rem;
    }
    @media screen and (max-width: 760px) {
        header h1 {
            font-size: 3rem;
        }
    }

</style>
