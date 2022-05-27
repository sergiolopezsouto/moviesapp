<template>
  <div class="createpost">
    <v-form class="formCreatepost" ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="title"
        :counter="30"
        :rules="nameRules"
        label="Title"
        required
      >
      </v-text-field>
      <v-text-field
        v-model="name"
        :counter="20"
        :rules="nameRules"
        label="Country"
        required
      >
      </v-text-field>

      <v-file-input
        label="Upload a picture here!"
        filled
        prepend-icon="mdi-camera"
      >
      </v-file-input>

      <v-textarea solo name="input-7-4" label="Write the post here">
      </v-textarea>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Data provided is OK?"
        required
      >
      </v-checkbox>

      <v-btn color="success" class="mr-4" @click="sendPost"> Save Post </v-btn>
      <div v-if="showMessage">{{ message }}</div>
    </v-form>
  </div>
</template>

<script>
export default {
  methods: {
    sendPost() {
      // const post = {
      //     title: this.title,
      //     content: this.content,
      //     date: new Date()
      //     autor: '¡asd'
      //
      // }
      // const response = await fetch('backend', post)
      //  this.showMessage = true
      // if(response.status === 200) {
      //     this.message =  'El post se ha guardado correctamente'
      // } else {
      //     this.message = 'Ha habido algún error al guardar'
      // }
      // setTimeout(()=>{
      //     this.showMessage = false
      // },1000)
    },
  },

  data() {
    return {
      title: "",
      content: "",
      message: "",
      showMessage: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.createpost {
  display: flex;
  justify-content: center;
}

.formCreatepost {
  margin-top: 100px;
  flex: 0 0 40%;
}
</style>
