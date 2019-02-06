<template>
<v-card class="about-bkgd">
    <h1>{{msg}}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
    </p>
    <h1>Testimonials</h1>
    <v-carousel>
        <v-carousel-item v-for="(testimonial,t) in testimonials" :key="t" :src="testimonial.src"></v-carousel-item>
    </v-carousel>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
    </p>
</v-card>
</template>

<script>
/* eslint-disable */
export default {
    name: 'about',
    components: {

    },
    data() {
        return {
            msg: "About Us",
            testimonials: [{
                    src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                },
                {
                    src: "../assets/house-bkgd.jpg"
                },
                {
                    src: "../assets/carousel3.png"
                },
                {
                    src: "../assets/carousel4.png"
                }
            ]
        };
    }
}
</script>

<style>
.about-bkgd {
    background-color: aliceblue !important;
    background-size: cover;
	height: 100%;
}
</style>
