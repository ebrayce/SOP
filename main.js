const menuList = [
    {
        id: 1,
        icon: 'home',
        label: 'Home',
        separator: true
    },
    // {
    //     id: 2,
    //     icon: 'price_change',
    //     label: 'Finance',
    //     separator: true
    // },
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
let currencyList = [{label: "Albania Lek entirley ", value: "ALL"}, {
    label: "Afghanistan Afghani",
    value: "AFN"
}, {label: "Argentina Peso", value: "ARS"}, {label: "Aruba Guilder", value: "AWG"}, {
    label: "Australia Dollar",
    value: "AUD"
}, {label: "Azerbaijan New Manat", value: "AZN"}, {label: "Bahamas Dollar", value: "BSD"}, {
    label: "Barbados Dollar",
    value: "BBD"
}, {label: "Bangladeshi taka", value: "BDT"}, {label: "Belarus Ruble", value: "BYR"}, {
    label: "Belize Dollar",
    value: "BZD"
}, {label: "Bermuda Dollar", value: "BMD"}, {
    label: "Bolivia Boliviano",
    value: "BOB"
}, {label: "Bosnia and Herzegovina Convertible Marka", value: "BAM"}, {
    label: "Botswana Pula",
    value: "BWP"
}, {label: "Bulgaria Lev", value: "BGN"}, {label: "Brazil Real", value: "BRL"}, {
    label: "Brunei Darussalam Dollar",
    value: "BND"
}, {label: "Cambodia Riel", value: "KHR"}, {label: "Canada Dollar", value: "CAD"}, {
    label: "Cayman Islands Dollar",
    value: "KYD"
}, {label: "Chile Peso", value: "CLP"}, {label: "China Yuan Renminbi", value: "CNY"}, {
    label: "Colombia Peso",
    value: "COP"
}, {label: "Costa Rica Colon", value: "CRC"}, {label: "Croatia Kuna", value: "HRK"}, {
    label: "Cuba Peso",
    value: "CUP"
}, {label: "Czech Republic Koruna", value: "CZK"}, {
    label: "Denmark Krone",
    value: "DKK"
}, {label: "Dominican Republic Peso", value: "DOP"}, {
    label: "East Caribbean Dollar",
    value: "XCD"
}, {label: "Egypt Pound", value: "EGP"}, {label: "El Salvador Colon", value: "SVC"}, {
    label: "Euro Member Countries",
    value: "EUR"
}, {label: "Falkland Islands (Malvinas) Pound", value: "FKP"}, {
    label: "Fiji Dollar",
    value: "FJD"
}, {label: "Ghana Cedis", value: "GHC"}, {label: "Gibraltar Pound", value: "GIP"}, {
    label: "Guatemala Quetzal",
    value: "GTQ"
}, {label: "Guernsey Pound", value: "GGP"}, {label: "Guyana Dollar", value: "GYD"}, {
    label: "Honduras Lempira",
    value: "HNL"
}, {label: "Hong Kong Dollar", value: "HKD"}, {label: "Hungary Forint", value: "HUF"}, {
    label: "Iceland Krona",
    value: "ISK"
}, {label: "India Rupee", value: "INR"}, {label: "Indonesia Rupiah", value: "IDR"}, {
    label: "Iran Rial",
    value: "IRR"
}, {label: "Isle of Man Pound", value: "IMP"}, {label: "Israel Shekel", value: "ILS"}, {
    label: "Jamaica Dollar",
    value: "JMD"
}, {label: "Japan Yen", value: "JPY"}, {label: "Jersey Pound", value: "JEP"}, {
    label: "Kazakhstan Tenge",
    value: "KZT"
}, {label: "Korea (North) Won", value: "KPW"}, {label: "Korea (South) Won", value: "KRW"}, {
    label: "Kyrgyzstan Som",
    value: "KGS"
}, {label: "Laos Kip", value: "LAK"}, {label: "Lebanon Pound", value: "LBP"}, {
    label: "Liberia Dollar",
    value: "LRD"
}, {label: "Macedonia Denar", value: "MKD"}, {label: "Malaysia Ringgit", value: "MYR"}, {
    label: "Mauritius Rupee",
    value: "MUR"
}, {label: "Mexico Peso", value: "MXN"}, {label: "Mongolia Tughrik", value: "MNT"}, {
    label: "Mozambique Metical",
    value: "MZN"
}, {label: "Namibia Dollar", value: "NAD"}, {
    label: "Nepal Rupee",
    value: "NPR"
}, {label: "Netherlands Antilles Guilder", value: "ANG"}, {
    label: "New Zealand Dollar",
    value: "NZD"
}, {label: "Nicaragua Cordoba", value: "NIO"}, {label: "Nigeria Naira", value: "NGN"}, {
    label: "Norway Krone",
    value: "NOK"
}, {label: "Oman Rial", value: "OMR"}, {label: "Pakistan Rupee", value: "PKR"}, {
    label: "Panama Balboa",
    value: "PAB"
}, {label: "Paraguay Guarani", value: "PYG"}, {label: "Peru Nuevo Sol", value: "PEN"}, {
    label: "Philippines Peso",
    value: "PHP"
}, {label: "Poland Zloty", value: "PLN"}, {label: "Qatar Riyal", value: "QAR"}, {
    label: "Romania New Leu",
    value: "RON"
}, {label: "Russia Ruble", value: "RUB"}, {label: "Saint Helena Pound", value: "SHP"}, {
    label: "Saudi Arabia Riyal",
    value: "SAR"
}, {label: "Serbia Dinar", value: "RSD"}, {label: "Seychelles Rupee", value: "SCR"}, {
    label: "Singapore Dollar",
    value: "SGD"
}, {label: "Solomon Islands Dollar", value: "SBD"}, {
    label: "Somalia Shilling",
    value: "SOS"
}, {label: "South Africa Rand", value: "ZAR"}, {label: "Sri Lanka Rupee", value: "LKR"}, {
    label: "Sweden Krona",
    value: "SEK"
}, {label: "Switzerland Franc", value: "CHF"}, {label: "Suriname Dollar", value: "SRD"}, {
    label: "Syria Pound",
    value: "SYP"
}, {label: "Taiwan New Dollar", value: "TWD"}, {
    label: "Thailand Baht",
    value: "THB"
}, {label: "Trinidad and Tobago Dollar", value: "TTD"}, {label: "Turkey Lira", value: "TRY"}, {
    label: "Turkey Lira",
    value: "TRL"
}, {label: "Tuvalu Dollar", value: "TVD"}, {label: "Ukraine Hryvna", value: "UAH"}, {
    label: "United Kingdom Pound",
    value: "GBP"
}, {label: "Uganda Shilling", value: "UGX"}, {label: "United States Dollar", value: "USD"}, {
    label: "Uruguay Peso",
    value: "UYU"
}, {label: "Uzbekistan Som", value: "UZS"}, {label: "Venezuela Bolivar", value: "VEF"}, {
    label: "Viet Nam Dong",
    value: "VND"
}, {label: "Yemen Rial", value: "YER"}, {label: "Zimbabwe Dollar", value: "ZWD"}]

window.onload = () => {
    setTimeout(()=>{
        const app = Vue.createApp({
            data() {
                return {
                    menuList,
                    currencyList,
                    images:[
                        'https://res.cloudinary.com/ebrayce/image/upload/v1628870060/Screenshot_08-13-2021_15.54.06_oymrwn.png'
                    ],
                    me: {
                        avatar: "https://res.cloudinary.com/ebrayce/image/upload/v1609853242/134120747_865218274279882_770505659412948779_o.jpg_bgahnf.jpg",
                        selectedCurrency: "USD",
                        name: "Ernest Brayce",
                        username: "ebrayce",
                        disposableIncome: 100,
                        autoSaveToBrowser: false
                    },
                    isEditing: false,
                    isShowingLoader: true,
                    editedItemId: undefined,
                    isShowingImageDialog: false,
                    isShowingFinanceDialog: false,
                    isShowingEditDataDialog: false,
                    isShowingAddItemDialog: false,
                    isShowingInfoDialog: false,
                    isDataInBrowser: false,
                    counter: 0,
                    fixed: false,
                    drawer: true,
                    items: [],
                    state: 1,
                    editData: "",
                    imageUrl: "",
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
                    this.drawer = false
                },
                showImage(img){
                    this.imageUrl = img
                    this.isShowingImageDialog = true;
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
                    if (this.isEditing){
                        let index = this.getItemIndex(this.formItem.id)
                        this.items.splice(index,1, Object.assign({},this.formItem))
                    }else {
                        this.formItem.id = Date.now().toString()
                        this.items.push(Object.assign({}, this.formItem))
                    }
                    this.resetForm()
                    this.autoSaveNow()
                    this.navigateTo(1)
                },
                editItemById: function (itemId) {
                    let index = this.getItemIndex(itemId)
                    const i = this.items[index];
                    this.formItem = Object.assign({}, i)
                    this.isEditing = true;
                    this.editedItemId = itemId
                    this.showAddItemDialog()
                },
                removeItemById(){
                    let index = this.getItemIndex(this.editedItemId)
                    if(index >= 0){
                        this.items.splice(index, 1)
                        this.autoSaveNow()
                    }
                    this.resetForm()

                },
                getItemIndex(itemId){
                    return this.items.findIndex(i => i.id === itemId)
                },
                moveUp(itemId){
                    //    find the index
                    let index = this.getItemIndex(itemId)
                    if (index === 0){
                        return
                    }
                    //    swap with the one above
                    let temp = Object.assign({}, this.items[index])
                    this.items[index] = Object.assign({}, this.items[index - 1])
                    this.items[index - 1] = Object.assign({}, temp)
                    this.autoSaveNow()
                },
                moveDown(itemId){
                    //    find the index
                    let index = this.getItemIndex(itemId)
                    if (index === this.items.length - 1){
                        return
                    }
                    //    swap with the one above
                    let temp = Object.assign({}, this.items[index])
                    this.items[index] = Object.assign({}, this.items[index + 1])
                    this.items[index + 1] = Object.assign({}, temp)
                    this.autoSaveNow()
                },
                showFinance(){
                    this.isShowingFinanceDialog = true
                },
                filterFn (val, update) {
                    update(() => {
                        const needle = val.toLocaleLowerCase()
                        this.currencyList = currencyList.filter(v => v.label.toLocaleLowerCase().indexOf(needle) > -1 || v.value.toLocaleLowerCase().indexOf(needle) > -1)
                    })
                },
                resetForm(){
                    this.formItem.name = ""
                    this.formItem.price = 0
                    this.isEditing = false
                    this.editedItemId = undefined
                    this.isShowingAddItemDialog = false
                    this.formItem = Object.assign({}, this.defaultFormItem)
                },
                saveToBrowser(){
                    let data = {}
                    data.me = Object.assign({}, this.me)
                    data.items = this.items
                    try{
                        localStorage.setItem("myData", JSON.stringify(data))
                        this.isDataInBrowser = true;
                        this.$q.notify({message:'Data Saved successfully',color: 'primary'})
                    }catch (e) {
                        this.me.autoSaveToBrowser = false;
                        this.$q.notify({message:'Oops An error Occurred',color: 'red'})
                    }
                },
                loadDataFromBrowser(){
                   return  JSON.parse(localStorage.getItem("myData"))
                },
                loadFromBrowser(){
                    try{
                        let data = this.loadDataFromBrowser()
                        this.update(data)
                    }catch (e) {
                        this.$q.notify({message:'Oops An error Occurred',color: 'red'})
                    }
                },
                update(data){
                    if (!!data){
                        this.me =  Object.assign({},data.me )
                        this.items = Array.isArray(data.items) ? data.items : []
                        this.$q.notify({message:'Data Loaded successfully',color: 'primary'})
                        this.autoSaveNow()
                    }
                },
                copyData(){
                    try{
                        navigator.clipboard.writeText(this.myData).then(()=>{
                            this.$q.notify({message:'Data Copied successfully',color: 'primary'})
                        })
                    }catch (e) {
                        this.$q.notify({message:'Oops something went wrong. Copy the text yourself.',color: 'red'})
                    }
                },
                autoSaveNow(){
                    console.log('here')
                    if (this.me.autoSaveToBrowser){
                        this.saveToBrowser()
                    }
                },
                changeAutoSave(){
                    this.saveToBrowser()
                },
                manualDataLoad(){
                    this.isShowingEditDataDialog = true
                },
                manualDataLoadSubmit(){
                    this.isShowingEditDataDialog = false
                    try {
                        let data = JSON.parse(this.editData)
                        this.update(data)
                    }catch (e) {
                        this.$q.notify({message:'Oops Data Corrupted',color: 'red'})
                    }
                },
            },
            computed: {
                myData(){
                    let data = {}
                    data.me = Object.assign({}, this.me)
                    data.items = Object.assign({}, this.items)
                    return JSON.stringify(data)
                },
                updateCanPurchase(){
                    let disposableIncome = this.me.disposableIncome
                    this.items.forEach(item => {
                        item.canBuy = disposableIncome >= item.price
                        disposableIncome -= item.price
                    })
                    return this.items
                },
            },
            mounted(){
                // check if data can be loaded
                let data = this.loadDataFromBrowser()
                this.isDataInBrowser = !!data
                if (this.isDataInBrowser && data.me.autoSaveToBrowser){
                    this.loadFromBrowser()
                }
                this.hideLoader()
            }
        })
        app.config.globalProperties.$filters = {
            currency(value, code = "USD") {
                if (typeof value !== "number") {
                    return value;
                }
                let formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: code || "USD",
                    minimumFractionDigits: 0
                });
                return formatter.format(value);
            }
        }
        app.use(Quasar, {
            config: {
                brand: { // this will NOT work on IE 11
                    primary: '#F2994B',
                    secondary: '#F2BF80',
                    accent: '#F2DE77',
                    dark: '#2B3240',
                    gray: '#8596A6',
                    // ... or all other brand colors
                }
            }
        })
        app.mount('#q-app')
    }, 2000)

};
