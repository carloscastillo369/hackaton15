<template>
    <div>
        <p>{{letterName}}</p>
    </div>
  
</template>

<script>
export default {
    name:'ItemUser',
    props: {
        letterName:{}
    }
}
</script>

<style scoped>
    p {
        width: 200px;
        font-size: 50px;
        height: 200px;
        border-radius: 50%;
        background: skyblue;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p:hover {
        background: yellow;
        color: white;
        cursor: pointer;
        transition: 0.5s;
    }


</style>