<template>
  <div id="app">
    <div class="cabecera">
      <b-nav tabs align="center">
        <b-nav-item router-link to="/materias">
          <p>Materias</p>
        </b-nav-item>
        <b-nav-item router-link to="/aulas">
          <p>Aulas</p>
        </b-nav-item>
        <b-nav-item router-link :to="{ name: 'profesores'}">
          <p>Profesores</p>
        </b-nav-item>
        <b-nav-item disabled><p>Horarios!</p></b-nav-item>
      </b-nav>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.cabecera{
  background-color: #94CDCD;
}

.nav-tabs .nav-item{
  font-family:Verdana, Geneva, Tahoma, sans-serif ;
  font-weight: bold;
}

.p{
  color: black;
}

</style>
