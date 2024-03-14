import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login.vue'
import User from './views/User.vue'
import Dashboard from './views/Dashboard.vue'
import Accounts from './views/Accounts.vue'
import Inputs from './views/Inputs.vue'
import NeuralNetworks from './views/NeuralNetworks.vue'
import Compute from './views/Compute.vue'
import Datasets from './views/Datasets.vue'
import PredictionFlows from './views/PredictionFlows.vue'
import Outputs from './views/Outputs.vue'
import Settings from './views/Settings.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Login },
        { path: '/user', component: User },
        { path: '/dashboard', component: Dashboard },
        { path: '/accounts', component: Accounts },
        { path: '/inputs', component: Inputs },
        { path: '/neuralnetworks', component: NeuralNetworks },
        { path: '/compute', component: Compute },
        { path: '/datasets', component: Datasets },
        { path: '/outputs', component: Outputs },
        { path: '/flows', component: PredictionFlows },
        { path: '/settings', component: Settings },
        // will match /users/posva but not:
        // - /users/posva/ because of strict: true
        // - /Users/posva because of sensitive: true
        // { path: '/users/:id', sensitive: true },
        // will match /users, /Users, and /users/42 but not /users/ or /users/42/
        // { path: '/users/:id?' },
    ],
    strict: true, // applies to all routes
})
export default router
