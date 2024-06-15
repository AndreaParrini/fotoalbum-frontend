<script>
import { store } from '../store';
export default {
    name: 'PaginationItem',
    data() {
        return {
            store
        }
    },
    methods: {

        goTo(url) {
            url = store.controlInput(url);
            console.log(url);
            store.callApiFotos(url);
        }

    }

}
</script>
<template>
    <nav aria-label="Page navigation " class="py-4">
        <ul class="pagination justify-content-end">
            <li v-for="link in store.fotos.links    " class="page-item"
                :class="!(link.url) ? 'disabled' : '', link.active ? 'active' : ''">
                <button class="page-link" :href="link.url" type="button" @click="goTo(link.url)">
                    <span v-html="link.label"></span>
                </button>
            </li>
        </ul>
    </nav>
</template>


<style scoped></style>