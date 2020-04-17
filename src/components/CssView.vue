<template>
    <div class="css-wrapper">
        <div>
            
            {{cssArray}}
        </div>
    </div>

</template>

<script>
export default {
    props: {
        cssCode: [String, Array,],
        index: [String, Number, ],
        cssArray: [Array, ]
    },
    data() {
        return {
            codestr: '',
        }
    },
    computed: {
        // a(){
        //     // this.cssLen[this.index] = 

        //     // for(var i=0; i<this.cssLen[this.index]; i++){
        //     //     this.cssArray[i] = this.cssCode[i].split(',');
        //     //     this.codestr = this.cssArray[i].join("\n");
        //     // }

        //     // return 
        // }
    },
    created() {
        // console.log(this.cssArray);
        // this.cssLen[this.index] = this.cssCode.length;
        // console.log(this.cssLen)
        // console.log(this.cssCode);
        // this.cssLen[index] = this.cssCode.length; //上書きされるからOK
        // console.log(this.cssLen[index]);
        

                // for(var i=0; i<this.cssLen[index]; i++){
                //     this.array[i] = this.cssCode[i];
                //     console.log(this.array);
                // }
    },
}
</script>

<style lang="scss" scoped>


    .css-wrapper{
        width: 50%;
        overflow-y: scroll;

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
</style>