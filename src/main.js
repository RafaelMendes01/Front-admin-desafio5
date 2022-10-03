/*!

 =========================================================
 * Vue Light Bootstrap Dashboard - v2.0.0 (Bootstrap 4)
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import { LMap, LTileLayer, LCircleMarker,LTooltip } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import InputText from 'primevue/inputtext';
import ConfirmationService from 'primevue/confirmationservice';
import ConfirmDialog from 'primevue/confirmdialog';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Chips from 'primevue/chips';
import Column from 'primevue/column';
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import  Store  from './store/index'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

// router setup
import routes from './routes/routes'

import './registerServiceWorker'
// plugin setup

Vue.use(VueRouter)
Vue.use(LightBootstrap)
Vue.use(PrimeVue)
Vue.use(ToastService);
Vue.use(ConfirmationService);
Vue.component('VDataTable', DataTable)
Vue.component('VConfirmDialog', ConfirmDialog)
Vue.component('VInput', InputText)
Vue.component('VToast', Toast)
Vue.component('VColumn', Column)
Vue.component('VChips', Chips)
Vue.component('VButton', Button)
Vue.component('VDialog', Dialog)
Vue.component('VNumber', InputNumber)
Vue.component('VCalendar', Calendar)
Vue.component('VAccordion', Accordion)
Vue.component('VAccordionTab', AccordionTab)
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-circle', LCircleMarker);
Vue.component('l-tooltip', LTooltip);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
importActiveClass: 'nav-item active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: Store,
  render: h => h(App),
  router
})
