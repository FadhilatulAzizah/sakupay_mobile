import Framework7 from 'framework7/bundle';
import 'framework7/css/bundle';
import '../css/app.css';

import routes from './routes.js';
import cordovaApp from './cordova-app.js';

var app = new Framework7({
  name: 'SakuPay',
  theme: 'ios',
  el: '#app',
  routes: routes,
  dialog: {
    title: 'SakuPay',
    buttonOk: 'OK',
    buttonCancel: 'Batal',
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (back button, splashscreen, keyboard)
        cordovaApp.init(f7);
      }
    },
  },
});

// Tentukan halaman awal berdasarkan status login
const sudahLogin = !!localStorage.getItem('sakupay_token');
const halamanAwal = sudahLogin ? '/home/' : '/login/';

var mainView = app.views.create('.view-main', {
  url: halamanAwal,
  pushState: false, // tetap false agar aman di Cordova/PWA
});

export default app;