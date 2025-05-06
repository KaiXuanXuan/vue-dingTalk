<template>
  <div>
    <div class="banner-container banner1">
      <solutionItem v-for="(item, indx) in items.list1" :key="indx" :item="item"></solutionItem>
    </div>
    <div class="banner-container banner2">
      <solutionItem v-for="(item, indx) in items.list2" :key="indx" :item="item"></solutionItem>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import solutionItem from '@/components/solutionItem.vue';

const props = defineProps({
  items: {
    type: Object,
    default: () => {},
  },
});
</script>
<style scoped>
.banner-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
}

.banner1 {
  margin-bottom: 18px;
}

.banner2 {
  margin-bottom: 32px;
}
</style>
