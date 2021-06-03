const app = new Vue({
    el: "#app",
    data: {
        name: "deep sangani"
    }
})

const app2 = new Vue({
    el: "#app2",
    data: {
        msg: `you hit on ${new Date().toISOString()}`
    }
})

const app3 = new Vue({
    el: "#app3",
    data: {
        toggle: true
    },
    methods: {
        handleclick () {
            this.toggle = !this.toggle
        }
    }
})
const app4 = new Vue({
    el: "#app4",
    data: {
        todos: [
            { text: "take test drive of bmw" },
            { text: "take test drive of audi" }
        ]
    }
})

const app5 = new Vue({
    el: "#app5",
    data: {
        dataitem: ''
    }
})
Vue.component('todo-item', {
    props: ['item'],
    template: '<ui>{{ item }}</ui>'
})
const app6 = new Vue({
    el: "#app6",
    data: {
        item: "deep"
    }
})

