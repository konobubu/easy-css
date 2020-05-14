<template>
    <div class="headers">
        <Content
            v-bind:name="name"
            v-bind:sizeObj="sizeObj"
            v-bind:codelist="codelist"
        />
    </div>
</template>

<script>
import Content from '@/components/Content.vue'

export default {
    data() {
        return {
            name: "Header",
            sizeObj: {
                height: '170px',
                width: '30%',
            },
            codelist: [
                {
                    id: 0,
                    html: [
                        '<ul class="header-1-ul">',
                        '<li class="header-1-li">item1</li>',
                        '<li class="header-1-li">item2</li>',
                        '<li class="header-1-li">item3</li>',
                        '</ul>'
                    ],
                    style: [
`.header-1-ul{,
    list-style-type: none;,
    margin:0;,
    padding:0;,
    border:0;,
    outline:0;,
}`
,
`.header-1-li{,
    display: inline;,
    padding: 0 25px;,
    line-height: 1.5;,
}`
,
`.header-1-li + .header-1-li {,
    border-left: 1px solid #333;,
}`
,
                    ],

                },
                {
                    id: 1,
                    html: "aaaaa",
                    style: [

`.header1.li + li {,
    padding: 0.5em 0;,
    line-height: 1.5;,
}`
                    ],
                }
            ]
        }
    },
    components: {
        Content
    }
}
</script>

<style lang="scss">

.header-1-ul{
    list-style-type: none;
    margin:0;
    padding:0;
    border:0;
    outline:0;
    margin-top: 30px;
}

.header-1-li{
    display: inline;
    padding: 0 25px;
    line-height: 1.5;
}

.header-1-li + .header-1-li {
    border-left: 1px solid #333;
}


</style>