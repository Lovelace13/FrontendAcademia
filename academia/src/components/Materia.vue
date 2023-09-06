<template>
    <div class="MateriaComponente">
      <h1> {{ title }}</h1>
      <b-container class="panelMaterias">
        <b-row>
          <b-col cols="5">
            <b-button class="btnPrb" variant="info"
              @click="fetch">Consultar Materias
            </b-button>
            <b-card class="mt-4" header="Lista de Materias">
              <b-list-group>
                <b-list-group-item v-for="materia in asignaturas" v-bind:key="materia.idmateria">
                  {{ materia.nombre }}
                </b-list-group-item>          
              </b-list-group>
            </b-card>
          </b-col>
          <b-col cols="7">
            <b-button class="btnPrb" variant="primary" v-on:click="mostrarForm">
              Agregar registro
            </b-button>
            <b-button class="btnPrb" variant="outline-dark"
              v-show="mostrarFormulario" @click="ocultarForm">
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

      const headers = {
        "content-type": "application/json",
        'X-CSRFToken': VueCookies.get('csrftoken')
      };
      var prueba = {
            query:`
              {
                asignaturas 
                { 
                  idmateria
                  nombre
                }
              }
            `
          }

      console.log(prueba)
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
                }
              }
            `
          },
        })
        .then((res) => {
          // console.log(res.data.data)
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
.btnPrb {
  margin: 5px 5px;
} 

h1 {
  margin: 5px;
  /* color:#42b983 */
}

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
