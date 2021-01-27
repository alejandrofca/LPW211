function Wolf(name) {
    this.name = name
}

Wolf.prototype.howl = function () {
    console.log(this.name + ': awoooooooo')
}

function Dog(name) {
    console.log(this)
    Wolf.call(this, name + ' el perrito')
}

Object.setPrototypeOf(Dog.prototype, Wolf.prototype)

Dog.prototype.woof = function () {
    console.log(this.name + ': woof')
}

const perrito = new Dog('Rockoto')

perrito.howl()
perrito.woof()