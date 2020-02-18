const {
    getPeople
} = require("./service")

Array.prototype.myfilter = function (callback) {
    const lista = []
    for (index in this) {
        const item = this[index]
        const result = callback(item, index, this)
        if (!result) continue;
        lista.push(item)
    }
    return lista
}

async function main() {
    try {
        const {
            results
        } = await getPeople('a')
        // const family = results.filter(function (item) {
        //     const result = item.name.toLowerCase().indexOf('lars') !== -1
        //     return result
        // })
        const family = results.myfilter((item, index, lista) => {
            console.log('item', item.name, index)
            return item.name.toLowerCase().indexOf("lars") !== -1
        })

        const names = family.map((person) => person.name)
        console.log('names', names)

    } catch (error) {
        console.error(error)
    }
}

main()
