const service = require('./service')

Array.prototype.mymap = function (callback) {
    const newarray = []
    for (let i = 0; i <= this.length - 1; i++) {
        const result = callback(this[i], i)
        newarray.push(result)
    }
    return newarray
}

async function main() {
    try {
        const result = await service.getPeople('a')
        // result.results.forEach(function (item) {
        //     names.push(item.name)
        // })
        //const names = result.results.map(function (person) {
        //    return person.name
        //})
        //const names = result.results.map((pessoa) => pessoa.name)
        const names = result.results.mymap(function (person, i) {
            return person.name
        })

        console.log('names', names)

    } catch (error) {

        console.error('error', error)

    }
}

main()
