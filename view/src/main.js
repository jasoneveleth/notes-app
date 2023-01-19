import { createApp } from 'vue'
import App from './App.vue'

import VueCookies from 'vue-cookies'

const app = createApp(App)

// default options config: { expires: '1d', path: '/', domain: '', secure: '', sameSite: 'Lax' }
app.use(VueCookies, { expires: '7d'})

app.config.globalProperties.$api = "http://localhost:25565/api"

app.mount('#app')
