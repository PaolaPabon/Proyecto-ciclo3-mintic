<template>
  <v-container>
      <v-container>
        <v-card>
        <v-card-text class="text-h3 text--amarillo oscuro-3">Programas</v-card-text>
        </v-card>
        <v-row>
            
            <v-col v-for="programa in programas" :key="programa.code" md="4" xs="12"
            >

                <v-card
                class="mx-auto"
                max-width="400"
                >   
                <v-img
                 src="https://lh3.googleusercontent.com/proxy/GDwatfML1x2WmhFsrY46CgM1tCbNIqE1WoZKGmsQmdFgKoePD0AnyDu1F_r7RKmLawyBMdyDAR_coJS3rBVcIkkvv4922XZszfY76IvAGDNwfS3jq6kBxqoOZMVK7jS0YAhnFsTO6-qn9D3W7w"
                ></v-img>
                    
                <v-card-title>{{programa.Titulo}}</v-card-title>                 
                                   
                <v-card-text class="text--primary">
                    <p>{{programa.Descripción}}</p>
                    </v-card-text>

                    <v-card-text><p class="font-weight-bold">Plan Mensual:</p>{{programa.PlanM}}</v-card-text>
                    <v-card-subtitle><p class="font-weight-bold">Plan Semestral</p>{{programa.PlanS}}</v-card-subtitle>
                    <v-card-subtitle><p class="font-weight-bold">Plan Anual</p>{{programa.PlanA}}</v-card-subtitle>
                                      
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
import {getAllProgramas} from "../services/programasservice";

export default {
    
    data () {
        return{
        programas:[],
        
        imagenes: [
            {
            id:'1601',
            imagen:'https://actualidades.org/wp-content/uploads/2016/06/Gym.jpg',
           
            },
            {
            id:'1602',
            imagen:'https://images.squarespace-cdn.com/content/v1/5846d83af5e231d83261c3d5/1578651198499-M4S7VSXR90CAL4DXPVEG/kids+fitness+osprey.jpg?format=1500w',
            },
            {
            id:'1603',
            imagen:'https://elcomercio.pe/resizer/_PyAl5B5N1YRPf--LazleXUVuko=/560x315/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/7QOV5R3MYFE43MOVS4RHVR5A7U.jpg',
            },
            
            {
            id:'1604',
            imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPoydgLyLy4O-9qlL2N-sv-fVZTrn_toOug&usqp=CAU',
            
            },
            {
            id:'1605',
            imagen:'https://images.clarin.com/2016/10/09/H1z5D5nKVg_600x338.jpg',
           
            },
            {
            id:'1606',
            imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYU-_MmWQ2FvIypbSZThTlSilgu3vf07Seb9aYlnP1mcVeNbe0DNmkl4CcV65Nx8xJQWk&usqp=CAU',
            
            }
            ],
        Novedades: [
            {
            id:'1',
            title: 'Promociones',
            d: 'Informacion',
            imagen:'http://clubdeportivogympro.com.co/wp-content/uploads/2017/03/formulario.jpg',
            },
            
            {
            id:'3',
            title: 'Noticias',
            d: 'Informacion',
            pago:'Autor: xxx',
            imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7QRUyYsWtawFHMJE9aURXzVsX5sqhVp0ZIaVw3Nx74-DsOkVb9SWkp2SeJpAdDuP12Sk&usqp=CAU',
            }
            ],
         
         }
    },
    mounted (){
        getAllProgramas()
            .then((response)=> {
                this.programas = response.data;
            })
            .catch ((err) => console.error(err));

    }
}
</script>

<style>

</style>