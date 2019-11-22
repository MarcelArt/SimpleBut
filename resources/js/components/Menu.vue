<template>
  <v-layout col wrap>
    <!-- <v-container>

    </v-container> -->
    <v-flex v-for="kartu in kartus" v-bind:key="kartu.id" xs12 sm6 offset-sm3>
        <v-card>
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">{{ kartu.judul }}</h3>
                    <div> {{ card_text }} </div>
                </div>
            </v-card-title>

            <v-card-actions>
                <router-link to="/test">
                    <v-btn flat color="orange">Play now</v-btn>

                </router-link>
            </v-card-actions>
        </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    data: () => ({
        kartus: [
           {id: 1, judul: 'Pengetahuan Umum'},
           {id: 2, judul: 'Sintaks dasar'},
           {id: 3, judul: 'Koding'}
        ],
    })
        
}
</script>

<style>

</style>