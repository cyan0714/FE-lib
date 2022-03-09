import { sum } from "./js/math";
const { priceFormat } = require('./js/format')
import './js/element'
// 选择 vue/dist/vue.esm-bundler.js ，这样才能解析 template
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import App from './vue/App.vue'

console.log(sum(20, 30));
console.log(priceFormat());

// 测试 babel 转换
const heros = ['yasuo', 'leesin', 'wukong']
heros.forEach(item => item + 'player')


// Vue代码
// const app = createApp({
//   template: "#my-app",
//   components: {

//   },
//   data() {
//     return {
//       title: "Hello World",
//       message: "哈哈哈"
//     }
//   }
// });
// app.mount("#app");

// 自定义 App.vue
createApp(App).mount("#app")
