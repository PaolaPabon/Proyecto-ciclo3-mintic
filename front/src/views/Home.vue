<template>
  <v-container>
    
        <v-layout  class="amber accent-4"  >
            <v-flex xs12>
              <h2 class="display-2 text-center" >QUIENES SOMOS</h2>
            </v-flex>
        </v-layout>
                
        <v-carousel v-model="model">
        <v-carousel-item
          v-for="item in colors"
          :key="item.c"
        >
          <v-sheet
            :color="c"
            height="100%"
            tile
          >
            <v-row
              class="fill-height"
              align="center"
              
            >
              <v-card-text class="text-h2 text-center">
                {{ item.t }}
              </v-card-text>
              <v-card-text class="text-h5 text-center">
                {{ item.text }}
              </v-card-text>
            
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    
      
  
  </v-container>
  
     
    
  
</template>

<script>
  export default {
    data () {
      return {
      model: 0,
      colors: [
          {c:'# FFF176',t:'Presencia',text:'Pensando en tu comodidad, contamos con diferentes servicios en línea como inscripción rápida, agendamiento de citas. Además del acompañamiento de nuestros profesionales, tendrás acceso a nuestros Entrenadores Virtual para que entrenes de forma autónoma'},
          {c:'# FDD835',t:'Misión', text:'Entrena cuando quieras y donde quieras. Nuestra misión es ofrecer entrenamiento de alta calidad, haciéndolo accesible para todos. Es por eso que todos nuestros Centros de Acondicionamiento y Preparación Física cuentan con la tecnología e instalaciones adecuadas para satisfacer las necesidades de nuestros usuarios'},
          {c:'# FBC02D',t:'Visión', text:'Fortalece tu salud y mejora tu condición física con nuestros planes. Todos ofrecen entrenamiento con equipos de última generación, cardio, peso libre, clases grupales, profesionales que realizan evaluaciones y crean  tu plan de entrenamiento, y mucho más.'},
        ],
      model1: 'tab-2',
      
          
      }
    },
  }
  
  
</script>