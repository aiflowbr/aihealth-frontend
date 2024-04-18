import { defineStore } from "pinia";

export const useNodesStore = defineStore({
  id: "nodesStore",
  state: () => ({
    nodes: JSON.parse(localStorage.getItem("nodes") || "[]"),
  }),
  actions: {
    setNodes(nodes) {
      this.nodes = nodes;
      localStorage.setItem("nodes", JSON.stringify(nodes));
    },
  },
});
