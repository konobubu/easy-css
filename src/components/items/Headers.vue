<template>
    <div class="button">
        <Content
            v-bind:name="name"
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
            codelist: [
                {
                    id: 0,
                    html: "header1",
                    style: {
                        color: 'red',
                        fontSize: '24px',
                    },
                },
                {
                    id: 1,
                    html: "aaaaa",
                    style: {
                        color: 'black',
                        fontWeight: 'bold',
                    }, 
                }
            ]
        }
    },
    components: {
        Content
    }
}
</script>