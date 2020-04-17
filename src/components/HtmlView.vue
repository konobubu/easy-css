<template>
    <div class="html-wrapper">
        <div v-if="bool">
            <span v-for="(code, index) in htmlCode" v-bind:key="index">
            {{code}}<br>
            </span>
        </div>
        <div v-else>
            {{htmlCode}}
        </div>
    </div>

</template>

<script>
export default {
    props: {
        htmlCode: [String, Array],
        bool: Boolean,
    }
}
</script>

<style lang="scss" scoped>


    .html-wrapper{
        width: 50%;
        border-right: 1px black solid;
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