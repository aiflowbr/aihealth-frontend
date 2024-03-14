import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import routes from './routes'
import store from './plugins/store'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'light'
    },
    components,
    directives,
})

const app = createApp(App).use(vuetify) //.mount('#app')
app.use(routes)
app.use(store)
app.mount('#app')
