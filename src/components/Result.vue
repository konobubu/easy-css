<template>
    <div class="result" v-bind:style="sizeObj">
        <div v-if="blood" v-html="htmlNest" class="result-html">
        </div>
        <div v-else v-html="html" class="result-html">
        </div>
        <button @click="codeShow(number)" class="show-code-button">コードを見る</button>
    </div>
</template>

<script>
export default {
    props: {
        number: [String, Number],
        html: [String, Number, Array],
        css: [String, Number, Array],
        list: Array,
        sizeObj: Object,
        // activeBtn: Array,
    },
    data() {
        return {
            htmlNest: '',
            htmlCode: '',
            cssCode: '',
            cssLen: [],
            codes: '', //content.vueに渡す用
            blood: false,
            cssArray: [],
            codestr: '',
        }
    },
    methods: {
        codeShow(index){
            this.htmlCode = this.list[index].html;
            this.cssCode = this.list[index].style; //styleにアクセスするにはlistからいく
            this.cssLen[index] = this.cssCode.length;   
            //動的にデータ追加するプランを明日模索する
            
            for(var i=0; i<this.cssLen[index]; i++){
                this.cssArray[i] = this.cssCode[i].split(','); 
                //まずsplitでカンマ区切りで配列にする
                //ここでcssArrayの中身は二重配列
            }

            this.codes = {
                html: this.htmlCode,
                css: this.cssCode,
                cssArray: this.cssArray,
                index: index
            }

            // クリックしたら、そのインデックスのHTMLを出力したい
            this.$emit('catchCode', this.codes);
        }
        
    },
    created() {
        if(this.html instanceof Array){
            //受け取ったhtmlが配列なら文字列に展開
            this.htmlNest = this.html.join('');
            this.blood = true;
        }else{
            this.blood = false;
        }
    },
}
// JSON.stringify(obj)
</script>

<style lang="scss">

.result{
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
    padding: 60px 36px 0 36px;
    margin: 20px;
    background-color: #fff;
    position: relative;
    box-sizing: content-box;

    .result-html{
        padding: 8px 0;
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }

    .show-code-button{
        position: absolute;
        top: 14px;
        right: 18px;
        padding: 2px 4px;
        border: 2px solid #42b983;
        border-radius: 5px;
        color: #42b983;
        font-weight: bold;
        transition: 0.2s ease;
    }

    .activebtn{
        background-color: #42b983;
        color: #fff;
    }

    .show-code-button:hover{
        background-color: #42b983;
        color: #fff;
        cursor: pointer;
    }
}




</style>