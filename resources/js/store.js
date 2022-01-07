export default {
    state: {
        homesData: [],
        homeData: [],
        editHomeData:[],
    },
    getters: {
        adminHomeData(state) {
            return state.homesData
        },
        homeData(state) {
            return state.homeData
        },
        editHomeData(state) {
            return state.editHomeData
        },
    },
    actions: {
        adminHomeData(context) {
            axios.get('api/homesData').then((res) => {
                // console.log(res.data.homesData);
                context.commit('adminHomeData', res.data.homesData);
            })
        },
        homeData(context) {
            axios.get('api/homeData').then((res) => {
                // console.log(res.data.homeData);
                context.commit('homeData', res.data.homeData);
            })
        },
        editHomeData(context,payload) {
            axios.get('api/editHomeData'+payload).then((res) => {
                console.log(res.data.editData);
                context.commit('editHomeData', res.data.editData);
            })
        },
    },
    mutations: {
        adminHomeData(state, payload) {
            return state.homesData = payload
        },
        homeData(state, payload) {
            return state.homeData = payload
        },
        editHomeData(state, payload) {
            return state.editHomeData = payload
        },
    },
}
