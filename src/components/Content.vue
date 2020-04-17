<template>
    <div class="content-wrapper">
        <div class="content">
            <h3>{{name}}</h3>
            <div class="result-wrapper">
                <Result v-bind:list="codelist"
                    v-for="code in codelist"
                    v-bind:key="code.id"
                    v-bind:html="code.html"
                    v-bind:css="code.style"
                    v-bind:number="code.id"
                    @catchCode = "showHtml"
                />
            </div>
            <div class="code-wrapper">
            <HtmlView
                v-bind:bool="bool"
                v-bind:htmlCode="htmlCode"
            />
            <CssView
                v-bind:cssCode="cssCode"
                v-bind:index="index"
                v-bind:cssArray="cssArray"
            />
            </div>
        </div>
    </div>
</template>

<script>
import Result from '@/components/Result.vue'
import HtmlView from '@/components/HtmlView.vue'
import CssView from '@/components/CssView.vue'

export default {
    props: {
        name: String,
        codelist: Array
    },
    components: {
        Result,
        HtmlView,
        CssView,
    },
    data() {
        return {
            htmlCode: '',
            cssCode: '',
            index: '',
            htmlNest: [],
            bool: false,
            cssArray: []
        }
    },
    methods: {
        // @catchCode = "showHtml"
        // 左辺で子コンポーネントのメソッドを呼び出して、右辺で親のメソッド呼び出し
        showHtml(code){
            //code: {html:"" , css:"", index:""}
            console.log(code.html);
            this.htmlCode = code.html;
            this.cssCode = code.css;
            this.index = code.index;
            this.cssArray = code.cssArray;
            // console.log(this.htmlCode instanceof Array)
            //ここで配列の判定
            if(this.htmlCode instanceof Array){
                //trueならcodeNestに入れる
                this.bool = true;
            }else{
                //falseならcodes入れる つまりそのまま
                this.bool = false;
            }
            //そのあとContentでv-ifの判定

            // console.log(this.codes)
            
            // console.log(this.htmlCode[0]);

        }
    }
}
</script>

<style lang="scss">

$content-height: calc(100vh - 170px);
$result-height: calc($content-height - 50px);

.content-wrapper{
    height: $content-height;

    .content{
        // border-bottom: 1px black solid;

        .result-wrapper{

            //ここのheightはjsを使ってなんとかする
            width: 80%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            
        }
        .code-wrapper{
            display: flex;
            height: 246px;
            border-bottom: 1px black solid;
            border-top: 1px black solid;
        }
    }
}


</style>