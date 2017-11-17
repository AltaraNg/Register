const ERRORS = {
    required: 'This field is required.',
    minLength: 'The length should be minimum 8 characters.',
    invalidEmail: 'This is not a valid email address.'
}
var app = new Vue({
    el: '#root',
    data: {
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
        submition: false,
        emailFeedback: '',
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

    mounted: function() {
        console.log('mounted');

    },

    computed: {

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
        emptytelno() { return this.Newdata.telno === '' },
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
        emptynoktelno() { return this.Newdata.noktelno === '' },
        emptynokduraton() { return this.Newdata.nokduraton === '' },
        emptyworkguafname() { return this.Newdata.workguafname === '' },
        emptyworkgualname() { return this.Newdata.workgualname === '' },
        emptyguareladship() { return this.Newdata.guareladship === '' },
        emptyguaworkduraton() { return this.Newdata.guaworkduraton === '' },
        emptyguacity() { return this.Newdata.guacity === '' },
        emptyguanearestBstop() { return this.Newdata.guanearestBstop === '' },
        emptyguastreetname() { return this.Newdata.guastreetname === '' },
        emptyguahouseno() { return this.Newdata.guahouseno === '' },
        emptyguagender() { return this.Newdata.guagender === '' },
        emptyguastate() { return this.Newdata.guastate === '' },
        emptyguatelno() { return this.Newdata.guatelno === '' },
        emptypguafname() { return this.Newdata.pguafname === '' },
        emptypgualname() { return this.Newdata.pgualname === '' },
        emptypguareladship() { return this.Newdata.pguareladship === '' },
        emptypguaworkduraton() { return this.Newdata.pguaworkduraton === '' },
        emptypguacity() { return this.Newdata.pguacity === '' },
        emptypguanearestBstop() { return this.Newdata.pguanearestBstop === '' },
        emptypguastreetname() { return this.Newdata.pguastreetname === '' },
        emptypguahouseno() { return this.Newdata.pguahouseno === '' },
        emptypguagender() { return this.Newdata.pguagender === '' },
        emptypguastate() { return this.Newdata.pguastate === '' },
        emptypguatelno() { return this.Newdata.pguatelno === '' },
        emptypguaarea() { return this.Newdata.pguaarea === '' },
        emptyguaarea() { return this.Newdata.guaarea === '' },


        emptyamtonfood() { return this.Newdata.amtonfood === '' },
        emptyamtontransport() { return this.Newdata.amtontransport === '' },
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
            if (this.Newdata.ctelNo === '' && (this.Newdata.empstatus === 'Salaried' || this.Newdata.empstatus === 'Non-Salaried')) {
                this.worksellFeedback = ERRORS.required;
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
        isEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email)
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
                this.emptytelno ||
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
                this.emptyamtonfood ||
                this.emptyamtontransport ||
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
                app.errorMessage = 'All field must be filled!';
                setTimeout(function() {
                    app.errorMessage = '';
                }, 10000);


            } else {
                event.preventDefault()
                this.submition = true
                this.saveUser();
                console.log("Prepared for Db");
                /*      this.clearfeilds(); */
            }
        },

        saveUser: function() {
            var formData = app.toFormData(app.Newdata);

            axios.post("https://wafcolapi.herokuapp.com/api.php?action=create", formData)
                .then(function(response) {
                    console.log(response);
                    /*   app.Newdata= {
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
                          ctime: '',
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
                          guanearestBstop: '',
                          guastreetname: '',
                          guahouseno: '',
                          guaaddaddinfo: '',
                          pguanearestBstop: '',
                          pguastreetname: '',
                          pguahouseno: '',
                          pguaaddaddinfo: '',
                      } */
                    if (response.data.error) {
                        app.errorMessage = response.data.message;
                        setTimeout(function() {
                            app.errorMessage = '';
                        }, 10000);


                    } else {

                        app.successMessage = response.data.message;
                        setTimeout(function() {
                            app.successMessage = '';
                        }, 10000);

                    }
                });
        },




        resetdetailfill: function(event) {
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


        toFormData: function(obj) {
            var form_data = new FormData();
            for (var key in obj) {
                form_data.append(key, obj[key]);
            }
            return form_data;
        },

        resetMessage: function(event) {
            app.successMessage = '';
            app.errorMessage = '';
        },

        clearfeilds: function() {
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
                cvisittime_to: '',
                cvisittime_fro: '',
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
                ctime: '',
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
                guanearestBstop: '',
                guastreetname: '',
                guahouseno: '',
                guaaddaddinfo: '',
                pguanearestBstop: '',
                pguastreetname: '',
                pguahouseno: '',
                pguaaddaddinfo: '',
            }
        }
    }
});