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
            searchTitle: '',
            searchUrl: ''
        }
    },
    methods: {
        search() {
            let url = store.base_api_url + store.fotos_endpoint + '?';

            if (this.searchInEvidenza) {
                url = url + 'in_evidenza=1';

            };

            if (this.searchCategory) {
                url = url + '&category=' + this.searchCategory;
            };

            if (this.searchTitle) {
                url = url + '&title=' + this.searchTitle;

            };

            if (url != this.searchUrl) {
                //console.log(url);
                store.CallApiFotos(url);
                this.searchUrl = url;
            }

        },
        reset() {
            this.searchCategory = false;
            this.searchInEvidenza = false;
            this.searchTitle = '';
        },
        annullaFiltri() {
            this.searchUrl = '';
            this.reset();
            const url = store.base_api_url + store.fotos_endpoint;
            store.CallApiFotos(url);
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

                        <div class="mb-3">
                            <label for="title" class="form-label">Title</label>
                            <input type="text" class="form-control" name="title" id="title"
                                aria-describedby="helpSearchTitle" placeholder="Insert title of image"
                                v-model="searchTitle" />
                        </div>


                        <button class="btn btn-outline-success me-3" type="button" @click="search()"
                            :class="(!searchCategory && !searchInEvidenza && searchTitle == '') ? 'disabled' : ''">Search</button>
                        <button class="btn btn-outline-danger me-3" type="button" @click="reset()"
                            :class="(!searchCategory && !searchInEvidenza && searchTitle == '') ? 'disabled' : ''">Reset</button>
                        <button class="btn btn-outline-dark" type="button" @click="annullaFiltri()"
                            :class="(searchUrl == '') ? 'disabled' : ''">Annulla Filtro</button>

                    </div>
                </div>
            </div>
        </div>
        <div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1" v-if="store.fotos.length > 0">
            <CardItem v-for="foto, index in store.fotos" :type="''" :index="index" :foto="foto" :key="foto.id"></CardItem>
        </div>
        <div v-else class="py-5">
            <div class="py-5 fs-5 fw-bolder text-center">
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                Non ci sono foto per le ricerca effettuata.<br />
                Riprova modificando i dati inseriti.
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>

            </div>
        </div>
    </div>
</template>


<style scoped></style>