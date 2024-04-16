import { defineStore } from "pinia";

export const useLeftMenuStore = defineStore({
  id: "leftMenu",
  state: () => ({
    leftMenu: localStorage.getItem("leftMenu") ? "true" == localStorage.getItem("leftMenu") : false,
  }),
  actions: {
    setLeftMenu(leftMenu) {
      this.leftMenu = leftMenu;
      localStorage.setItem("leftMenu", leftMenu);
    },
  },
});
