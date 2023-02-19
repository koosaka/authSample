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
const user = reactive({});

const onClick = async () => {
  const db: Firestore = getFirestore(firebaseApp.value as FirebaseApp);

  console.log(getCurrentUserUid());
  const q = query(collection(db, "users"));
  const querySnapshot = await getDocs(q);
  const users = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    console.log(data);
  });
};
</script>

<template>
  <button @click="onClick()">ログ</button>
  <div>ようこそ！</div>
</template>
