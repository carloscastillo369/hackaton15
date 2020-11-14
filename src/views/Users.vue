<template>
    <div>
        <Title/>
        <ListUsers/>
    </div>
  
</template>

<script>
import ListUsers from "@/components/ListUsers.vue";
import Title from "@/components/Title.vue"

export default {
    name: 'Users',
    components: {
        ListUsers,
        Title
    }

}
</script>

<style>

</style>