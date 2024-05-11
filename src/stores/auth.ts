import { defineStore } from "pinia";
import { router } from "@/router";
import { inject } from "vue";
export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    token: localStorage.getItem("token"),
    user_info: localStorage.getItem("user_info") || {},
  }),
  actions: {
    setToken(token) {
      this.token = token;
      localStorage.setItem("token", token);
    },
    logout() {
      this.token = null;
      localStorage.removeItem("token");
      // router.push("/");
    },
  },
});
