<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      app>
      <v-card
      class="mx-auto"
      width="300"
      >
          <v-list>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>

              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-group
              :value="true"
              prepend-icon="mdi-account-circle"
            >
              <template v-slot:activator>
                <v-list-item-title>Users</v-list-item-title>
              </template>

              <v-list-group
                :value="true"
                no-action
                sub-group
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Admin</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                  v-for="([title, icon], i) in admins"
                  :key="i"
                  link
                >
                  <v-list-item-title v-text="title"></v-list-item-title>

                  <v-list-item-icon>
                    <v-icon v-text="icon"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>

              <v-list-group
                no-action
                sub-group
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Actions</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                  v-for="([title, icon], i) in cruds"
                  :key="i"
                  link
                >
                  <v-list-item-title v-text="title"></v-list-item-title>

                  <v-list-item-icon>
                    <v-icon v-text="icon"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>
            </v-list-group>
          </v-list>
    </v-card>
      
    </v-navigation-drawer>

    <v-app-bar 
        color="#42424"
        dark
        shrink-on-scroll
        elevate-on-scroll
        src="https://www.zuana.com/sites/default/files/imagenes/servicios/Zu-Gimnasio-banner.jpg"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(50,20,21,.7), rgba(25,32,72,.7)">
          </v-img>
        </template>  
        
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>                
        
        
        <v-app-bar-title> 
          <v-img src="require('./assets/logos/logotipo.png)" alt="logotipo"></v-img>
          <h2>{{title}}</h2>
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

      <v-menu
        bottom
        left
        >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="yellow"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-account-box-multiple</v-icon>
          </v-btn>
        </template>
        <v-card
              class="mx-auto"
              max-width="500"
            >
              <v-toolbar
                color="teal"
                dark
              >
                <v-toolbar-title>Mi cuenta</v-toolbar-title>
              </v-toolbar>

              <v-list>
                <v-list-group
                  v-for="item in items"
                  :key="item.title"
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
      </v-menu>

      <template v-slot:extension>
        <v-tabs
          v-model="model"
          centered
          slider-color="yellow"
        >
          <v-tab
            v-for="item in menuvertical"
            :key="item.title"
            :to ="item.page"
          >
             {{ item.title }}
          </v-tab>
        </v-tabs>
      </template>
    
    </v-app-bar>
    <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto"
        max-height="600">
        <v-container style="height: 1200px;">
          <v-main>
   
            <v-container fluid>
           <router-view></router-view>
            </v-container>
          </v-main>
        </v-container>
    </v-sheet>
   

    <v-footer
    dark
    padless
    >
      <v-card
        flat
        tile
        class="brown darken-3 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
        <P>Conoce mas de nosotros. ¿Quieres formar parte de la comunidad de ENERGYM? ¡Es muy fácil! Motívate y motiva a los demás entrando en la comunidad tan bonita que hemos formado. ¡Además tiene ventajas!. SIGUENOS EN REDES SOCIALES</P> 
        <P>Envíanos un mensaje a Whatsapp o escríbenos un correo</P>
        <P>312 328 28 28</P>
        <P>atencionalcliente@energym.com.co</P>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>{{title}}</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  
  </v-app>
</template>

<script>
import logotipo from  './assets/logos/logotipo.png'

export default {
 
  data (){
    return {
      logotipo:logotipo,
      title: 'ENERGYM',
      drawer: false,
      admins: [
        ['Administrador', 'mdi-account-multiple-outline'],
        ['Configuración', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
      items: [
        {
          action: 'mdi-ticket',
          items: [{ title: 'List Item' }],
          title: 'Programa de Gym',
        },
        {
          action: 'mdi-silverware-fork-knife',
          active: true,
          items: [
            { title: 'Desayuno' },
            { title: 'Almuerzo' },
            { title: 'Cena' },
          ],
          title: 'Dieta',
        },
        {
          action: 'mdi-school',
          items: [{ title: 'List Item' }],
          title: 'Entrenador',
        },
        {
          action: 'mdi-run',
          items: [{ title: 'List Item' }],
          title: 'Couch',
        },
        {
          action: 'mdi-bottle-tonic-plus',
          items: [{ title: 'List Item' }],
          title: 'Salud',
        },
        
        {
          action: 'mdi-tag',
          items: [{ title: 'List Item' }],
          title: 'Promociomes',
        },
      ],
      menuvertical:[
          { title: 'Nosotros',page:'Nosotros'},
          { title: 'Programas', page:'/Programas' },
          { title: 'Mi cuenta', page:'/Mi Cuenta'},
      ],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      };
    },
  };
</script>
