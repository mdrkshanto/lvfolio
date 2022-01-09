export default {
    state: {
        adminHomeData: [],
        homeData: [],
    },
    getters: {
        adminHomeData(state) {
            return state.adminHomeData
        },
        homeData(state) {
            return state.homeData
        },
    },
    actions: {
        adminHomeData(context) {
            axios.get('api/adminHomeData').then((res) => {
                context.commit('adminHomeData', res.data.homesData);
            })
        },
        homeData(context) {
            axios.get('api/homeData').then((res) => {
                context.commit('homeData', res.data.homeData);
            })
        },
    },
    mutations: {
        adminHomeData(state, payload) {
            return state.adminHomeData = payload
        },
        homeData(state, payload) {
            return state.homeData = payload
        },
    },
}
