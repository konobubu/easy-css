<template>
    <div class="Texts">
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
            name: "Text",
            sizeObj: {
                height: '170px',
                width: '30%',
            },
            codelist: [

                {
                    id: 0,
                    html: [
                        '<h3 class="text-1">見出し</h3>',
                    ],
                    style: [
`.text-1 {,
  border-bottom: solid 3px black;,
}`
,
                    ],

                }
                ,
                {
                    id: 1,
                    html: [
                        '<h3 class="text-2">見出し2</h3>',
                    ],
                    style: [

`text-2 {,
    border: 1px solid black;,
    padding: 0.5em;,
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
.text-1 {
    border-bottom: solid 3px black;
}

.text-2{
    border: 1px solid black;
    padding: 0.5em;
}
</style>
