import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faUserSecret,
    faShoppingCart,
    faUser
)


const app = createApp(App)

app.use(router)
app.use(createPinia())
app.component('FontAwesomeIcon',FontAwesomeIcon)
app.mount('#app')
