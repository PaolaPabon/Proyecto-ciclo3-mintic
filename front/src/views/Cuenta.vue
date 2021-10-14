<template>
  <v-container>
 <v-app id="inspire">
     
    <v-row>
      <v-col md="3" xs="12">
        <v-list>
          <v-sheet
            color="grey lighten-4"
            class="pa-4"
          >
            <v-avatar
              class="mb-4"
              color="grey darken-1"
              size="64"
            ></v-avatar>

            <div>john@vuetifyjs.com</div>
          </v-sheet>

          <v-divider></v-divider>

          <menucuenta></menucuenta>
        </v-list>
      </v-col>
      <v-col>
      
            <v-container
              class="py-8 px-6"
              fluid
            >
              <v-row>
                <v-col
                  v-for="card in cards"
                  :key="card"
                  cols="12"
                >
                  <v-card>
                    <v-subheader>{{ card }}</v-subheader>

                    <v-list two-line>
                      <template v-for="n in 2">
                        <v-list-item

                          :key="n"
                        >
                          <v-list-item-avatar color="grey darken-1">
                          </v-list-item-avatar>

                          <v-list-item-content>
                            <v-list-item-title>Message {{ n }}</v-list-item-title>

                            <v-list-item-subtitle>
                              
                            </v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>

                        <v-divider
                          v-if="n !== 6"
                          :key="`divider-${n}`"
                          inset
                        ></v-divider>
                      </template>
                    </v-list>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
         
      </v-col>
    </v-row>
      
      
    

    
   </v-app>
</v-container>

</template>

<script>
import {getCliente} from "../services/clientesservice";
import menucuenta from "../components/menucuenta.vue";
  export default {
    components:{
      menucuenta
    },
    data: () => ({
      cards: ['Entrenador', 'Horario', 'Plan de entrenamiento', 'Dieta'],
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down', 'Inbox'],
        ['mdi-send', 'Send'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam'],
      ],
    }),
     
    created() {
    console.log("code: " + this.$route.params.code);
    const code = this.$route.params.code;
    if (code != undefined) {
      getCliente(code)
        .then((response) => {
          const cliente = response.data;
          
          this.code = cliente.code;
          this.username = cliente.username;
          this.email = cliente.email;
          this.password = cliente.password;
          this.plan = cliente.plan;
          this.asesor = cliente.asesor;
          this.horario = cliente.horario;
          this.entrenamiento = cliente.entrenamiento;
          this.dieta = cliente.dieta

        })
        .catch(() => this.openErrorDialog("Datos no encontrados"));
    }
  },
  }
</script>
