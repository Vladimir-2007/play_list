import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// protect routes
import { projectAuth } from './firebase/config'

// global css
import './assets/main.css'

let app

projectAuth.onAuthStateChanged( () => {
  if ( !app ) {
    app = createApp( App ).use( router ).mount( '#app' )
  }
} )
