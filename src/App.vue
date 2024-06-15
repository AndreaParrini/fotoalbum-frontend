<script>
import SectionHeader from './components/SectionHeader.vue';
import SectionMain from './components/SectionMain.vue';
import SectionFooter from './components/SectionFooter.vue';

export default {
    name: 'App',
    components: {
        SectionHeader,
        SectionMain,
        SectionFooter
    }
}

</script>

<template>
    <SectionHeader></SectionHeader>
    <SectionMain></SectionMain>
    <SectionFooter></SectionFooter>
</template>

<style scoped></style>
