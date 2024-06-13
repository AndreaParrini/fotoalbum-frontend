<script>
import { store } from '../store';
import CardItem from './CardItem.vue';

export default {
    name: 'SliderItem',
    components: {
        CardItem
    },
    data() {
        return {
            store
        }
    },
    created() {

        store.GetFotoHomePage();
        store.sliderInterval = setInterval(() => {
            store.activeImage++;
            console.log(store.fotos_in_evidenza);
            if (store.activeImage > store.fotos_in_evidenza.length - 1) {
                store.activeImage = 0;
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
                <CardItem v-for="foto, index in store.fotos_in_evidenza" :type="'slider'" :index="index" :foto="foto"
                    :key="foto.id"></CardItem>
            </div>
        </div>
    </div>
</template>


<style scoped></style>