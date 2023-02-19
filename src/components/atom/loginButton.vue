<script setup lang="ts">
const { signOut, token } = useAuth();
</script>

<template>
  <div>
    <div v-if="token">
      <button @click="signOut()">ログアウト</button>
    </div>
    <div v-else>
      <NuxtLink :to="`/register`">
        <button>サインアップ</button>
      </NuxtLink>
      <NuxtLink :to="`/login`">
        <button>ログイン</button>
      </NuxtLink>
    </div>
  </div>
</template>
