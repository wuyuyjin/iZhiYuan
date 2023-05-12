import { ref } from "vue";
import { d as defineStore } from "../server.mjs";
const useSquareStore = defineStore("squareStore", () => {
  const squareStore = ref(
    [{
      beginTime: null,
      belongingAdimit: "",
      id: "",
      lateTime: null,
      location: "",
      maxpeople: "",
      name: "",
      time: ""
    }]
  );
  const action = ref({
    actionId: ""
  });
  const Boolean = ref();
  return {
    squareStore,
    action,
    Boolean
  };
});
export {
  useSquareStore as u
};
//# sourceMappingURL=squareStore-e7227acb.js.map
