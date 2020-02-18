function getUser(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            name: "arthur",
            date_birth: new Date()
        });
    }, 1000);
}

function getTel(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            ddd: 11,
            telephone: "9262645654"
        })
    }, 1000);
}

function getAddress(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            street: 'said',
            number: 10
        })
    }, 1000)
}

function resolveUser(erro, user) {
    console.log('user', JSON.stringify(user, null, 2))
}

function resolveTel(erro, telephone) {
    console.log('tel', JSON.stringify(telephone, null, 2))
}

function resolveAddress(erro, address) {
    console.log('address', JSON.stringify(address, null, 2))
}

getUser(function resolveUser(error, user) {

    if (error) {
        console.log('error user', error)
        return
    }

    getTel(user.id, function resolveTel(error1, telephone) {
        if (error1) {
            console.log('error telefone', error1)
            return
        }
        getAddress(user.id, function resolveAddress(error2, address) {
            if (error2) {
                console.log('error address', error2)
                return
            }

            console.log(`
            Name: ${user.name}
            Address: ${address.street}, ${address.number}
            Telephone: (${telephone.ddd}) ${telephone.telephone}
            `)

        })
    })


});