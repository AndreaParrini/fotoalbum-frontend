<script>
import axios from 'axios';
import moment from "moment";
import { store } from '../store';
import SliderItem from './SliderItem.vue';
import SectionJumbotron from './SectionJumbotron.vue';
import SectionFotos from './SectionFotos.vue';


export default {
    name: 'SectionMain',
    components: {
        SliderItem,
        SectionJumbotron,
        SectionFotos
    },
    data() {
        return {
            store
        }
    },
    created() {
        store.GetAllCategories();
    }
}

</script>

<template>
    <main>
        <SectionJumbotron></SectionJumbotron>

        <div id="section_fotos" class="py-5">

            <SliderItem v-if="!store.fotos"></SliderItem>

            <SectionFotos v-else></SectionFotos>
        </div>

    </main>
</template>

<style scoped>
main {
    background-color: #f5ebe0;
}
</style>
