<template>
  <v-form>
      <v-card-title>Inicio Mi Cuenta</v-card-title>
      <v-card-text>
            <v-text-field
              v-model="username"
              :rules="rulesUsername"
              label="usuario"
            > </v-text-field>

            <v-text-field
              v-model="password"
              :rules="rulesPassword"
              :type="showPassword ? 'text':'password'"
              label="Constraseña"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            > </v-text-field>
            
            <v-alert border="left" color="red lighten-2" dark v-model="showError">
                {{ error}}
            </v-alert>

        <card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="info" @click="login()">Ingresar</v-btn>
            </v-card-actions>
            
  </v-form>
</template>

<script>
import { validateUser } from "../services/loginservice";
  
  export default {

    data() {
      
      return {
      showPassword:false,
      users:[],
      username: '',
      rulesUsername: [
        (value) => !!value || 'Nombre de usuario es requerido',
        (value) => value && value.length <= 20,
      ],
      password: '',
      rulesPassword:[
        (value)=> !!value|| 'Contraseña  es requerida',
        (value) => value && value.length <= 20, 
               ],
      showError: false,
      error:""
      };
    },

    methods: {
        login() {
        validateUser(this.username, this.password)
          .then((response) => {
            const user = response.data;
            sessionStorage.setItem("username", user.username);
            sessionStorage.setItem("role", user.role);
            this.$emit("login-success", this.username);
            this.$router.push({path:'/Cuenta'});
          })
          .catch((err) => {
            this.showError = true;
            this.error = err.response.data.message;
            setInterval(() => {
              this.showError = false;
            }, 3000);
          });
      },

    },
  }
</script>

<style>

</style>