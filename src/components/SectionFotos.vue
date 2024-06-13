<script>
import axios from 'axios';
import { store } from '../store';
import CardItem from './CardItem.vue';
export default {
    name: 'SectionFotos',
    components: {
        CardItem
    },
    data() {
        return {
            store,
            searchInEvidenza: false,
            searchCategory: false,
            url_finale: ','

        }
    },
    methods: {
        search() {
            let url = store.base_api_url + store.fotos_endpoint + '?'
            if (this.searchInEvidenza) {
                url = url + 'in_evidenza=1';

            }
            if (this.searchCategory) {
                url = url + '&category=' + this.searchCategory;
            }
            console.log(url);
            axios
                .get(url)
                .then((response) => {
                    console.log(response.data.results);
                    store.fotos = response.data.results;
                })
                .catch((error) => {
                    console.error(error);
                });
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
                        aria-hidden="true"></i>
                </button>

                <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
                    id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Filtra le immagini
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">

                        <div class="form-check form-switch mb-3">
                            <input class="form-check-input" type="checkbox" role="switch" id="in_evidenza"
                                name="in_evidenza" v-model="searchInEvidenza">
                            <label class="form-check-label" for="in_evidenza">In Evidenza</label>
                        </div>


                        <div class="mb-3">
                            <label for="" class="form-label">Category</label>
                            <select class="form-select form-select-sm" aria-label="Small select example"
                                v-model="searchCategory">
                                <option selected disabled>Select one of this Category</option>

                                <option v-for="category in store.allCategories" :value="category.id">{{ category.name }}
                                </option>
                            </select>
                        </div>

                        <button type="button" @click="search()">Search</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
            <CardItem v-for="foto, index in store.fotos" :type="''" :index="index" :foto="foto" :key="foto.id"></CardItem>
        </div>
    </div>
</template>


<style scoped></style>