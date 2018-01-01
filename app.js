const masks = {
    currency: {
        mask(value) {
            return '₦' + value.toLocaleString()
        },
        unmask(value) {
            value = parseFloat(value.replace(/[^\d\.]/g, ""))
            return isNaN(value) ?
                0 :
                value
        },
    },
}
var app = new Vue({
    el: '#root',

    data() {
        return {
            submitted: false,
            errorMessage: "",
            successMessage: "",
            m1a: null,
            m1b: null,
            m2a: null,
            m2b: null,
            m3a: null,
            m3b: null,
            m4a: null,
            m4b: null,
            m5a: null,
            m5b: null,
            m6a: null,
            m6b: null,
            Newdata: {
                fname: '',
                mname: '',
            },
            showGuaForm: false,
        }
    },
    // data: {


    // },

    mounted: function() {
        console.log('mounted');
    },

    computed: {
        getMax() {
            var arr = [this.m1a, this.m1b, this.m2a, this.m2b, this.m3a, this.m3b, this.m4a, this.m4b, this.m5a, this.m5b, this.m6a, this.m6b];
            var max = arr.reduce(function(a, b) {
                return Math.max(a, b);
            });
        }
    },

    ready: function() {},
    methods: {
        stripTheGarbage(e) {
            if (e.keyCode < 48 && e.keyCode !== 46 || e.keyCode > 59) {
                e.preventDefault()
            }
        },
        formatNaira(price) {
            console.log(price)
            if (price != '') {
                var num = price;

                num = Number(num);

                var countDecimals = function(value) {
                    if (Math.floor(value) === value) return 0;
                    return value.toString().split(".")[1].length || 0;
                }

                var decimal = countDecimals(num);

                if (decimal < 2) {
                    num = num.toFixed(2)
                }

                if (decimal > 2) {
                    num = num.toFixed(decimal)
                }

                if (parseInt(num) < 1) {
                    num = "." + String(num).split(".")[1];
                }

                price = num;
                console.log(num);
            }
        },



    }
});