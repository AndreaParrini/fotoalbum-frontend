<script>
import { store } from '../store';

export default {
    name: 'SliderItem',
    data() {
        return {
            activeImage: 0,
            store
        }
    },
    created() {

        store.GetFotoHomePage();
        store.sliderInterval = setInterval(() => {
            this.activeImage++;
            console.log(store.fotos_in_evidenza);
            if (this.activeImage > store.fotos_in_evidenza.length - 1) {
                this.activeImage = 0;
            }
        }, '3000')

    }
}
</script>

<template>
    <div class="carosello">
        <div class="container-fluid px-4">
            <h2 class="text-center fst-italic mb-4">Foto in Evidenza</h2>
            <div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
                <div class="col" v-for="foto, index in store.fotos_in_evidenza ">
                    <div class="card text-dark border-0 position-relative rounded-3"
                        :class="activeImage == index ? 'active' : ''" @click="activeImage = index">
                        <!--  -->
                        <img height="300" class="card-img-top rounded-3"
                            :src="foto.image_path.startsWith('https://') ? foto.image_path : store.base_api_url + 'storage/' + foto.image_path"
                            alt="Title" />

                        <div class="card-info position-absolute start-0 top-0 z-1 w-100 h-100 p-3 rounded-3"
                            :class="activeImage == index ? 'd-block' : ''">
                            <div class="position-absolute start-0 top-0 p-3">

                                <div
                                    class="bg-light p-2 d-flex flex-column align-items-center justify-content-center rounded-3">
                                    <i class="fa fa-star fa-xl" aria-hidden="true"
                                        :class="foto.in_evidenza == 1 ? 'text-warning' : 'text-dark'"></i>
                                </div>


                            </div>

                            <div class="position-absolute end-0 top-0 p-3">

                                <div
                                    class="bg-light p-2 d-flex flex-column align-items-center justify-content-center rounded-3">
                                    <div>{{ foto.category ? foto.category.name : 'N/a' }}</div>
                                </div>


                            </div>
                            <div class="position-absolute start-0 bottom-0 ps-3 py-2 d-flex align-items-center gap-2">
                                <div>
                                    <i class="fa fa-user-circle fa-2xl" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <span class="fs-6 text-uppercase fw-bold">{{
                                        foto.title }}</span>
                                    <p class="fs-6 fst-italic m-0">Pubblicata il {{
                                        store.moment(foto.created_at).format('DD-MM-YYYY') }}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.card-info {
    background-color: rgba(0, 0, 0, 0.258);
    display: none;
}

.card:hover {

    .card-info {
        display: block;
    }


}

.active {
    scale: 1.1;
}
</style>