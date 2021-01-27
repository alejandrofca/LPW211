const wolf = {
  howl: function () { console.log(this.name + ': awoooooooo') }
}

const dog = Object.create(wolf, {
  woof: { value: function() { console.log(this.name + ': woof') }, writable: true }
})

function createDog (name, race) {
  return Object.create(dog, {
    name: {value: `${name} el perrito ${race}`}
  })
}

const rufus = createDog('Rockoto', 'Chihuahua')

rufus.howl.call({ name: 'Frankoto el Chihuahua'})
rufus.woof.call({ name: 'Mina la Gatubix'})

console.log(Object.getOwnPropertyDescriptor(dog, 'woof'))
// console.log(Object.getOwnPropertyDescriptor(rufus, 'name'))
// console.log(Object.getOwnPropertyDescriptor(global.process, 'features'))

console.log(Object.getPrototypeOf(rufus) === dog) //true
console.log(Object.getPrototypeOf(dog) === wolf) //true

