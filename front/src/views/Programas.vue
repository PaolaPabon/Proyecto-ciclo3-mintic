<template>
  <v-container>
      <v-container>
        <v-card>
        <v-card-text class="text-h3 text--amarillo oscuro-3">Programas</v-card-text>
        </v-card>
        <v-row>
            <v-col v-for="programa in programs" :key="programa.id" md="4" xs="12">
                <v-card
                class="mx-auto"
                max-width="400"
                >
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    :src='programa.imagen'
                    >
                    <v-card-title>{{programa.title}}</v-card-title>
                    </v-img>
                
                    <v-card-text class="text--primary">
                    <div>{{programa.d}}</div>

                    
                    </v-card-text>
                    <v-card-text class="pb-0">{{programa.pago}}
                    
                    </v-card-text>

                    <v-card-actions>
                    <v-btn
                        color="orange"
                        text
                    >
                        Inscribirme
                    </v-btn>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-card>
        <v-card-text class="text-h3 text--amarillo oscuro-3">Programas Complementarios</v-card-text>
        </v-card>
        <v-row>
            <v-col v-for="programa in programspecial" :key="programa.id" md="4" xs="12">
                <v-card
                class="mx-auto"
                max-width="400"
                >
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    :src='programa.imagen'
                    >
                    <v-card-title>{{programa.title}}</v-card-title>
                    </v-img>
                
                    <v-card-text class="text--primary">
                    <div>{{programa.d}}</div>

                    
                    </v-card-text>
                    <v-card-text class="pb-0">{{programa.pago}}
                    
                    </v-card-text>

                    <v-card-actions>
                    <v-btn
                        color="orange"
                        text
                    >
                        Inscribirme
                    </v-btn>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
        <v-container>
            
            <v-card-text class="text-h3 text--amarillo oscuro-3">Novedades</v-card-text>
            
            <v-row>
                <v-col v-for="programa in Novedades" :key="programa.id" md="6" xs="12">
                    <v-card
                    class="mx-auto"
                    max-width="400"
                    >
                        <v-img
                        class="white--text align-end"
                        height="200px"
                        :src='programa.imagen'
                        >
                        <v-card-title>{{programa.title}}</v-card-title>
                        </v-img>
                    
                        <v-card-text class="text--primary">
                        <div>{{programa.d}}</div>

                        
                        </v-card-text>
                        <v-card-text class="pb-0">{{programa.pago}}
                        
                        </v-card-text>
                       
                    </v-card>
                </v-col>
            </v-row>
      </v-container>
  </v-container>
  
</template>

<script>

export default {
    data () {
        return{
        programspecial: [
            {
            id:'1',
            imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPoydgLyLy4O-9qlL2N-sv-fVZTrn_toOug&usqp=CAU',
            title: 'SaludGYM',
            d: 'lalalalla',
            pago:'Mensual = $ 79.999',
            },
            {
            id:'2',
            imagen:'https://images.clarin.com/2016/10/09/H1z5D5nKVg_600x338.jpg',
            title: 'NutriciónGYM',
            d: 'lalalalla',
            pago:'Mensual = $ 39.999'
            },
            {
            id:'3',
            imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYU-_MmWQ2FvIypbSZThTlSilgu3vf07Seb9aYlnP1mcVeNbe0DNmkl4CcV65Nx8xJQWk&usqp=CAU',
            title: 'CoachGYM',
            d: 'lalalalla',
            pago:'Mensual = $ 29.999'
            }
            ],
        programs: [
            {
            id:'1',
            imagen:'https://actualidades.org/wp-content/uploads/2016/06/Gym.jpg',
            title: 'WorkGYM',
            d: 'lalalalla',
            pago:'Mensual = $ 69.999',
            },
            {
            id:'2',
            imagen:'https://images.squarespace-cdn.com/content/v1/5846d83af5e231d83261c3d5/1578651198499-M4S7VSXR90CAL4DXPVEG/kids+fitness+osprey.jpg?format=1500w',
            title: 'ChildrenGYM',
            d: 'lalalalla',
            pago:'Mensual = $ 49.999'
            },
            {
            id:'3',
            imagen:'https://elcomercio.pe/resizer/_PyAl5B5N1YRPf--LazleXUVuko=/560x315/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/7QOV5R3MYFE43MOVS4RHVR5A7U.jpg',
            title: 'GoldenAgeGYM',
            d: 'lalalalla',
            pago:'Mensual = $ 59.999'
            }
            ],
        Novedades: [
            {
            id:'1',
            title: 'Promociones',
            d: 'lalalalla',
            pago:'Mensual = $ 69.999',
            imagen:'http://clubdeportivogympro.com.co/wp-content/uploads/2017/03/formulario.jpg',
            },
            
            {
            id:'3',
            title: 'Noticias',
            d: 'lalalalla',
            pago:'Autor: xxx',
            imagen:'https://picsum.photos/500/300?image',
            }
            ],
         
         }
    }
}
</script>

<style>

</style>