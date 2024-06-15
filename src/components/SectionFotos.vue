<script>
import axios from 'axios';
import { store } from '../store';
import CardItem from './CardItem.vue';
import SectionFilter from './SectionFilter.vue';

export default {
    name: 'SectionFotos',
    components: {
        CardItem,
        SectionFilter
    },
    data() {
        return {
            store,
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
    <div class="container-fluid py-3 px-5">
        <div class="d-flex justify-content-between px-5">

            <h2 class="text-center fst-italic mb-4">Tutte le foto caricate</h2>
            <SectionFilter></SectionFilter>
        </div>
        <div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1" v-if="store.fotos.data.length > 0">
            <CardItem v-for="foto, index in store.fotos.data" :type="''" :index="index" :foto="foto" :key="foto.id">
            </CardItem>
        </div>
        <div v-else class="py-5">
            <div class="py-5 fs-5 fw-bolder text-center">
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                Non ci sono foto per le ricerca effettuata.<br />
                Riprova modificando i dati inseriti.
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>

            </div>
        </div>
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
    </div>
</template>


<style scoped></style>