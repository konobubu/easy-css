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
            codestr: ''
        }
    },
    methods: {
        codeShow(index){
            this.htmlCode = this.list[index].html;
            this.cssCode = this.list[index].style; //styleにアクセスするにはlistからいく
            // console.log(this.list[index].style.length);
            // console.log(this.cssCode);
            this.cssLen[index] = this.cssCode.length;   
            //動的にデータ追加するプランを明日模索する
            
            for(var i=0; i<this.cssLen[index]; i++){
                this.cssArray[i] = this.cssCode[i].split(','); 
                //まずsplitでカンマ区切りで配列にする
                //ここでcssArrayの中身は二重配列
                
                // for(var s=0; s<this.cssArray[i].length; s++){
                //     this.cssArray[i][s] = this.this.cssArray[i][s].replace("\n","");
                //     console.log(this.cssArray[i][s]);
                // }
            }


            // this.cssLen[index] = this.cssCode.length; //上書きされるからOK
            // console.log(this.cssLen[index]);

            // for(var i=0; i<this.cssLen[index]; i++){
            //     this.codestr = this.css[i].split(',');
            //     console.log(this.codestr);
            // }

            this.codes = {
                html: this.htmlCode,
                css: this.cssCode,
                cssArray: this.cssArray,
                index: index
            }

            this.$emit('catchCode', this.codes);
        }
        // クリックしたら、そのインデックスのHTMLを出力したい
    },
    created() {
        if(this.html instanceof Array){
            //受け取ったhtmlが配列なら文字列に展開
            this.htmlNest = this.html.join('');
            this.blood = true;
        }else{
            this.blood = false;
        }
        // for(var i=0; i<this.css.length; i++){
        //     this.array[i] = this.css[i].split(',');
        //     console.log(this.array);
        //     // this.first = this.array{$i}[0]
        //     // last = length -1
        //     // if(!this.first or this.last){
        //     //    g = a
        //     // }
        // }
    },
}
// JSON.stringify(obj)
</script>

<style lang="scss">

.result{
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
    padding: 60px 36px 0 36px;
    margin: 20px;
    position: relative;

    .result-html{
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }

    .show-code-button{
        position: absolute;
        top: 14px;
        right: 18px;
    }
}




</style>