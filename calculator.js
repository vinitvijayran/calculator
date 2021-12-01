const app = Vue.createApp({

    data() {
        return {
            input: '',
            operator: "",
            temp: "",
            // completeNumber: ""
        }
    },

    methods: {
        setInputBlank(){
            this.input = ""
        },
        setInput(val) {
            // this.completeNumber = this.completeNumber + "" + val;
            this.input = this.input + "" + val;
        },

        add() {
            // this.temp = this.input
            this.input = this.input.concat("+")
            this.operator = "+"
        },
        sub() {
            // this.temp = this.input;
            this.input = this.input.concat("-")
            this.operator = "-"
        },
        mul() {
            // this.temp = this.input;
            this.input = this.input.concat("*")
            this.operator = "*"
        },
        divide() {
            // this.temp = this.input;
            this.input = this.input.concat("/")
            this.operator = "/"
        },
        equal() {
            if (this.operator === "+") {
                let data = this.input.split("+");
                let result = parseInt(data[0]) + parseInt(data[1])
                this.input = this.input.concat("=")
                // this.input = parseInt(this.temp) + parseInt(this.input)
                this.input = this.input.concat(result)
            } 
            
            else if (this.operator === "-") {
                let data = this.input.split("-");
                let result = parseInt(data[0]) - parseInt(data[1])
                this.input = this.input.concat("=")
                // this.input = parseInt(this.temp) - parseInt(this.input)
                this.input = this.input.concat(result)
            } 
            
            else if 
            (this.operator === "*") {
            let data = this.input.split("*");
                let result = parseInt(data[0]) * parseInt(data[1])
                this.input = this.input.concat("=")
                // this.input = parseInt(this.temp) * parseInt(this.input)
                this.input = this.input.concat(result)
            } 
            
            else if (this.operator === "/") {
                let data = this.input.split("/");
                let result = parseInt(data[0]) / parseInt(data[1])
                this.input = this.input.concat("=")
                // this.input = parseInt(this.temp) / parseInt(this.input)
                this.input = this.input.concat(result)
            }
        }
    }

});
app.mount('#app');