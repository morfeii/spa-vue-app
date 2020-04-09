import Vue from 'vue';
import Vuetify from 'vuetify';
import * as fb from 'firebase';
import store from './store';
import router from './router';
import App from './App.vue';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    fb.initializeApp({
      apiKey: 'AIzaSyC_h9TqzhEAKVhm72t6oXplsYNxiFBFdtw',
      authDomain: 'my-note-vue-app.firebaseapp.com',
      databaseURL: 'https://my-note-vue-app.firebaseio.com',
      projectId: 'my-note-vue-app',
      storageBucket: 'my-note-vue-app.appspot.com',
      messagingSenderId: '794640133153',
      appId: '1:794640133153:web:778142b23a8de63dd78760',
      measurementId: 'G-H3WYJ4LQL9',
    });
  },
}).$mount('#app');
