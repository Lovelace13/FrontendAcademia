<template>
    <div class="registroProfesor">
      <h1> {{ title }}</h1>
      <p>Pruebas</p>
    </div>
    <!-- <router-view></router-view> -->
</template>

<script>
export default {
  name: 'RegistroProfesorComponente',

  setup(){
    const title = "Registro de Profesor";
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