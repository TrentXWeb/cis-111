
trigger1 = true;

class Printer{

    constructor(str = "", id = "", i = 0){
        this.list = str.split('');
        this.id = id;
        this.i = i;
        this.done = false;
   
    }

    printerInit() {
  
        if (this.done == false) {this.ints = setInterval(this.printerComplete.bind(this), 20); }

    }

    printerComplete() {
        console.log(this.i);
        if (this.list[this.i] == ' ') { this.list[this.i] = '\u00A0'; }
        if (this.list[this.i] == '-') { this.list[this.i] = '\n'; }
        document.getElementById(this.id).innerText += this.list[this.i];
        if (this.i >= this.list.length - 1) { this.done = true; clearInterval(this.ints); }
        this.i += 1;

    }

}

function fun1() {
    if (trigger1 == true) {
        const obj = new Printer('Video: "Finals: Code Walk Through"     Created by: Carlton Clark     Date released: 5/11/2019', "num1");
        obj.printerInit();
        trigger1 = false;
    }
}

