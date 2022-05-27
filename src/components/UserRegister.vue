<template>
  <div class="register">
    <v-form class="formRegister" ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="15"
        :rules="nameRules"
        label="Name"
        required
      >
      </v-text-field>
      <v-text-field
        v-model="surname"
        :counter="15"
        :rules="nameRules"
        label="Surname"
        required
      >
      </v-text-field>
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required>
      </v-text-field>
      <v-text-field
        v-model="password"
        :type="show1 ? 'text' : 'password'"
        label="Password"
        required
      >
      </v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Data provided is OK?"
        required
      >
      </v-checkbox>

      <v-btn color="success" class="mr-4" @click="validate"> Register </v-btn>
    </v-form>
  </div>
</template>

<style lang="scss" scoped>
.register {
  display: flex;
  justify-content: center;
}

.formRegister {
  margin-top: 100px;
  flex: 0 0 40%;
}
</style>
