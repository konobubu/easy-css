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
@import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c');

.header{
    box-sizing: border-box;
    height: 67px;

    .logo-wrapper{
        display: flex;
        justify-content: flex-start;
        border-bottom: 1px solid #e6e6fa;
        

        .logo{
            margin-left: 2rem;
            margin-bottom: 1rem;
            font-size: 3.5rem;
            font-family: 'M PLUS Rounded 1c', sans-serif;
            // font-family: AlfaSlabOne-Regular, sans-serif;
            font-weight: bold;
            color: #000;
            text-decoration: none;
        }
    }
}
</style>