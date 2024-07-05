<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const selectItems = [
  { text: "arima", value: "Arima" },
  { text: "furukawa", value: "Furukawa" },
  { text: "takano", value: "Takano" },
] as const;
const selectedItem = ref("Home");
watch(selectedItem, () => {
  router.push({ name: selectedItem.value });
});
</script>

<template>
  <header>
    <div>
      <label for="page-selector">Whose page</label>
      <select v-model="selectedItem" name="selector" id="page-selector">
        <option value="Home">選択してください</option>
        <option
          v-for="item in selectItems"
          :key="item.value"
          :value="item.value"
        >
          {{ item.text }}
        </option>
      </select>
    </div>
  </header>
  <body>
    <RouterView />
  </body>
</template>

<style scoped>
header {
  width: 100%;
  height: 3rem;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
