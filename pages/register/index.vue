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
  <div>
    <input type="radio" id="man" v-model="user.gender" :value="0" checked />
    <label for="mab">男性</label>
  </div>

  <div>
    <input type="radio" id="woman" v-model="user.gender" :value="1" />
    <label for="woman">女性</label>
  </div>

  <div>
    <input type="radio" id="other" v-model="user.gender" :value="2" />
    <label for="other">その他</label>
  </div>
  <input type="date" placeholder="誕生日" v-model="user.birthday" />
  <input
    type="text"
    placeholder="プロフィールアイコン"
    v-model="user.profile_icon"
  />
  <input type="password" placeholder="パスワード" v-model="auth.password" />
  <div>
    <a href="https://menherasenpai.notion.site">利用規約</a
    >をご確認頂き、利用規約に同意するボタンをクリックしてください。
  </div>
  <input id="agreement" type="checkbox" v-model="user.is_agreement" />
  <label for="agreement">利用規約に同意する</label>
  <button type="submit" @click="registerUser()">送信</button>
</template>
