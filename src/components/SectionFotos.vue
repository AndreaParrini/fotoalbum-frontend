<script>
import { store } from '../store';
import CardItem from './CardItem.vue';
export default {
    name: 'SectionFotos',
    components: {
        CardItem
    },
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <div class="container-fluid py-3 px-5">
        <div class="d-flex justify-content-between px-5">

            <h2 class="text-center fst-italic mb-4">Tutte le foto caricate</h2>
            <div>

                <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Filtra <i class="fa fa-filter"
                        aria-hidden="true"></i></button>

                <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
                    id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <p>Try scrolling the rest of the page to see this option in action.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
            <CardItem v-for="foto in store.fotos" :foto="foto" :key="foto.id"></CardItem>
        </div>
    </div>
</template>


<style scoped></style>