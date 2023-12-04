const {readFileSync, writeFileSync} = require('fs') // Accessing the methods by destructuring

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
console.log(first)
console.log(second)

writeFileSync('./content/result-sync.txt', `Hello World!! here is the result: ${first}, ${second}`)
