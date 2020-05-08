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
                height: '120px',
                width: '30%',
            },
            codelist: [
                {
                    id: 0,
                    html: [
'<a href="#" class="button-1">BUTTON</a>',
                    ],

                    style: [
`
.button-1 {,
display: inline-block;,
padding: 4px 12px;,
text-decoration: none;,
color: #FFF;,
background-color: #105E86;,
opacity: 0.75;,
}
`
                    ],
                },

                {
                    id: 1,
                    html: [
'aaaaa',
                    ],
                    style: [
`color: 'black',
fontWeight: 'bold'
`
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
    padding: 4px 12px;
    text-decoration: none;
    color: #FFF;
    background-color: #105E86;
    opacity: 0.75;
}
</style>