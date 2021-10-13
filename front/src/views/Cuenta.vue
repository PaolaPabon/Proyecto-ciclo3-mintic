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
          :to="link.page"
        >
          {{ link.title }}
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
          <v-col >
              
              
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import menucuenta from '../components/menucuenta.vue'

  export default {
    components:{
      menucuenta
    },
    
    data: () => ({
      
      links: [
        { title: 'Entrenador',page:'/Entrenador'},
        
        
        
      ],
     

    }),
  }
</script>
