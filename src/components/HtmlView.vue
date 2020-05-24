<template>
    <div class="html-view-wrapper">

        <div class="html-tab-wrapper">
            <div class="html-tab">HTML</div>
            <button v-if="htmlCopy" type="button" class="copy-html-btn" v-on:click="copyHtml()">HTMLをコピー</button>
            <transition>
                <div v-show="copied" class="copied-label">
                    copied
                </div>
            </transition>
        </div>

        <textarea id="copy-html" v-bind:value="htmlCopy" readonly></textarea> 

        <div v-if="bool" class="html-view">
            <span v-for="(code, index) in htmlCode" v-bind:key="index">
            {{code}}<br>
            </span>
        </div>
        <div v-else class="html-view">
            {{htmlCode}}
        </div>
    </div>

</template>

<script>
export default {
    props: {
        htmlCode: [String, Array], //表示用のhtml
        bool: Boolean,
        htmlCopy: [String, Array] //コピー用のhtml
    },
    data() {
        return {
            copied: false,
        }
    },
    methods:{
        toFalse(){
            this.copied = false;
        },
        startTimer(){
            setTimeout( this.toFalse, 1500 ); //無名関数で書いてしまうと返り値(undefined)を渡してしまう
        },
        copyHtml(){
            this.copyTarget = document.getElementById("copy-html");
            this.copyTarget.select(); // コピー対象のテキストを選択する
            document.execCommand("Copy"); // 選択しているテキストをクリップボードにコピーする
            this.copied = true;
            this.startTimer();
        },

    },
}
</script>

<style lang="scss" scoped>


    .html-view-wrapper{
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 400px;
        position: relative;

        .html-tab-wrapper{
            display: flex;
            justify-content: space-around;
            height: 40px;

            .html-tab{
                margin-left: 20px;
                height: 41px;
                // line-height: 40px;
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

            .copied-label{
                display: inline;
                position: absolute;
                top: -18px;
                right: 130px;
                font-weight: bold;
                z-index: 99;
            }

            .v-enter-active, .v-leave-active{
                transition: opacity 0.7s, transform 0.7s;
            }

            .v-enter{ //表示されるときは0から1 //from
                opacity: 0;
                transform: translateY(5px);
            }

            .v-enter-to{
                opacity: 1;
            }

            .v-leave{  //消えるときは1から0 /from
                opacity: 1;
            }

            .v-leave-to{
                opacity: 0;
                transform: translateY(5px);
            }

                .copy-html-btn{
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

        .html-view{
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

        #copy-html{
            position: absolute;
            left: -9999px;
        }

    }
</style>
