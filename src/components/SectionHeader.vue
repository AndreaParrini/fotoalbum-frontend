<script>
import SectionContactForm from './SectionContactForm.vue'
export default {
    name: 'SectionHeader',
    components: {
        SectionContactForm
    }

}
</script>

<template>
    <header>
        <header>
            <nav class="navbar navbar-expand-sm navbar-light">
                <div class="container">
                    <img width="100" src="/icon.jpeg" alt="Logo FotoAlbum">
                    <div class="links fw-bold">
                        <a href="#section_fotos" class="text-decoration-none text-dark me-4">Fotos</a>
                        <SectionContactForm></SectionContactForm>
                    </div>
                    <a class="navbar-brand text-uppercase fw-bolder" href="#">FotoAlbum</a>
                </div>
            </nav>
        </header>
    </header>
</template>

<style scoped>
header {
    background-color: #f5ebe0;
}
</style>