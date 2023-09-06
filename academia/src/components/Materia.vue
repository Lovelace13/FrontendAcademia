<template>
    <div class="MateriaComponente">
      <h1> {{ title }}</h1>
      <b-container class="panelMaterias">
        <b-row>
          <b-col cols="5">
            <b-button @click="fetch">Consultar Materias</b-button>
            <b-list-group>
              <b-list-group-item v-for="materia in asignaturas" v-bind:key="materia.idmateria">
                {{ materia.nombre }}
              </b-list-group-item>
            </b-list-group>
          </b-col>
          <b-col cols="7">
            <b-button v-on:click="mostrarForm">
              Agregar registro
            </b-button>
            <b-button v-show="mostrarFormulario" @click="ocultarForm">
              Cancelar Registro
            </b-button>
            <materiaRegistro v-show="mostrarFormulario"/>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
import materiaRegistro from "./MateriaRegistro"
import axios from "axios";
import VueCookies from 'vue-cookies'

export default {
  name: 'MateriaComponente',
  components: {
    materiaRegistro,
  },
  data(){
    // mostrarFormulario
    return {
      mostrarFormulario: false,
      asignaturas: [],
    }
  },
  setup(){
    const title = "Lista de Materias";
    return{
        title
    }
  },
  props: {
    msg: String
  },
  methods: {
    fetch(){
      var url = "graphql"    
      const graphqlQuery = {
        "operationName": "",
        "query": `query { asignaturas { descripcion codigo nombre } }`,
        "variables": {}
      };
      const headers = {
        "content-type": "application/json",
        'X-CSRFToken': VueCookies.get('csrftoken')
      };
//Colocar Get cuando use las apis normales
      let listaMaterias = axios({
          url: url,
          method: 'POST',
          headers: headers,
          data: {
            query:`
              {
                asignaturas 
                { 
                  idmateria
                  nombre
                  descripcion 
                  codigo 
                }
              }
            `
          },
        })
        .then((res) => {
          console.log(res.data.data)
          this.asignaturas = res.data.data.asignaturas
        })
        .catch(err => {
          console.log(err)
        })
    },
    mostrarForm: function(){
      this.mostrarFormulario = true;
    },
    ocultarForm: function(){
      this.mostrarFormulario = false;
    }
  },
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
