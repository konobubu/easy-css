<template>
    <div class="header">
        <div class="logo-wrapper">
            <router-link to="/" class="logo">{{logo}}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            logo: "easy-css"
        }
    },
}
</script>

<style scoped lang="scss">
.header{
    box-sizing: border-box;
    height: 60px;

    .logo-wrapper{
        display: flex;
        justify-content: flex-start;
        border-bottom: 1px solid black;
        

        .logo{
            margin-left: 2rem;
            margin-bottom: 1rem;
            font-size: 3rem;
            font-family: AlfaSlabOne-Regular, sans-serif;
            font-weight: bold;
            color: black;
            text-decoration: none;
        }
    }
}
</style>