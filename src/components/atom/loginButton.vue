<script setup lang="ts">
const { signOut, token } = useAuth();
</script>

<template>
  <div class="button_container">
    <div v-if="token">
      <button class="button" @click="signOut()">ログアウト</button>
    </div>
    <div v-else class="flex_gap">
      <NuxtLink :to="`/login`">
        <button class="button login">ログイン</button>
      </NuxtLink>
      <NuxtLink :to="`/register`">
        <button class="button signup">アカウントの作成</button>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.button_container {
  display: flex;
  justify-content: flex-end;
}

.button {
  background-color: inherit;
  padding: 10px 24px 8px;
  cursor: pointer;
  border-radius: 0.4rem;
  border: none;
  font-size: 16px;
}

.signup {
  color: white;
  background-color: #ff3b33;
  &:hover {
    background-color: white;
  }
}

.login {
  color: #fd5750;
  &:hover {
    background-color: white;
  }
}

.flex_gap {
  display: flex;
  gap: 0px 16px;
}
</style>
