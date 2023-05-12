import { ref } from 'vue';
import { d as defineStore } from './server.mjs';

const useType = defineStore("type", () => {
  const type = ref({
    type: ""
  });
  return {
    type
  };
});

export { useType as u };
//# sourceMappingURL=type-ec9b93da.mjs.map
