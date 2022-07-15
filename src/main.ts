import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'

import './styles/styles.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFileImport, faMagnifyingGlass, faCalendar } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faFileImport, faMagnifyingGlass, faCalendar)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
