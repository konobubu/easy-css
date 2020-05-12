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
            sizeObj: {
                height: '340px',
                width: '100%',
            },
            codelist: [
                {
                    id: 0,

                    html: [
'<div class="card1-wrapper">',
'<div class="card1-img-wrapper">',
'<img src="https://www.pakutaso.com/shared/img/thumb/MITTE20515011_TP_V.jpg" class="card1-img">',
'</div>',
'<div class="card1-name">',
'名前',
'</div>',
'</div>',
                    ],

                    style: [
`.card1-wrapper{,
    box-shadow: 2px 2px 6px #808080;,
    padding: 1em;,
    width: 60%;,
    margin: 0 auto;,
}`,

`.card1-img{,
    width: 150px;,
    height: 150px;,
    border-radius: 50%;,
}`,

`.card1-name{,
    font-weight: bold;,
    margin-top: 1em;,
}`,
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
.card1-wrapper{
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
    padding: 1em;
    width: 60%;
    margin: 0 auto;
}

.card1-img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.card1-name{
    font-weight: bold;
    margin-top: 1em;
}
</style>