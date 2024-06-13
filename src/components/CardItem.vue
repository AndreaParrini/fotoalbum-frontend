<script>
import { store } from '../store';
export default {
    name: 'CardItem',
    props: {
        foto: Object,
        type: String,
        index: Number
    },
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <div class="col mb-3 px-4">
        <!-- Modal trigger button -->
        <button type="button" class="border-0 w-100" data-bs-toggle="modal" :data-bs-target="`#modalId-${foto.id}`">
            <div class="card text-dark border-0 position-relative rounded-3"
                :class="(store.activeImage == index && type == 'slider') ? 'active' : ''"
                @click="if (type == 'slider') { activeImage = index };">
                <!-- :class="index == key ? 'active' : ''" -->
                <img height="300" class="card-img-top rounded-3"
                    :src="foto.image_path.startsWith('https://') ? foto.image_path : store.base_api_url + 'storage/' + foto.image_path"
                    alt="Title" />

                <div class="card-info position-absolute start-0 top-0 z-1 w-100 h-100 p-3 rounded-3"
                    :class="(store.activeImage == index && type == 'slider') ? 'd-block' : ''">
                    <div class=" position-absolute start-0 top-0 p-3">

                        <div class="bg-light p-2 d-flex flex-column align-items-center justify-content-center rounded-3">
                            <i class="fa fa-star fa-xl" aria-hidden="true"
                                :class="foto.in_evidenza == 1 ? 'text-warning' : 'text-dark'"></i>
                        </div>


                    </div>

                    <div class="position-absolute end-0 top-0 p-3">

                        <div class="bg-light p-2 d-flex flex-column align-items-center justify-content-center rounded-3">
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
        </button>

        <!-- Modal Body -->
        <!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard -->
        <div class="modal fade" :id="`modalId-${foto.id}`" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
            role="dialog" :aria-labelledby="`modalTitleId-${foto.id}`" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="d-flex align-items-center justfy-content-between gap-3">
                            <h5 class="modal-title" :id="`modalTitleId-${foto.id}`">
                                {{ foto.title }}
                            </h5>
                            <i class="fa fa-star fa-xl" aria-hidden="true"
                                :class="foto.in_evidenza == 1 ? 'text-warning' : 'text-dark'"></i>
                            <span class="badge text-bg-success">{{ foto.category ? foto.category.name : 'N/a' }}</span>
                        </div>

                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img height="500" class="card-img-top rounded-3 w-100"
                            :src="foto.image_path.startsWith('https://') ? foto.image_path : store.base_api_url + 'storage/' + foto.image_path"
                            alt="Title" />
                        <div class="accordion" :data-bs-parent="`#accordion-fotoID-${foto.id}`">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Descrizione
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    :data-bs-parent="`#accordion-fotoID-${foto.id}`">
                                    <div class="accordion-body">
                                        {{ foto.description }}
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseAccordionDate" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                        Pubblicazione
                                    </button>
                                </h2>
                                <div id="collapseAccordionDate" class="accordion-collapse collapse"
                                    :data-bs-parent="`#accordion-fotoID-${foto.id}`">
                                    <div class="accordion-body">
                                        {{ store.moment(foto.created_at).format('MMM-DD-YYYY') }}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">Save</button>
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
    box-shadow: 5px 5px 20px black;

    .card-info {
        display: block;
    }
}

.active {
    scale: 1.1;
    box-shadow: 5px 5px 20px black;
}
</style>