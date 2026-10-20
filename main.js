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

function createBudget(name) {
    return {
        id: Date.now().toString() + Math.random().toString(36).slice(2, 6),
        name,
        income: 100,
        items: []
    }
}

// Accepts both the current format ({me, budgets, activeBudgetId}) and the
// old single-list format ({me: {disposableIncome}, items}).
function normalizeData(data) {
    const me = Object.assign({}, data.me)
    let budgets = Array.isArray(data.budgets) ? data.budgets.filter(b => b && typeof b === 'object') : []
    if (budgets.length === 0) {
        let budget = createBudget("My Budget")
        if (typeof me.disposableIncome === 'number') {
            budget.income = me.disposableIncome
        }
        if (data.items && typeof data.items === 'object') {
            budget.items = Object.values(data.items)
        }
        budgets = [budget]
    }
    delete me.disposableIncome
    budgets = budgets.map(b => Object.assign(createBudget("Budget"), b, {
        items: Array.isArray(b.items) ? b.items : []
    }))
    const activeBudgetId = budgets.some(b => b.id === data.activeBudgetId) ? data.activeBudgetId : budgets[0].id
    return {me, budgets, activeBudgetId}
}

// PWA: offline support and install prompt.
// beforeinstallprompt can fire before Vue mounts, so it is captured here.
let deferredInstallPrompt = null
window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault()
    deferredInstallPrompt = event
    window.dispatchEvent(new Event('sop-installable'))
})
window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null
    window.dispatchEvent(new Event('sop-installable'))
})
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => undefined)
    })
}

