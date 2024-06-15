<script>
import { store } from '../store';
export default {
    name: 'SectionFilter',
    data() {
        return {
            store
        }
    },
    methods: {
        search() {

            let url = store.base_api_url + store.fotos_endpoint + '?';
            url = store.controlInput(url);
            //console.log(url);
            if (url != this.searchUrl) {

                //console.log(url);
                store.callApiFotos(url);

                store.searchUrl = url;
            }

        },
        reset() {
            store.searchCategory = false;
            store.searchInEvidenza = false;
            store.searchTitle = '';
        },
        annullaFiltri() {
            store.searchUrl = '';
            this.reset();
            const url = store.base_api_url + store.fotos_endpoint;
            store.callApiFotos(url);
        }
    }
}
</script>
<template>
    <div>

        <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling">Filtra <i class="fa fa-filter" aria-hidden="true"></i>
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
                    <input class="form-check-input" type="checkbox" role="switch" id="in_evidenza" name="in_evidenza"
                        v-model="store.searchInEvidenza">
                    <label class="form-check-label" for="in_evidenza">In Evidenza</label>
                </div>


                <div class="mb-3">
                    <label for="" class="form-label">Category</label>
                    <select class="form-select form-select-sm" aria-label="Small select example"
                        v-model="store.searchCategory">
                        <option selected disabled>Select one of this Category</option>

                        <option v-for="category in store.allCategories" :value="category.id">{{ category.name }}
                        </option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" name="title" id="title" aria-describedby="helpSearchTitle"
                        placeholder="Insert title of image" v-model="store.searchTitle" />
                </div>


                <button class="btn btn-outline-success me-3" type="button" @click="search()"
                    :class="(!store.searchCategory && !store.searchInEvidenza && store.searchTitle == '') ? 'disabled' : ''">
                    <span v-if="!store.loader">Search</span>
                    <span class="spinner-grow spinner-grow-sm" aria-hidden="true" v-if="store.loader"></span>
                    <span role="status" v-if="store.loader">Loading...</span>
                </button>
                <button class="btn btn-outline-danger me-3" type="button" @click="reset()" v-if="!store.loader"
                    :class="(!store.searchCategory && !store.searchInEvidenza && store.searchTitle == '') ? 'disabled' : ''">
                    <span>Reset</span>
                </button>
                <button class="btn btn-outline-dark" type="button" @click="annullaFiltri()" v-if="!store.loader"
                    :class="(store.searchUrl == '') ? 'disabled' : ''">
                    <span>Annulla Filtro</span>
                </button>

            </div>
        </div>
    </div>
</template>


<style scoped></style>