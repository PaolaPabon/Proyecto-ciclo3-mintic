<template>
 <v-container>
    
      <v-car>
        <v-img src='https://gocrein.com/wp-content/uploads/2020/11/49656396_2087781034615939_6813560273270472704_o.jpg'>

        </v-img>
      </v-car>
    <v-row>
      <v-col v-for="card in cards" :key="card.id" md="4" xs="12">
        <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              :src="card.img"
              height="200"
              width="200"
            ></v-img>

            <v-card-title class="green--text"> <div class="text-h3"> {{card.t}}</div></v-card-title>

            <v-card-text>
              <v-divider class="mx-4"></v-divider>
              <div class="black--text">{{card.text}}</div>
            </v-card-text>


        </v-card>
      </v-col>
    </v-row>

  </v-container>

</template>

<script>
  export default {
    data () {
      return {
      model: 0,
      cards: [
          {id:'1',
          img:'https://cdn2.iconfinder.com/data/icons/gym-workout-equipments/279/gym-workout-equipment-002-512.png',
          t:'Facilidad',
          text:'Pensando en tu comodidad, contamos con diferentes servicios en línea como inscripción rápida, agendamiento de citas. Además del acompañamiento de nuestros profesionales, tendrás acceso a nuestros Entrenadores Virtual para que entrenes de forma autónoma'},
          {id:'2',
          img:'https://cdn2.iconfinder.com/data/icons/muscle-building/263/muscle-builder-building-workout-gym-016-512.png',
          t:'Presencia', 
          text:'Entrena cuando quieras y donde quieras. Nuestra misión es ofrecer entrenamiento de alta calidad, haciéndolo accesible para todos. Es por eso que todos nuestros Centros de Acondicionamiento y Preparación Física cuentan con la tecnología e instalaciones adecuadas para satisfacer las necesidades de nuestros usuarios'},
          {id:'3',
          img:'https://image.flaticon.com/icons/png/512/46/46598.png',
          t:'Flexibilidad', 
          text:'Fortalece tu salud y mejora tu condición física con nuestros planes. Todos ofrecen entrenamiento con equipos de última generación, cardio, peso libre, clases grupales, profesionales que realizan evaluaciones y crean  tu plan de entrenamiento, y mucho más.'},
        ],
      
          
      }
    },
  }
  
  
</script>