<script>
import axios from 'axios';
import { store } from '../store';
import CardItem from './CardItem.vue';
import SectionFilter from './SectionFilter.vue';
import PaginationItem from './PaginationItem.vue';

export default {
    name: 'SectionFotos',
    components: {
        CardItem,
        SectionFilter,
        PaginationItem
    },
    data() {
        return {
            store,
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
        <PaginationItem></PaginationItem>
    </div>
</template>


<style scoped></style>