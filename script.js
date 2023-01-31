var state, op1, op2, result, operation, opsymbol, histindex = 0;

let calculator = {
    numArray : new Array(),

    start : function(){
        state = "started";
        this.display();
    },

    addition : function(){
        operation = "addition";
        opsymbol = "+";
        state = "operating2"
        this.numArray=[];
    },

    subtraction : function(){
        operation = "subtraction";
        opsymbol = "-";
        state = "operating2"
        this.numArray=[];
    },

    multiplication : function(){
        operation = "multiplication";
        opsymbol = "*";
        state = "operating2"
        this.numArray=[];
    },

    division : function(){
        operation = "division";
        opsymbol = "/";
        state = "operating2"
        this.numArray=[];
    },

    ac : function(){
        calculator.start();
        this.numArray=[];
    },

    del : function(){
        this.numArray.pop();
        this.nextNum();
        this.display();
    },

    equals : function(){
        switch(operation){
            case 'addition':
                result = op1 + op2;
                op1 = result;
                state = "result";
                this.display();
                break;
            case 'subtraction':
                result = op1 - op2;
                op1 = result;
                state = "result";
                this.display();
                break;
            case 'multiplication':
                result = op1 * op2;
                op1 = result;
                state = "result";
                this.display();
                break;
            case 'division':
                result = op1 / op2;
                op1 = result;
                state = "result";
                this.display();
                break;
        }
    },

    display : function(){
        switch(state){
            case 'started':
                document.getElementById("display").innerText = "Insira um valor";
                state = 'operating1';
                break;
            case 'operating1':
                document.getElementById("display").innerText = op1;
                break;
            case 'operating2':
                document.getElementById("display").innerText =  op1 + " " + opsymbol + " " + op2;
                break;
            case 'result':
                document.getElementById("display").innerText = result;
                this.history();
                break;
        }
    },

    nextNum : function(digit){
        switch(state){
            case 'operating1':
                this.numArray.push(digit);
                op1 = parseFloat(this.numArray.join(''));
                this.display();
                break;
            case 'operating2':
                this.numArray.push(digit);
                op2 = parseFloat(this.numArray.join(''));
                this.display();
                break;
        }
    },

    history : function(){
        document.getElementsByClassName("histNum" + histindex).innerText = result;
        console.log("histNum" + histindex);
        histindex++;
    }
}