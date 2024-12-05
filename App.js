import { MyComponent } from './components/components.js'
import 导航栏 from './components/导航栏.js'
import 结果 from './components/结果.js'
import 水印 from './components/水印.js'
const App = Vue.createApp({
    components: {
        'V-导航栏': 导航栏,
        'V-结果': 结果,
        'MyComponent':MyComponent
    },
    template: `
    <V-导航栏/>
    <br/>
    <MyComponent/>
    <br/>
    <V-结果/>
    <br/>
    <V-水印/>
    `
})
App.use(Varlet)
App.component(
    'V-水印', 水印
)
App.mount('#App')
