const menuList = [
    {
        id: 1,
        icon: 'home',
        label: 'Home',
        separator: true
    },
    {
        id: 2,
        icon: 'price_change',
        label: 'Finance',
        separator: true
    },
    {
        id: 3,
        icon: 'help',
        label: 'Help',
        separator: true
    },
    {
        id: 4,
        icon: 'settings',
        label: 'Settings',
        separator: true
    },
    {
        id: 5,
        icon: 'privacy_tip',
        label: 'About',
        separator: true
    }
]

window.onload = () => {
    setTimeout(()=>{
        const app = Vue.createApp({
            data() {
                return {
                    menuList,
                    isEditing: false,
                    editedItemId: undefined,
                    isShowingFinanceDialog: false,
                    isShowingAddItemDialog: false,
                    isShowingInfoDialog: false,
                    isShowingLoader: true,
                    counter: 0,
                    fixed: false,
                    drawer: true,
                    items: [],
                    state: 1,
                    formItem: {
                        name:"",
                        price: 0
                    },
                    defaultFormItem: {
                        name:"",
                        price: 0
                    }
                }
            },
            methods:{
                navigateTo(id){
                    this.state = id
                },
                hideLoader(){
                    this.isShowingLoader = false;
                },
                showAddItemDialog(){
                    this.isShowingAddItemDialog = true
                },
                showFinanceDialog(){
                    this.isShowingAddItemDialog = true
                },
                addToItems(){
                    this.isShowingAddItemDialog = false
                    this.formItem.id = Date.now().toString()
                    this.items.push(this.formItem)
                    this.formItem = Object.assign({}, this.defaultFormItem)
                },
                editItemById(itemId){
                    let index = this.getItemIndex(itemId)
                    let i = this.items[index]
                    this.formItem = Object.assign({}, i)
                    this.isEditing = true;
                    this.editedItemId = itemId
                    this.showAddItemDialog()
                },
                removeItemById(){
                    let index = this.getItemIndex(this.editedItemId)
                    if(index >= 0){
                        this.items.splice(index, 1)
                    }
                    console.log(index, this.items.length)
                    this.resetForm()

                },
                getItemIndex(itemId){
                    return this.items.findIndex(i => i.id === itemId)
                },
                resetForm(){
                    this.formItem.name = ""
                    this.formItem.price = 0
                    this.isEditing = false
                    this.editedItemId = undefined
                    this.isShowingAddItemDialog = false
                    this.formItem = Object.assign({}, this.defaultFormItem)
                }
            },
            mounted(){
                this.hideLoader()
            }
        })
        app.use(Quasar, {
            config: {
                brand: { // this will NOT work on IE 11
                    primary: '#F2994B',
                    secondary: '#F2BF80',
                    accent: '#F2DE77',
                    dark: '#2B3240',
                    gray: '#8596A6',
                    // ... or all other brand colors
                },

            }
        })
        app.mount('#q-app')
    }, 2000)

};
