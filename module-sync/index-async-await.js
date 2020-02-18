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
main()
async function main() {
    try {
        console.time('medida-promise')
        const user = await getUser()
        // const telephone = await getTelephone(user.id)
        // const address = await getAddressAsync(user.id)

        const result = await Promise.all([
            getTelephone(user.id),
            getAddressAsync(user.id)
        ])

        const telephone = result[0]
        const address = result[1]

        console.log(`
        Name: ${user.name}
        Address: ${address.street}
        Telephone: ${telephone.telephone}
        `)
        console.timeEnd('medida-promise')

    } catch (error) {
        console.log('error', error)
    }
}