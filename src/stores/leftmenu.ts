import LeftMenu from "@/components/LeftMenu.vue";
import { defineStore } from "pinia";

export const useLeftMenuStore = defineStore({
  id: "leftMenu",
  state: () => ({
    // default closed
    leftMenu: false,
  }),
  actions: {
    setLeftMenu(leftMenu) {
      this.leftMenu = leftMenu;
      localStorage.setItem("leftMenu", leftMenu);
    },
  },
});
