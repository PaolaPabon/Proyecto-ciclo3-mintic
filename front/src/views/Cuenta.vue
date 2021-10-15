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
             <v-img
                    src=
                     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWd2Er6aGk46GpGePsuN9SgkYasGWZfc0L2jtrg4dSenLmtdD7kcWxTKaG0qp1osENax4&usqp=CAU'
                        
                        height="200"
                        width="200"
                    ></v-img>

            <div>{{email}}</div>
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
                <v-col cols="12"
                >
                  <v-card id="name">
                    <v-subheader class="amber--text"><div class="text-h3"> BIENVENID@! </div></v-subheader>
                     
                    <v-list two-line>
                      <template  >
                        <v-list-item >
                            <v-list-item-content>
                            <v-list-item-title class="text-h3" >{{username}}</v-list-item-title>
                         
                          </v-list-item-content>
                        </v-list-item>

                        <v-divider></v-divider>
                      </template>
                    </v-list>
                  </v-card>
                    <v-card id="plans">
                    <v-subheader class="orange--text"><div class="text-h5"> Tu programa es: </div></v-subheader>
                     
                    <v-list two-line>
                      <template  >
                        <v-list-item >
                            <v-list-item-content>
                            <v-list-item-title>{{plan}}</v-list-item-title>

                          </v-list-item-content>
                        </v-list-item>

                        <v-divider></v-divider>
                      </template>
                    </v-list>
                  </v-card>
                  <v-card id="entrenar">
                   <v-subheader class="orange--text"><div class="text-h5"> Entrenador designado: </div></v-subheader>
                     
                    <v-list two-line>
                      <template  >
                        <v-list-item >
                            <v-list-item-content>
                                                                                   
                            <v-list-item-title>{{ asesor }}</v-list-item-title>
                               
                          </v-list-item-content>
                        </v-list-item>

                        <v-divider></v-divider>
                      </template>
                    </v-list>
                  </v-card>
                  <v-card id="horas">
                    <v-subheader class="orange--text"><div class="text-h5"> Horario semanal: </div></v-subheader>
                     
                    <v-list two-line>
                      <template  >
                        <v-list-item >
                            <v-list-item-content>                            
                            <v-list-item-title>{{ horario }}</v-list-item-title>
   
                          </v-list-item-content>
                        </v-list-item>

                        <v-divider></v-divider>
                      </template>
                    </v-list>
                  </v-card>
                  <v-card id="planentreno">
                    
                    <v-subheader class="orange--text"><div class="text-h5"> Plan de entrenamiento</div></v-subheader>
                     
                    <v-list two-line>
                      <template  >
                        <v-list-item >
                            <v-list-item-content>                            
                            
                            <v-list-item-title>{{ entrenamiento }}</v-list-item-title>
                            <v-img src="https://i.pinimg.com/originals/09/42/55/0942555f75fc9ec33c3b5231e587b0e9.jpg"
                                height="500"
                                width="40"
                                dark>
                                
                                </v-img>

                          </v-list-item-content>
                        </v-list-item>

                        <v-divider></v-divider>
                      </template>
                    </v-list>
                  </v-card>
                  <v-card id="plandieta">
                    <v-subheader class="orange--text"><div class="text-h5"> Dieta semanal </div></v-subheader>
                     
                    <v-list two-line>
                      <template  >
                        <v-list-item >
                            <v-list-item-content>                            

                            <v-list-item-title>{{dieta}} </v-list-item-title>
                            
                              
                                <v-img src="https://image.slidesharecdn.com/menusemanalparaadelgazarpdf-180624154550/95/menu-semanal-para-adelgazar-pdf-1-638.jpg?cb=1529855536"
                                height="500"
                                width="40"
                                dark>
                                
                                </v-img>
                              

                          </v-list-item-content>
                        </v-list-item>

                        <v-divider></v-divider>
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
      
      code:"",
      username:"",
      email:"",
      password:"",
      plan:"",
      asesor:"",
      horario:"",
      entrenamiento:"",
      dieta:"",
      pdieta:[
        {d:"saludable",img:"https://info.mercadona.es/img-cont/es/-imagen-batch-cooking-1.jpg"},
        {d:"fitness",img:"https://www.alimmenta.com/wp-content/uploads/2019/11/Men%C3%BA-dina-4-imprimir-1024x724.png"},
        {d:"vegetarina",img:"https://comedelahuerta.com/wp-content/uploads/2020/10/Menu-semanal-ecologico-de-noviembre.jpg"},

      ]
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
          this.dieta = cliente.dieta;
         

        })
        .catch(() => this.openErrorDialog("Datos no encontrados"));
    }
  },
  }
</script>
