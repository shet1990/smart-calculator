class SmartCalculator {
    constructor(initialValue) {
        this.result = initialValue;
        this.toString = () => eval(this.result);
    }

    add(number) {
        this.result = this.result + '+' + number;
        return this;
    }

    subtract(number) {
        this.result = this.result + '-' + number;
        return this;
    }

    multiply(number) {
        this.result = this.result + '*' + number;
        return this;
    }

    devide(number) {
        this.result = this.result + '/' + number;
        return this;
    }

    pow(number) {
        this.result = this.result + '**' + number;
        return this;
    }
}
module.exports = SmartCalculator;