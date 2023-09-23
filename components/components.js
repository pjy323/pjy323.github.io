const MyComponent = {
    template: `
        <var-card
            title="本草纲目"
            subtitle="如果华佗再世,崇洋都被医治,外邦来学汉字,激发我民族意识。马钱子、决明子、苍耳子，还有莲子；黄药子、苦豆子、川楝子，我要面子。用我的方式，改写一部历史。没什么别的事，跟着我念几个字。山药当归枸杞 GO，山药 当归 枸杞 GO，看我抓一把中药，服下一帖骄傲~"
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
    `
}
export { MyComponent }