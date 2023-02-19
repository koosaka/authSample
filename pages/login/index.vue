<script setup lang="ts">
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const { signIn } = useAuth();

const user = reactive({
  email: "",
  password: "",
});

const submit = async () => {
  signIn(user.email, user.password);
};
</script>

<template>
  <div>ここがログインページ</div>
  <input type="email" placeholder="メールアドレス" v-model="user.email" />
  <input type="password" placeholder="パスワード" v-model="user.password" />
  <button type="submit" @click="submit()">ログイン</button>
</template>