window.onload = () => {
    setTimeout(() => {
        const app = Vue.createApp({
            data() {
                return {
                    menuList,
                    currencyList,
                    images: [
                        'https://res.cloudinary.com/ebrayce/image/upload/v1628870060/Screenshot_08-13-2021_15.54.06_oymrwn.png'
                    ],
                    me: {
                        avatar: "https://res.cloudinary.com/ebrayce/image/upload/v1609853242/134120747_865218274279882_770505659412948779_o.jpg_bgahnf.jpg",
                        selectedCurrency: "USD",
                        name: "Ernest Brayce",
                        username: "ebrayce",
                        autoSaveToBrowser: false
                    },
                    budgets: [createBudget("My Budget")],
                    activeBudgetId: null,
                    isShowingBudgetDialog: false,
                    budgetDialogMode: "create",
                    budgetForm: {
                        name: ""
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
                    canInstall: false,
                    counter: 0,
                    fixed: false,
                    drawer: true,
                    state: 1,
                    editData: "",
                    imageUrl: "",

                    dataFile: null,
                    formItem: {
                        name: "",
                        price: 0
                    },
                    defaultFormItem: {
                        name: "",
                        price: 0
                    }
                }
            },
            methods: {
                navigateTo(id) {
                    this.state = id
                    this.drawer = false
                },
                showImage(img) {
                    this.imageUrl = img
                    this.isShowingImageDialog = true;
                },
                hideLoader() {
                    this.isShowingLoader = false;
                },
                showAddItemDialog() {
                    this.isShowingAddItemDialog = true
                },
                showFinanceDialog() {
                    this.isShowingAddItemDialog = true
                },
                addToItems() {
                    this.isShowingAddItemDialog = false
                    if (this.isEditing) {
                        let index = this.getItemIndex(this.formItem.id)
                        this.items.splice(index, 1, Object.assign({}, this.formItem))
                    } else {
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
                removeItemById() {
                    let index = this.getItemIndex(this.editedItemId)
                    if (index >= 0) {
                        this.items.splice(index, 1)
                        this.autoSaveNow()
                    }
                    this.resetForm()

                },
                getItemIndex(itemId) {
                    return this.items.findIndex(i => i.id === itemId)
                },
                moveUp(itemId) {
                    //    find the index
                    let index = this.getItemIndex(itemId)
                    if (index === 0) {
                        return
                    }
                    //    swap with the one above
                    let temp = Object.assign({}, this.items[index])
                    this.items[index] = Object.assign({}, this.items[index - 1])
                    this.items[index - 1] = Object.assign({}, temp)
                    this.autoSaveNow()
                },
                moveDown(itemId) {
                    //    find the index
                    let index = this.getItemIndex(itemId)
                    if (index === this.items.length - 1) {
                        return
                    }
                    //    swap with the one above
                    let temp = Object.assign({}, this.items[index])
                    this.items[index] = Object.assign({}, this.items[index + 1])
                    this.items[index + 1] = Object.assign({}, temp)
                    this.autoSaveNow()
                },
                showFinance() {
                    this.isShowingFinanceDialog = true
                },
                filterFn(val, update) {
                    update(() => {
                        const needle = val.toLocaleLowerCase()
                        this.currencyList = currencyList.filter(v => v.label.toLocaleLowerCase().indexOf(needle) > -1 || v.value.toLocaleLowerCase().indexOf(needle) > -1)
                    })
                },
                resetForm() {
                    this.formItem.name = ""
                    this.formItem.price = 0
                    this.isEditing = false
                    this.editedItemId = undefined
                    this.isShowingAddItemDialog = false
                    this.formItem = Object.assign({}, this.defaultFormItem)
                },
                selectBudget(budgetId) {
                    this.activeBudgetId = budgetId
                    this.autoSaveNow()
                },
                showBudgetDialog(mode) {
                    this.budgetDialogMode = mode
                    if (mode === 'rename') {
                        this.budgetForm.name = this.activeBudget.name
                    } else if (mode === 'duplicate') {
                        this.budgetForm.name = this.activeBudget.name + " (Copy)"
                    } else {
                        this.budgetForm.name = ""
                    }
                    this.isShowingBudgetDialog = true
                },
                submitBudgetDialog() {
                    const name = this.budgetForm.name.trim()
                    if (!name) {
                        return
                    }
                    if (this.budgetDialogMode === 'rename') {
                        this.activeBudget.name = name
                    } else {
                        let budget = createBudget(name)
                        if (this.budgetDialogMode === 'duplicate') {
                            budget.income = this.activeBudget.income
                            budget.items = this.activeBudget.items.map((item, index) => Object.assign({}, item, {id: budget.id + '-' + index}))
                        }
                        this.budgets.push(budget)
                        this.activeBudgetId = budget.id
                    }
                    this.isShowingBudgetDialog = false
                    this.autoSaveNow()
                },
                deleteActiveBudget() {
                    if (this.budgets.length <= 1) {
                        return
                    }
                    const budget = this.activeBudget
                    this.$q.dialog({
                        title: 'Delete Budget',
                        message: `Delete "${budget.name}" and all its items?`,
                        cancel: true,
                        persistent: true
                    }).onOk(() => {
                        const index = this.budgets.findIndex(b => b.id === budget.id)
                        this.budgets.splice(index, 1)
                        this.activeBudgetId = this.budgets[Math.max(0, index - 1)].id
                        this.autoSaveNow()
                    })
                },
                downloadBudgetImage() {
                    const budget = this.activeBudget
                    const items = this.updateCanPurchase
                    const money = value => this.$filters.currency(value, this.me.selectedCurrency)
                    const font = (weight, size) => `${weight} ${size}px Roboto, -apple-system, "Segoe UI", sans-serif`
                    const colors = {primary: '#F2994B', secondary: '#F2BF80', dark: '#2B3240', grey: '#8596A6', line: '#E0E0E0'}

                    const width = 720, padding = 32, headerHeight = 150, rowHeight = 64, footerHeight = 56
                    const listHeight = Math.max(items.length, 1) * rowHeight
                    const height = headerHeight + listHeight + footerHeight
                    const scale = 2

                    const canvas = document.createElement('canvas')
                    canvas.width = width * scale
                    canvas.height = height * scale
                    const ctx = canvas.getContext('2d')
                    ctx.scale(scale, scale)
                    ctx.textBaseline = 'middle'

                    const fitText = (text, maxWidth) => {
                        if (ctx.measureText(text).width <= maxWidth) {
                            return text
                        }
                        while (text.length > 0 && ctx.measureText(text + '…').width > maxWidth) {
                            text = text.slice(0, -1)
                        }
                        return text + '…'
                    }

                    ctx.fillStyle = '#FFFFFF'
                    ctx.fillRect(0, 0, width, height)

                    // Header
                    ctx.fillStyle = colors.primary
                    ctx.fillRect(0, 0, width, headerHeight)
                    ctx.fillStyle = '#FFFFFF'
                    ctx.font = font(500, 14)
                    ctx.fillText('SCALE OF PREFERENCE', padding, 32)
                    ctx.font = font(700, 30)
                    ctx.fillText(fitText(budget.name, width - padding * 2), padding, 68)
                    ctx.font = font(500, 18)
                    ctx.fillText(`Income: ${money(budget.income)}`, padding, 112)
                    ctx.fillStyle = colors.dark
                    ctx.textAlign = 'right'
                    ctx.fillText(`Balance: ${money(this.balance)}`, width - padding, 112)
                    ctx.textAlign = 'left'

                    // Items
                    if (items.length === 0) {
                        ctx.fillStyle = colors.grey
                        ctx.font = font(400, 18)
                        ctx.textAlign = 'center'
                        ctx.fillText('This list is empty.', width / 2, headerHeight + rowHeight / 2)
                        ctx.textAlign = 'left'
                    }
                    items.forEach((item, index) => {
                        const top = headerHeight + index * rowHeight
                        const middle = top + rowHeight / 2
                        if (item.canBuy) {
                            ctx.fillStyle = colors.secondary
                            ctx.fillRect(0, top, width, rowHeight)
                        }
                        ctx.fillStyle = colors.line
                        ctx.fillRect(0, top + rowHeight - 1, width, 1)

                        ctx.fillStyle = item.canBuy ? colors.dark : colors.grey
                        ctx.font = font(700, 18)
                        ctx.fillText(`${index + 1}.`, padding, middle)

                        const price = money(item.price)
                        ctx.font = font(500, 18)
                        const priceWidth = ctx.measureText(price).width
                        ctx.textAlign = 'right'
                        ctx.fillText(price, width - padding, middle)
                        ctx.textAlign = 'left'

                        ctx.font = font(400, 18)
                        const nameLeft = padding + 44
                        ctx.fillText(fitText(item.name, width - padding - priceWidth - 24 - nameLeft), nameLeft, middle)
                    })

                    // Footer
                    const footerTop = headerHeight + listHeight
                    ctx.fillStyle = colors.grey
                    ctx.font = font(400, 14)
                    ctx.fillText('Highlighted items fit within your income', padding, footerTop + footerHeight / 2)
                    ctx.textAlign = 'right'
                    ctx.fillText('ebrayce.github.io/SOP', width - padding, footerTop + footerHeight / 2)
                    ctx.textAlign = 'left'

                    canvas.toBlob(blob => {
                        if (!blob) {
                            this.$q.notify({message: 'Oops An error Occurred', color: 'red'})
                            return
                        }
                        const fileName = (budget.name.replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '') || 'budget') + '.png'
                        const url = URL.createObjectURL(blob)
                        const element = document.createElement('a')
                        element.href = url
                        element.download = fileName
                        document.body.appendChild(element)
                        element.click()
                        document.body.removeChild(element)
                        setTimeout(() => URL.revokeObjectURL(url), 1000)
                    }, 'image/png')
                },
                async installApp() {
                    if (!deferredInstallPrompt) {
                        return
                    }
                    const prompt = deferredInstallPrompt
                    prompt.prompt()
                    // A prompt can only be shown once; the browser fires a new one if it is still installable.
                    deferredInstallPrompt = null
                    this.canInstall = false
                    await prompt.userChoice
                },
                getData() {
                    return {
                        me: Object.assign({}, this.me),
                        budgets: this.budgets,
                        activeBudgetId: this.activeBudgetId
                    }
                },
                buildData() {
                    return JSON.stringify(this.getData());
                },
                saveToBrowser() {
                    try {
                        localStorage.setItem("myData", this.buildData())
                        this.isDataInBrowser = true;
                        this.$q.notify({message: 'Data Saved successfully', color: 'primary'})
                    } catch (e) {
                        this.me.autoSaveToBrowser = false;
                        this.$q.notify({message: 'Oops An error Occurred', color: 'red'})
                    }
                },
                loadDataFromBrowser() {
                    return JSON.parse(localStorage.getItem("myData"))
                },
                loadFromBrowser() {
                    try {
                        let data = this.loadDataFromBrowser()
                        this.update(data)
                    } catch (e) {
                        this.$q.notify({message: 'Oops An error Occurred', color: 'red'})
                    }
                },
                downloadDataAsFile() {
                    this.downloadFile(this.buildData())
                },
                loadDataFromFile() {
                    const reader = new FileReader();

                    reader.addEventListener("load", () => {
                        this.editData = reader.result
                    }, false);

                    if (this.dataFile) {
                        reader.readAsText(this.dataFile);
                    }

                },
                downloadFile(content, fileName = 'appData') {
                    const element = document.createElement('a');
                    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
                    element.setAttribute('download', fileName);

                    element.style.display = 'none';
                    document.body.appendChild(element);

                    element.click();

                    document.body.removeChild(element);
                },
                update(data) {
                    if (!!data) {
                        data = normalizeData(data)
                        this.me = data.me
                        this.budgets = data.budgets
                        this.activeBudgetId = data.activeBudgetId
                        this.$q.notify({message: 'Data Loaded successfully', color: 'primary'})
                        this.autoSaveNow()
                    }
                },
                copyData() {
                    try {
                        navigator.clipboard.writeText(this.myData).then(() => {
                            this.$q.notify({message: 'Data Copied successfully', color: 'primary'})
                        })
                    } catch (e) {
                        this.$q.notify({message: 'Oops something went wrong. Copy the text yourself.', color: 'red'})
                    }
                },
                autoSaveNow() {
                    if (this.me.autoSaveToBrowser) {
                        this.saveToBrowser()
                    }
                },
                changeAutoSave() {
                    this.saveToBrowser()
                },
                manualDataLoad() {
                    this.editData = null;
                    this.dataFile = null;
                    this.isShowingEditDataDialog = true
                },
                manualDataLoadSubmit() {
                    this.isShowingEditDataDialog = false
                    try {
                        let data = JSON.parse(this.editData)
                        this.update(data)
                    } catch (e) {
                        this.$q.notify({message: 'Oops Data Corrupted', color: 'red'})
                    }
                },
            },
            computed: {
                activeBudget() {
                    return this.budgets.find(b => b.id === this.activeBudgetId) || this.budgets[0]
                },
                budgetOptions() {
                    return this.budgets.map(b => ({label: b.name, value: b.id}))
                },
                items() {
                    return this.activeBudget.items
                },
                itemsTotal() {
                    return this.items.filter(item => item.canBuy).reduce((pre, curr) => {
                        return pre + curr.price
                    }, 0)
                },
                balance() {
                    return this.activeBudget.income - this.itemsTotal
                },
                myData() {
                    return this.buildData()
                },
                updateCanPurchase() {
                    let disposableIncome = this.activeBudget.income
                    this.items.forEach(item => {
                        item.canBuy = disposableIncome >= item.price
                        disposableIncome -= item.price
                    })
                    return this.items
                },
            },
            mounted() {
                const updateCanInstall = () => this.canInstall = !!deferredInstallPrompt
                updateCanInstall()
                window.addEventListener('sop-installable', updateCanInstall)
                this.activeBudgetId = this.budgets[0].id
                // check if data can be loaded
                let data = this.loadDataFromBrowser()
                this.isDataInBrowser = !!data
                if (this.isDataInBrowser && data.me.autoSaveToBrowser) {
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
    }, 0)

};
