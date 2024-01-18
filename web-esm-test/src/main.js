import './assets/main.css'

import { createApp } from 'vue'
import { Buffer } from "buffer";

globalThis.Buffer = Buffer;

import App from './App.vue'

createApp(App).mount('#app')
