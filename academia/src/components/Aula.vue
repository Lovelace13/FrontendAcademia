<template>
  <div class="Salon">
    <h1> {{ title }}</h1>
    <p>Pruebas</p>
  </div>
</template>

<script>
export default {
  name: 'AulaComponente',
  setup(){
    const title = "Lista de aulas de clases";
    return{
        title
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
