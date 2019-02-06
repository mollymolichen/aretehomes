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

            <v-container style="flex-direction:row">
                <!-- <p>Sign up for a free account now.</p> -->
                <v-layout row wrap>
                    <v-flex xs12>
                        <h1 style="text-align: center;" id="title">Sign up for a free account now.</h1>
                    </v-flex>
                </v-layout>

                <v-layout row wrap>
                    <v-flex xs12>
                        <router-link to="/get-started">
                            <v-btn id="gs-button">Get Started</v-btn>
                        </router-link>
                    </v-flex>
                </v-layout>
            </v-container>

            <router-view></router-view>
        </v-content>
    </v-app>
</div>
</template>

<script>
/* eslint-disable */
import About from "./components/About";
import GetStarted from "./components/GetStarted";
import Story from "./components/Story";

export default {
    name: 'app',
    components: {
        About,
        GetStarted,
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
/* ids */
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#toolbar {
    display: flex;
    justify-content: flex-end;
}

#title {
    margin-top: 250px;
    margin-bottom: 50px;
    transform: scale(1.5, 1.5);
}

#gs-button {
    transform: scale(1.5, 1.5);
}

/* classes */
.bkgd {
    background-image: url("./assets/house-bkgd.jpg");
    background-size: cover;
    /* opacity: 0.5; */
}
</style>
