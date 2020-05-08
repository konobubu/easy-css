<template>
  <div class="nav-wrapper">
    <ul class="nav">
      <li v-for="item in itemList" v-bind:key="item.id" class="nav-list">
        <router-link v-bind:to="item.link" class="nav-item">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import ItemList from "../item/item-list.js"

export default {
  data() {
    return{
      itemList: [
        {
            id: 1,
            name: "Button",
            link: '/button'
        },
        {
            id: 2,
            name: "Header",
            link: '/header'
        },
        {
            id: 3,
            name: "Text",
            link: '/text'
        },
        {
            id: 4,
            name: "Card",
            link: '/card'
        },
        {
            id: 5,
            name: "List",
            link: '/list'
        },
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.nav-wrapper{
  border-bottom: 1px solid black;

  .nav {
    list-style-type: none;
    padding: 0;

    .nav-list+ .nav-list{
      border-left: 1px solid #333;
    }

    .nav-list{
      display: inline;
      padding: 0 25px;


        .nav-item{
          // display: flex;
          // justify-content: space-between;
          text-decoration: none;
          color: #42b983;
        }

        
    }
  }
}

</style>
