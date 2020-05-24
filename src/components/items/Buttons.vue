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
                width: '20%',
            },
            codelist: [
                {
                    id: 0,
                    html: [
'<a href="#!" class="button-1">BUTTON1</a>',
                    ],

                    style: [
`.button-1 {,
display: inline-block;,
padding: 4px 12px;,
text-decoration: none;,
color: #FFF;,
background-color: #105E86;,
font-size: 18px;,
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
'<a href="#!" class="button-2">BUTTON2</a>',
                    ],
                    style: [
`.button-2{,
display: inline-block;,
text-decoration: none;,
padding: 0.4em 1em;,
border: 2px solid #808000;,
color: #808000;,
font-size: 18px;,
transition: 0.2s ease;,
}`
,
`.button-2:hover{,
    background-color: #808000;,
    color: #fff;,
}`
                    ], 
                },

                {
                    id: 2,
                    html: [
'<a href="#!" class="button-3">BUTTON3</a>',
                    ],

                    style: [
`.button-3{,
display: inline-block;,
text-decoration: none;,
padding: 0.4em 1em;,
border: 2px solid #808000;,
border-radius: 20px;,
color: #808000;,
font-size: 18px;,
transition: 0.2s ease;,
}`
,

`.button-3:hover{,
background-color: #808000;,
color: #fff;,
}`
,
                    ],
                },

                {
                    id: 3,
                    html: [
'<a href="#!" class="button-4">B</a>',
                    ],

                    style: [
`.button-4{,
    display: inline-block;,
    text-decoration: none;,
    padding: 0.4em 1em;,
    border: 2px solid #808000;,
    border-radius: 50%;,
    color: #808000;,
    font-size: 18px;,
    transition: 0.2s ease;,
    width: 60px;,
    height: 60px;,
    margin: 0 auto;,
    line-height: 40px;,
}`
,

`.button-4:hover{,
background-color: #808000;,
color: #fff;,
}`
,
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

//button1
.button-1{
    display: inline-block;
    text-decoration: none;
    padding: 0.4em 1em;
    background-color: #808000;
    color: #FFF;
    font-size: 18px;
    opacity: 0.75;
}

.button-1:hover{
    opacity: 1;
}

//button2
.button-2{
    display: inline-block;
    text-decoration: none;
    padding: 0.4em 1em;
    border: 2px solid #808000;
    color: #808000;
    font-size: 18px;
    transition: 0.2s ease;
}

.button-2:hover{
    background-color: #808000;
    color: #fff;
}

//buttoun3
.button-3{
    display: inline-block;
    text-decoration: none;
    padding: 0.4em 1em;
    border: 2px solid #808000;
    border-radius: 20px;
    color: #808000;
    font-size: 18px;
    transition: 0.2s ease;
}

.button-3:hover{
    background-color: #808000;
    color: #fff;
}

//button4
.button-4{
    display: inline-block;
    text-decoration: none;
    padding: 0.4em 1em;
    border: 2px solid #808000;
    border-radius: 50%;
    color: #808000;
    font-size: 18px;
    transition: 0.2s ease;
    width: 60px;
    height: 60px;
    margin: 0 auto;
    position: absolute;
    top: 37%;
    left: 0;
    right: 0;
    line-height: 40px;

}

.button-4:hover{
    background-color: #808000;
    color: #fff;
}
</style>