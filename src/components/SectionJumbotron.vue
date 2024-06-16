<script>
import { store } from '../store';
export default {
    name: 'SectionJumbotron',
    data() {
        return {
            store
        }
    }

}
</script>
<template>
    <div class="jumbotron p-5 text-light" id="about_me">
        <div class=" container py-5">
            <h1 class="fs-1 fw-bold">FotoAlbum by Andrea Parrini</h1>
            <p class="col-md-8 fs-5">
                In questo sito puoi trovare tutte le foto fatte da me, in giro per il mondo.
                Mi piace condividere con in miei spettatori, tutte le esperienze fatte, e i paesaggi visti.
                Spero che anche una semplice e banale foto posso trasmettervi anche solo una piccola parte della
                passione che io provo per questo lavoro.
            </p>
            <button v-if="!store.fotos" class="btn btn-outline-light btn-lg" type="button" @click="store.GetAllFotos()">
                View All Foto
            </button>
            <button v-else class="btn btn-outline-light btn-lg" type="button" @click="store.fotos = ''">
                Go to HomePage
            </button>
        </div>
    </div>
</template>


<style scoped>
.jumbotron {
    background-image: url('/jumbotron.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-bottom: 3px solid black;
    box-shadow: 0 5px 5px black;
}
</style>