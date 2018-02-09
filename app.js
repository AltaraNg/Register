const ERRORS = {
    required: 'This field is required.',
    minLength: 'The length should be minimum 8 characters.',
    invalidEmail: 'This is not a valid email address.',
    invalidTel: 'This is not a valid Telephone Number.'
}
var app = new Vue({
    el: '#root',
    data: {
        errorMessageRegEm:'',
        successMessageRegEm:'',
        dataloaded: false,
        Employee_id: '',
        Access_code: '',
        access_granted: false,
        search: '',
        list_customers: [],
        list_employees:[],
        errorMessageChk: '',
        successMessageReg: '',
        errorMessageReg: '',
        successMessageChk: '',
        CheckCusId: "",
        register: false,
        Personal_Guarantor: false,
        Work_Guarantor: false,
        errorMessage: "",
        successMessage: "",
        Newdata: {
            fname: '',
            mname: '',
            lname: '',
            city: '',
            state: '',
            telno: '',
            dobirth: '',
            yearTm: '',
            civil_status: '',
            gender: '',
            duration: '',
            home: '',
            householdno: '',
            workno: '',
            dependno: '',
            childrenno: '',
            education: '',
            visittime_to: '',
            visittime_fro: '',
            pastloan: '',
            pastloanamt: '',
            payback: '',
            email: '',
            rincome: '',
            ctype: '',
            ctelNo: '',
            phonenowork: '',
            cstate: '',
            ccity: '',
            cname: '',
            cposition: '',
            mincome: '',
            bincome: '',
            checkedDofWork: [],
            DofWork: '',
            nextofkinfname: '',
            nextofkinlname: '',
            nextofkinmname: '',
            nextofkin: '',
            nokgender: '',
            noktelno: '',
            nokduraton: '',
            workguafname: '',
            workguamname: '',
            workgualname: '',
            guareladship: '',
            guaworkduraton: '',
            guagender: '',
            guacity: '',
            guastate: '',
            guatelno: '',
            pguafname: '',
            pguamname: '',
            pgualname: '',
            pguareladship: '',
            pguaworkduraton: '',
            pguagender: '',
            pguacity: '',
            pguastate: '',
            pguatelno: '',
            amtonfood: '',
            amtontransport: '',
            nearestBstop: '',
            streetname: '',
            houseno: '',
            addaddinfo: '',
            cnearestBstop: '',
            cstreetname: '',
            chouseno: '',
            caddaddinfo: '',
            cvisittime_to: '',
            cvisittime_fro: '',
            guanearestBstop: '',
            guastreetname: '',
            guahouseno: '',
            guaaddaddinfo: '',
            pguanearestBstop: '',
            pguastreetname: '',
            pguahouseno: '',
            pguaaddaddinfo: '',
            Empname: '',
            Empnumber: '',
            Regdate: '',
            addarea: '',
            norooms: '',
            empstatus: '',
            currentsal: '',
            paymentperiod: '',
            cnokduraton: '',
            market: '',
            bacct: '',
            mgains: '',
            carea: '',
            pguaarea: '',
            guaarea: '',
        },
        showGuaForm: false,

        SelectedGuaData: {
            custId: '',
            workguafname: '',
            workguamname: '',
            workgualname: '',
            guareladship: '',
            guaworkduraton: '',
            guagender: '',
            guacity: '',
            guastate: '',
            guatelno: '',
            pguafname: '',
            pguamname: '',
            pgualname: '',
            pguareladship: '',
            pguaworkduraton: '',
            pguagender: '',
            pguacity: '',
            pguastate: '',
            pguatelno: '',
            guanearestBstop: '',
            guastreetname: '',
            guahouseno: '',
            guaaddaddinfo: '',
            pguanearestBstop: '',
            pguastreetname: '',
            pguahouseno: '',
            pguaaddaddinfo: '',
            pguaarea: '',
            guaarea: '',
        },
dsalogs:{
    emp_id:'',
    doc_sub:'',
    store_visited:'',
    cust_visited:'',
    report:'',
    cust_reg:'',
    date:''
},
        // CheckGuaData: [],
        // SelectedGuaData:{},

        submitted: false,
        submition: false,
        guasubmition: false,
        emailFeedback: '',
        TelFeedback: '',
        Feedback: '',
        paybackFeedback: '',
        worksellFeedback: '',
        DofWOptions: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Friday"
        ],

        StateOptions: [
            "Abia",
            "Adamawa",
            "Akwa Ibom",
            "Anambra",
            "Bauchi",
            "Bayelsa",
            "Benue",
            "Borno",
            "Cross River",
            "Delta",
            "Ebonyi",
            "Edo",
            "Ekiti",
            "Enugu",
            "Gombe",
            "Imo",
            "Jigawa",
            "Kaduna",
            "Kano",
            "Katsina",
            "Kebbi",
            "Kogi",
            "Kwara",
            "Lagos",
            "Nasarawa",
            "Niger",
            "Ogun",
            "Ondo",
            "Osun",
            "Oyo",
            "Plateau",
            "Rivers",
            "Sokoto",
            "Taraba",
            "Yobe",
            "Zamfara",
            "FCT"
        ]
    },

    mounted: function () {
        console.log('mounted');
        this.ListCustomers();
        this.ListEmployees();
    },

    computed: {
        filteredList_customers: function () {
            return this.list_customers.filter((list_customer) => {
                return list_customer.first_name.match(this.search) + list_customer.last_name.match(this.search);
            });
        },

        emptyEmpname() { return this.Newdata.Empname === '' },
        emptyEmpnumber() { return this.Newdata.Empnumber === '' },
        emptyRegdate() { return this.Newdata.Regdate === '' },
        emptyaddarea() { return this.Newdata.addarea === '' },
        emptyempstatus() { return this.Newdata.empstatus === '' },

        emptyfname() { return this.Newdata.fname === '' },
        emptylname() { return this.Newdata.lname === '' },
        emptynearestBstop() { return this.Newdata.nearestBstop === '' },
        emptystreetname() { return this.Newdata.streetname === '' },
        emptyhouseno() { return this.Newdata.houseno === '' },
        emptycity() { return this.Newdata.city === '' },



        emptystate() { return this.Newdata.state === '' },
        emptydobirth() { return this.Newdata.dobirth === '' },
        untickgender() { return this.Newdata.gender === '' },
        untickCivil() { return this.Newdata.civil_status === '' },
        emptyyearTm() { return this.Newdata.yearTm === '' },
        untickhome() { return this.Newdata.home === '' },

        unticknorooms() { return this.Newdata.norooms === '' },

        emptyduration() { return this.Newdata.duration === '' },
        emptyhouseholdno() { return this.Newdata.householdno === '' },
        emptyworkno() { return this.Newdata.workno === '' },
        emptydependno() { return this.Newdata.dependno === '' },
        emptychildrenno() { return this.Newdata.childrenno === '' },
        emptyeducation() { return this.Newdata.education === '' },
        emptyvisittime_to() { return this.Newdata.visittime_to === '' },
        emptyvisittime_fro() { return this.Newdata.visittime_fro === '' },
        emptynextofkinfname() { return this.Newdata.nextofkinfname === '' },
        emptynextofkinlname() { return this.Newdata.nextofkinlname === '' },
        emptynextofkin() { return this.Newdata.nextofkin === '' },
        emptynokgender() { return this.Newdata.nokgender === '' },

        emptynoktelno() {
            if (this.Newdata.noktelno == '' || !this.isCorrectTel(this.Newdata.noktelno)) {
                this.TelFeedback = ERRORS.invalidTel
                return true
            }
            return false
        },

        emptynokduraton() { return this.Newdata.nokduraton === '' },


        emptyworkguafname() {
            if (this.Work_Guarantor == true && (this.Newdata.workguafname === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptyworkgualname() {

            if (this.Work_Guarantor == true && (this.Newdata.workgualname === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptyguareladship() {

            if (this.Work_Guarantor == true && (this.Newdata.guareladship === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptyguaworkduraton() {

            if (this.Work_Guarantor == true && (this.Newdata.guaworkduraton === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptyguacity() {

            if (this.Work_Guarantor == true && (this.Newdata.guacity === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptyguanearestBstop() {

            if (this.Work_Guarantor == true && (this.Newdata.guanearestBstop === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptyguastreetname() {

            if (this.Work_Guarantor == true && (this.Newdata.guastreetname === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptyguahouseno() {

            if (this.Work_Guarantor == true && (this.Newdata.guahouseno === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptyguagender() {

            if (this.Work_Guarantor == true && (this.Newdata.guagender === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptyguastate() {

            if (this.Work_Guarantor == true && (this.Newdata.guastate === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptyguatelno() {
            if (this.Work_Guarantor == true && (this.Newdata.guatelno == '' || !this.isCorrectTel(this.Newdata.guatelno))) {
                this.TelFeedback = ERRORS.invalidTel
                return true
            }
            return false

        },
        emptypguafname() {
            if (this.Personal_Guarantor == true && (this.Newdata.pguafname === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptypgualname() {
            if (this.Personal_Guarantor == true && (this.Newdata.pgualname === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptypguareladship() {
            if (this.Personal_Guarantor == true && (this.Newdata.pguareladship === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptypguaworkduraton() {
            if (this.Personal_Guarantor == true && (this.Newdata.pguaworkduraton === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptypguacity() {
            if (this.Personal_Guarantor == true && (this.Newdata.pguacity === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptypguanearestBstop() {
            if (this.Personal_Guarantor == true && (this.Newdata.pguanearestBstop === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptypguastreetname() {

            if (this.Personal_Guarantor == true && (this.Newdata.pguastreetname === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptypguahouseno() {

            if (this.Personal_Guarantor == true && (this.Newdata.pguahouseno === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptypguagender() {

            if (this.Personal_Guarantor == true && (this.Newdata.pguagender === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptypguastate() {

            if (this.Personal_Guarantor == true && (this.Newdata.pguastate === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        emptypguatelno() {
            if (this.Personal_Guarantor == true && (this.Newdata.pguatelno == '' || !this.isCorrectTel(this.Newdata.pguatelno))) {
                this.TelFeedback = ERRORS.invalidTel
                return true
            }
            return false
        },
        emptypguaarea() {

            if (this.Personal_Guarantor == true && (this.Newdata.pguaarea === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },

        emptyguaarea() {

            if (this.Work_Guarantor == true && (this.Newdata.guaarea === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },

        Gemptyworkguafname() {
            if (this.Work_Guarantor == true && (this.SelectedGuaData.workguafname == "")) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },

        // emptyworkguafname() {
        //     if (this.Work_Guarantor == true && (this.Newdata.workguafname === '')) {
        //         this.Feedback = ERRORS.required;
        //         return true
        //     }
        //     return false
        // },

        Gemptyworkgualname() {

            if (this.Work_Guarantor == true && (this.SelectedGuaData.workgualname === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        Gemptyguareladship() {

            if (this.Work_Guarantor == true && (this.SelectedGuaData.guareladship === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        Gemptyguaworkduraton() {

            if (this.Work_Guarantor == true && (this.SelectedGuaData.guaworkduraton === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        Gemptyguacity() {

            if (this.Work_Guarantor == true && (this.SelectedGuaData.guacity === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        GemptyguanearestBstop() {

            if (this.Work_Guarantor == true && (this.SelectedGuaData.guanearestBstop === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        Gemptyguastreetname() {

            if (this.Work_Guarantor == true && (this.SelectedGuaData.guastreetname === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        Gemptyguahouseno() {

            if (this.Work_Guarantor == true && (this.SelectedGuaData.guahouseno === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        Gemptyguagender() {

            if (this.Work_Guarantor == true && (this.SelectedGuaData.guagender === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        Gemptyguastate() {

            if (this.Work_Guarantor == true && (this.SelectedGuaData.guastate === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        Gemptyguatelno() {
            if (this.Work_Guarantor == true && (this.SelectedGuaData.guatelno == '' || !this.isCorrectTel(this.SelectedGuaData.guatelno))) {
                this.TelFeedback = ERRORS.invalidTel
                return true
            }
            return false

        },
        Gemptypguafname() {
            if (this.Personal_Guarantor == true && (this.SelectedGuaData.pguafname === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        Gemptypgualname() {
            if (this.Personal_Guarantor == true && (this.SelectedGuaData.pgualname === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        Gemptypguareladship() {
            if (this.Personal_Guarantor == true && (this.SelectedGuaData.pguareladship === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        Gemptypguaworkduraton() {
            if (this.Personal_Guarantor == true && (this.SelectedGuaData.pguaworkduraton === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        Gemptypguacity() {
            if (this.Personal_Guarantor == true && (this.SelectedGuaData.pguacity === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        GemptypguanearestBstop() {
            if (this.Personal_Guarantor == true && (this.SelectedGuaData.pguanearestBstop === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        Gemptypguastreetname() {

            if (this.Personal_Guarantor == true && (this.SelectedGuaData.pguastreetname === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        Gemptypguahouseno() {

            if (this.Personal_Guarantor == true && (this.SelectedGuaData.pguahouseno === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        Gemptypguagender() {

            if (this.Personal_Guarantor == true && (this.SelectedGuaData.pguagender === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        Gemptypguastate() {

            if (this.Personal_Guarantor == true && (this.SelectedGuaData.pguastate === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },
        Gemptypguatelno() {
            if (this.Personal_Guarantor == true && (this.SelectedGuaData.pguatelno == '' || !this.isCorrectTel(this.SelectedGuaData.pguatelno))) {
                this.TelFeedback = ERRORS.invalidTel
                return true
            }
            return false
        },
        Gemptypguaarea() {

            if (this.Personal_Guarantor == true && (this.SelectedGuaData.pguaarea === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },

        Gemptyguaarea() {

            if (this.Work_Guarantor == true && (this.SelectedGuaData.guaarea === '')) {
                this.Feedback = ERRORS.required;
                return true
            }
            return false
        },


        untickpastloan() { return this.Newdata.pastloan === '' },
        untickpayback() { return this.Newdata.payback === '' },
        checkfield() { return this.Newdata.pastloan === '' },
        wrongEmail() {
            if (this.Newdata.email != '' && !this.isEmail(this.Newdata.email)) {
                this.emailFeedback = ERRORS.invalidEmail
                return true
            }
            return false
        },

        wrongTel() {
            if (this.Newdata.telno == '' || !this.isCorrectTel(this.Newdata.telno)) {
                this.TelFeedback = ERRORS.invalidTel
                return true
            }
            return false
        },

        emptypayback() {
            if (this.Newdata.payback === '' && !(this.Newdata.pastloan === '')) {
                this.paybackFeedback = ERRORS.required;
                return true
            }

            return false
        },

        emptycurrentsal() {
            if (this.Newdata.currentsal === '' && (this.Newdata.empstatus === 'Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },

        emptypaymentperiod() {
            if (this.Newdata.paymentperiod === '' && (this.Newdata.empstatus === 'Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },

        emptyrincome() {
            if (this.Newdata.rincome === '' && (this.Newdata.empstatus === 'Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },

        emptycposition() {
            if (this.Newdata.cposition === '' && this.Newdata.empstatus === 'Salaried') {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },

        emptymarket() {
            if (this.Newdata.market === '' && (this.Newdata.empstatus === 'Non-Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },

        emptybacct() {
            if (this.Newdata.bacct === '' && (this.Newdata.empstatus === 'Non-Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },
        emptymgains() {
            if (this.Newdata.mgains === '' && (this.Newdata.empstatus === 'Non-Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },
        emptybincome() {
            if (this.Newdata.bincome === '' && (this.Newdata.empstatus === 'Non-Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },

        emptyctime() {
            if (this.Newdata.ctime === '' && (this.Newdata.empstatus === 'Salaried' || this.Newdata.empstatus === 'Non-Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },

        emptymincome() {
            if (this.Newdata.mincome === '' && ((this.Newdata.cbelong === 'Housewife' && this.Newdata.hwork === 'Yes') || this.Newdata.work != '')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },


        emptyctelNo() {
            if ((this.Newdata.ctelNo == '' || !this.isCorrectTel(this.Newdata.ctelNo)) && (this.Newdata.empstatus === 'Salaried' || this.Newdata.empstatus === 'Non-Salaried')) {
                this.TelFeedback = ERRORS.invalidTel
                return true
            }
            return false
        },
        emptyphonenowork() {

            if (this.Newdata.phonenowork === '' && (this.Newdata.empstatus === 'Salaried' || this.Newdata.empstatus === 'Non-Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false

        },
        emptycstate() {
            if (this.Newdata.cstate === '' && (this.Newdata.empstatus === 'Salaried' || this.Newdata.empstatus === 'Non-Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },
        emptyccity() {
            if (this.Newdata.ccity === '' && (this.Newdata.empstatus === 'Salaried' || this.Newdata.empstatus === 'Non-Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },
        emptycnokduraton() {
            if (this.Newdata.cnokduraton === '' && (this.Newdata.empstatus === 'Salaried' || this.Newdata.empstatus === 'Non-Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },

        emptycnearestBstop() {
            if (this.Newdata.cnearestBstop === '' && (this.Newdata.empstatus === 'Salaried' || this.Newdata.empstatus === 'Non-Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },

        emptychouseno() {
            if (this.Newdata.chouseno === '' && (this.Newdata.empstatus === 'Salaried' || this.Newdata.empstatus === 'Non-Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },

        emptycstreetname() {
            if (this.Newdata.cstreetname === '' && (this.Newdata.empstatus === 'Salaried' || this.Newdata.empstatus === 'Non-Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },


        emptycname() {
            if (this.Newdata.cname === '' && (this.Newdata.empstatus === 'Salaried' || this.Newdata.empstatus === 'Non-Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },

        emptyselect() {
            if (this.Newdata.checkedDofWork === [] && (this.Newdata.empstatus === 'Salaried' || this.Newdata.empstatus === 'Non-Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },
        emptycarea() {
            if (this.Newdata.carea === '' && (this.Newdata.empstatus === 'Salaried' || this.Newdata.empstatus === 'Non-Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },

        emptycvisittime_to() {

            if (this.Newdata.cvisittime_to === '' && (this.Newdata.empstatus === 'Salaried' || this.Newdata.empstatus === 'Non-Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },

        emptycvisittime_fro() {

            if (this.Newdata.cvisittime_fro === '' && (this.Newdata.empstatus === 'Salaried' || this.Newdata.empstatus === 'Non-Salaried')) {
                this.worksellFeedback = ERRORS.required;
                return true
            }
            return false
        },

        checkcivil() {
            if ((this.Newdata.civil_status != 'Single' && this.Newdata.yearTm != '') || (this.Newdata.civil_status == 'Single' && this.Newdata.yearTm == '')) {
                return false;
            } else return true;
        },

        checkloandetails() {
            if ((this.Newdata.pastloan == 'Yes' && this.Newdata.pastloanamt != '' && this.Newdata.payback != '') || (this.Newdata.pastloan == 'No' && this.Newdata.pastloanamt == '' && this.Newdata.payback == '')) {
                return false;
            } else return true;
        },
        checkworkdetails() {
            if ((this.Newdata.empstatus == 'Salaried' && this.checksaldetails == false) || (this.Newdata.empstatus == 'Non-Salaried' && this.checkbizdetails == false ||
                (this.Newdata.empstatus == 'Unemployed'))) {
                return false;
            } else return true;
        },


        checksaldetails() {
            if (
                this.emptyphonenowork == true ||
                this.emptycname == true ||
                this.emptycurrentsal == true ||
                this.emptyrincome == true ||
                this.emptypaymentperiod == true ||
                this.emptycposition == true ||
                this.emptycnokduraton == true ||
                this.emptyselect == true ||
                this.emptycstate == true ||
                this.emptyccity == true ||
                this.emptycnearestBstop == true ||
                this.emptycstreetname == true ||
                this.emptychouseno == true ||
                this.emptyctelNo == true ||
                this.emptycarea == true) {
                return true;
            } else return false;
        },

        checkbizdetails() {
            if (
                this.emptyphonenowork == true ||
                this.emptycname == true ||
                this.emptymarket == true ||
                this.emptybincome == true ||
                this.emptybacct == true ||
                this.emptymgains == true ||
                this.emptycnokduraton == true ||
                this.emptyselect == true ||
                this.emptycstate == true ||
                this.emptyccity == true ||
                this.emptycnearestBstop == true ||
                this.emptycstreetname == true ||
                this.emptychouseno == true ||
                this.emptyctelNo == true ||
                this.emptycarea == true
            ) {
                return true;
            } else return false;
        }

    },

    methods: {

        GainAccess: function () {

            if (app.Employee_id == '' || app.Access_code == '') {

                app.errorMessage = "Access Denied!, All field must be filled";

                setTimeout(function () {
                    app.errorMessage = '';
                }, 2000);
            } else {
                    app.submitted = true;
                    var emp = app.Employee_id;
                    
                    if (!isNaN(emp.charAt(4))){
                        emp.slice(4);
                        emp.slice(0,-3)
                    }
                    else if ((!isNaN(emp.charAt(5))))  {
                        emp.slice(5);
                        emp.slice(0,-3)
                    }
                    else {
                        
                    }

                var dat = {
                    Employee_id: emp,
                    Access_code: app.Access_code
                }
                var formData = app.toFormData(dat);
                console.log()
                axios.post("https://altara-api.herokuapp.com/api.php?action=aknowledge", formData)
                    .then(function (response) {
                        app.submitted = false;
                        console.log(response);
                        if (response.data.error) {
                            app.errorMessage = response.data.message;

                            setTimeout(function () {
                                app.errorMessage = '';
                            }, 2000);

                        } else {
                            if (response.data.data.length != 0) {

                                if (response.data.data[0].Employee_Role_id == 11 || response.data.data[0].Employee_Role_id == 6 || response.data.data[0].Employee_Role_id == 1) {
                                    app.access_granted = true;
                                    app.successMessage = "Access Granted!, Enter Customer ID below";

                                    setTimeout(function () {
                                        app.successMessage = '';
                                    }, 2000);
                                } else {
                                    app.errorMessage = "Access Denied, Wrong Login Details";

                                    setTimeout(function () {
                                        app.errorMessage = '';
                                    }, 2000);
                                }
                            }

                            else {

                                app.errorMessage = "Access Denied, Wrong Login Details";

                                setTimeout(function () {
                                    app.errorMessage = '';
                                }, 2000);
                            }

                        }
                    });
            }
        },

        ListCustomers: function () {
            axios.get("https://altara-api.herokuapp.com/api.php?action=list")
                .then(function (response) {
                    console.log(response);
                    if (response.data.error) {
                        app.errorMessage = response.data.message;
                    } else {
                        app.list_customers = response.data.users;
                        console.log(app.list_customers);
                    }
                });
        },

        ListEmployees: function () {
            axios.get("https://altara-api.herokuapp.com/api.php?action=listemp")
                .then(function (response) {
                    console.log(response);
                    if (response.data.error) {
                        app.errorMessage = response.data.message;
                    } else {
                        app.list_employees = response.data.users;
                        console.log(app.list_employees);
                    }
                });
        },

        EmployeesReport: function () {
           
            if (app.dsalogs.emp_id == '' || app.dsalogs.doc_sub == '' || app.dsalogs.date == '' || app.dsalogs.store_visited == '' || app.dsalogs.cust_visited == '' || app.dsalogs.cust_reg == '') {
                app.errorMessageRegEm = "Field can't be empty";
                setTimeout(function () {
                    app.errorMessageRegEm = '';
                }, 1000);

            } 
          
            else if (  Number(app.dsalogs.cust_reg )  > Number(app.dsalogs.store_visited)) {
                
                app.errorMessageRegEm = "Registered Customers Can't be More than Store Visited";
                setTimeout(function () {
                    app.errorMessageRegEm = '';
                }, 1000);

            } 
            
            else {
                var formData = app.toFormData(app.dsalogs);

            axios.post("https://altara-api.herokuapp.com/api.php?action=empreport", formData)
                .then(function (response) {
                    console.log(response);
                    if (response.data.error) {
                        app.errorMessageRegEm = response.data.message;
                    } else {
                        app.successMessageRegEm = response.data.message;
                        setTimeout(function () {
                            app.successMessageRegEm = '';
                        }, 2000);
                    }
                });
            }
        },

        checkCust: function () {
            if (app.CheckCusId == '') {
                app.errorMessageChk = "Field can't be empty";
                setTimeout(function () {
                    app.errorMessageChk = '';
                }, 1000);

            } else {

                axios.post("https://altara-api.herokuapp.com/api.php?action=checkId", {
                    Customer_id: app.CheckCusId
                })
                    .then(function (response) {
                        console.log(response);
                        if (response.data.error) {
                            app.errorMessageChk = response.data.message;

                            setTimeout(function () {
                                app.errorMessageChk = '';
                            }, 1000);

                        } else {
                            app.checKiD = response.data.checklist;
                            if (app.checKiD.length != 0) {
                                app.showGuaForm = true;
                                // app.SelectedGuaData = app.checKiD;
                                // console.log(app.SelectedGuaData);

                                app.CustName = response.data.checklist[0].first_name + " " + response.data.checklist[0].last_name
                                // app.phoneNo = response.data.checklist[0].telephone
                            } else {
                                app.errorMessageChk = "Customer ID doesnt exist!";

                                setTimeout(function () {
                                    app.errorMessageChk = '';
                                }, 1000);
                            }
                            // app.ApproveCustomer(app.CustName, app.phoneNo);
                            // app.Customer_id = "";

                        }
                    });
            }
        },



        isEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email)
        },

        isCorrectTel(telno) {
            return telno.length == 11
        },

        validateGuaForm(event) {
            console.log(app.Personal_Guarantor + app.Work_Guarantor)
            if (app.Personal_Guarantor == false && app.Work_Guarantor == false) {
                event.preventDefault()
                this.guasubmition = true
                app.errorMessageChk = 'Noting to Update';
                setTimeout(function () {
                    app.errorMessageChk = '';
                }, 2000);
            } else if (
                this.Gemptyworkguafname ||
                this.Gemptyworkgualname ||
                this.Gemptyguareladship ||
                this.Gemptyguaworkduraton ||
                this.Gemptyguacity ||
                this.GemptyguanearestBstop ||
                this.Gemptyguastreetname ||
                this.Gemptyguahouseno ||
                this.Gemptyguagender ||
                this.Gemptyguastate ||
                this.Gemptyguatelno ||
                this.Gemptyguaarea ||
                this.Gemptypguafname ||
                this.Gemptypgualname ||
                this.Gemptypguareladship ||
                this.Gemptypguaworkduraton ||
                this.Gemptypguacity ||
                this.GemptypguanearestBstop ||
                this.Gemptypguastreetname ||
                this.Gemptypguahouseno ||
                this.Gemptypguagender ||
                this.Gemptypguastate ||
                this.Gemptypguatelno ||
                this.Gemptypguaarea
            ) {
                event.preventDefault()
                this.guasubmition = true
                app.errorMessageChk = 'All field must be filled!';
                setTimeout(function () {
                    app.errorMessageChk = '';
                }, 2000);
            } else {
                event.preventDefault()
                this.guasubmition = true
                this.saveUpdate();
                // this.sendNotification(app.Newdata.fname, app.Newdata.telno);
                console.log("Prepared for Db");
                this.guaclearfeilds();
                app.guasubmition = false;
            }

        },


        validateForm(event) {
           
            var i = 0;
            while (i <= (app.Newdata.checkedDofWork).length - 1) {
                if ((app.Newdata.checkedDofWork).length - 1 === i) {
                    app.Newdata.DofWork = app.Newdata.DofWork + app.Newdata.checkedDofWork[i];
                } else {
                    app.Newdata.DofWork = app.Newdata.DofWork + app.Newdata.checkedDofWork[i] + ',';
                }
                i++;
            }

            console.log(this.checkbizdetails);
            console.log(app.Newdata);

            if (
                this.emptyfname ||
                this.emptylname ||
                this.emptynearestBstop ||
                this.emptystreetname ||
                this.emptyhouseno ||
                this.emptycity ||
                this.emptystate ||
                this.wrongTel ||
                this.untickgender ||
                this.untickCivil ||
                this.untickhome ||
                this.unticknorooms ||
                this.emptyduration ||
                this.emptyhouseholdno ||
                this.emptyworkno ||
                this.emptydependno ||
                this.emptychildrenno ||
                this.emptyeducation ||
                this.emptyvisittime_to ||
                this.emptyvisittime_fro ||
                this.emptynextofkinfname ||
                this.emptynextofkinlname ||
                this.emptynextofkin ||
                this.emptynokgender ||
                this.emptynoktelno ||
                this.emptynokduraton ||
                this.emptyworkguafname ||
                this.emptyworkgualname ||
                this.emptyguareladship ||
                this.emptyguaworkduraton ||
                this.emptyguacity ||
                this.emptyguanearestBstop ||
                this.emptyguastreetname ||
                this.emptyguahouseno ||
                this.emptyguagender ||
                this.emptyguastate ||
                this.emptyguatelno ||
                this.emptyguaarea ||
                this.emptypguafname ||
                this.emptypgualname ||
                this.emptypguareladship ||
                this.emptypguaworkduraton ||
                this.emptypguacity ||
                this.emptypguanearestBstop ||
                this.emptypguastreetname ||
                this.emptypguahouseno ||
                this.emptypguagender ||
                this.emptypguastate ||
                this.emptypguatelno ||
                this.emptypguaarea ||
                this.checkloandetails ||
                this.checkworkdetails ||
                this.emptyEmpname ||
                this.emptyEmpnumber ||
                this.emptyRegdate ||
                this.emptyaddarea ||
                this.checkbizdetails ||
                this.checksaldetails
            ) {
                event.preventDefault()
                this.submition = true
                app.errorMessageReg = 'All field must be filled!';

                setTimeout(function () {
                    app.errorMessageReg = '';
                }, 20000);


            } else {
                event.preventDefault()
                this.submition = true
                this.saveUser();
                this.sendNotification(app.Newdata.fname, app.Newdata.telno);
                console.log("Prepared for Db");
                this.clearfeilds();
                app.submition = false;
            }
        },


        saveUpdate: function () {
            app.submitted = true;
            if (app.Work_Guarantor == false) {
                app.SelectedGuaData.work_g = 0;
            } else {
                app.SelectedGuaData.work_g = 1;
            }
            if (app.Personal_Guarantor == false) {
                app.SelectedGuaData.personal_g = 0
            } else {
                app.SelectedGuaData.personal_g = 1
            }

            app.SelectedGuaData.custId = app.CheckCusId;
            console.log(app.SelectedGuaData);
            var formData = app.toFormData(app.SelectedGuaData);

            axios.post("https://altara-api.herokuapp.com/api.php?action=update", formData)
                .then(function (response1) {
                    console.log(response1);

                    if (response1.data.error) {
                        app.submitted = false;
                        app.errorMessageChk = response1.data.message;

                        setTimeout(function () {
                            app.errorMessageChk = '';
                        }, 3000);

                    } else {
                        app.submitted = false;
                        app.successMessageChk = response1.data.message;

                        setTimeout(function () {
                            app.successMessageChk = '';
                        }, 3000);
                    }
                });

        },

        saveUser: function () {
            app.dataloaded = true;
            var formData = app.toFormData(app.Newdata);

            axios.post("https://altara-api.herokuapp.com/api.php?action=create", formData)
                .then(function (response) {
                    console.log(response);

                    if (response.data.error) {
                        app.dataloaded = false;
                        app.errorMessageReg = response.data.message;

                        setTimeout(function () {
                            app.errorMessageReg = '';
                        }, 5000);


                    } else {
                        app.dataloaded = false;
                        app.successMessageReg = response.data.message;

                        setTimeout(function () {
                            app.successMessageReg = '';
                        }, 5000);

                    }
                });

        },
        resetgua: function (event) {
            this.SelectedGuaData.workguafname = '',
                this.SelectedGuaData.workguamname = '',
                this.SelectedGuaData.workgualname = '',
                this.SelectedGuaData.guareladship = '',
                this.SelectedGuaData.guaworkduraton = '',
                this.SelectedGuaData.guagender = '',
                this.SelectedGuaData.guacity = '',
                this.SelectedGuaData.guastate = '',
                this.SelectedGuaData.guatelno = '',
                this.SelectedGuaData.guanearestBstop = '',
                this.SelectedGuaData.guastreetname = '',
                this.SelectedGuaData.guahouseno = '',
                this.SelectedGuaData.guaaddaddinfo = '',
                this.SelectedGuaData.guaarea = ''
        },

        resetpgua: function (event) {

            this.SelectedGuaData.pguafname = '',
                this.SelectedGuaData.pguamname = '',
                this.SelectedGuaData.pgualname = '',
                this.SelectedGuaData.pguareladship = '',
                this.SelectedGuaData.pguaworkduraton = '',
                this.SelectedGuaData.pguagender = '',
                this.SelectedGuaData.pguacity = '',
                this.SelectedGuaData.pguastate = '',
                this.SelectedGuaData.pguatelno = '',
                this.SelectedGuaData.pguanearestBstop = '',
                this.SelectedGuaData.pguastreetname = '',
                this.SelectedGuaData.pguahouseno = '',
                this.SelectedGuaData.pguaaddaddinfo = '',
                this.SelectedGuaData.pguaarea = ''
        },


        resetdetailfill: function (event) {
            this.Newdata.checkedDofWork = [];
            this.Newdata.phonenowork = '';
            this.Newdata.DofWork = '';
            this.Newdata.cname = '';
            this.Newdata.market = '';
            this.Newdata.bincome = '';
            this.Newdata.bacct = '';
            this.Newdata.mgains = '';
            this.Newdata.cnokduraton = '';
            this.Newdata.cstate = '';
            this.Newdata.ccity = '';
            this.Newdata.cnearestBstop = '';
            this.Newdata.cstreetname = '';
            this.Newdata.chouseno = '';
            this.Newdata.ctelNo = '';
            this.Newdata.carea = '';
            this.Newdata.currentsal = '';
            this.Newdata.rincome = '';
            this.Newdata.paymentperiod = '';
            this.Newdata.cposition = '';

        },


        toFormData: function (obj) {
            var form_data = new FormData();
            for (var key in obj) {
                form_data.append(key, obj[key]);
            }
            return form_data;
        },

        resetMessage: function (event) {
            app.successMessage = '';
            app.errorMessage = '';
            app.successMessageChk = '';
            app.errorMessageChk = '';
            app.successMessageReg = '';
        },

        guaclearfeilds: function () {
            app.SelectedGuaData = {
                custId: '',
                workguafname: '',
                workguamname: '',
                workgualname: '',
                guareladship: '',
                guaworkduraton: '',
                guagender: '',
                guacity: '',
                guastate: '',
                guatelno: '',
                pguafname: '',
                pguamname: '',
                pgualname: '',
                pguareladship: '',
                pguaworkduraton: '',
                pguagender: '',
                pguacity: '',
                pguastate: '',
                pguatelno: '',
                guanearestBstop: '',
                guastreetname: '',
                guahouseno: '',
                guaaddaddinfo: '',
                pguanearestBstop: '',
                pguastreetname: '',
                pguahouseno: '',
                pguaaddaddinfo: '',
                pguaarea: '',
                guaarea: '',
            }
        },

        clearfeilds: function () {
            app.Newdata = {
                fname: '',
                mname: '',
                lname: '',
                city: '',
                state: '',
                telno: '',
                dobirth: '',
                yearTm: '',
                civil_status: '',
                gender: '',
                duration: '',
                home: '',
                householdno: '',
                workno: '',
                dependno: '',
                childrenno: '',
                education: '',
                visittime_to: '',
                visittime_fro: '',
                pastloan: '',
                pastloanamt: '',
                payback: '',
                email: '',
                rincome: '',
                ctype: '',
                ctelNo: '',
                phonenowork: '',
                cstate: '',
                ccity: '',
                cname: '',
                cposition: '',
                mincome: '',
                bincome: '',
                checkedDofWork: [],
                DofWork: '',
                nextofkinfname: '',
                nextofkinlname: '',
                nextofkinmname: '',
                nextofkin: '',
                nokgender: '',
                noktelno: '',
                nokduraton: '',
                workguafname: '',
                workguamname: '',
                workgualname: '',
                guareladship: '',
                guaworkduraton: '',
                guagender: '',
                guacity: '',
                guastate: '',
                guatelno: '',
                pguafname: '',
                pguamname: '',
                pgualname: '',
                pguareladship: '',
                pguaworkduraton: '',
                pguagender: '',
                pguacity: '',
                pguastate: '',
                pguatelno: '',
                amtonfood: '',
                amtontransport: '',
                nearestBstop: '',
                streetname: '',
                houseno: '',
                addaddinfo: '',
                cnearestBstop: '',
                cstreetname: '',
                chouseno: '',
                caddaddinfo: '',
                cvisittime_to: '',
                cvisittime_fro: '',
                guanearestBstop: '',
                guastreetname: '',
                guahouseno: '',
                guaaddaddinfo: '',
                pguanearestBstop: '',
                pguastreetname: '',
                pguahouseno: '',
                pguaaddaddinfo: '',
                Empname: '',
                Empnumber: '',
                Regdate: '',
                addarea: '',
                norooms: '',
                empstatus: '',
                currentsal: '',
                paymentperiod: '',
                cnokduraton: '',
                market: '',
                bacct: '',
                mgains: '',
                carea: '',
                pguaarea: '',
                guaarea: '',
            }

        },
        sendNotification(name, telnumber) {
            telnumber = telnumber.substr(1);
           
            let message = "Dear " + name + ", Welcome to Altara Credit Limited, You are hereby invited to our showroom at No. 60. Elewura Bus-Stop, Challenge, Ibadan, Opposite *Smile* to learn more about our offerings. Pick up electronics now and pay later. We look forward to seeing you.";
            axios.get("https://api.infobip.com/sms/1/text/query?username=Oluwatoke12&password=Altara99&to=" + 234 + telnumber + "&text=" + message + "")
                .then(function (response2) {
                    console.log(response2);
                    if (response2.status == 200) {
                        updateRemark(Updata)
                    } else {
                        app.errorMessage = "Error Sending Message, Contact Support";
                    }
                });
        }
    }
});
