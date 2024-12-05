const MyComponent = {
    data(){
        return{
            cards:[
                {
                    title:"神经蛙",
                    subtitle:"用代码表达言语的魅力，用代码书写山河的壮丽。"
                },
                {
                    title:"本草纲目",
                    subtitle:"如果华佗再世,崇洋都被医治,外邦来学汉字,激发我民族意识。马钱子、决明子、苍耳子，还有莲子；黄药子、苦豆子、川楝子，我要面子。用我的方式，改写一部历史。没什么别的事，跟着我念几个字。山药当归枸杞 GO，山药 当归 枸杞 GO，看我抓一把中药，服下一帖骄傲~"
                },
                {
                    title:"Vue.js",
                    subtitle:"渐进式 JavaScript 框架。易学易用，性能出色，适用场景丰富的 Web 前端框架。"
                },
                {
                    title:"Varlet",
                    subtitle:"基于 Vue3 开发的 Material 风格移动端组件库，全面拥抱 Vue3 生态，由社区团队维护。"
                },
                {
                    title:"",
                    subtitle:""
                }
            ]
        }
    },
    template: `
    <div style="display: flex;justify-content: space-between;flex-wrap: wrap;">
        <var-card v-for="card in cards" class="Cards" 
            :title = card.title
            :subtitle = card.subtitle
            src="https://varlet.gitee.io/varlet-ui/cat.jpg"
            layout="row"
        >
            <template #extra>
                <var-button text round>
                    <var-icon name="star" />
                </var-button>
                <var-button round text>
                    <var-icon name="heart" />
                </var-button>
            </template>
        </var-card>
    </div>
    `
}
export { MyComponent }