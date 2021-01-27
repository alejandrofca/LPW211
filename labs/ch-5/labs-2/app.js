const assert = require('assert')
const util = require('util')

// TODO: 
// implement a way to create a prototype chain
// of leopard -> lynx -> cat
// leopard prototype must have ONLY a hiss method
// lynx prototype must have ONLY a purr method
// cat prototype must have ONLY a meow method

class Leopard {
    constructor(name) {
        this.name = name
    }

    hiss () { console.log(this.name + ' the cat: hiss') }
}

class Lynx extends Leopard {
    constructor(name) {
        super()
        this.name = name
    }

    purr () { console.log(this.name + ' the cat: purr') }
}

class Cat extends Lynx {
    constructor(name) {
        super()
        this.name = name
    }

    meow () { console.log(this.name + ' the cat: meow') }
}

// function Leopard (name) {
//     this.name = name
// }
// Leopard.prototype.hiss = function() {
//     console.log(this.name + ' the cat: hiss')
// }

// function Lynx (name) {
//     Leopard.call(this, name)
// }
// Lynx.prototype.purr = function() { console.log(this.name + ' the cat: purr') }
// util.inherits(Lynx, Leopard)

// function Cat (name) {
//     Lynx.call(this, name)
// }
// Cat.prototype.meow = function() { console.log(this.name + ' the cat: meow') }
// util.inherits(Cat, Lynx)

const felix = new Cat('Felix') //TODO replace null with instantiation of a cat
felix.meow() // prints Felix the cat: meow
felix.purr() // prints Felix the cat: prrr
felix.hiss() // prints Felix the cat: hsss

// prototype checks, do not remove
const felixProto = Object.getPrototypeOf(felix)
const felixProtoProto = Object.getPrototypeOf(felixProto)
const felixProtoProtoProto = Object.getPrototypeOf(felixProtoProto)

assert(Object.getOwnPropertyNames(felixProto).length, 1)
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
assert(typeof felixProto.meow, 'function')
assert(typeof felixProtoProto.purr, 'function')
assert(typeof felixProtoProtoProto.hiss, 'function')
console.log('prototype checks passed!')
