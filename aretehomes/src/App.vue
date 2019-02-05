<template>
<div id="app">
    <v-app>
        <v-content class="bkgd">
            <v-toolbar color="teal lighten-1" id="toolbar">
                <router-link to="/">
                    <h1>AreteHomes</h1>
                </router-link>
                <ul>
                    <router-link to="/about">
                        <v-btn>About</v-btn>
                    </router-link>
                    <router-link to="/our-story">
                        <v-btn>Our Story</v-btn>
                    </router-link>
                </ul>
            </v-toolbar>

            <!--why is this always displayed?-->
            <v-container>
                <!-- <h1>Test container</h1> -->
            </v-container>
            <router-view></router-view>
        </v-content>
    </v-app>
</div>
</template>

<script>
import About from "./components/About";
import Story from "./components/Story";

export default {
    name: 'app',
    components: {
        About,
        Story
    },
    data() {
        return {
            goToAbout: false,
            msg: "Home page"
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

#toolbar {
    display: flex;
    justify-content: flex-end;
}

.bkgd {
    background-image: url("./assets/house-bkgd.jpg");
    background-size: cover;
    /* opacity: 0.5; */
}
</style>
