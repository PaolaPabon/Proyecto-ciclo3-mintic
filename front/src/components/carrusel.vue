<template>
  <v-carousel>
        <v-carousel-item
        v-for="(item,i) in fotos"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        ></v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    data () {
        return {
        model1: 'tab-2',
        fotos: [
            
            {
                src: 'https://www.evolucion.media/wp-content/uploads/2020/11/amigos-ropa-deportiva-hablando-juntos-mientras-estan-pie-gimnasio-despues-entrenamiento_52137-26424.jpg',
            },
          
        ],
    }
    }

}
</script>

<style>

</style>