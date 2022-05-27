<template>
  <div class="login">
    <v-form class="formLogin" ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="email" label="E-mail" required> </v-text-field>
      <v-text-field
        v-model="password"
        type="password"
        label="Password"
        required
      >
      </v-text-field>

      <v-btn color="success" class="mr-4" @click="validate"> Log In </v-btn>
    </v-form>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: "userLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    validate() {
      console.log(this.email, this.password);
      this.login();
    },
    async login() {
      // const isLogued = await axios.get('/login', { email: this.email, password: this.password })
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
}

.formLogin {
  margin-top: 100px;
  flex: 0 0 40%;
}
</style>
