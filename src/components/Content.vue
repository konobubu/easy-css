<template>
    <div class="content-wrapper">
        <div class="content">
            <div class="item-name-wrapper">
                <h3 class="item-name">{{name}}</h3>
                <p class="item-explan">※「コードを見る」を押したら、ページ下部にHTMLとCSSが出るのでコピーしてください</p>
            </div>
            <div class="result-wrapper">
                <Result v-bind:list="codelist"
                    v-bind:sizeObj="sizeObj"
                    v-for="code in codelist"
                    v-bind:key="code.id"
                    v-bind:html="code.html"
                    v-bind:css="code.style"
                    v-bind:number="code.id"
                    @catchCode = "showHtml"
                />
            </div>
            
            <div class="code-view-wrapper">
                <div class="code-view">
                    <HtmlView
                        v-bind:bool="bool"
                        v-bind:htmlCode="htmlCode"
                        v-bind:htmlCopy="htmlCopy"
                    />
                    <CssView
                        v-bind:cssCode="cssCode"
                        v-bind:cssArray="cssArray"
                        v-bind:cssCopy="cssCopy"
                    />
                </div>
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
        sizeObj: Object,
        codelist: Array,

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
            cssArray: [],
            index: '',
            htmlNest: [],
            bool: false,
            csstxt: [], //カンマ消去用の配列
            cssCopy: '', //コピー用のcss
            htmlCopy: '', //コピー用のhtml
            
        }
    },
    methods: {
        // @catchCode = "showHtml"
        // 左辺で子コンポーネントのメソッドを呼び出して、右辺で親のメソッド呼び出し
        showHtml(code){
            //code: {html:"" , css:"", cssArray:""}
            this.htmlCode = code.html;
            this.cssCode = code.css;
            this.cssArray = code.cssArray;
            this.index = code.index;
            this.htmlCopy = this.htmlCode.join('\n');

            //ここで配列の判定
            if(this.htmlCode instanceof Array){
                //trueならcodeNestに入れる
                this.bool = true;
            }else{
                //falseならcodes入れる つまりそのまま
                this.bool = false;
            }
            //そのあとContentでv-ifの判定

            this.csstxt = [];
            for(var i=0; i<this.cssArray.length; i++){
                this.csstxt[i] = this.cssArray[i].join('');
                this.csstxt[i] = this.csstxt[i].replace(/,/g, '')
                this.cssCopy = this.csstxt.join('\n\n');
            }

        }
    }
}
</script>

<style lang="scss">

$content-height: calc(100vh - 170px);
$result-height: calc($content-height - 50px);

.content-wrapper{
    // height: $content-height;
    background-color: #f5f5dc;

    .content{
        // border-bottom: 1px black solid;
        .item-name-wrapper{
            display: flex;
            justify-content: space-between;

            .item-name{
                padding-left: 68px;
                font-size: 38px;
            }

            .item-explan{
                padding-top: 36px;
                padding-right: 50px;
            }
        }

        .result-wrapper{
            //ここのheightはjsを使ってなんとかする
            width: 80%;
            height: auto;
            margin: 0 auto;
            margin-bottom: 72px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            box-sizing: border-box;
        }

        .code-view-wrapper{
            width: 100%;
            height: 400px;
            // border-top: 1px black solid;
            border-bottom: 1px black solid;

            .code-view{
                display: flex;
                // height: 246px;
                width: 100%;
                margin: 0 auto;
                // padding-top: 30px;
            }
        }

    }
}


</style>