<!--Estructura principal appENERGYM -->
<template>
  <v-app>
   <v-app-bar app>
     <cmp-bar-navegation/>

   </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <cmp-carousel/>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        

        
        <!-- If using vue-router -->
         <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      
    </v-footer>
  </v-app>
</template>

<script>
import cmpBarNavegation from './components/cmpBarNavegation.vue';
import CmpCarousel from './components/cmpCarousel.vue';
import CmpFooter from './components/cmpFooter.vue';
import cmpFooter from './components/cmpFooter.vue'
export default {
  components: { cmpBarNavegation, CmpCarousel, CmpFooter },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
