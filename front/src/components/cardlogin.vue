<template>
  <v-form>
    <v-card-title>Mi Cuenta</v-card-title>
    <v-card-text>
      <v-text-field
        label="Nombre de Usuario"
        prepend-icon="mdi-account"
        :rules="rulesName"
        hide-details="auto"
        v-model="email"
      ></v-text-field>

      <v-text-field
        label="Contraseña"
        prepend-icon="mdi-lock"
        :rules="rulesPassword"
        hide-details="auto"
        v-model="password"
        :type="showPassword ? 'text':'password'"    
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      ></v-text-field>

      <v-alert border="left" color="red lighten-2" dark v-model="showError">
        {{ error }}
      </v-alert>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn id="boton" color="success" v-on:click="login()"
        >Iniciar sesion</v-btn
      >
      <v-btn id="boton" color="primary" v-on:click="inscripcion()"
        >Inscripción</v-btn
      >
    </v-card-actions>
  </v-form>
</template>

<script>
import { validateUser } from "../services/loginservice";

export default {
  data() {
    return {
      showPassword:false,
      email: "",
      password: "",
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      rulesName: [
        (value) => !!value || "Requerido.",
        (value) => value && value.length <= 50,
      ],
      rulesPassword: [
        (value) => !!value || "Requerido.",
        (value) => value && value.length <= 50,
      ],
      showError: false,
      error: "",
    };
  },
  methods: {
    login() {
      validateUser(this.email, this.password)
        .then((response) => {
          const user = response.data;
          sessionStorage.setItem("username", user.username);
          sessionStorage.setItem("role", user.role);
          this.$emit("logged", undefined);
          this.$router.push("/Cuenta/")
          
        })
        .catch((err) => {
          this.showError = true;
          this.error = err.response.data.message;
          setInterval(() => {
            this.showError = false;
          }, 3000);
        });
    },
    inscripcion () {
        this.$router.push("/Inscripcion/")
      },
  },
};
</script>

<style>

</style>