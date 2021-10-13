<template>
  <v-container>
        <v-row> 
          <v-col>
            <v-card>
              <v-img src= 'https://www.evolucion.media/wp-content/uploads/2020/11/amigos-ropa-deportiva-hablando-juntos-mientras-estan-pie-gimnasio-despues-entrenamiento_52137-26424.jpg'
              ></v-img>
            </v-card>

          </v-col>
          <v-col>
            <cardlogin></cardlogin>    
          </v-col>             
      </v-row>          
  </v-container>
</template>

<script>

import cardlogin from "../components/cardlogin.vue";

export default {
components: {
       cardlogin
    }
  
}
    
</script>
