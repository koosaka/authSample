<script setup lang="ts">
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { AuthProperty } from "../../composables/useAuth";
import FormInput from "../../src/components/molucules/formInput.vue";
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
      <button type="submit" @click="submit()">ログイン</button>
      <div>
        アカウントをお持ちでない方は<NuxtLink to="/register">こちら</NuxtLink
        >から
      </div>
    </div>
  </div>
</template>
