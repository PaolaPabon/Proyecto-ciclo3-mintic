<template>
 <v-container>
    
    <v-carousel>
        <v-carousel-item
        v-for="(item,i) in fotos"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        ></v-carousel-item>
    </v-carousel>

               
        <v-carousel v-model="model">
            <v-carousel-item
            v-for="item in colors"
            :key="item.id"
            >
            <v-sheet
                :src= 'item.c'
                height="100%"
                tile
            >
                <v-row
                class="fill-height"
                align="center"
                
                >
                <v-card-text class="text-h2 text-center yellow accent-2-text">
                    {{ item.t }}
                </v-card-text>
                <v-card-text class="text-h5 text-center ">
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
          {id:'1',t:'Facilidad',text:'Pensando en tu comodidad, contamos con diferentes servicios en línea como inscripción rápida, agendamiento de citas. Además del acompañamiento de nuestros profesionales, tendrás acceso a nuestros Entrenadores Virtual para que entrenes de forma autónoma'},
          {id:'2',t:'Presencia', text:'Entrena cuando quieras y donde quieras. Nuestra misión es ofrecer entrenamiento de alta calidad, haciéndolo accesible para todos. Es por eso que todos nuestros Centros de Acondicionamiento y Preparación Física cuentan con la tecnología e instalaciones adecuadas para satisfacer las necesidades de nuestros usuarios'},
          {id:'3',t:'Flexibilidad', text:'Fortalece tu salud y mejora tu condición física con nuestros planes. Todos ofrecen entrenamiento con equipos de última generación, cardio, peso libre, clases grupales, profesionales que realizan evaluaciones y crean  tu plan de entrenamiento, y mucho más.'},
        ],
      model1: 'tab-2',
      fotos: [
          {
            src: 'https://fotografias-compromiso.atresmedia.com/clipping/cmsimages02/2016/02/18/BCDDC10A-4B21-4786-B55D-7419822E42DC/58.jpg',
          },
          {
            src: 'https://www.65ymas.com/uploads/s1/45/11/51/bigstock-side-view-of-senior-multiethni-278365279.jpeg',
          },
          {
            src: 'https://www.evolucion.media/wp-content/uploads/2020/11/amigos-ropa-deportiva-hablando-juntos-mientras-estan-pie-gimnasio-despues-entrenamiento_52137-26424.jpg',
          },
          
        ],
          
      }
    },
  }
  
  
</script>