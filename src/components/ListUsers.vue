<template>
    <div class="container">
        <ul>
            <li v-for="user in users" :key="user.id">
                <router-link 
                    :to="{
                        name: 'User',
                        params: {id: user.id}
                    }"
                >
                    <ItemUser :letterName="user.name"/>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
import ItemUser from "@/components/ItemUser.vue";
import { mapActions, mapState } from "vuex";

export default {
    name: 'ListUsers',
    data(){
        return {
            names:[]
        }
    },
    components: {
        ItemUser
    },
    methods: {
        ...mapActions(['getFirstLetterNameUsersAction'])
    },
    computed: {
        ...mapState(['users']),
    },

    created() {
        this.getFirstLetterNameUsersAction();
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }

    li {
        margin: 0 20px;
    }

    a {
        text-decoration: none;
    }
</style>