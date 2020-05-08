<template>
    <div class="lists">
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
            name: "List",
            sizeObj: {
                height: '300px',
                width: '30%',
            },
            codelist: [
                {
                    id: 0,
                    html: [
                           '<ul class="list1">',
                            '<li>List1</li>',
                            '<li>List2</li>',
                            '<li>List3</li>',
                            '<li>List4</li>',
                           '</ul>'
                    ],
                    style: [ //配列にする理由：lengthで要素数をとりたいから
                        //カンマ区切りで配列に入れる
`ul.list1 {,
max-width: 15em;,
padding: 12px 30px 10px 50px;,
margin: 0 auto;,
color: #333;,
background: #fff;,
border: solid 3px gray;,
border-radius: 0.5em;,
}`
,

`ul.list1 li {,
    padding: 0.5em 0;,
    line-height: 1.5;,
}`
                    ]
                },

                // style: [
                //     {
                //         css1: []
                //     },
                //     {
                //         css2: []
                //     }
                // ],
                {
                    id: 1,
                    html: [
                           '<div class="list3">',
                                '<ul>',
                                    '<li class="index-list index-list-select">',
                                        '<div class="index-name index-name-select">',
                                            'list1',
                                        '</div>',
                                    '</li>',
                                    '<li>',
                                        '<div class="dddd">',
                                            'ddddd',
                                        '</div>',
                                    '</li>',
                                '</ul>',
                            '</div>',
                    ],
                    style:[
`
color: 'black',
fontWeight: 'bold'
`
                    ]
                },
                {
                    id: 2,
                    html: [
                           '<div class="list3">',
                                '<ul>',
                                    '<li class="index-list index-list-select">',
                                        '<div class="index-name index-name-select">',
                                            'list1',
                                        '</div>',
                                    '</li>',
                                    '<li>',
                                        '<div class="dddd">',
                                            'ddddd',
                                        '</div>',
                                    '</li>',
                                '</ul>',
                            '</div>',
                    ],
                    style:[
                     `
                        color: 'red',
                        fontWeight: 'hosoi'
                    `
                    ]                    
                }
            ]
        }
    },
    components: {
        Content
    },
    created() {
        // for(i=0; i<style.length; i++){
        //     `this.array{$i}` = `style[i].css{$i}`.split(,)
        //     this.first = this.array{$i}[0]
        //     last = length -1
        //     if(!this.first or this.last){
        //        g = a
        //     }
        // }
        
        // console.log(this.codelist);
        // console.log(this.codelist[0].a.split(','));

        // case()
        //     switch (key) {
        //         case g=a:
                    
        //             break;
            
        //         default:
        //             break;
        //     }



        
    },
}
</script>

<style lang="scss">
ul.list1 {
    max-width: 15em;
    padding: 12px 30px 10px 50px;
    margin: 0 auto;
    color: #333;
    background: #fff;
    border: solid 3px gray;
    border-radius: 0.5em;

    li {
        padding: 0.5em 0;
        line-height: 1.5;
    }
}
</style>