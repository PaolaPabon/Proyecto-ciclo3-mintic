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
  
  </v-container>
  
</template>

<script>
  export default {
    data () {
      return {
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