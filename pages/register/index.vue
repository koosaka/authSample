<script setup lang="ts">
import { AuthProperty, UserProperty } from "~~/composables/useAuth";
import FormInput from "../../src/components/molucules/formInput.vue";
import Button from "../../src/components/atom/button.vue";
import "~/assets/scss/form.scss";

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

const imageToBase64 = (event: any) => {
  const reader = new FileReader();

  // 選択されたファイルの取得
  const file = event.target.files[0];

  // ファイルが選択されていればBase64に変換する
  if (file) {
    reader.readAsDataURL(file);
  } else {
    user.profile_icon = "";
  }

  // 変換が終わったら実行される
  reader.onload = () => {
    if (typeof reader.result === "string") {
      user.profile_icon = reader.result;
    }
  };
};

const registerUser = async () => {
  signUp(auth, user);
};
</script>

<template>
  <div class="form_container">
    <div class="form">
      <div class="form_title">アカウントの作成</div>
      <FormInput
        :id="'username'"
        :label="'ユーザネーム'"
        :type="'text'"
        :model-value="user.user_name"
        @changeEvent="user.user_name = $event"
      />
      <FormInput
        :id="'email'"
        :label="'メールアドレス'"
        :type="'email'"
        :model-value="auth.email"
        @changeEvent="auth.email = $event"
      />
      <div>
        <label>性別</label>
        <div class="flex_spacebetween">
          <div class="flex">
            <input
              type="radio"
              id="man"
              v-model="user.gender"
              :value="0"
              checked
            />
            <label for="mab">男性</label>
          </div>

          <div class="flex">
            <input type="radio" id="woman" v-model="user.gender" :value="1" />
            <label for="woman">女性</label>
          </div>

          <div class="flex">
            <input type="radio" id="other" v-model="user.gender" :value="2" />
            <label for="other">その他</label>
          </div>
        </div>
      </div>
      <FormInput
        :id="'birthday'"
        :label="'生年月日'"
        :type="'date'"
        :model-value="user.birthday"
        @changeEvent="user.birthday = $event"
      />
      <div>
        <input class="input" type="file" @change="imageToBase64" />
        <img :src="user.profile_icon" />
      </div>
      <FormInput
        :id="'password'"
        :label="'パスワード'"
        :type="'password'"
        :model-value="auth.password"
        @changeEvent="auth.password = $event"
      />
      <div>
        <NuxtLink to="https://menherasenpai.notion.site" class="link"
          >利用規約</NuxtLink
        >をご確認頂き、利用規約に同意するボタンをクリックしてください。
      </div>
      <div class="flex">
        <input id="agreement" type="checkbox" v-model="user.is_agreement" />
        <label for="agreement">利用規約に同意する</label>
      </div>
      <Button :text="'アカウントを作成する'" @click="registerUser" />
      <div>
        アカウントを既にお持ちの方は<NuxtLink to="/login" class="link"
          >こちら</NuxtLink
        >から
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// MEMO 以下2つのスタイルはラジオボタン用
.flex_spacebetween {
  display: flex;
  gap: 0px 36px;
}

.flex {
  display: flex;
  gap: 0px 4px;
}
</style>
