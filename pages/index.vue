<script setup lang="ts">
import { FirebaseApp } from "@firebase/app";
import { genderMappingsToJapanese } from "../constants/gender";
import {
  Firestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";

definePageMeta({
  middleware: "auth",
});

const { getCurrentUser } = useAuth();
const user = ref({});

onMounted(async () => {
  user.value = await getCurrentUser();
});
</script>

<template>
  <div class="profile_container">
    <div class="profile">
      <div class="profile_title">ようこそ、{{ user.user_name }}さん！</div>
      <div>あなたの登録情報はこちらです。</div>
      <img :src="user.profile_icon" />
      <div>ユーザネーム：{{ user.user_name }}</div>
      <div>性別：{{ genderMappingsToJapanese[user.gender] }}</div>
      <div>誕生日：{{ user.birthday }}</div>
      <div class="profile_title">レビューありがとうございます＾＾</div>
    </div>
  </div>
</template>

<style lang="scss">
.profile_container {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
}

.profile {
  width: 80%;
  max-width: 600px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 5rem;
}

.profile_title {
  font-size: 36px;
}
</style>
