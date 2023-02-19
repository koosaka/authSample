<script setup lang="ts">
const { signOut, token } = useAuth();
</script>

<template>
  <div class="header">
    <div class="button_container">
      <div v-if="token">
        <button class="header_button logout" @click="signOut()">
          ログアウト
        </button>
      </div>
      <div v-else class="flex_gap">
        <NuxtLink :to="`/login`">
          <button class="header_button login">ログイン</button>
        </NuxtLink>
        <NuxtLink :to="`/register`">
          <button class="header_button signup">アカウントの作成</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  padding: 12px 24px;
}

.button_container {
  display: flex;
  justify-content: flex-end;
}

.header_button {
  background-color: inherit;
  padding: 10px 24px 8px;
  cursor: pointer;
  border-radius: 0.4rem;
  border: none;
  font-size: 16px;
}

.flex_gap {
  display: flex;
  gap: 0px 16px;
}

.signup {
  color: white;
  background-color: #ff3b33;
  &:hover {
    background-color: #fd5750;
  }
}

.login {
  color: #fd5750;
  &:hover {
    background-color: white;
  }
}

.logout {
  color: #fd5750;
  &:hover {
    background-color: white;
  }
}
</style>
