export default {
    state: {},
    getters: {},
    actions: {
        adminHomeData() {
            axios.get('api/home-data').then((res) => {
                console.log(res)
            })
        },
    },
    mutations: {},
}
