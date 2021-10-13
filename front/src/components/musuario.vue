<template>
     
        <v-card
            class="mx-auto"
            width="256"
            tile
        >
            
            <v-system-bar></v-system-bar>
            <div>
                <v-card-title>ENERGYM</v-card-title>
            </div>
            
            
            <v-list
                nav
                dense
            >
                <v-list-item-group
                v-model="selectedItem"
                color="primary"
                >
                <v-list-item
                    v-for="item in menucuenta"
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
      selectedItem: 0,
      menucuenta: [
        {
        text: 'Inicio', 
        icon: 'mdi-folder', 
        page:'/Nosotros',
        roles:[] },
        { 
        text: 'Mi Cuenta', 
        icon: 'mdi-account-multiple', 
        page:'/Login', 
        roles:[] },
        { 
        text: 'Servicios', 
        icon: 'mdi-star', 
        page:'/Programas',
        roles:[] },
        {
        text: 'Novedades', 
        icon: 'mdi-history', 
        page:'/Cuenta',
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