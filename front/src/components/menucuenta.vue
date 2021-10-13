<template>
  <v-card>
    
      <v-list color="yellow darken-1">
          <v-list-item
            v-for="item in mcuenta"
            :key="item"
            :to = "item.page"
            >
              <v-list-item-icon>
                <v-icon>{{ item.action}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title >{{item.title}}</v-list-item-title>                
                
              </v-list-item-content>
          </v-list-item> 
        </v-list>
            
  </v-card>
</template>

<script>
export default {
    data: () => ({
    mcuenta: [
            {
            action: 'mdi-ticket',
            items: [{ title: 'WORKGYM' }],
            title: 'Programa de Gym',
            page:'/Entrenadores'
            },
            
            {
            action: 'mdi-school',
            title: 'Entrenador',
            page:'/Entrenadores'
            },
            {
            action: 'mdi-silverware-fork-knife',
            page:'/Entrenadores',
            title: 'Dieta',
            },
            {
            action: 'mdi-bottle-tonic-plus',
            title: 'Salud',
            page:'/Entrenadores'
            },
            
            {
            action: 'mdi-tag',
            title: 'Promociomes',
            page:'/Entrenadores'
            },
        ],
    })
}
</script>

<style>

</style>