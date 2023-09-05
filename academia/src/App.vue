<template>
  <div id="app">
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Materia" router-link :to="{ name: 'Materias'}">
            <b-card-text><p>Lista de Materias en curso</p></b-card-text>
          </b-tab>
          <b-tab title="Aula">
            <router-link to="/aulas">Lista de aulas disponibles</router-link>
          </b-tab>
          <b-tab title="Profesor">
            <router-link :to="{ name: 'profesores'}">
              <p>Lista de profesores activos</p>
            </router-link>
          </b-tab>
          <b-tab title="Horarios" disabled><p>En construccion!</p></b-tab>
        </b-tabs>
      </b-card>
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
</style>
