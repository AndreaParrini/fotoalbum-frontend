<script>
import axios from 'axios';
import moment from "moment";


export default {
    name: 'SectionMain',
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000/',
            fotos_endpoint: 'api/fotos',
            in_evidenza_query: 'evidenza=1',
            fotos_in_evidenza: '',
            fotos: '',
            index: 0,
            moment: moment
        }
    },
    methods: {
        GetAllFotos() {
            if (!this.fotos) {

                axios
                    .get(this.base_api_url + this.fotos_endpoint)
                    .then((response) => {
                        console.log(response.data.results);
                        this.fotos = response.data.results;
                    })
                    .catch((error) => {
                        console.error(error);
                    })
            }
        }
    },
    mounted() {
        axios
            .get(this.base_api_url + this.fotos_endpoint + '?' + this.in_evidenza_query)
            .then((response) => {
                console.log(response.data.results);
                this.fotos_in_evidenza = response.data.results;
            })
            .catch((error) => {
                console.error(error);
            });

        /* setTimeout(function () {
            this.index++;
            console.log(this.fotos_in_evidenza)
            if (this.index == this.fotos_in_evidenza.length) {
                this.index = 0;
            }
        }, 1000) */

    }
}

</script>

<template>
    <main>
        <div class="jumbotron p-5mb-4">
            <div class=" container py-5">
                <h1 class="fs-1 fw-bold">FotoAlbum by Andrea Parrini</h1>
                <p class="col-md-8 fs-5">
                    In questo sito puoi trovare tutte le foto fatte da me, in giro per il mondo.
                    Mi piace condividere con in miei spettatori, tutte le esperienze fatte, e i paesaggi visti.
                    Spero che anche una semplice e banale foto posso trasmettervi anche solo una piccola parte della
                    passione che io provo per questo lavoro.
                </p>
                <button v-if="!fotos" class="btn btn-outline-dark btn-lg" type="button" @click="GetAllFotos()">
                    View All Foto
                </button>
                <button v-else class="btn btn-outline-dark btn-lg" type="button" @click="this.fotos = ''">
                    Go to HomePage
                </button>
            </div>
        </div>

        <div id="section_fotos" class="py-5">

            <div v-if="!fotos">
                <div class="carosello">
                    <div class="container-fluid">
                        <h2 class="text-center fst-italic mb-4">Foto in Evidenza</h2>
                        <div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
                            <div class="col" v-for="foto, key in fotos_in_evidenza ">
                                <div class="card text-dark"><!-- :class="index == key ? 'active' : ''" -->
                                    <img height="300" class="card-img-top"
                                        :src="foto.image_path.startsWith('https://') ? foto.image_path : this.base_api_url + 'storage/' + foto.image_path"
                                        alt="Title" />
                                    <div class="card-body">
                                        <h6 class="card-title text-center">{{ foto.title }}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="container-fluid p-5">
                    <div class="d-flex justify-content-between px-5">

                        <h2 class="text-center fst-italic mb-4">Tutte le foto caricate</h2>
                        <div>

                            <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Filtra <i
                                    class="fa fa-filter" aria-hidden="true"></i></button>

                            <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false"
                                tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling
                                    </h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <p>Try scrolling the rest of the page to see this option in action.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
                        <div class="col mb-3" v-for="foto in fotos">
                            <div class="card text-dark border-0 position-relative rounded-3">
                                <!-- :class="index == key ? 'active' : ''" -->
                                <img height="300" class="card-img-top"
                                    :src="foto.image_path.startsWith('https://') ? foto.image_path : this.base_api_url + 'storage/' + foto.image_path"
                                    alt="Title" />
                                <!-- <div class="card-body">
                                    <h6 class="card-title text-center ">{{ foto.title }}</h6>
                                    <p>Pubblicata il {{ foto.created_at.getDate() }}</p> 
                                </div> -->
                                <div class="card-info position-absolute start-0 top-0 z-1 w-100 h-100 p-3 rounded-3">
                                    <i class="fa fa-star fa-xl" aria-hidden="true"
                                        :class="foto.in_evidenza == 1 ? 'text-warning' : 'text-dark'"></i>
                                    <div class="position-absolute start-0 bottom-0 ps-3">
                                        <span class="fs-6 text-uppercase fw-bold">{{
                                            foto.title }}</span>
                                        <p class="fs-6 fst-italic">Pubblicata il {{
                                            moment(foto.created_at).format('DD-MM-YYYY') }}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </main>
</template>

<style scoped>
.jumbotron {
    background-color: #f5ebe0;
}

.card-info {
    background-color: rgba(0, 0, 0, 0.258);
}

.card:hover {

    scale: 1.05;


}

/* .active {
    scale: 1.1;
} */
</style>
