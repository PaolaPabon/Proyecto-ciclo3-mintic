<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
        <v-text-field
          v-model="username"
          :counter="10"
          :rules="nameRules"
          label="Nombre de Usuario"
          required
        ></v-text-field>

        <v-text-field
          v-model="code"
          :counter="10"
          :rules="codeRules"
          label="Numero de Identificación"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :counter="10"
          :rules="passwordRules"
          label="Contraseña"
          required
        ></v-text-field>

        <v-select id="plan"
          v-model="plan"
          :items="plans"
          :rules="[v => !!v || 'Item is required']"
          label="Programa"
          required
        ></v-select>

        <v-select id="asesor"
          v-model="asesor"
          :items="asesores"
          :rules="[v => !!v || 'Item is required']"
          label="Entrenador"
          required
        ></v-select>

        <v-select
          v-model="horario"
          :items="horarios"
          :rules="[v => !!v || 'Item is required']"
          label="Horario"
          required
        ></v-select>

        <v-select
          v-model="entrenamiento"
          :items="entrenamientos"
          :rules="[v => !!v || 'Item is required']"
          label="Plan de entrenamiento semanal"
          required
        ></v-select>

        <v-select
          v-model="dieta"
          :items="dietas"
          :rules="[v => !!v || 'Item is required']"
          label="Menu semanal"
          required
        ></v-select>
        
       
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="guardar()"
        >
          Guardar
        </v-btn>

        <v-btn
          color="info"
          class="mr-4"
          @click="login()"
        >
          Iniciar sesión
        </v-btn>
         <msgconfirmacion
          :message="msgconfirmacion"
          :snackbar="successShow"
          :close="closeSuccessDialog"
        ></msgconfirmacion>
        <ErrorMessage
          :message="errorMessage"
          :snackbar="errorShow"
          :close="closeErrorDialog"
        ></ErrorMessage>

        
  </v-form>
</template>

<script>
import { insertCliente } from "../services/clientesservice"
import msgconfirmacion from "../components/msgconfirmacion.vue"
 export default {
   components: {
     msgconfirmacion
   },
    data: () => ({
      valid: true,
      
      code: '',
      username:'',
      email: '',
      password: '',
      plan: '',
      asesor: '',
      horario: '',
      entrenamiento: '',
      dieta: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 50) || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      plans: [
        'WORKGYM',
        'CHILDRENGYM',
        'GOLDENAGEGYM',
      ],
      asesores: [
        'Daniel Garcia',
        'Antonio Muños',
        
        
      ],
      horarios: [
        'Mañana: 6 - 8 am',
        'Tarde: 4 - 6 pm',
        'Noche: 8 - 10 pm',
      ],
      entrenamientos: [
        'Principiante',
        'Intermedio',
        'Avanzado',
      ],
      dietas: [
        'Saludable',
        'Vegetariana',
        'Fitness',
      ],
      msgconfirmacion: "",
      successShow: false,
    }),

    methods: {
      guardar () {
        
        const cliente ={
          code: this.code,
          username: this.username,
          email: this.email,
          password: this.password,
          plan: this.plan,
          asesor: this.asesor,
          horario: this.horario,
          entrenamiento: this.entrenamiento,
          dieta: this.dieta

        };
          insertCliente(cliente)
            .then((response) => 
              this.openSuccessDialog(
                 "Se ha creado el usuario: " + response.data._id
            )
            )
            .catch((err) => {
              console.error(err.response.data.message);
              this.openErrorDialog("Error al guardar informacion");
            });
        
      },
      login () {
        this.$router.push("/Login/")
      }, 
      openSuccessDialog(mensaje) {
      this.msgconfirmacion= mensaje;
      this.successShow = true;
    },
    closeSuccessDialog() {
      this.successShow = false;
      this.$router.push("/login");
    },
    openErrorDialog(mensaje) {
      this.errorMessage = mensaje;
      this.errorShow = true;
    },
    closeErrorDialog() {
      this.errorShow = false;
    },
    },
  }
    
</script>
