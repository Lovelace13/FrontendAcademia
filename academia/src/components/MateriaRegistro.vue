<template>
    <div class="registro">
      <!-- <h3> {{ title }}</h3> v-if="show" -->
      <b-form @submit="checkForm" >
        <b-card class="mt-4" :header="title">
          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="error in errors" v-bind:key="error.value">{{ error }}</li>
            </ul>
          </p>
          <b-form-group id="inputMateria" label="Nombre de la Materia:" label-for="nombre">
          <b-form-input id="nombre" v-model="formulario.name" required
            placeholder="Ingrese nombre de la materia"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="inputCodigo" label="Codigo de la Materia:" label-for="codigo">
            <b-form-input id="codigo" v-model="formulario.code" required
              placeholder="Ingrese el codigo"
            ></b-form-input>
          </b-form-group>
          
          <b-form-group id="inputDescripcion" label="Descripcion de la Materia:" label-for="descripcion">
            <b-form-input id="descripcion" v-model="formulario.description" required
              placeholder="Ingrese una descripcion para la materia"
            ></b-form-input>
          </b-form-group>
          <b-row align-h="between" fluid class="mt-3">
            <!-- <p><input type="submit" value="Enviar"></p> -->
            <b-button variant="outline-primary" @click="guardar">Guardar</b-button>
            <!-- <b-button class="mt-2" type="reset" variant="outline-danger" @click="onReset">Reset</b-button> -->
          </b-row>
          </b-card>
      </b-form>
    </div>
</template>

<script>
import axios from "axios";
import VueCookies from 'vue-cookies'

export default {
  name: 'MateriaRegistroComponente',
  data(){
    // formulario: {
    //   nombre:'',
    //   codigo:'',
    //   descripcion:''
    // }

    return{
      errors:[],
      formulario: {
        code:'',
        description:'',
        name:''
      }
    }
  },
  setup(){
    const title = "Registro de Materias";
    return{
        title
    }
  },
  methods: {
    guardar() {
      var miMutacion = Object.values(this.formulario)
      var url = "graphql"    
      const graphqlQuery = `mutation { createMateria ( code: "${miMutacion[0]}" , description: "${miMutacion[1]}" , name: "${miMutacion[2]}" ) { asignatura { codigo descripcion nombre } } }`;

      const headers = {
        "content-type": "application/json",
        'X-CSRFToken': VueCookies.get('csrftoken')
      };

      // console.log(graphqlQuery)

      let guardarMateria = axios(
          {
          url: url,
          method: 'POST',
          headers: headers,
          data: {
            query: graphqlQuery,
            },
          },
        )
        .then((res) => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })

    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.formulario.nombre = ''
      this.formulario.codigo = ''
      this.formulario.descripcion = null
      // Trick to reset/clear native browser form validation state
      // this.show = false
      // this.$nextTick(() => {
      //   this.show = true
      // })
    },
    checkForm: function (e) {
      this.errors = [];
      if (!this.form.nombre) {
        this.errors.push("El nombre es obligatorio.");
        console.log("inrese")
      }
      e.preventDefault();
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

.registro{
  margin: 15px;
}
</style>