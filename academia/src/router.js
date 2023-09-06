import Vue from 'vue'
import Router from 'vue-router'
import Materia from './components/Materia.vue'
import materiaRegistro from './components/MateriaRegistro.vue'
import Aula from './components/Aula.vue'
import Profesor from './components/Profesor.vue'

Vue.use(Router)


const router = new Router({
    mode:'history',
    routes:[
        {
            path:"/Materias",
            name: 'Materias',
            component: Materia,
            children:[
                {
                    path: "/registro",
                    compontent: materiaRegistro,
                },
            ],
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

router.beforeEach( (to, from, next) => {
    let isAuthenticated = true; //backend
    if(to.name !== "Login" && isAuthenticated !== true){
        next({ name: "Login"}); //crear componente Login
    }
    else{
        next();
    }
})

export default router;
