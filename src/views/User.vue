<template>
    <div>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">USERNAME</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">PHONE</th>
                    <th scope="col">WEBSITE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">{{user.id}}</th>
                    <td>{{user.name}}</td>
                    <td>{{user.username}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.phone}}</td>
                    <td>{{user.website}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapActions, mapState} from "vuex";

export default {
    name: 'User',
    data(){
        return {
            id: this.$route.params.id
        }
    },

    methods: {
        ...mapActions(['getOneUserAction'])
    },

    computed: {
        ...mapState(['user']),
    },

    created(){
        this.getOneUserAction(this.id)
    }
}
</script>

<style>
    .table {
        margin-top: 100px;
    }
</style>