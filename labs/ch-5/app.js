function wolf(name) {
    const howl = () => {
        // console.log(name + ': ' + definition.sound)
        return definition.name + ': ' + definition.sound
    }
    const definition = {
        class: 'Wolf',
        nick: ' the wolf',
        sound: 'awoooooo',
        howl: howl,
    }
    definition.name = name + definition.nick
    return definition
}

function dog(name) {
    const woof = () => {
        // console.log(name + ': ' + definition.sound)
        return definition.name + ': ' + definition.sound
    }
    const definition = {
        name: this.name,
        nick: ' the dog',
        sound: 'woooof',
        woof: woof,
    }
    definition.name = name + definition.nick

    return {
        ...wolf(name),
        ...definition,
        woof: woof
    }
}
const rufus = dog('Rufus')
console.log(rufus)
console.log(rufus.howl())
console.log(rufus.woof())

// ================================================
// var CryptoJS = require("crypto-js");

// const hash_generator = account_hash(Math.random())
// const accounts = []

// function initAccount(type) {
//     var id = 0
//     const get_consecutive = consecutive(1000000000)
//     return (name) => {
//         id += 1
//         let new_account = {
//             id: hash_generator.next().value,
//             consec: get_consecutive.next().value,
//             type: type,
//             name: name
//         }

//         accounts.push(new_account)
//         return new_account
//     }
// }

// function* account_hash(rand) {
//     const secret_string = 'ASLKASJ2_x_!#34234_*!"'
//     while (rand < 1) {
//         rand += 0.0000000000000001
//         // console.log(rand)
//         yield CryptoJS.MD5(rand.toString(), secret_string).toString().substring(0, 8).toUpperCase()
//     }
// }

// function* consecutive(ending) {
//     let consecutive = 1
//     while (consecutive <= ending) {
//         yield consecutive
//         consecutive++
//     }
// }

// const createAccountChecks = initAccount('checks')
// const createAccountSavings = initAccount('savings')
// const createAccountInvestment = initAccount('investment')

// const dave = createAccountChecks('Dave')
// const betubix = createAccountInvestment('Beti')
// const ilso = createAccountSavings('Ilse')
// const roso = createAccountSavings('Roso')
// const hector = createAccountChecks('Hector')
// const mirtha = createAccountSavings('Mirtha')
// const jimbo = createAccountInvestment('Jimbo')
// const guero = createAccountInvestment('Güero')
// const noe = createAccountChecks('Noe')
// const araceli = createAccountChecks('Araceli')

// console.log(dave)
// console.log(betubix)
// console.log(ilso)
// console.log(roso)
// console.log(hector)
// console.log(mirtha)
// console.log(jimbo)
// console.log(guero)
// console.log(noe)
// console.log(araceli)

// const checkAccounts = accounts.filter(a => a.type == 'checks')
// const savingsAccounts = accounts.filter(a => a.type == 'savings')
// const investmentAccounts = accounts.filter(a => a.type == 'investment')
// console.log(checkAccounts)
// console.log(savingsAccounts)
// console.log(investmentAccounts)


// ================================================

// function init(type) {
//     var id = 0
//     return (name) => {
//         id += 1
//         return { id: id, type: type, name: name }
//     }
// }
// const createUser = init('user')
// const createBook = init('book')
// console.log(createUser)
// console.log(createBook)
// const dave = createUser('Dave')
// const annie = createUser('Annie')
// const ncb = createBook('Node Cookbook')
// const pcb = createBook('Perl Cookbook')
// const ptcb = createBook('Python Cookbook')
// console.log(dave) //prints {id: 1, type: 'user', name: 'Dave'}
// console.log(annie) //prints {id: 2, type: 'user', name: 'Annie'}
// console.log(ncb) //prints {id: 1, type: 'book', name: 'Node Cookbook'}
// console.log(pcb) //prints {id: 2, type: 'book', name: 'Perl Cookbook'}
// console.log(ptcb) //prints {id: 3, type: 'book', name: 'Python Cookbook'}
