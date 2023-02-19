<script setup lang="ts">
import { FirebaseApp } from "@firebase/app";
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

const firebaseApp = useState("firebaseApp");
const { getCurrentUserUid } = useAuth();
const currentUserUid = getCurrentUserUid();
const user = ref({});

onMounted(async () => {
  const db: Firestore = getFirestore(firebaseApp.value as FirebaseApp);
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("uid", "==", currentUserUid));
  // TODO ここをgetDocに書き換える
  const querySnapshot = await getDocs(q);
  user.value = querySnapshot.docs[0].data();
});
</script>

<template>
  <button @click="onClick()">ログ</button>
  <div>ようこそ、{{ user.user_name }}さん！</div>
</template>
