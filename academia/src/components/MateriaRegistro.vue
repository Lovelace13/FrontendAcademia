<template>
    <div class="registro">
      <h2> {{ title }}</h2>
      <b-form @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Nombre de la Materia:"
          label-for="input-1">
          <b-form-input id="input-1" v-model="formulario.nombre"
            placeholder="Ingrese nombre de la materia"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Codigo de la Materia:"
          label-for="input-2">
          <b-form-input id="input-2" v-model="formulario.codigo"
            placeholder="Ingrese el codigo"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Descripcion de la Materia:"
          label-for="input-3">
          <b-form-input id="input-3" v-model="formulario.descripcion"
            placeholder="Ingrese una descripcion para la materia"
            required
          ></b-form-input>
        </b-form-group>
        <!-- <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger" @click="onReset">Reset</b-button> -->
      </b-form>
    </div>
</template>

<script>

export default {
  name: 'MateriaRegistroComponente',
  data(){
    // formulario: {
    //   nombre:'',
    //   codigo:'',
    //   descripcion:''
    // }

    return{
      formulario: {
        nombre:'',
        codigo:'',
        descripcion:''
      },
      show: true
    }
  },
  setup(){
    const title = "Registro de Materias";
    return{
        title
    }
  },
  methods: {
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.nombre = ''
      this.form.codigo = ''
      this.form.descripcion = null
      // Trick to reset/clear native browser form validation state
      // this.show = false
      // this.$nextTick(() => {
      //   this.show = true
      // })
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