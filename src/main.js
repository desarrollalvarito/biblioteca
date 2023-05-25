import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/css/fontawesome.css'
import './assets/css/owl.css'
import './assets/css/templatemo-scholar.css'
import './assets/css/animate.css'
import './assets/css/swiper-bundle.min.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faWifi } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faWifi)

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
