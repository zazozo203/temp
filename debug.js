const fake = require('lodash')
const item = [3,[4,[3,[6,7,[8]]]]]
const newItem = fake.flattenDeep(item)

console.log(newItem)