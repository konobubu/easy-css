<template>
    <div class="cards">
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
            name: "Cards",
            codelist: [
                {
                    id: 0,

                    html: [
'<a href="#!" class="button-1">BUTTON</a>',
                    ],

                    style: [
`
color: #f00,
font-weight: bold
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