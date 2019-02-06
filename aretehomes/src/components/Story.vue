<template>
<!-- <div id="container">
    <div id="body">
        <v-container justify-center>
            <v-layout row wrap>
                <v-flex xs12>
                    <h1 id="title">{{msg}}</h1>
                </v-flex>
            </v-layout>
            
        </v-container>
    </div>
</div> -->
	<v-content>
		<h1>{{msg}}</h1>		
	</v-content>
</template>

<script>
/* eslint-disable */
export default {
    name: 'story',
    components: {

    },
    data() {
        return {
            msg: "Our Story"
        };
    }
}
</script>

<style>
#container {
    display: flex;
    /* justify-content: flex-end; */
    text-align: center;
}

#body {
    flex-direction: row;
}
</style>
