import Vue from 'vue';
import VideoPlayer from "vue-video-player";
import App from './App.vue';
import router from "../router/index";

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.config.productionTip = false
Vue.use(VideoPlayer)

new Vue({
  el: '#app',
  router: router,
  render: c => c(App),
})
