class GuessingGame {
    constructor() {
        this.max = 0
        this.min = 0
        this.num = null
    }

    setRange(min, max) {
        this.max = max
        this.min = min

    }

    guess() {
        this.num = (this.min + this.max) / 2
        return Math.ceil(this.num)
        
    }

    lower() {
        return this.max =  Math.ceil(this.num)
    }

    greater() {
        return this.min = Math.ceil(this.num)
    }
}

module.exports = GuessingGame;