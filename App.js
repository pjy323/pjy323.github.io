import 导航栏 from './components/导航栏.js'
import 结果 from './components/结果.js'
import 水印 from './components/水印.js'
const App = Vue.createApp({
    components: {
        'V-结果': 结果,
        'V-水印': 水印
    },
    template: `
    <V-导航栏/>
    <br/>
    <V-结果/>
    <br/>
    <V-水印/>
    `
})
App.use(Varlet)
App.component(
    'V-导航栏', 导航栏
)
App.mount('#App')
