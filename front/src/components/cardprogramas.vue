<template>
   <v-card
        class="mx-auto"
        max-width="400"
            >
                <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                >
                <v-card-title>{{programa.title}}</v-card-title>
                </v-img>
               
                <v-card-text class="text--primary">
                <div>{{programa.d}}</div>

                
                </v-card-text>
                 <v-card-text class="pb-0">{{programa.pago}}
                
                 </v-card-text>

                <v-card-actions>
                <v-btn
                    color="orange"
                    text
                >
                    Inscribirme
                </v-btn>

                </v-card-actions>
            </v-card>
</template>

<script>
export default {
    

};
</script>

<style>

</style>