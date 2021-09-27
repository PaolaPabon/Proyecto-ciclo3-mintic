<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-img
          max-height="50"
          max-width="50"
          src="../assets/LogoOficial.png"
        ></v-img>
        

        <v-btn
          v-for="link in links"
          :key="link"
          text
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="250">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'INICIO',
        'SOMOS',
        'RESERVAS',
        'CONTACTO',
        'MI CUENTA',
      ],
    }),
  }
</script>