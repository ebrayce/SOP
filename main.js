const app = Vue.createApp({
    setup () {
        return {}
    }
})

app.use(Quasar)
app.mount('#q-app')
Quasar.Notify.create('Hi and welcome!')