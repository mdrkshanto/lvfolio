export default {
    state: {
        homesData: []
    },
    getters: {
        adminHomeData(state) {
            return state.homesData
        }
    },
    actions: {
        adminHomeData(context) {
            axios.get('api/homesData').then((res) => {
                console.log(res.data.homesData);
                context.commit('adminHomeData', res.data.homesData);
            })
        },
    },
    mutations: {
        adminHomeData(state, payload) {
            return state.homesData = payload
        }
    },
}
