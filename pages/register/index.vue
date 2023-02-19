<script setup lang="ts">
import { AuthProperty, UserProperty } from "~~/composables/useAuth";

const { signUp } = useAuth();

const auth: AuthProperty = reactive({
  email: "",
  password: "",
});

const user: UserProperty = reactive({
  user_name: "",
  birthday: "",
  profile_icon: "",
  gender: 0,
  is_agreement: false,
});

const registerUser = async () => {
  signUp(auth, user);
};
</script>

<template>
  <div>はじめまして、まずはあなたの情報を教えてください。</div>
  <input type="text" placeholder="ユーザネーム" v-model="user.user_name" />
  <input type="email" placeholder="メールアドレス" v-model="auth.email" />
  <input type="text" placeholder="誕生日" v-model="user.birthday" />
  <input
    type="text"
    placeholder="プロフィールアイコン"
    v-model="user.profile_icon"
  />
  <input type="password" placeholder="パスワード" v-model="auth.password" />
  <button type="submit" @click="registerUser()">送信</button>
</template>
