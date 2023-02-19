<script setup lang="ts">
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const { signUp } = useAuth();

const user = reactive({
  name: "",
  email: "",
  password: "",
});

const submit = async () => {
  signUp(user.email, user.password);
};
</script>

<template>
  <div>ここが登録ページ</div>
  <input type="text" placeholder="ユーザネーム" v-model="user.name" />
  <input type="email" placeholder="メールアドレス" v-model="user.email" />
  <input type="password" placeholder="パスワード" v-model="user.password" />
  <button type="submit" @click="submit()">送信</button>
</template>
