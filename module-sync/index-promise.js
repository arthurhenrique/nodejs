const util = require('util')

const getAddressAsync = util.promisify(getAddress)

function getUser() {
    return new Promise(function resolvePromise(resolve, reject) {

        setTimeout(() => {
            return resolve({
                id: 1,
                name: "arthur",
                date_birth: new Date()
            });
        }, 1000);
    })
}

function getTelephone(idUser) {
    return new Promise(function resolvePromise(resolve, reject) {

        setTimeout(() => {
            return resolve({
                ddd: 11,
                telephone: "9262645654"
            });
        }, 1000);

    })
}

function getAddress(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            street: 'said',
            number: 10
        })
    }, 1000)
}


const userPromise = getUser()

userPromise
    .then(function (user) {
        return getTelephone(user.id)
            .then(function resolveTelephone(result) {
                return {
                    user: {
                        name: user.name,
                        id: user.id
                    },
                    telephone: result
                }
            })
        return getTelephone(result.id)
    })
    .then(function (result) {
        const address = getAddressAsync(result.user.id)
        return address.then(function resolveAddres(result2) {
            return {
                user: result.user,
                telephone: result.telephone,
                address: result2
            }
        })
    })
    .then(function (result) {
        console.log(`
        Name: ${result.user.name}
        Address: ${result.address.street}
        Telephone: ${result.telephone.telephone}
        `)
    })
    .catch(function (error) {
        console.log('catch error ', error)
    })