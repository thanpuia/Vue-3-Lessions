console.log("Hello TP-a")

const app = Vue.createApp({
    data() {
        return{
            url:"www.website.com",
            title:0,
            books:[
                {    title:'book1',author:'author1', isFav: true},
                {    title:'book2',author:'author2', isFav : false}
            ]
        }
    },
    methods: {
        changeTitle(){
            this.title = "WOrds"
        },
        handleEvent() {

        },
        favChange(book){
            book.isFav = !book.isFav
        }
    },

    computed:{

        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount("#app")