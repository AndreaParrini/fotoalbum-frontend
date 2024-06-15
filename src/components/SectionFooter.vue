<script>
export default {
    name: 'SectionFooter',

}
</script>
<template>
    <footer class="bg-dark py-5 text-light">
        <div class="container">
            <div class="row row-cols-lg-2 row-cols-1">
                <div class="d-flex gap-5">
                    <ul>
                        <h5 class="text-uppercase fw-bold">Links</h5>
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Images</a></li>
                        <li><a href="#">Album</a></li>
                    </ul>
                    <ul>
                        <h5 class="text-uppercase fw-bold">Company</h5>
                        <li><a href="#">Term Of Use</a></li>
                        <li><a href="#">Privacy policy (New)</a></li>
                        <li><a href="#">Advertising</a></li>
                        <li><a href="#">Subscriptions</a></li>
                        <li><a href="#">Ratings</a></li>
                        <li><a href="#">Cookie</a></li>
                        <li><a href="#">Contact Us <i class="fa-regular fa-envelope" style="color: #ffffff;"></i></a></li>
                    </ul>
                </div>
                <div class="d-flex gap-5 justify-content-end align-items-end">
                    <div class="social d-flex gap-3">
                        <a href="#"><i class="fa-brands fa-facebook fa-2xl" style="color: #ffffff;"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram fa-2xl" style="color: #ffffff;"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube fa-2xl" style="color: #ffffff;"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter fa-2xl" style="color: #ffffff;"></i></a>





                    </div>
                    <div class="logo w-25">
                        <img class="w-100" src="/icon.jpeg" alt="" srcset="">
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>


<style scoped>
li {
    list-style: none;

    & a {
        text-decoration: none;
        color: var(--dc-gray);
        font-size: small;
        font-weight: 200;
    }
}
</style>