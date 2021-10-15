<template>
  <v-card>
    
      <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        :to= "item.page"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
            
  </v-card>
</template>

<script>
export default {
    data: () => ({
   items: [
        {
          action: 'mdi-tag',
          title: 'Promociones',
          page:'/Servicios'
        },
        {
          action: 'mdi-star',
          title: 'Programas',
          page:'/Servicios'
        },

        {
          action: 'mdi-content-cut',
          title: 'Cerrar cesión',
          page:'/Nosotros',
          
        },
        
      ],
    }),
}
</script>

<style>

</style>