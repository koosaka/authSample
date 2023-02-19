<script setup lang="ts">
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { AuthProperty } from "../../composables/useAuth";
import FormInput from "../../src/components/molucules/formInput.vue";
import Button from "../../src/components/atom/button.vue";

import "~/assets/scss/form.scss";

const { signIn } = useAuth();

const auth: AuthProperty = reactive({
  email: "",
  password: "",
});

const submit = async () => {
  signIn(auth.email, auth.password);
};
</script>

<template>
  <div class="form_container">
    <div class="form">
      <div class="form_title">ログイン</div>
      <FormInput
        :id="'email'"
        :label="'メールアドレス'"
        :type="'email'"
        :model-value="auth.email"
        @changeEvent="auth.email = $event"
      />
      <FormInput
        :id="'password'"
        :label="'パスワード'"
        :type="'password'"
        :model-value="auth.password"
        @changeEvent="auth.password = $event"
      />
      <Button class="margin_top_24" :text="'ログイン'" @click="submit" />
      <div>
        アカウントをお持ちでない方は<NuxtLink to="/register" class="link"
          >こちら</NuxtLink
        >から
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.margin_top_24 {
  margin-top: 24px;
}
</style>
