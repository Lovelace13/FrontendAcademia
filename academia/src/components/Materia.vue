<template>
    <div class="MateriaComponente">
      <h1> {{ title }}</h1>
      <b-button @click="fetch">Consultar Materias</b-button>
      <ul>
        <!-- <li v-for=""></li> -->
      </ul>
      <b-button v-on:click="mostrarForm">
        Agregar registro
      </b-button>
      <b-button v-show="mostrarFormulario" @click="ocultarForm">
        Cancelar Registro
      </b-button>
      <materiaRegistro v-show="mostrarFormulario"/>
    </div>
</template>

<script>
import materiaRegistro from "./MateriaRegistro"
import axios from "axios";

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
      // .get("http://127.0.0.1:8000/materias/")
      var url = "materias/"    
      let listaMaterias = axios({
          url: url,
          method: 'GET',
        })
        .then((res) => {
          this.asignaturas = res.data.Asignaturas
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
