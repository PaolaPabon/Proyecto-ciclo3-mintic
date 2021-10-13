<template>
  <v-card id="entrenadores"
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
      height="200"
      src="https://www.precor.com/es-xl/blog/wp-content/uploads/sites/6/2017/02/Precor_In-Club_DPL-DSL-Coach_C1_1311-600x400.jpg"
    ></v-img>

    <v-card-title>{{entrenador.name}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        Recomendado
      </div>

      <div><p>Prfesion:</p>{{entrenador.profesion}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Horario</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>6:30AM</v-chip>

        <v-chip>8:0AM</v-chip>

        <v-chip>7:00PM</v-chip>

        <v-chip>8:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reservar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>



export default {
    data: () => ({
      entrenadors:[],
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
   
  
     
  }
   
</script>

<style>

</style>