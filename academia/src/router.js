import Vue from 'vue'
import Router from 'vue-router'
import Materia from './components/Materia.vue'
import Aula from './components/Aula.vue'
import Profesor from './components/Profesor.vue'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/Materias',
            name: 'Materias',
            component: Materia,
        },
        {
            path:'/aulas',
            name: 'aulas',
            component: Aula,
        },
        {
            path:'/profesores',
            name: 'profesores',
            component: Profesor,
        }
    ]
})
