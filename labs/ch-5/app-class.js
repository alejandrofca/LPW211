class Wolf {
    constructor(name) {
        this.name = name
    }
    howl() { console.log(this.name + ': awoooooooo') }
}

class Dog extends Wolf {
    constructor(name) {
        // super()
        // this.name = name
        super(name + ' el perrito')
    }
    woof(d) {
        console.log(this.name + ': ' + 'woof '.repeat(d ? d : 1))
    }
}

const wolfie = new Wolf('Frankoto')
const rufus = new Dog('Rockoto')

wolfie.howl() // prints "Rufus the dog: awoooooooo"
rufus.woof(2) // prints "Rufus the dog: woof"
rufus.howl() // prints "Rufus the dog: awoooooooo"

console.log(Object.getPrototypeOf(rufus) === Dog.prototype) //true
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype) //true

