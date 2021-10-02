<template>
  
    <v-app id="inspire">
        <v-system-bar >
        
        </v-system-bar>

        <v-navigation-drawer
        v-model="drawer"
        
        >
        <v-sheet
            color="grey lighten-4"
            class="pa-4"
        >
            <v-avatar     
            class="mb-4"
            color="grey darken-1"
            size="64"
            >
             <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
             </v-avatar>

            <div>john@energym.com</div>
        </v-sheet>

        <v-divider></v-divider>

        <v-list>
                <v-list-group
                  v-for="item in menucuenta"
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
        </v-navigation-drawer>

        <v-main>
        <v-container
            class="py-8 px-6"
            fluid
        >
            <v-row>
                <v-col>
                    <v-card>
                      <v-subheader>Programas de entrenamiento</v-subheader>
                    
                        <v-list two-line>
                            <template v-for="card in cardsprograma">
                                <v-list-item
                                    :key="card.id"
                                >                                
                                <v-icon>mdi-ticket</v-icon>
             
                                                                    
                                    <v-card-text>{{ card.titulo }}</v-card-text>
                                    <v-card-text>{{ card.text }}</v-card-text>
                                </v-list-item>

                                <v-divider
                                    v-if="card !== 3"
                                    :key="`divider-${card}`"
                                    inset
                                ></v-divider>
                                </template>
                            
                        </v-list>
                    </v-card>
                    <v-card>
                    <v-subheader>Dietas</v-subheader>
                    
                        <v-list two-line>
                            <template v-for="card in cardsdieta">
                                <v-list-item
                                    :key="card.id"
                                >                                
                                    <v-icon>mdi-silverware-fork-knife</v-icon>
                                                                    
                                    <v-card-text>{{ card.titulo }}</v-card-text>
                                    <v-card-text>{{ card.text }}</v-card-text>
                                </v-list-item>

                                <v-divider
                                    v-if="card !== 3"
                                    :key="`divider-${card}`"
                                    inset
                                ></v-divider>
                                </template>
                            
                        </v-list>
                    </v-card>
                    <v-card>
                    <v-subheader>Entrenadores</v-subheader>
                    
                        <v-list two-line>
                            <template v-for="card in cardsentrenador">
                                <v-list-item
                                    :key="card.id"
                                >                                
                                    <v-icon>mdi-run </v-icon>
                                                                    
                                    <v-card-text>{{ card.titulo }}</v-card-text>
                                    <v-card-text>{{ card.text }}</v-card-text>
                                </v-list-item>

                                <v-divider
                                    v-if="card !== 3"
                                    :key="`divider-${card}`"
                                    inset
                                ></v-divider>
                                </template>
                            
                        </v-list>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        </v-main>
    </v-app>
  
</template>

<script>
  export default {
    data: () => ({
      cards: [
          'Horarios entrenamiento' ,'dietas',
          ],
    cardsprograma: [
          {id:'1',titulo:'Yoga ',text:'lunes hora:9:30'},
          {id:'2',titulo:'Spining',text:'Martes hora:9:30'},
          {id:'3',titulo:'Pilates',text:'Miercoles hora:9:30'},
          {id:'4',titulo:'Pesas',text:'jueves hora:4.30'},
          ],
    cardsdieta: [
          {id:'1',titulo:'Desayuno',text:'yoga hora:9:30'},
          {id:'2',titulo:'Almuerzo',text:'Carbohidratos'},
          {id:'3',titulo:'Cena',text:'Alexander Ruiz'},
          ],
    cardsentrenador: [
          {id:'1',titulo:'Luis Gomez',text:'Deportologo'},
          {id:'2',titulo:'Sandra Ruiz',text:'Nutricionista'},
          {id:'3',titulo:'Liliana Torres',text:'Coach'},
          {id:'4',titulo:'Paulina Martinez',text:'Deportologa'},
          ],
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down', 'Programas de entrenamiento'],
        ['mdi-send', 'dietas'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam'],
      ],
       menucuenta: [
        {
          action: 'mdi-ticket',
          items: [{ title: 'Horarios' }],
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
    }),
  }
</script>