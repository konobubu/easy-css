<template>
    <div class="button">
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
            name: "Button",
            sizeObj: {
                height: '130px',
                width: '30%',
            },
            codelist: [
                {
                    id: 0,
                    html: [
'<a href="#" class="button-1">BUTTON1</a>',
                    ],

                    style: [
`.button-1 {,
display: inline-block;,
padding: 4px 12px;,
text-decoration: none;,
color: #FFF;,
background-color: #105E86;,
opacity: 0.75;,
}`
,

`.button-1:hover{,
opacity: 1;,
}`
,

                    ],
                },

                {
                    id: 1,
                    html: [
'<a href="#" class="button-2">BUTTON2</a>',
                    ],
                    style: [
`.button-2{,
    display: inline-block;,
    text-decoration: none;,
    padding: 0.4em 1em;,
    border: 2px solid #000;,
    color: #000;,
}`
,
`.button-2:hover{,
    background-color: #dcdcdc;,
}`
                    ], 
                },

            ]
        }
    },
    components: {
        Content
    }
}
</script>

<style lang="scss">
.button-1{
    display: inline-block;
    padding: 0.4em 1em;
    text-decoration: none;
    color: #FFF;
    background-color: #105E86;
    opacity: 0.75;
}

.button-1:hover{
    opacity: 1;
}

.button-2{
    display: inline-block;
    text-decoration: none;
    padding: 0.4em 1em;
    border: 2px solid #000;
    color: #000;
}

.button-2:hover{
    background-color: #dcdcdc;
}
</style>