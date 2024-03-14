import { createStore } from 'vuex'

export default createStore({
    state: {
        computeNodes: null
    },
    mutations: {
        setComputeNodes(state, message) {
            state.computeNodes = message;
        }
    },
    actions: {
        setComputeNodes({ commit }, message) {
            commit('setComputeNodes', message);
        }
    },
    getters: {
        computeNodes(state) {
            return state.computeNodes;
        }
    }
});
