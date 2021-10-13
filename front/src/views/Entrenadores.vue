<template>
  <v-app id="inspire">
    
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        ></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          text
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <menucuenta></menucuenta>
          </v-col>
          <v-col v-for="entrenador in entrenadors" :key="entrenador.code">
            
              {{entrenador}}
            <cardentrenadores></cardentrenadores>
            
            
          </v-col >
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import { getAllEntrenadores } from "../services/entrenadoresservice";
import cardentrenadores from "../components/cardentrenadores.vue"
import menucuenta from '../components/menucuenta.vue'

  export default {
    components: {
      cardentrenadores,
      menucuenta
    },
    data: () => ({
      entrenadors:[],
     
      links: [
        'Messages',
        'Profile',
      ],
     

    }),
    mounted (){
        getAllEntrenadores()
            .then((response)=> {
                this.entrenadors = response.data;
            })
            .catch ((err) => console.error(err));
   
  }  
  }
</script>
