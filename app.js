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

    data: {
        Average: null,
        Max2: null,
        Max3: null,
        Max4: null,
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

    },
    // data: {


    // },

    mounted: function() {
        console.log('mounted');
    },

    computed: {

    },

    ready: function() {},
    methods: {
        getMax() {
            console.log(this.m1a);
            var arr = [this.m1a, this.m1b, this.m2a, this.m2b, this.m3a, this.m3b, this.m4a, this.m4b, this.m5a, this.m5b, this.m6a, this.m6b];
            var max = arr.reduce(function(a, b) {
                app.Max = Math.max(a, b);
                console.log(app.Max);
            });
            // return 1;
        },
        Test1() {
            this.Average = ((this.m1b - this.m1a > 0 ? this.m1b - this.m1a : 0) + (this.m2a - this.m1b > 0 ? this.m2a - this.m1b : 0) + (this.m2b - this.m2a > 0 ? this.m2b - this.m2a : 0) + (this.m3a - this.m2b > 0 ? this.m3a - this.m2b : 0) + (this.m3b - this.m3a > 0 ? this.m3b - this.m3a : 0) + (this.m4a - this.m3b > 0 ? this.m4a - this.m3b : 0) + (this.m4b - this.m4a > 0 ? this.m4b - this.m4a : 0) + (this.m5a - this.m4b > 0 ? this.m5a - this.m4b : 0) +
                (this.m5b - this.m5a > 0 ? this.m5b - this.m5a : 0) + (this.m6a - this.m5b > 0 ? this.m6a - this.m5b : 0) + (this.m6b - this.m6a > 0 ? this.m6b - this.m6a : 0)) / 11
            console.log(this.Average);
            let tm1 = this.Average > this.m1a ? 1 : 0;
            let tm2 = this.Average > this.m1b ? 1 : 0;
            let tm3 = this.Average > this.m2a ? 1 : 0;
            let tm4 = this.Average > this.m2b ? 1 : 0;
            let tm5 = this.Average > this.m3a ? 1 : 0;
            let tm6 = this.Average > this.m3b ? 1 : 0;
            let tm7 = this.Average > this.m4a ? 1 : 0;
            let tm8 = this.Average > this.m4b ? 1 : 0;
            let tm9 = this.Average > this.m5a ? 1 : 0;
            let tm10 = this.Average > this.m5b ? 1 : 0;
            let tm11 = this.Average > this.m6a ? 1 : 0;
            let tm12 = this.Average > this.m6b ? 1 : 0;
            console.log(tm1);
        },

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