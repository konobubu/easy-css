<template>
    <div class="css-view-wrapper">
        <div class="css-tab-wrapper">
            <div class="css-tab">CSS</div>
            <button v-if="cssCopy" type="button" class="copy-css-btn" v-on:click="copyCss()">CSSをコピー</button>
        </div>
        <textarea id="copy-css" v-bind:value="cssCopy" readonly></textarea>  
        <div class="css-view">
            <div v-for="(codes, index) in cssArray" v-bind:key="index">
                <span v-for="(code,index) in codes" v-bind:key="index" class="to-css-copy">
                    {{code}}<br>
                </span><br>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    props: {
        cssCode: [String, Array,],
        cssArray: [Array, String],
        cssCopy: [Array, String],
    },
    data() {
        return {
            codestr: '',
            copyTarget: '',
        }
    },
    computed: {

    },
    methods:{
        copyCss(){
            this.copyTarget = document.getElementById("copy-css");
            // コピー対象のテキストを選択する
            this.copyTarget.select();
            // 選択しているテキストをクリップボードにコピーする
            document.execCommand("Copy");

        }
    },
    created() {
        // this.parent = document.getElementById("css-wrapper");
        // this.cssLen[this.index] = this.cssCode.length;
        // console.log(this.cssLen)
        
        // this.cssLen[index] = this.cssCode.length; //上書きされるからOK
        // console.log(this.cssLen[index]);
        

        // for(var i=0; i<this.cssLen[index]; i++){
        //     this.array[i] = this.cssCode[i];
        //     console.log(this.array);
        // }
    },
}
</script>

<style scoped lang="scss">


    .css-view-wrapper{
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 400px;
        position: relative;
        
        .css-tab-wrapper{
            display: flex;
            justify-content: space-around;
            height: 40px;

            .css-tab{
                margin-left: 20px;
                height: 41px;
                padding: 8px 12px;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                border: 1px solid #42b983;
                border-radius: 10px 10px 0 0;
                font-size: 20px;
                text-align: center;
                font-weight: bold;
                width: 82px;
                background-color: #42b983;
                color: #fff;
            }

           .copy-css-btn{
                padding: 2px 12px;
                border: 2px solid #42b983;
                border-radius: 10px;
                color: #42b983;
                font-weight: bold;
                overflow: hidden;
                position: relative;
                z-index: 1;
                transition: 0.2s linear;

                &::after {
                    position: absolute;
                    content: '';
                    top: 0;
                    left: -100%;
                    z-index: -1;
                    width: 100%;
                    height: 100%;
                    background-color: #42b983;
                    transition: 0.2s linear;
                }

                &:hover{
                    color: #fff;
                    cursor: pointer;
                    &::after {
                        left: 0;
                    }
                }
            }
        }

        .css-view{
            height: 360px;
            box-sizing: border-box;
            border-right: 1px black solid;
            padding: 10px 0 0 16px;
            position: relative;
            overflow-y: scroll;
            background-color: #fff;
            
                span{
                    display: block;
                    line-height: 21px;
                }

                &::-webkit-scrollbar
                {
                    width:5px;
                    background:#eee;
                    margin: 4px;
                }

                &::-webkit-scrollbar-thumb {
                    border-radius: 4px;
                    background-color: rgba(0,0,0,.5);
                    box-shadow: 0 0 1px rgba(255,255,255,.5);
                }
        }


    }

    #copy-css{
        position: absolute;
        left: -9999px;
    }


</style>