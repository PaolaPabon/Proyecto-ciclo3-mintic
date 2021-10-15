<template>
  <v-card>
    
      <v-list>
      <v-list-item-group
                v-model="selectedItem"
                color="primary"
                >
                <v-list-item
                    v-for="item in items"
                    :key="item"
                    :to= "item.page"
                >
                    <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
        </v-list-item-group>
    </v-list>
            
  </v-card>
</template>

<script>
export default {
    data: () => ({
   items: [
        {
        text: 'Inicio', 
        icon: 'mdi-folder', 
        page:'/Nosotros',
        roles:[] },
        { 
        text: 'Servicios', 
        icon: 'mdi-star', 
        page:'/Programas',
        roles:[] },
        
        { 
        text: 'Cerrar mi cuenta', 
        icon: 'mdi-check-circle', 
        page:'/Programas',
        roles:[] },    
      ],
      
    }),
}
</script>

<style>

</style>