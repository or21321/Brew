import { createApp } from 'vue'
import { router } from './router'
import { store, key } from './store';
import App from './App.vue'

import VueApexCharts from "vue3-apexcharts";

import './styles/styles.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFileImport, faMagnifyingGlass, faCalendar, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faFileImport, faMagnifyingGlass, faCalendar, faCirclePlus)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store, key).use(VueApexCharts).use(router).mount('#app')
